"use client"

import { X, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

interface FeatureModalProps {
  isOpen: boolean
  featureName: string
  onClose: () => void
}

export function FeatureModal({ isOpen, featureName, onClose }: FeatureModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-zinc-900/40 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-8 max-w-sm w-full animate-scale-in">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 flex items-center justify-center transition-colors"
        >
          <X className="w-4 h-4 text-stone-500" />
        </button>

        {/* Content */}
        <div className="text-center">
          <div className="w-16 h-16 rounded-2xl bg-stone-100 flex items-center justify-center mx-auto mb-4">
            <Sparkles className="w-8 h-8 text-zinc-900" />
          </div>
          <h3 className="font-mono text-xl font-semibold text-zinc-900 mb-2">Feature: {featureName}</h3>
          <p className="text-stone-500 mb-6">This feature is coming soon. Stay tuned for updates!</p>
          <Button
            onClick={onClose}
            className="w-full rounded-full bg-zinc-900 hover:bg-zinc-800 text-white h-12 font-medium"
          >
            Got it
          </Button>
        </div>
      </div>
    </div>
  )
}
