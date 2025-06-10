"use client"
import { useEffect } from 'react'
import { useRouter } from 'next/navigation' // Updated import for Next.js 13+

export default function NotFound() {
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/')
    }, 3000)
    return () => clearTimeout(timer)
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-100">
      <div className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg max-w-md mx-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">404 - Page Not Found</h1>
        <p className="text-lg text-gray-600 mb-6">
          The page you're looking for doesn't exist.
        </p>
        <div className="animate-pulse text-blue-600">
          Redirecting to home page...
        </div>
      </div>
    </div>
  )
}