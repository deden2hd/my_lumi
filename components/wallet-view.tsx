"use client"

import { Wallet, Plus, CreditCard, Landmark } from "lucide-react"
import { Button } from "@/components/ui/button"

const savedMethods = [
  {
    id: 1,
    type: "bank",
    name: "BCA Virtual Account",
    detail: "****4521",
    icon: Landmark,
  },
  {
    id: 2,
    type: "card",
    name: "Visa ending in 8842",
    detail: "Expires 12/26",
    icon: CreditCard,
  },
]

export function WalletView() {
  return (
    <div className="min-h-screen bg-stone-50 pb-32">
      {/* Header */}
      <header className="px-6 pt-12 pb-6">
        <div className="flex items-center gap-3 mb-2">
          <Wallet className="w-6 h-6 text-zinc-900" />
          <h1 className="font-mono text-2xl font-semibold text-zinc-900">Wallet</h1>
        </div>
        <p className="text-stone-500">Manage your payment methods</p>
      </header>

      {/* Balance Card */}
      <section className="px-6 mb-8">
        <div className="bg-zinc-900 rounded-3xl p-6 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative">
            <p className="text-stone-400 text-sm mb-1">Available Balance</p>
            <p className="font-mono text-3xl font-bold mb-4">IDR 0</p>
            <p className="text-stone-400 text-xs">No top-up required. Pay directly.</p>
          </div>
        </div>
      </section>

      {/* Saved Payment Methods */}
      <section className="px-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-mono font-semibold text-zinc-900">Saved Methods</h3>
          <Button variant="ghost" size="sm" className="rounded-full text-stone-500 hover:bg-stone-100">
            <Plus className="w-4 h-4 mr-1" />
            Add New
          </Button>
        </div>

        <div className="space-y-3">
          {savedMethods.map((method) => (
            <div
              key={method.id}
              className="bg-white/70 backdrop-blur-md rounded-2xl p-4 border border-stone-200/50 shadow-sm flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-stone-100 flex items-center justify-center">
                <method.icon className="w-5 h-5 text-zinc-900" />
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-zinc-900">{method.name}</h4>
                <p className="text-stone-500 text-sm">{method.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
