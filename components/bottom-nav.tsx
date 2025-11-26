"use client"

import { Home, Clock, Wallet, User } from "lucide-react"
import type { NavTab } from "@/app/page"

interface BottomNavProps {
  activeTab: NavTab
  onTabChange: (tab: NavTab) => void
}

const navItems: { id: NavTab; icon: typeof Home; label: string }[] = [
  { id: "home", icon: Home, label: "Home" },
  { id: "activity", icon: Clock, label: "Activity" },
  { id: "wallet", icon: Wallet, label: "Wallet" },
  { id: "profile", icon: User, label: "Profile" },
]

export function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
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
