"use client"

import { User, Settings, Bell, Shield, HelpCircle, LogOut, ChevronRight, ShieldCheck } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

interface ProfileViewProps {
  onLogout: () => void
  onSwitchToAdmin: () => void
}

const menuItems = [
  { icon: Settings, label: "Account Settings", description: "Manage your profile" },
  { icon: Bell, label: "Notifications", description: "Configure alerts" },
  { icon: Shield, label: "Security", description: "Password & authentication" },
  { icon: HelpCircle, label: "Help & Support", description: "Get assistance" },
]

export function ProfileView({ onLogout, onSwitchToAdmin }: ProfileViewProps) {
  return (
    <div className="min-h-screen bg-stone-50 pb-32">
      {/* Header */}
      <header className="px-6 pt-12 pb-6">
        <div className="flex items-center gap-3 mb-2">
          <User className="w-6 h-6 text-zinc-900" />
          <h1 className="font-mono text-2xl font-semibold text-zinc-900">Profile</h1>
        </div>
      </header>

      {/* Profile Card */}
      <section className="px-6 mb-8">
        <div className="bg-white/70 backdrop-blur-md rounded-3xl p-6 border border-stone-200/50 shadow-sm">
          <div className="flex items-center gap-4">
            <Avatar className="w-16 h-16 border-2 border-white shadow-lg">
              <AvatarImage src="/professional-parent-avatar.png" />
              <AvatarFallback className="bg-stone-200 text-zinc-900 font-medium text-lg">MB</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="font-mono font-semibold text-zinc-900 text-lg">Mr. Budi Santoso</h2>
              <p className="text-stone-500 text-sm">budi.santoso@email.com</p>
              <p className="text-stone-400 text-xs mt-1">Parent ID: NXS-P-00234</p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="px-6 mb-8">
        <div className="space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.label}
              className="w-full bg-white/70 backdrop-blur-md rounded-2xl p-4 border border-stone-200/50 shadow-sm flex items-center gap-4 hover:bg-white transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-stone-100 flex items-center justify-center">
                <item.icon className="w-5 h-5 text-zinc-900" />
              </div>
              <div className="flex-1 text-left">
                <h4 className="font-medium text-zinc-900">{item.label}</h4>
                <p className="text-stone-500 text-sm">{item.description}</p>
              </div>
              <ChevronRight className="w-5 h-5 text-stone-400" />
            </button>
          ))}
        </div>
      </section>

      <section className="px-6 mb-4">
        <button
          onClick={onSwitchToAdmin}
          className="w-full flex items-center justify-between p-4 bg-zinc-900 rounded-2xl"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-white" />
            </div>
            <div className="text-left">
              <p className="font-medium text-white">Switch to Admin View</p>
              <p className="text-xs text-stone-400">Access admin dashboard</p>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-stone-400" />
        </button>
      </section>

      {/* Logout */}
      <section className="px-6">
        <Button
          onClick={onLogout}
          variant="ghost"
          className="w-full rounded-2xl h-14 text-red-600 hover:bg-red-50 hover:text-red-700 font-medium"
        >
          <LogOut className="w-5 h-5 mr-2" />
          Sign Out
        </Button>
      </section>
    </div>
  )
}
