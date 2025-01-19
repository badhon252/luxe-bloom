"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface StockNotificationProps {
  productName: string;
  variant: string;
}

export function StockNotification({ productName, variant }: StockNotificationProps) {
  const [email, setEmail] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Handle notification signup
    console.log("Notification signup:", { email, productName, variant })
  }

  return (
    <div className="space-y-4">
      <div className="bg-gray-100 p-6 text-center">
        <div className="text-lg font-medium mb-4">OUT OF STOCK - NOTIFY ME</div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="email"
            placeholder="EMAIL ADDRESS"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="text-center"
          />
          <Button type="submit" className="w-full bg-black text-white">
            NOTIFY ME
          </Button>
        </form>
        <div className="text-sm text-gray-500 mt-4">
          By submitting your email, you are consenting to receive notifications
          from Venus et Fleur.
        </div>
      </div>
    </div>
  )
}

