"use client"

import { useState } from "react"
import { LoginScreen } from "@/components/login-screen"
import { ParentDashboard } from "@/components/parent-dashboard"
import { PaymentModal } from "@/components/payment-modal"
import { BottomNav } from "@/components/bottom-nav"
import { SuccessOverlay } from "@/components/success-overlay"
import { FeatureModal } from "@/components/feature-modal"
import { ActivityView } from "@/components/activity-view"
import { WalletView } from "@/components/wallet-view"
import { ProfileView } from "@/components/profile-view"
import { ToastNotification } from "@/components/toast-notification"
import { AdminDashboard } from "@/components/admin-dashboard"
import { AdminBottomNav, type AdminNavTab } from "@/components/admin-bottom-nav"
import { AdminStudentsView } from "@/components/admin-students-view"
import { AdminReportsView } from "@/components/admin-reports-view"
import { AdminSettingsView } from "@/components/admin-settings-view"
import { LandingPage } from "@/components/landing-page"

export type View = "landing" | "login" | "parent-dashboard" | "admin-dashboard"
export type NavTab = "home" | "activity" | "wallet" | "profile"

export default function NexusApp() {
  const [currentView, setCurrentView] = useState<View>("landing")
  const [activeTab, setActiveTab] = useState<NavTab>("home")
  const [showPaymentModal, setShowPaymentModal] = useState(false)
  const [showSuccessOverlay, setShowSuccessOverlay] = useState(false)
  const [featureModal, setFeatureModal] = useState<{ isOpen: boolean; name: string }>({ isOpen: false, name: "" })

  const [toast, setToast] = useState<{ isOpen: boolean; message: string; icon: "check" | "send" }>({
    isOpen: false,
    message: "",
    icon: "check",
  })

  const [adminTab, setAdminTab] = useState<AdminNavTab>("overview")

  const handlePaymentSuccess = () => {
    setShowPaymentModal(false)
    setShowSuccessOverlay(true)
  }

  const handleQuickAction = (actionName: string) => {
    if (actionName === "Pay Now") {
      setShowPaymentModal(true)
    } else {
      setFeatureModal({ isOpen: true, name: actionName })
    }
  }

  const handleDownloadReceipt = () => {
    setToast({ isOpen: true, message: "Receipt saved to Gallery", icon: "check" })
  }

  const handleBlastReminders = () => {
    setToast({ isOpen: true, message: "Sent WhatsApp reminders to 15 parents", icon: "send" })
  }

  const handleScanStudent = () => {
    setFeatureModal({ isOpen: true, name: "Scan Student" })
  }

  const handleSwitchToAdmin = () => {
    setCurrentView("admin-dashboard")
    setAdminTab("overview")
  }

  const handleSwitchToParent = () => {
    setCurrentView("parent-dashboard")
    setActiveTab("home")
  }

  const handleLogout = () => {
    setCurrentView("landing")
    setActiveTab("home")
    setAdminTab("overview")
  }

  return (
    <main className="min-h-screen bg-stone-50">
      {currentView === "landing" && <LandingPage onTryDemo={() => setCurrentView("login")} />}

      {currentView === "login" && (
        <LoginScreen
          onLoginAsParent={() => setCurrentView("parent-dashboard")}
          onLoginAsAdmin={() => setCurrentView("admin-dashboard")}
        />
      )}

      {currentView === "parent-dashboard" && (
        <>
          {activeTab === "home" && (
            <ParentDashboard
              onPayNow={() => setShowPaymentModal(true)}
              onLogout={handleLogout}
              onQuickAction={handleQuickAction}
            />
          )}
          {activeTab === "activity" && <ActivityView />}
          {activeTab === "wallet" && <WalletView />}
          {activeTab === "profile" && <ProfileView onLogout={handleLogout} onSwitchToAdmin={handleSwitchToAdmin} />}

          <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
        </>
      )}

      {currentView === "admin-dashboard" && (
        <>
          {adminTab === "overview" && (
            <AdminDashboard onScanStudent={handleScanStudent} onBlastReminders={handleBlastReminders} />
          )}
          {adminTab === "students" && <AdminStudentsView />}
          {adminTab === "reports" && <AdminReportsView />}
          {adminTab === "settings" && (
            <AdminSettingsView onSwitchToParent={handleSwitchToParent} onLogout={handleLogout} />
          )}

          <AdminBottomNav activeTab={adminTab} onTabChange={setAdminTab} />
        </>
      )}

      {/* Modals and Overlays - shared across views */}
      <PaymentModal
        isOpen={showPaymentModal}
        onClose={() => setShowPaymentModal(false)}
        onSuccess={handlePaymentSuccess}
      />

      <SuccessOverlay
        isOpen={showSuccessOverlay}
        onClose={() => setShowSuccessOverlay(false)}
        onBackToHome={() => {
          setShowSuccessOverlay(false)
          setActiveTab("home")
        }}
        onDownloadReceipt={handleDownloadReceipt}
      />

      <FeatureModal
        isOpen={featureModal.isOpen}
        featureName={featureModal.name}
        onClose={() => setFeatureModal({ isOpen: false, name: "" })}
      />

      <ToastNotification
        isOpen={toast.isOpen}
        message={toast.message}
        icon={toast.icon}
        onClose={() => setToast({ ...toast, isOpen: false })}
      />
    </main>
  )
}
