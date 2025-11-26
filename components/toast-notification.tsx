"use client"

import { useEffect } from "react"
import { Check, Send } from "lucide-react"

interface ToastNotificationProps {
  isOpen: boolean
  message: string
  icon?: "check" | "send"
  onClose: () => void
}

export function ToastNotification({ isOpen, message, icon = "check", onClose }: ToastNotificationProps) {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose()
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[60] animate-slide-down">
      <div className="flex items-center gap-3 px-5 py-3 bg-white/90 backdrop-blur-xl rounded-full shadow-2xl border border-stone-200/50">
        <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center">
          {icon === "check" ? <Check className="w-4 h-4 text-white" /> : <Send className="w-4 h-4 text-white" />}
        </div>
        <span className="text-sm font-medium text-zinc-900">{message}</span>
      </div>
    </div>
  )
}
