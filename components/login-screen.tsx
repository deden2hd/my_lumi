"use client"

import type React from "react"

import { useState } from "react"
import { Fingerprint, Mail, Lock, ArrowRight, User, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface LoginScreenProps {
  onLoginAsParent: () => void
  onLoginAsAdmin: () => void
}

export function LoginScreen({ onLoginAsParent, onLoginAsAdmin }: LoginScreenProps) {
  const [isScanning, setIsScanning] = useState(false)
  const [ripples, setRipples] = useState<number[]>([])
  const [showManualLogin, setShowManualLogin] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [selectedRole, setSelectedRole] = useState<"parent" | "admin">("parent")

  const handleBiometricScan = () => {
    setIsScanning(true)
    const newRipple = Date.now()
    setRipples((prev) => [...prev, newRipple])

    // Simulate scan
    setTimeout(() => {
      setIsScanning(false)
      if (selectedRole === "admin") {
        onLoginAsAdmin()
      } else {
        onLoginAsParent()
      }
    }, 1500)

    // Clean up ripple after animation
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r !== newRipple))
    }, 600)
  }

  const handleManualLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (selectedRole === "admin") {
      onLoginAsAdmin()
    } else {
      onLoginAsParent()
    }
  }

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col items-center justify-center px-6 py-12">
      {/* Logo */}
      <div className="mb-12 text-center">
        <h1 className="font-mono text-4xl font-bold tracking-tight text-zinc-900 mb-2">Lumi</h1>
        <p className="text-stone-500 text-sm tracking-widest uppercase">School Payment System</p>
      </div>

      {/* Main Card */}
      <div className="w-full max-w-sm">
        <div className="bg-white/70 backdrop-blur-md rounded-3xl shadow-xl p-8 border border-stone-200/50">
          <h2 className="font-mono text-xl font-semibold text-zinc-900 text-center mb-2">Welcome to Lumi</h2>
          <p className="text-stone-500 text-sm text-center mb-6">Secure access to your school payments</p>

          <div className="flex gap-2 p-1.5 bg-stone-100 rounded-full mb-8">
            <button
              onClick={() => setSelectedRole("parent")}
              className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedRole === "parent" ? "bg-white text-zinc-900 shadow-md" : "text-stone-500 hover:text-stone-700"
              }`}
            >
              <User className="w-4 h-4" />
              Parent
            </button>
            <button
              onClick={() => setSelectedRole("admin")}
              className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedRole === "admin" ? "bg-white text-zinc-900 shadow-md" : "text-stone-500 hover:text-stone-700"
              }`}
            >
              <Shield className="w-4 h-4" />
              Admin
            </button>
          </div>

          {/* Biometric Scanner */}
          <div className="flex justify-center mb-6">
            <button
              onClick={handleBiometricScan}
              disabled={isScanning}
              className={`relative w-28 h-28 rounded-full flex items-center justify-center transition-all duration-300 active:scale-95 focus:outline-none focus:ring-4 focus:ring-stone-200 ${
                selectedRole === "admin" ? "bg-amber-50 hover:bg-amber-100" : "bg-stone-100 hover:bg-stone-200"
              }`}
            >
              {/* Ripple Effects */}
              {ripples.map((id) => (
                <span key={id} className="absolute inset-0 rounded-full border-2 border-amber-500/50 animate-ripple" />
              ))}

              {/* Pulse Ring */}
              <span
                className={`absolute inset-0 rounded-full border-2 animate-pulse-ring ${
                  selectedRole === "admin" ? "border-amber-300" : "border-stone-300"
                }`}
              />

              {/* Icon */}
              <Fingerprint
                className={`w-14 h-14 transition-colors duration-300 ${
                  isScanning ? "text-amber-600" : selectedRole === "admin" ? "text-amber-700" : "text-zinc-900"
                }`}
              />
            </button>
          </div>

          <p className="text-stone-500 text-xs text-center mb-6">
            Tap to scan as {selectedRole === "admin" ? "Admin" : "Parent"}
          </p>

          {/* Divider */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-px bg-stone-200" />
            <span className="text-stone-400 text-xs uppercase tracking-wider">or</span>
            <div className="flex-1 h-px bg-stone-200" />
          </div>

          {/* Manual Login Toggle */}
          {!showManualLogin ? (
            <Button
              variant="ghost"
              onClick={() => setShowManualLogin(true)}
              className="w-full rounded-full text-zinc-900 hover:bg-stone-100"
            >
              Sign in with Email
            </Button>
          ) : (
            <form onSubmit={handleManualLogin} className="space-y-4">
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                <Input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-11 rounded-full bg-stone-100 border-0 h-12 text-zinc-900 placeholder:text-stone-400"
                />
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                <Input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-11 rounded-full bg-stone-100 border-0 h-12 text-zinc-900 placeholder:text-stone-400"
                />
              </div>
              <Button
                type="submit"
                className={`w-full rounded-full h-12 font-medium transition-colors ${
                  selectedRole === "admin"
                    ? "bg-amber-600 hover:bg-amber-700 text-white"
                    : "bg-zinc-900 hover:bg-zinc-800 text-white"
                }`}
              >
                Sign In as {selectedRole === "admin" ? "Admin" : "Parent"}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </form>
          )}
        </div>

        {/* Footer */}
        <p className="text-center text-stone-400 text-xs mt-8">Protected by end-to-end encryption</p>
      </div>
    </div>
  )
}
