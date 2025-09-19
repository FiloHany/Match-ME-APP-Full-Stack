import { DefaultSession } from 'next-auth'
import { ZodIssue } from 'zod'

export type ActionResult<T> = 
  | { status: 'success'; data: T }
  | { status: 'error'; error: string | ZodIssue[] }

declare module 'next-auth' {
  interface Session {
    user: {
      id: string
    } & DefaultSession['user']
  }
}