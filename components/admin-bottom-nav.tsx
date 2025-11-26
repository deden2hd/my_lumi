"use client"

import { LayoutDashboard, Users, FileBarChart, Settings } from "lucide-react"

export type AdminNavTab = "overview" | "students" | "reports" | "settings"

interface AdminBottomNavProps {
  activeTab: AdminNavTab
  onTabChange: (tab: AdminNavTab) => void
}

const navItems: { id: AdminNavTab; icon: typeof LayoutDashboard; label: string }[] = [
  { id: "overview", icon: LayoutDashboard, label: "Overview" },
  { id: "students", icon: Users, label: "Students" },
  { id: "reports", icon: FileBarChart, label: "Reports" },
  { id: "settings", icon: Settings, label: "Settings" },
]

export function AdminBottomNav({ activeTab, onTabChange }: AdminBottomNavProps) {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40">
      <nav className="flex items-center gap-2 px-4 py-3 bg-white/80 backdrop-blur-xl rounded-full shadow-2xl border border-stone-200/50">
        {navItems.map((item) => {
          const isActive = activeTab === item.id
          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-full transition-all duration-300 ${
                isActive ? "bg-zinc-900 text-white shadow-lg" : "text-stone-500 hover:text-zinc-900 hover:bg-stone-100"
              }`}
            >
              <item.icon className="w-5 h-5" />
              {isActive && <span className="text-sm font-medium animate-fade-in">{item.label}</span>}
            </button>
          )
        })}
      </nav>
    </div>
  )
}
