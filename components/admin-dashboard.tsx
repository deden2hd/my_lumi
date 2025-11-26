"use client"

import { TrendingUp, QrCode, Bell, ArrowUpRight, Clock } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface AdminDashboardProps {
  onScanStudent: () => void
  onBlastReminders: () => void
}

const recentTransactions = [
  { name: "Arjuna Wijaya", grade: "Grade 10", amount: "IDR 1.500.000", time: "2m ago" },
  { name: "Sinta Dewi", grade: "Grade 11", amount: "IDR 1.500.000", time: "15m ago" },
  { name: "Bimo Pratama", grade: "Grade 9", amount: "IDR 750.000", time: "32m ago" },
  { name: "Maya Putri", grade: "Grade 12", amount: "IDR 1.500.000", time: "1h ago" },
]

export function AdminDashboard({ onScanStudent, onBlastReminders }: AdminDashboardProps) {
  return (
    <div className="min-h-screen bg-stone-50 pb-28">
      {/* Header */}
      <header className="px-6 pt-14 pb-6">
        <p className="text-stone-500 text-sm mb-1">Admin Dashboard</p>
        <h1 className="font-mono text-2xl font-bold text-zinc-900">Hello, Staff TU</h1>
      </header>

      <div className="px-6 space-y-6">
        {/* Module 1: The Radar (Cashflow) */}
        <Card className="bg-white/70 backdrop-blur-md rounded-3xl border-stone-200/50 p-6 shadow-sm">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-stone-500 text-sm mb-1">Monthly Revenue</p>
              <h2 className="font-mono text-3xl font-bold text-zinc-900">IDR 450.000.000</h2>
            </div>
            <div className="flex items-center gap-1 px-3 py-1.5 bg-emerald-100 rounded-full">
              <TrendingUp className="w-4 h-4 text-emerald-600" />
              <span className="text-sm font-medium text-emerald-600">+12%</span>
            </div>
          </div>

          {/* Mini Wave Chart */}
          <div className="h-16 mt-4">
            <svg viewBox="0 0 300 60" className="w-full h-full" preserveAspectRatio="none">
              <defs>
                <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="rgb(16, 185, 129)" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="rgb(16, 185, 129)" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M0,45 Q30,40 60,35 T120,30 T180,25 T240,15 T300,10 V60 H0 Z" fill="url(#chartGradient)" />
              <path
                d="M0,45 Q30,40 60,35 T120,30 T180,25 T240,15 T300,10"
                fill="none"
                stroke="rgb(16, 185, 129)"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              {/* Data points */}
              <circle cx="60" cy="35" r="4" fill="rgb(16, 185, 129)" />
              <circle cx="120" cy="30" r="4" fill="rgb(16, 185, 129)" />
              <circle cx="180" cy="25" r="4" fill="rgb(16, 185, 129)" />
              <circle cx="240" cy="15" r="4" fill="rgb(16, 185, 129)" />
              <circle cx="300" cy="10" r="5" fill="rgb(16, 185, 129)" stroke="white" strokeWidth="2" />
            </svg>
          </div>

          <div className="flex justify-between mt-4 text-xs text-stone-400">
            <span>Week 1</span>
            <span>Week 2</span>
            <span>Week 3</span>
            <span>Week 4</span>
          </div>
        </Card>

        {/* Module 2: Quick Actions (The Blast) */}
        <div className="grid grid-cols-2 gap-4">
          <Button
            onClick={onScanStudent}
            className="h-28 rounded-3xl bg-zinc-900 hover:bg-zinc-800 text-white flex flex-col items-center justify-center gap-3 shadow-lg"
          >
            <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
              <QrCode className="w-6 h-6" />
            </div>
            <span className="font-medium">Scan Student</span>
          </Button>

          <Button
            onClick={onBlastReminders}
            className="h-28 rounded-3xl bg-white/70 backdrop-blur-md hover:bg-white/90 text-zinc-900 flex flex-col items-center justify-center gap-3 border border-stone-200/50 shadow-sm"
          >
            <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center">
              <Bell className="w-6 h-6 text-orange-600" />
            </div>
            <span className="font-medium">Blast Reminders</span>
          </Button>
        </div>

        {/* Module 3: Recent Transactions / Live Feed */}
        <Card className="bg-white/70 backdrop-blur-md rounded-3xl border-stone-200/50 p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-mono font-semibold text-zinc-900">Live Feed</h3>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-xs text-stone-500">Live</span>
            </div>
          </div>

          <div className="space-y-4">
            {recentTransactions.map((tx, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-3 border-b border-stone-100 last:border-0 last:pb-0"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-stone-200 to-stone-300 flex items-center justify-center">
                    <span className="font-mono font-semibold text-zinc-700 text-sm">
                      {tx.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-zinc-900 text-sm">{tx.name}</p>
                    <p className="text-xs text-stone-500">{tx.grade}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-mono font-semibold text-emerald-600 text-sm flex items-center gap-1">
                    <ArrowUpRight className="w-3 h-3" />
                    {tx.amount}
                  </p>
                  <p className="text-xs text-stone-400 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {tx.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Stats Summary */}
        <div className="grid grid-cols-3 gap-3">
          <Card className="bg-white/70 backdrop-blur-md rounded-2xl border-stone-200/50 p-4 shadow-sm text-center">
            <p className="font-mono text-2xl font-bold text-zinc-900">847</p>
            <p className="text-xs text-stone-500">Total Students</p>
          </Card>
          <Card className="bg-white/70 backdrop-blur-md rounded-2xl border-stone-200/50 p-4 shadow-sm text-center">
            <p className="font-mono text-2xl font-bold text-emerald-600">723</p>
            <p className="text-xs text-stone-500">Paid</p>
          </Card>
          <Card className="bg-white/70 backdrop-blur-md rounded-2xl border-stone-200/50 p-4 shadow-sm text-center">
            <p className="font-mono text-2xl font-bold text-orange-500">124</p>
            <p className="text-xs text-stone-500">Pending</p>
          </Card>
        </div>
      </div>
    </div>
  )
}
