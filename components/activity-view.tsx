"use client"

import { ArrowDownLeft, ArrowUpRight, Clock } from "lucide-react"

const transactions = [
  {
    id: 1,
    type: "payment",
    title: "Monthly Tuition",
    description: "November 2024",
    amount: "-IDR 1.500.000",
    date: "Nov 1, 2024",
    status: "completed",
  },
  {
    id: 2,
    type: "payment",
    title: "Monthly Tuition",
    description: "October 2024",
    amount: "-IDR 1.500.000",
    date: "Oct 1, 2024",
    status: "completed",
  },
  {
    id: 3,
    type: "payment",
    title: "Field Trip - Zoo",
    description: "Extra Activity",
    amount: "-IDR 200.000",
    date: "Sep 15, 2024",
    status: "completed",
  },
  {
    id: 4,
    type: "refund",
    title: "Cancelled Event Refund",
    description: "Sports Day",
    amount: "+IDR 150.000",
    date: "Sep 10, 2024",
    status: "completed",
  },
  {
    id: 5,
    type: "payment",
    title: "Monthly Tuition",
    description: "September 2024",
    amount: "-IDR 1.500.000",
    date: "Sep 1, 2024",
    status: "completed",
  },
]

export function ActivityView() {
  return (
    <div className="min-h-screen bg-stone-50 pb-32">
      {/* Header */}
      <header className="px-6 pt-12 pb-6">
        <div className="flex items-center gap-3 mb-2">
          <Clock className="w-6 h-6 text-zinc-900" />
          <h1 className="font-mono text-2xl font-semibold text-zinc-900">Activity</h1>
        </div>
        <p className="text-stone-500">Your transaction history</p>
      </header>

      {/* Transactions List */}
      <section className="px-6">
        <div className="space-y-3">
          {transactions.map((tx) => (
            <div
              key={tx.id}
              className="bg-white/70 backdrop-blur-md rounded-2xl p-4 border border-stone-200/50 shadow-sm"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    tx.type === "refund" ? "bg-emerald-100" : "bg-stone-100"
                  }`}
                >
                  {tx.type === "refund" ? (
                    <ArrowDownLeft className="w-5 h-5 text-emerald-600" />
                  ) : (
                    <ArrowUpRight className="w-5 h-5 text-zinc-900" />
                  )}
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-zinc-900">{tx.title}</h4>
                  <p className="text-stone-500 text-sm">{tx.description}</p>
                </div>
                <div className="text-right">
                  <p
                    className={`font-mono font-semibold ${tx.type === "refund" ? "text-emerald-600" : "text-zinc-900"}`}
                  >
                    {tx.amount}
                  </p>
                  <p className="text-stone-400 text-xs">{tx.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
