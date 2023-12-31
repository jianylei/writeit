'use client'

import { toast } from '@/hooks/use-toast'
import { DialogClose } from '@radix-ui/react-dialog'
import { useMutation } from '@tanstack/react-query'
import axios, { AxiosError } from 'axios'
import { MoreHorizontal } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { FC } from 'react'
import { Button, buttonVariants } from './ui/Button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from './ui/Dialog'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from './ui/DropdownMenu'

interface CommentMoreOptionsProps {
  commentId: string
}

const CommentMoreOptions: FC<CommentMoreOptionsProps> = ({ commentId }) => {
  const router = useRouter()

  const {
    mutate: deleteComment,
    isLoading,
    isSuccess
  } = useMutation({
    mutationFn: async (commentId: string) => {
      const { data } = await axios.delete(
        `/api/subreddit/post/comment/${commentId}`
      )
      return data
    },
    onError: (err) => {
      if (err instanceof AxiosError) {
        if (err.response?.status === 401) {
          return toast({
            title: 'Unauthorized',
            description: 'You can only delete comments that you have created.',
            variant: 'destructive'
          })
        }
      }

      return toast({
        title: 'There was a problem',
        description: 'Could not delete your comment, please try again.',
        variant: 'destructive'
      })
    },
    onSuccess: () => {
      router.refresh()
    }
  })

  return (
    <Dialog>
      <DropdownMenu>
        <DropdownMenuTrigger
          className={buttonVariants({
            variant: 'ghost',
            size: 'xs'
          })}>
          <MoreHorizontal className="h-5 w-5" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <DialogTrigger
              disabled={isLoading || isSuccess}
              className="w-full text-left">
              Delete
            </DialogTrigger>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete comment</DialogTitle>
          <DropdownMenuSeparator />
          <DialogDescription className="py-3">
            Are you sure you want to delete your comment?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild className="mt-2 sm:mt-0">
            <Button isLoading={isLoading} variant="subtle">
              Keep
            </Button>
          </DialogClose>

          <DialogClose asChild>
            <Button
              isLoading={isLoading}
              onClick={() => {
                deleteComment(commentId)
              }}>
              Delete
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default CommentMoreOptions
