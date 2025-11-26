"use client"

import { useEffect, useState } from "react"
import { Download, Home } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SuccessOverlayProps {
  isOpen: boolean
  onClose: () => void
  onBackToHome: () => void
  onDownloadReceipt: () => void
}

export function SuccessOverlay({ isOpen, onClose, onBackToHome, onDownloadReceipt }: SuccessOverlayProps) {
  const [showCheckmark, setShowCheckmark] = useState(false)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setShowCheckmark(true), 200)
      setTimeout(() => setShowContent(true), 600)
    } else {
      setShowCheckmark(false)
      setShowContent(false)
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-zinc-900/60 backdrop-blur-md" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-8 text-center">
        {/* Animated Checkmark Circle */}
        <div
          className={`relative mb-8 transition-all duration-700 ease-out ${
            showCheckmark ? "scale-100 opacity-100" : "scale-50 opacity-0"
          }`}
        >
          <div className="absolute inset-0 w-32 h-32 rounded-full bg-emerald-500/20 animate-ping" />
          <div className="absolute inset-2 w-28 h-28 rounded-full bg-emerald-500/30 animate-pulse" />
          <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 shadow-2xl shadow-emerald-500/40 flex items-center justify-center">
            <svg
              className={`w-16 h-16 text-white transition-all duration-500 ${
                showCheckmark ? "opacity-100" : "opacity-0"
              }`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path
                d="M5 13l4 4L19 7"
                className={showCheckmark ? "animate-draw-check" : ""}
                style={{
                  strokeDasharray: 24,
                  strokeDashoffset: showCheckmark ? 0 : 24,
                  transition: "stroke-dashoffset 0.5s ease-out 0.3s",
                }}
              />
            </svg>
          </div>
        </div>

        {/* Text Content */}
        <div
          className={`transition-all duration-500 ${
            showContent ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <h2 className="font-mono text-3xl font-bold text-white mb-2">Payment Verified</h2>
          <p className="text-stone-300 mb-8">Your transaction has been completed successfully</p>

          {/* Receipt Card */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 mb-8 border border-white/20">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-stone-400">Amount</span>
              <span className="text-white font-mono font-semibold">IDR 1.500.000</span>
            </div>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-stone-400">Transaction ID</span>
              <span className="text-white font-mono">NXS-2024-00847</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-stone-400">Date</span>
              <span className="text-white">Nov 25, 2024</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-3 w-full max-w-xs mx-auto">
            <Button
              onClick={onDownloadReceipt}
              className="w-full rounded-full bg-white text-zinc-900 hover:bg-stone-100 h-14 font-medium shadow-lg"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Receipt
            </Button>
            <Button
              onClick={onBackToHome}
              variant="ghost"
              className="w-full rounded-full text-white hover:bg-white/10 h-14 font-medium border border-white/20"
            >
              <Home className="w-5 h-5 mr-2" />
              Back to Home
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
