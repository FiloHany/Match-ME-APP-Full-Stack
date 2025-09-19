'use server'

import { signIn, signOut } from '@/auth'
import { prisma } from '@/lib/prisma'
import { LoginSchema } from '@/lib/schemas/LoginSchema'
import { registerSchema, RegisterSchema } from '@/lib/schemas/RegisterSchema'
import bcrypt from 'bcryptjs'
import { AuthError } from 'next-auth'

type ActionResult<T> = 
  | { status: 'success'; data: T }
  | { status: 'error'; error: string | any[] }

export async function signInUser(data: LoginSchema): Promise<ActionResult<string>> {
  try {
    await signIn('credentials', {
      email: data.email,
      password: data.password,
      redirectTo: '/members',
    })

    return { status: 'success', data: 'Logged in successfully' }
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return { status: 'error', error: 'Invalid credentials' }
        default:
          return { status: 'error', error: 'Something went wrong' }
      }
    }
    throw error
  }
}

export async function signOutUser() {
  await signOut({ redirectTo: '/' })
}

export async function registerUser(data: RegisterSchema): Promise<ActionResult<any>> {
  try {
    const validated = registerSchema.safeParse(data)

    if (!validated.success) {
      return { status: 'error', error: validated.error.issues }
    }

    const { name, email, password } = validated.data

    const hashedPassword = await bcrypt.hash(password, 12)

    const existingUser = await prisma.user.findUnique({
      where: { email }
    })

    if (existingUser) {
      return { status: 'error', error: 'User already exists' }
    }

    const user = await prisma.user.create({
      data: {
        name,
        email,
        passwordHash: hashedPassword
      }
    })

    return { status: 'success', data: user }
  } catch (error) {
    console.log(error)
    return { status: 'error', error: 'Something went wrong' }
  }
}