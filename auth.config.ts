import type { NextAuthConfig } from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { getUserByEmail } from './lib/authUtils'
import { compare } from 'bcryptjs'
import { loginSchema } from "./lib/schemas/LoginSchema"

export default {
  providers: [
    Credentials({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        const validated = loginSchema.safeParse(credentials)

        if (validated.success) {
          const { email, password } = validated.data

          const user = await getUserByEmail(email)

          if (!user || !user.passwordHash || !(await compare(password, user.passwordHash))) {
            return null
          }

          return {
            id: user.id,
            email: user.email,
            name: user.name,
            image: user.image,
          }
        }

        return null
      }
    })
  ],
  pages: {
    signIn: "/login",
  },
} satisfies NextAuthConfig