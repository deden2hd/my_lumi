"use client"

import type React from "react"

import { useState } from "react"
import {
  Zap,
  Shield,
  Fingerprint,
  ChevronRight,
  X,
  Check,
  ArrowRight,
  FileSpreadsheet,
  Plus,
  Minus,
  TrendingUp,
  Clock,
  Users,
  CreditCard,
  AlertCircle,
  Smile,
  Bell,
  LineChart,
} from "lucide-react"

interface LandingPageProps {
  onTryDemo: () => void
}

export function LandingPage({ onTryDemo }: LandingPageProps) {
  const [swipeProgress, setSwipeProgress] = useState(0)
  const [demoSuccess, setDemoSuccess] = useState(false)
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  const [isDragging, setIsDragging] = useState(false)

  const handleSwipeStart = () => {
    setIsDragging(true)
  }

  const handleSwipeMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return
    const container = e.currentTarget
    const rect = container.getBoundingClientRect()
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX
    const progress = Math.max(0, Math.min(100, ((clientX - rect.left - 28) / (rect.width - 56)) * 100))
    setSwipeProgress(progress)

    if (progress >= 95) {
      setDemoSuccess(true)
      setIsDragging(false)
      setTimeout(() => {
        setDemoSuccess(false)
        setSwipeProgress(0)
      }, 2000)
    }
  }

  const handleSwipeEnd = () => {
    setIsDragging(false)
    if (swipeProgress < 95) {
      setSwipeProgress(0)
    }
  }

  const schoolLogos = [
    "Global Academy",
    "Bright Future School",
    "International College",
    "Pioneer Institute",
    "Elite Academy",
  ]

  const painPoints = [
    { icon: FileSpreadsheet, text: "Manual Excel tracking" },
    { icon: AlertCircle, text: "Lost cash receipts" },
    { icon: Users, text: "Angry parent queues" },
    { icon: Clock, text: "Month-end chaos" },
  ]

  const benefits = [
    { icon: Zap, text: "Fully automated billing" },
    { icon: CreditCard, text: "100% digital payments" },
    { icon: Bell, text: "Instant notifications" },
    { icon: Smile, text: "Happy parents" },
  ]

  const faqs = [
    {
      question: "Is it secure?",
      answer:
        "Yes, Lumi uses bank-grade 256-bit encryption and is PCI-DSS compliant. All data is stored securely with regular security audits.",
    },
    {
      question: "Can non-tech savvy parents use it?",
      answer:
        "Lumi is designed with simplicity in mind. Parents can pay in just 2 taps - no training required. We also provide WhatsApp support.",
    },
    {
      question: "How long does setup take?",
      answer:
        "Most schools are up and running within 24 hours. We handle the data import and provide hands-on onboarding support.",
    },
    {
      question: "Can we integrate with our existing system?",
      answer:
        "Yes, Lumi offers API integrations and supports CSV/Excel imports. We work with all major school management systems.",
    },
  ]

  return (
    <div className="min-h-screen bg-stone-100 relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Large warm beige orb - top left */}
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-stone-300/50 blur-3xl animate-orb-1" />
        {/* Soft orange orb - top right */}
        <div className="absolute -top-20 right-0 w-[500px] h-[500px] rounded-full bg-orange-200/40 blur-3xl animate-orb-2" />
        {/* Bottom accent orb */}
        <div className="absolute bottom-0 left-1/4 w-[700px] h-[400px] rounded-full bg-stone-300/40 blur-3xl animate-orb-1" />
        {/* Mid-page warm glow */}
        <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] rounded-full bg-orange-100/30 blur-3xl animate-orb-2" />
      </div>

      <div className="fixed inset-0 noise-texture" />

      {/* Navigation - stronger glassmorphism */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-stone-100/70 backdrop-blur-xl border-b border-white/60">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-zinc-900 flex items-center justify-center">
              <span className="text-white font-bold font-[family-name:var(--font-sora)] text-sm">L</span>
            </div>
            <span className="font-bold font-[family-name:var(--font-sora)] text-xl text-zinc-900">Lumi</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-zinc-600 hover:text-zinc-900 transition-colors text-sm font-medium">
              Features
            </a>
            <a href="#pricing" className="text-zinc-600 hover:text-zinc-900 transition-colors text-sm font-medium">
              Pricing
            </a>
            <a href="#faq" className="text-zinc-600 hover:text-zinc-900 transition-colors text-sm font-medium">
              FAQ
            </a>
          </div>
          <button
            onClick={onTryDemo}
            className="bg-zinc-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-zinc-800 transition-colors"
          >
            Try Demo
          </button>
        </div>
      </nav>

      {/* Section A: Hero - much larger device, bolder typography */}
      <section className="pt-32 pb-0 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-8">
            <h1 className="font-[family-name:var(--font-sora)] text-6xl md:text-8xl font-extrabold mb-6 gradient-text leading-[0.95] tracking-tight">
              Education Finance, Reimagined.
            </h1>
            <p className="text-xl md:text-2xl text-zinc-500 font-[family-name:var(--font-inter)] mb-10 leading-relaxed max-w-2xl mx-auto">
              No more paper trails. Lumi brings AI intelligence to your school finance.
            </p>
            <button
              onClick={onTryDemo}
              className="bg-zinc-900 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-zinc-800 transition-all hover:scale-105 shadow-xl shadow-zinc-900/25"
            >
              Try Demo
            </button>
          </div>

          <div className="flex justify-center perspective-1000 relative mt-12">
            {/* Glow backdrop behind device */}
            <div className="absolute inset-0 hero-glow scale-150" />

            <div className="animate-float relative" style={{ transformStyle: "preserve-3d" }}>
              <div className="w-80 md:w-[420px] bg-white/80 backdrop-blur-xl rounded-[3rem] p-5 shadow-2xl shadow-zinc-900/20 border border-white/70 relative">
                {/* Inner glow effect */}
                <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-white/50 via-transparent to-orange-50/30 pointer-events-none" />

                <div className="bg-stone-50 rounded-[2.5rem] p-5 space-y-4 relative">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs text-zinc-400 block">Good Morning</span>
                      <span className="text-lg font-bold text-zinc-900 font-[family-name:var(--font-sora)]">
                        Mr. Budi
                      </span>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-200 to-stone-300" />
                  </div>

                  {/* Invoice card */}
                  <div className="bg-white rounded-2xl p-5 shadow-lg shadow-zinc-900/5 border border-white/80">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <p className="text-xs text-zinc-400 mb-1">October 2024</p>
                        <p className="text-2xl font-bold text-zinc-900 font-[family-name:var(--font-sora)]">IDR 2.5M</p>
                      </div>
                      <span className="px-3 py-1.5 bg-amber-100 text-amber-700 text-xs font-semibold rounded-full">
                        Due in 3 days
                      </span>
                    </div>
                    <div className="h-2.5 bg-stone-100 rounded-full overflow-hidden">
                      <div className="h-full w-3/4 bg-gradient-to-r from-zinc-800 to-zinc-600 rounded-full" />
                    </div>
                    <p className="text-xs text-zinc-400 mt-2">7 of 12 months paid</p>
                  </div>

                  {/* Quick actions grid */}
                  <div className="grid grid-cols-4 gap-3">
                    {["Pay", "Scan", "ID", "Help"].map((label, i) => (
                      <div
                        key={i}
                        className="bg-white rounded-2xl p-3 aspect-square flex flex-col items-center justify-center shadow-sm border border-white/80"
                      >
                        <div className="w-6 h-6 rounded-full bg-zinc-100 mb-1" />
                        <span className="text-[10px] text-zinc-500">{label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section B: Social Proof - adjusted spacing for overlap effect */}
      <section className="py-20 pt-32 px-6 relative z-10 border-y border-stone-200/50">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-zinc-400 text-sm mb-8 font-medium tracking-widest uppercase">
            Trusted by forward-thinking institutions
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {schoolLogos.map((name, i) => (
              <div key={i} className="flex items-center gap-2 opacity-40 grayscale hover:opacity-70 transition-opacity">
                <div className="w-10 h-10 rounded-xl bg-zinc-400" />
                <span className="text-zinc-600 font-medium text-sm hidden md:block">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section C: Pain vs Glory - Dark/Light dramatic split */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-0 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-zinc-900/15">
            <div className="bg-zinc-900 p-10 md:p-14">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                  <X className="w-5 h-5 text-red-400" />
                </div>
                <h3 className="font-[family-name:var(--font-sora)] text-2xl md:text-3xl font-bold text-white tracking-tight">
                  The Chaos
                </h3>
              </div>
              <p className="text-zinc-400 mb-8 font-[family-name:var(--font-inter)] text-lg">
                The traditional way of managing school payments is broken.
              </p>
              <div className="space-y-3">
                {painPoints.map((point, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 bg-zinc-800/50 rounded-xl p-4 border border-zinc-700/50"
                  >
                    <point.icon className="w-5 h-5 text-zinc-500" />
                    <span className="text-zinc-300">{point.text}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 bg-zinc-800 rounded-2xl aspect-video flex items-center justify-center border border-zinc-700/50">
                <div className="text-center">
                  <FileSpreadsheet className="w-12 h-12 text-zinc-600 mx-auto mb-2" />
                  <span className="text-zinc-500 text-sm">Messy spreadsheets</span>
                </div>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-xl p-10 md:p-14 relative">
              {/* Subtle warm glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-100/50 rounded-full blur-3xl pointer-events-none" />

              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                    <Check className="w-5 h-5 text-emerald-600" />
                  </div>
                  <h3 className="font-[family-name:var(--font-sora)] text-2xl md:text-3xl font-bold text-zinc-900 tracking-tight">
                    The Zen
                  </h3>
                </div>
                <p className="text-zinc-500 mb-8 font-[family-name:var(--font-inter)] text-lg">
                  Lumi transforms chaos into clarity with intelligent automation.
                </p>
                <div className="space-y-3">
                  {benefits.map((benefit, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 bg-stone-50 rounded-xl p-4 border border-stone-200/80"
                    >
                      <benefit.icon className="w-5 h-5 text-zinc-700" />
                      <span className="text-zinc-700">{benefit.text}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 bg-gradient-to-br from-stone-50 to-orange-50/50 rounded-2xl aspect-video flex items-center justify-center border border-stone-200">
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-2xl bg-zinc-900 flex items-center justify-center mx-auto mb-2">
                      <span className="text-white font-bold font-[family-name:var(--font-sora)]">L</span>
                    </div>
                    <span className="text-zinc-400 text-sm">Clean dashboard</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section D: Bento Grid Features - stronger glassmorphism */}
      <section id="features" className="py-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-sora)] text-4xl md:text-5xl font-extrabold text-zinc-900 mb-4 tracking-tight">
              Everything you need
            </h2>
            <p className="text-zinc-500 text-lg font-[family-name:var(--font-inter)]">
              Powerful features wrapped in simplicity
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {/* Real-time Radar - Wide - stronger glass borders */}
            <div className="md:col-span-2 bg-white/70 backdrop-blur-xl rounded-3xl p-8 border border-white/70 shadow-xl shadow-zinc-900/5">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="font-[family-name:var(--font-sora)] text-xl font-bold text-zinc-900 mb-2">
                    Real-time Radar
                  </h3>
                  <p className="text-zinc-500">Monitor your school&apos;s cashflow in real-time</p>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-zinc-900 flex items-center justify-center">
                  <LineChart className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="bg-stone-50/80 rounded-2xl p-6 h-48 flex items-end border border-stone-200/50">
                <div className="flex items-end gap-2 w-full">
                  {[40, 65, 45, 80, 60, 90, 75, 85, 70, 95, 80, 88].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-gradient-to-t from-zinc-900 to-zinc-700 rounded-t-lg transition-all hover:from-zinc-700 hover:to-zinc-500"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* 2-Second Payment - Square */}
            <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 border border-white/70 shadow-xl shadow-zinc-900/5">
              <div className="w-12 h-12 rounded-2xl bg-zinc-900 flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-[family-name:var(--font-sora)] text-xl font-bold text-zinc-900 mb-2">
                2-Second Payment
              </h3>
              <p className="text-zinc-500 mb-6">Swipe and done. That&apos;s all it takes.</p>
              <div className="bg-stone-50/80 rounded-2xl p-4 flex items-center justify-center border border-stone-200/50">
                <div className="w-16 h-16 rounded-full bg-zinc-100 flex items-center justify-center border border-stone-200">
                  <ChevronRight className="w-8 h-8 text-zinc-400" />
                </div>
              </div>
            </div>

            {/* Bank-grade Security - Square */}
            <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 border border-white/70 shadow-xl shadow-zinc-900/5">
              <div className="w-12 h-12 rounded-2xl bg-zinc-900 flex items-center justify-center mb-6">
                <Fingerprint className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-[family-name:var(--font-sora)] text-xl font-bold text-zinc-900 mb-2">
                Bank-grade Security
              </h3>
              <p className="text-zinc-500 mb-6">256-bit encryption. PCI-DSS compliant.</p>
              <div className="bg-stone-50/80 rounded-2xl p-4 flex items-center justify-center border border-stone-200/50">
                <Shield className="w-12 h-12 text-zinc-300" />
              </div>
            </div>

            {/* Smart Analytics - Wide */}
            <div className="md:col-span-2 bg-white/70 backdrop-blur-xl rounded-3xl p-8 border border-white/70 shadow-xl shadow-zinc-900/5">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="font-[family-name:var(--font-sora)] text-xl font-bold text-zinc-900 mb-2">
                    Smart Analytics
                  </h3>
                  <p className="text-zinc-500">AI-powered insights for better decisions</p>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-zinc-900 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-stone-50/80 rounded-2xl p-4 text-center border border-stone-200/50">
                  <p className="text-3xl font-extrabold text-zinc-900 font-[family-name:var(--font-sora)]">98%</p>
                  <p className="text-zinc-500 text-sm">Collection rate</p>
                </div>
                <div className="bg-stone-50/80 rounded-2xl p-4 text-center border border-stone-200/50">
                  <p className="text-3xl font-extrabold text-zinc-900 font-[family-name:var(--font-sora)]">2.5x</p>
                  <p className="text-zinc-500 text-sm">Faster payments</p>
                </div>
                <div className="bg-stone-50/80 rounded-2xl p-4 text-center border border-stone-200/50">
                  <p className="text-3xl font-extrabold text-zinc-900 font-[family-name:var(--font-sora)]">0</p>
                  <p className="text-zinc-500 text-sm">Paper receipts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section E: Interactive Demo Hook */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-[family-name:var(--font-sora)] text-4xl md:text-5xl font-extrabold text-zinc-900 mb-4 tracking-tight">
            Feel the Difference
          </h2>
          <p className="text-zinc-500 text-lg font-[family-name:var(--font-inter)] mb-12">
            Experience how simple payment can be
          </p>

          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/70 shadow-2xl shadow-zinc-900/10">
            {demoSuccess ? (
              <div className="flex flex-col items-center gap-4 py-8 animate-scale-in">
                <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center">
                  <Check className="w-10 h-10 text-emerald-600" />
                </div>
                <p className="text-xl font-bold text-zinc-900">Success! It&apos;s that easy.</p>
              </div>
            ) : (
              <>
                <div className="flex justify-between items-center mb-8">
                  <div className="text-left">
                    <p className="text-sm text-zinc-400">Amount</p>
                    <p className="text-2xl font-bold text-zinc-900 font-[family-name:var(--font-sora)]">
                      IDR 2,500,000
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-zinc-400">For</p>
                    <p className="text-zinc-900 font-medium">October Tuition</p>
                  </div>
                </div>

                {/* Swipe Button */}
                <div
                  className="relative h-16 bg-stone-100 rounded-full overflow-hidden cursor-pointer select-none border border-stone-200/50"
                  onMouseDown={handleSwipeStart}
                  onMouseMove={handleSwipeMove}
                  onMouseUp={handleSwipeEnd}
                  onMouseLeave={handleSwipeEnd}
                  onTouchStart={handleSwipeStart}
                  onTouchMove={handleSwipeMove}
                  onTouchEnd={handleSwipeEnd}
                >
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer" />
                  </div>

                  {/* Progress fill */}
                  <div
                    className="absolute left-0 top-0 bottom-0 bg-zinc-900/10 rounded-full transition-all duration-75"
                    style={{ width: `${swipeProgress + 7}%` }}
                  />

                  {/* Label */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <span className="text-zinc-400 font-medium">Swipe to Pay</span>
                  </div>

                  {/* Thumb */}
                  <div
                    className="absolute top-1 bottom-1 left-1 w-14 bg-zinc-900 rounded-full flex items-center justify-center shadow-lg transition-all duration-75"
                    style={{ left: `calc(${swipeProgress}% * 0.85 + 4px)` }}
                  >
                    <ChevronRight className="w-6 h-6 text-white" />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Section F: Integration */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-12 border border-white/70 shadow-xl shadow-zinc-900/5 text-center">
            <h2 className="font-[family-name:var(--font-sora)] text-3xl md:text-4xl font-extrabold text-zinc-900 mb-4 tracking-tight">
              Import your data in 1 click
            </h2>
            <p className="text-zinc-500 text-lg font-[family-name:var(--font-inter)] mb-12">
              Seamlessly migrate from your existing system
            </p>

            <div className="flex items-center justify-center gap-6 md:gap-12">
              <div className="flex flex-col items-center gap-3">
                <div className="w-20 h-20 rounded-2xl bg-stone-200 flex items-center justify-center border border-stone-300/50">
                  <FileSpreadsheet className="w-10 h-10 text-zinc-500" />
                </div>
                <span className="text-zinc-500 text-sm font-medium">Excel / CSV</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-8 h-0.5 bg-zinc-300" />
                <ArrowRight className="w-6 h-6 text-zinc-400" />
                <div className="w-8 h-0.5 bg-zinc-300" />
              </div>

              <div className="flex flex-col items-center gap-3">
                <div className="w-20 h-20 rounded-2xl bg-zinc-900 flex items-center justify-center shadow-lg shadow-zinc-900/20">
                  <span className="text-white font-bold font-[family-name:var(--font-sora)] text-2xl">L</span>
                </div>
                <span className="text-zinc-900 text-sm font-semibold">Lumi</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section G: Pricing */}
      <section id="pricing" className="py-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-sora)] text-4xl md:text-5xl font-extrabold text-zinc-900 mb-4 tracking-tight">
              Simple, transparent pricing
            </h2>
            <p className="text-zinc-500 text-lg font-[family-name:var(--font-inter)]">
              Choose the plan that fits your school
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 items-end">
            {/* Starter */}
            <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 border border-white/70 shadow-xl shadow-zinc-900/5">
              <h3 className="font-[family-name:var(--font-sora)] text-xl font-bold text-zinc-900 mb-2">Starter</h3>
              <p className="text-zinc-500 mb-6">For small schools getting started</p>
              <div className="mb-6">
                <span className="text-4xl font-extrabold text-zinc-900 font-[family-name:var(--font-sora)]">Free</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-zinc-600">
                  <Check className="w-5 h-5 text-emerald-500" />
                  Up to 100 students
                </li>
                <li className="flex items-center gap-3 text-zinc-600">
                  <Check className="w-5 h-5 text-emerald-500" />
                  Basic reporting
                </li>
                <li className="flex items-center gap-3 text-zinc-600">
                  <Check className="w-5 h-5 text-emerald-500" />
                  Email support
                </li>
              </ul>
              <button className="w-full py-3 rounded-full border-2 border-zinc-200 text-zinc-700 font-medium hover:bg-zinc-50 transition-colors">
                Get Started
              </button>
            </div>

            {/* Pro - Featured */}
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 border-2 border-zinc-900 shadow-2xl shadow-zinc-900/15 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-zinc-900 text-white px-4 py-1 rounded-full text-sm font-medium">
                Best Value
              </div>
              <h3 className="font-[family-name:var(--font-sora)] text-xl font-bold text-zinc-900 mb-2">Pro</h3>
              <p className="text-zinc-500 mb-6">For growing institutions</p>
              <div className="mb-6">
                <span className="text-4xl font-extrabold text-zinc-900 font-[family-name:var(--font-sora)]">
                  IDR 2.5M
                </span>
                <span className="text-zinc-500">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-zinc-600">
                  <Check className="w-5 h-5 text-emerald-500" />
                  Up to 1,000 students
                </li>
                <li className="flex items-center gap-3 text-zinc-600">
                  <Check className="w-5 h-5 text-emerald-500" />
                  Advanced analytics
                </li>
                <li className="flex items-center gap-3 text-zinc-600">
                  <Check className="w-5 h-5 text-emerald-500" />
                  WhatsApp integration
                </li>
                <li className="flex items-center gap-3 text-zinc-600">
                  <Check className="w-5 h-5 text-emerald-500" />
                  Priority support
                </li>
              </ul>
              <button className="w-full py-3 rounded-full bg-zinc-900 text-white font-semibold hover:bg-zinc-800 transition-colors">
                Start Free Trial
              </button>
            </div>

            {/* Enterprise */}
            <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 border border-white/70 shadow-xl shadow-zinc-900/5">
              <h3 className="font-[family-name:var(--font-sora)] text-xl font-bold text-zinc-900 mb-2">Enterprise</h3>
              <p className="text-zinc-500 mb-6">For large school networks</p>
              <div className="mb-6">
                <span className="text-4xl font-extrabold text-zinc-900 font-[family-name:var(--font-sora)]">
                  Custom
                </span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-zinc-600">
                  <Check className="w-5 h-5 text-emerald-500" />
                  Unlimited students
                </li>
                <li className="flex items-center gap-3 text-zinc-600">
                  <Check className="w-5 h-5 text-emerald-500" />
                  Custom integrations
                </li>
                <li className="flex items-center gap-3 text-zinc-600">
                  <Check className="w-5 h-5 text-emerald-500" />
                  Dedicated success manager
                </li>
              </ul>
              <button className="w-full py-3 rounded-full border-2 border-zinc-200 text-zinc-700 font-medium hover:bg-zinc-50 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section H: FAQ */}
      <section id="faq" className="py-20 px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-sora)] text-4xl md:text-5xl font-extrabold text-zinc-900 mb-4 tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white/70 backdrop-blur-xl rounded-2xl border border-white/70 shadow-lg shadow-zinc-900/5 overflow-hidden"
              >
                <button
                  className="w-full flex items-center justify-between p-6 text-left"
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                >
                  <span className="font-[family-name:var(--font-sora)] font-semibold text-zinc-900">
                    {faq.question}
                  </span>
                  {expandedFaq === i ? (
                    <Minus className="w-5 h-5 text-zinc-400 flex-shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 text-zinc-400 flex-shrink-0" />
                  )}
                </button>
                {expandedFaq === i && (
                  <div className="px-6 pb-6">
                    <p className="text-zinc-600 font-[family-name:var(--font-inter)]">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section I: Final CTA */}
      <section className="py-20 px-6 bg-zinc-900 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-[family-name:var(--font-sora)] text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Ready to upgrade your school?
          </h2>
          <p className="text-zinc-400 text-lg font-[family-name:var(--font-inter)] mb-10">
            Join hundreds of schools transforming their finance operations with Lumi
          </p>
          <button
            onClick={onTryDemo}
            className="bg-white text-zinc-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-zinc-100 transition-all hover:scale-105 shadow-xl shadow-black/20"
          >
            Start Pilot Program
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-zinc-900 border-t border-zinc-800 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-white flex items-center justify-center">
              <span className="text-zinc-900 font-bold font-[family-name:var(--font-sora)] text-sm">L</span>
            </div>
            <span className="font-bold font-[family-name:var(--font-sora)] text-xl text-white">Lumi</span>
          </div>
          <p className="text-zinc-500 text-sm">2024 Lumi. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
