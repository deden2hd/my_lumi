"use client"

import { useState } from "react"
import { CreditCard, QrCode, Award as IdCard, MessageCircle, Bell, LogOut, ChevronRight, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ProgressRing } from "@/components/progress-ring"

interface ParentDashboardProps {
  onPayNow: () => void
  onLogout: () => void
  onQuickAction: (actionName: string) => void
}

const quickActions = [
  { icon: CreditCard, label: "Pay Now", color: "bg-zinc-900 text-white" },
  { icon: QrCode, label: "Scan QR", color: "bg-stone-100 text-zinc-900" },
  { icon: IdCard, label: "Digital ID", color: "bg-stone-100 text-zinc-900" },
  { icon: MessageCircle, label: "Ask Admin", color: "bg-stone-100 text-zinc-900" },
]

const announcements = [
  {
    id: 1,
    title: "Field Trip Payment",
    description: "Science Museum visit on Dec 15",
    amount: "IDR 250.000",
    date: "Due: Dec 1",
    isNew: true,
  },
  {
    id: 2,
    title: "Sports Day Fee",
    description: "Annual sports competition",
    amount: "IDR 150.000",
    date: "Due: Dec 10",
    isNew: true,
  },
  {
    id: 3,
    title: "Library Membership",
    description: "Annual renewal",
    amount: "IDR 100.000",
    date: "Due: Dec 20",
    isNew: false,
  },
]

export function ParentDashboard({ onPayNow, onLogout, onQuickAction }: ParentDashboardProps) {
  const [activeAction, setActiveAction] = useState<number | null>(null)

  const handleQuickAction = (index: number, label: string) => {
    setActiveAction(index)
    onQuickAction(label)
    setTimeout(() => setActiveAction(null), 200)
  }

  return (
    <div className="min-h-screen bg-stone-50 pb-32">
      {/* Header */}
      <header className="px-6 pt-12 pb-6">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <Avatar className="w-12 h-12 border-2 border-white shadow-lg">
              <AvatarImage src="/professional-parent-avatar.png" />
              <AvatarFallback className="bg-stone-200 text-zinc-900 font-medium">MB</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-stone-500 text-sm">Good Morning,</p>
              <h1 className="font-mono font-semibold text-zinc-900 text-lg">Mr. Budi</h1>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-white/70 backdrop-blur-sm shadow-sm hover:bg-white"
            >
              <Bell className="w-5 h-5 text-zinc-900" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={onLogout}
              className="rounded-full bg-white/70 backdrop-blur-sm shadow-sm hover:bg-white"
            >
              <LogOut className="w-5 h-5 text-zinc-900" />
            </Button>
          </div>
        </div>

        {/* Vision Module - Payment Progress */}
        <div className="bg-white/70 backdrop-blur-md rounded-3xl shadow-xl p-6 border border-stone-200/50 mb-6">
          <div className="flex items-center gap-6">
            <ProgressRing progress={58} monthsPaid={7} totalMonths={12} />
            <div className="flex-1">
              <h3 className="font-mono font-semibold text-zinc-900 mb-1">School Year Progress</h3>
              <p className="text-stone-500 text-sm mb-2">7 of 12 months paid</p>
              <div className="flex items-center gap-2">
                <div className="flex-1 h-2 bg-stone-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-zinc-900 rounded-full transition-all duration-500"
                    style={{ width: "58%" }}
                  />
                </div>
                <span className="text-xs font-medium text-zinc-900">58%</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Active Invoice Card (Hero) */}
      <section className="px-6 mb-8">
        <div className="bg-white/70 backdrop-blur-md rounded-3xl shadow-xl p-6 border border-stone-200/50 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-100/50 to-transparent rounded-full -translate-y-1/2 translate-x-1/2" />

          <div className="relative">
            <div className="flex items-start justify-between mb-4">
              <div>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-700 mb-3">
                  UNPAID
                </span>
                <h3 className="font-mono font-semibold text-zinc-900 text-lg mb-1">Upcoming Invoice</h3>
                <p className="text-stone-500 text-sm flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Due: December 1, 2024
                </p>
              </div>
              <CreditCard className="w-10 h-10 text-stone-300" />
            </div>

            <div className="mb-6">
              <p className="text-stone-500 text-sm mb-1">Total Amount</p>
              <p className="font-mono text-3xl font-bold text-zinc-900">IDR 1.500.000</p>
            </div>

            <Button
              onClick={onPayNow}
              className="w-full rounded-full bg-zinc-900 hover:bg-zinc-800 text-white h-14 font-medium text-base shadow-lg"
            >
              Tap to Pay
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Actions Grid */}
      <section className="px-6 mb-8">
        <h3 className="font-mono font-semibold text-zinc-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-4 gap-3">
          {quickActions.map((action, index) => (
            <button
              key={action.label}
              onClick={() => handleQuickAction(index, action.label)}
              className={`flex flex-col items-center gap-2 p-4 rounded-2xl transition-all duration-200 ${
                action.color
              } ${activeAction === index ? "scale-95" : "hover:scale-105"} shadow-sm`}
            >
              <action.icon className="w-6 h-6" />
              <span className="text-xs font-medium text-center leading-tight">{action.label}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Announcements Feed */}
      <section className="px-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-mono font-semibold text-zinc-900">Announcements</h3>
          <Button variant="ghost" className="text-stone-500 text-sm rounded-full hover:bg-stone-100">
            View All
          </Button>
        </div>

        <div className="space-y-3">
          {announcements.map((item) => (
            <div
              key={item.id}
              className="bg-white/70 backdrop-blur-md rounded-2xl p-4 border border-stone-200/50 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-medium text-zinc-900">{item.title}</h4>
                    {item.isNew && <span className="w-2 h-2 rounded-full bg-amber-500" />}
                  </div>
                  <p className="text-stone-500 text-sm mb-2">{item.description}</p>
                  <p className="text-stone-400 text-xs">{item.date}</p>
                </div>
                <div className="text-right">
                  <p className="font-mono font-semibold text-zinc-900">{item.amount}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
