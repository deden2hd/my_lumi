"use client"

import { User, Bell, Shield, HelpCircle, LogOut, ChevronRight } from "lucide-react"
import { Card } from "@/components/ui/card"

interface AdminSettingsViewProps {
  onSwitchToParent: () => void
  onLogout?: () => void
}

const settingsItems = [
  { icon: User, label: "Account Settings", description: "Manage your profile" },
  { icon: Bell, label: "Notifications", description: "Configure alerts" },
  { icon: Shield, label: "Security", description: "Password & 2FA" },
  { icon: HelpCircle, label: "Help & Support", description: "Get assistance" },
]

export function AdminSettingsView({ onSwitchToParent, onLogout }: AdminSettingsViewProps) {
  return (
    <div className="min-h-screen bg-stone-50 pb-28">
      <header className="px-6 pt-14 pb-6">
        <h1 className="font-mono text-2xl font-bold text-zinc-900 mb-2">Settings</h1>
        <p className="text-stone-500">Manage your admin preferences</p>
      </header>

      <div className="px-6 space-y-4">
        {/* Admin Profile Card */}
        <Card className="bg-white/70 backdrop-blur-md rounded-3xl border-stone-200/50 p-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-zinc-700 to-zinc-900 flex items-center justify-center">
              <span className="font-mono font-bold text-white text-xl">TU</span>
            </div>
            <div>
              <h3 className="font-mono font-semibold text-zinc-900 text-lg">Staff TU</h3>
              <p className="text-stone-500 text-sm">admin@lumi.edu</p>
              <span className="text-xs px-2 py-1 bg-zinc-900 text-white rounded-full mt-2 inline-block">
                Administrator
              </span>
            </div>
          </div>
        </Card>

        {/* Settings List */}
        <Card className="bg-white/70 backdrop-blur-md rounded-3xl border-stone-200/50 overflow-hidden shadow-sm">
          {settingsItems.map((item, index) => (
            <button
              key={index}
              className="w-full flex items-center justify-between p-4 border-b border-stone-100 last:border-0 hover:bg-stone-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-stone-100 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-zinc-700" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-zinc-900">{item.label}</p>
                  <p className="text-xs text-stone-500">{item.description}</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-stone-300" />
            </button>
          ))}
        </Card>

        {/* Switch to Parent View */}
        <button
          onClick={onSwitchToParent}
          className="w-full flex items-center justify-between p-4 bg-blue-50 rounded-2xl border border-blue-200"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
              <User className="w-5 h-5 text-blue-600" />
            </div>
            <div className="text-left">
              <p className="font-medium text-blue-900">Switch to Parent View</p>
              <p className="text-xs text-blue-600">View app as a parent</p>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-blue-300" />
        </button>

        {/* Logout */}
        <button
          onClick={onLogout}
          className="w-full flex items-center justify-center gap-2 p-4 text-red-500 hover:bg-red-50 rounded-2xl transition-colors"
        >
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Log Out</span>
        </button>
      </div>
    </div>
  )
}
