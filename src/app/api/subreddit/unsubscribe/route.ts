import { getAuthSession } from "@/lib/auth";
import { db } from "@/lib/db";
import { SubredditSubscriptionValidator } from "@/lib/validators/subreddit";
import { z } from "zod";

export async function POST(req: Request) {
    try {
        const session = await getAuthSession()

        if (!session?.user) {
            return new Response('Unauthorized', { status: 401 })
        }

        const body = await req.json()

        const { subredditId } = SubredditSubscriptionValidator.parse(body)

        const alreadyExist = await db.subscription.findFirst({
            where: {
                subredditId,
                userId: session.user.id
            }
        })

        if (!alreadyExist) {
            return new Response('You are not subscribed to this subreddit.', {
                status: 400
            })
        }

        const subreddit = await db.subreddit.findFirst({
            where: {
                id: subredditId,
                creatorId: session.user.id
            }
        })

        if (subreddit) {
            return new Response("you can't unsubscribe to your own subreddit", {
                status: 400
            })
        }

        await db.subscription.delete({
            where: {
                userId_subredditId: {
                   subredditId,
                   userId: session.user.id 
                }
            }
        })

        return new Response(subredditId)
    } catch (err) {
        if (err instanceof z.ZodError) {
            return new Response('Invalid request data passed', { status: 422 })
          }
      
          return new Response('Could not unsubscribe, please try again later', { status: 500 })
    }
}