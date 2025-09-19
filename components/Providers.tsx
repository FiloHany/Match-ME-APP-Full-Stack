'use client'

import React, { ReactNode } from "react"
import { HeroUIProvider } from "@heroui/react"
import { SessionProvider } from "next-auth/react"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export default function Providers({
  children,
}: {
  children: ReactNode
}) {
  return (
    <SessionProvider>
      <HeroUIProvider>
        <ToastContainer
          position="bottom-right"
          hideProgressBar
        />
        {children}
      </HeroUIProvider>
    </SessionProvider>
  )
}