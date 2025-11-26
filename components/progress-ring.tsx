"use client"

interface ProgressRingProps {
  progress: number
  monthsPaid: number
  totalMonths: number
  size?: number
  strokeWidth?: number
}

export function ProgressRing({ progress, monthsPaid, totalMonths, size = 80, strokeWidth = 6 }: ProgressRingProps) {
  const radius = (size - strokeWidth) / 2
  const circumference = radius * 2 * Math.PI
  const offset = circumference - (progress / 100) * circumference

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="transform -rotate-90">
        {/* Background Circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          className="text-stone-200"
        />
        {/* Progress Circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="text-zinc-900 transition-all duration-500"
        />
      </svg>
      {/* Center Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-mono text-lg font-bold text-zinc-900">{monthsPaid}</span>
        <span className="text-stone-400 text-[10px] font-medium">/ {totalMonths}</span>
      </div>
    </div>
  )
}
