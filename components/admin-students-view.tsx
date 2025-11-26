"use client"

import { Search, Filter, ChevronRight } from "lucide-react"
import { Card } from "@/components/ui/card"

const students = [
  { name: "Arjuna Wijaya", grade: "Grade 10", status: "paid", amount: "IDR 10.5M / 12M" },
  { name: "Sinta Dewi", grade: "Grade 11", status: "paid", amount: "IDR 9M / 12M" },
  { name: "Bimo Pratama", grade: "Grade 9", status: "pending", amount: "IDR 6M / 12M" },
  { name: "Maya Putri", grade: "Grade 12", status: "overdue", amount: "IDR 4.5M / 12M" },
  { name: "Dimas Aditya", grade: "Grade 10", status: "paid", amount: "IDR 12M / 12M" },
  { name: "Ratna Sari", grade: "Grade 11", status: "pending", amount: "IDR 7.5M / 12M" },
]

export function AdminStudentsView() {
  return (
    <div className="min-h-screen bg-stone-50 pb-28">
      <header className="px-6 pt-14 pb-6">
        <h1 className="font-mono text-2xl font-bold text-zinc-900 mb-4">Students</h1>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" />
          <input
            type="text"
            placeholder="Search students..."
            className="w-full pl-12 pr-12 py-3.5 bg-white/70 backdrop-blur-md rounded-2xl border border-stone-200/50 text-zinc-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-zinc-900/10"
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-stone-100 rounded-xl flex items-center justify-center">
            <Filter className="w-4 h-4 text-stone-600" />
          </button>
        </div>
      </header>

      <div className="px-6 space-y-3">
        {students.map((student, index) => (
          <Card
            key={index}
            className="bg-white/70 backdrop-blur-md rounded-2xl border-stone-200/50 p-4 shadow-sm flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-stone-200 to-stone-300 flex items-center justify-center">
                <span className="font-mono font-semibold text-zinc-700">
                  {student.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>
              <div>
                <p className="font-medium text-zinc-900">{student.name}</p>
                <p className="text-sm text-stone-500">{student.grade}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <span
                  className={`text-xs font-medium px-2 py-1 rounded-full ${
                    student.status === "paid"
                      ? "bg-emerald-100 text-emerald-600"
                      : student.status === "pending"
                        ? "bg-orange-100 text-orange-600"
                        : "bg-red-100 text-red-600"
                  }`}
                >
                  {student.status.charAt(0).toUpperCase() + student.status.slice(1)}
                </span>
                <p className="text-xs text-stone-400 mt-1 font-mono">{student.amount}</p>
              </div>
              <ChevronRight className="w-5 h-5 text-stone-300" />
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
