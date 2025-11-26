"use client"

import type React from "react"

import { useState, useRef } from "react"
import { X, Building2, QrCode, Check, ArrowRight, Wallet } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PaymentModalProps {
  isOpen: boolean
  onClose: () => void
  onSuccess: () => void
}

const paymentMethods = [
  {
    id: "va",
    name: "Virtual Account",
    description: "Bank Transfer",
    icon: Building2,
  },
  {
    id: "qris",
    name: "QRIS",
    description: "Scan to Pay",
    icon: QrCode,
  },
]

export function PaymentModal({ isOpen, onClose, onSuccess }: PaymentModalProps) {
  const [selectedMethod, setSelectedMethod] = useState("va")
  const [isConfirming, setIsConfirming] = useState(false)
  const [isConfirmed, setIsConfirmed] = useState(false)
  const [swipeProgress, setSwipeProgress] = useState(0)
  const swipeRef = useRef<HTMLDivElement>(null)
  const startXRef = useRef(0)

  const handleTouchStart = (e: React.TouchEvent | React.MouseEvent) => {
    if (isConfirming || isConfirmed) return
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX
    startXRef.current = clientX
  }

  const handleTouchMove = (e: React.TouchEvent | React.MouseEvent) => {
    if (isConfirming || isConfirmed || !swipeRef.current) return
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX
    const diff = clientX - startXRef.current
    const maxSwipe = swipeRef.current.offsetWidth - 64
    const progress = Math.min(Math.max(diff / maxSwipe, 0), 1)
    setSwipeProgress(progress)
  }

  const handleTouchEnd = () => {
    if (isConfirming || isConfirmed) return
    if (swipeProgress > 0.8) {
      setIsConfirming(true)
      setTimeout(() => {
        setIsConfirmed(true)
        setTimeout(() => {
          onSuccess()
          setIsConfirmed(false)
          setIsConfirming(false)
          setSwipeProgress(0)
        }, 800)
      }, 500)
    } else {
      setSwipeProgress(0)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-zinc-900/40 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md rounded-t-3xl shadow-2xl animate-slide-up max-h-[85vh] overflow-y-auto">
        {/* Handle */}
        <div className="flex justify-center pt-3 pb-2">
          <div className="w-12 h-1.5 bg-stone-300 rounded-full" />
        </div>

        {/* Header */}
        <div className="flex items-center justify-between px-6 pb-4">
          <h2 className="font-mono text-xl font-semibold text-zinc-900">Payment Confirmation</h2>
          <Button variant="ghost" size="icon" onClick={onClose} className="rounded-full hover:bg-stone-100">
            <X className="w-5 h-5 text-stone-500" />
          </Button>
        </div>

        {/* Content */}
        <div className="px-6 pb-8">
          {/* Amount Card */}
          <div className="bg-stone-100 rounded-2xl p-6 mb-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center">
                <Wallet className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-stone-500 text-sm mb-1">Total Payment</p>
                <p className="font-mono text-2xl font-bold text-zinc-900">IDR 1.500.000</p>
              </div>
            </div>
          </div>

          {/* Payment Details */}
          <div className="mb-6">
            <h3 className="text-stone-500 text-sm mb-3">Payment Details</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-stone-600">Tuition Fee</span>
                <span className="font-medium text-zinc-900">IDR 1.400.000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-600">Activity Fee</span>
                <span className="font-medium text-zinc-900">IDR 100.000</span>
              </div>
              <div className="h-px bg-stone-200 my-3" />
              <div className="flex justify-between">
                <span className="font-medium text-zinc-900">Total</span>
                <span className="font-mono font-bold text-zinc-900">IDR 1.500.000</span>
              </div>
            </div>
          </div>

          {/* Payment Method Selection */}
          <div className="mb-8">
            <h3 className="text-stone-500 text-sm mb-3">Payment Method</h3>
            <div className="space-y-3">
              {paymentMethods.map((method) => (
                <button
                  key={method.id}
                  onClick={() => setSelectedMethod(method.id)}
                  className={`w-full flex items-center gap-4 p-4 rounded-2xl border-2 transition-all ${
                    selectedMethod === method.id
                      ? "border-zinc-900 bg-stone-50"
                      : "border-stone-200 bg-white hover:border-stone-300"
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      selectedMethod === method.id ? "bg-zinc-900 text-white" : "bg-stone-100 text-zinc-900"
                    }`}
                  >
                    <method.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1 text-left">
                    <p className="font-medium text-zinc-900">{method.name}</p>
                    <p className="text-stone-500 text-sm">{method.description}</p>
                  </div>
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      selectedMethod === method.id ? "border-zinc-900 bg-zinc-900" : "border-stone-300"
                    }`}
                  >
                    {selectedMethod === method.id && <Check className="w-4 h-4 text-white" />}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Swipe to Confirm */}
          <div
            ref={swipeRef}
            className="relative h-16 bg-stone-100 rounded-full overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleTouchStart}
            onMouseMove={handleTouchMove}
            onMouseUp={handleTouchEnd}
            onMouseLeave={handleTouchEnd}
          >
            {/* Progress Fill */}
            <div
              className="absolute inset-y-0 left-0 bg-zinc-900 transition-all duration-100 rounded-full"
              style={{
                width: isConfirmed ? "100%" : `${Math.max(swipeProgress * 100, 0)}%`,
              }}
            />

            {/* Label */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span
                className={`font-medium transition-colors ${
                  swipeProgress > 0.5 || isConfirmed ? "text-white" : "text-stone-500"
                }`}
              >
                {isConfirmed ? "Payment Successful!" : isConfirming ? "Processing..." : "Swipe to Confirm"}
              </span>
            </div>

            {/* Swipe Button */}
            {!isConfirmed && !isConfirming && (
              <div
                className="absolute top-2 bottom-2 left-2 w-12 bg-zinc-900 rounded-full flex items-center justify-center shadow-lg transition-transform cursor-grab active:cursor-grabbing"
                style={{
                  transform: `translateX(${swipeProgress * (swipeRef.current?.offsetWidth ?? 0 - 64)}px)`,
                }}
              >
                <ArrowRight className="w-5 h-5 text-white" />
              </div>
            )}

            {/* Success Icon */}
            {isConfirmed && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Check className="w-6 h-6 text-white" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
