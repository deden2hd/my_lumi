"use client"

import { Download, Calendar } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const reports = [
  { name: "Monthly Revenue Report", period: "November 2024", type: "Financial" },
  { name: "Outstanding Payments", period: "Q4 2024", type: "Collections" },
  { name: "Student Payment Status", period: "November 2024", type: "Status" },
  { name: "Annual Summary", period: "2024", type: "Summary" },
]

export function AdminReportsView() {
  return (
    <div className="min-h-screen bg-stone-50 pb-28">
      <header className="px-6 pt-14 pb-6">
        <h1 className="font-mono text-2xl font-bold text-zinc-900 mb-2">Reports</h1>
        <p className="text-stone-500">Download and view financial reports</p>
      </header>

      <div className="px-6 space-y-4">
        {/* Quick Stats */}
        <Card className="bg-zinc-900 rounded-3xl p-6 shadow-lg">
          <p className="text-stone-400 text-sm mb-1">Collection Rate</p>
          <div className="flex items-end justify-between">
            <h2 className="font-mono text-4xl font-bold text-white">85.4%</h2>
            <div className="text-right">
              <p className="text-emerald-400 text-sm font-medium">+2.3%</p>
              <p className="text-stone-500 text-xs">vs last month</p>
            </div>
          </div>
        </Card>

        {/* Report List */}
        <div className="space-y-3">
          {reports.map((report, index) => (
            <Card key={index} className="bg-white/70 backdrop-blur-md rounded-2xl border-stone-200/50 p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-zinc-900">{report.name}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Calendar className="w-3 h-3 text-stone-400" />
                    <span className="text-xs text-stone-500">{report.period}</span>
                    <span className="text-xs px-2 py-0.5 bg-stone-100 rounded-full text-stone-600">{report.type}</span>
                  </div>
                </div>
                <Button variant="ghost" size="icon" className="w-10 h-10 rounded-xl bg-stone-100 hover:bg-stone-200">
                  <Download className="w-4 h-4 text-zinc-900" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
