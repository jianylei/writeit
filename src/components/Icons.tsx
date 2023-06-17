import { LucideProps, MessageSquare, User } from 'lucide-react'

export const Icons = {
  user: User,
  logo: (props: LucideProps) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      id="pencil"
    >
      <path
        fill="#03ADAD"
        d="M88 2H12C6.477 2 2 6.477 2 12v76c0 5.523 4.477 10 10 10h76c5.523 0 10-4.477 10-10V12c0-5.523-4.477-10-10-10z"
      />
      <path
        fill="#04847D"
        d="M98 88V62.701L54.489 19.2a4.038 4.038 0 0 0-2.99-1.31h-2.99c-2.25 0-4.09 1.83-4.09 4.08v4.12l1.98 1.98-1.98.02v37.07l2 2h-1.73l1.67 5.52 1.97 1.97h-1.37l2.05 6.76c.06.21.19.39.36.51L65.45 98H88c5.523 0 10-4.477 10-10z"
      />
      <g fill="#FFF">
        <path d="M51.495 17.885h-2.99c-2.25 0-4.09 1.83-4.09 4.08v4.12l11.17-.08v-4.03c0-2.26-1.83-4.09-4.09-4.09zM44.415 65.155h11.17v-37.16l-11.17.09zM49.005 81.405c.12.42.51.71.95.71.27 0 .53-.11.71-.29.11-.11.2-.25.25-.41l2.09-6.77h-6.05l2.05 6.76zM46.355 72.675h7.26l1.72-5.52h-10.65z" />
      </g>
    </svg>
  ),
  google: (props: LucideProps) => (
    <svg {...props} viewBox="0 0 24 24">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
      <path fill="none" d="M1 1h22v22H1z" />
    </svg>
  ),
  commentReply: MessageSquare
}
