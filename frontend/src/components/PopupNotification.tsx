'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

interface PopupProps {
  isOpen: boolean
  onClose: () => void
  type: 'login' | 'logout'
}

export default function PopupNotification({ isOpen, onClose, type }: PopupProps) {
  const router = useRouter()

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose()
      }, 5000) // Auto-close after 5 seconds
      return () => clearTimeout(timer)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-xl p-6 max-w-sm w-full animate-fade-in">
        <div className="text-center">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
            {type === 'login' ? (
              <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            ) : (
              <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            )}
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            {type === 'login' ? 'You are logged in!' : 'You are logged out!'}
          </h3>
          <p className="text-gray-600 mb-4">
            {type === 'login' 
              ? 'Welcome back to our beauty salon!' 
              : 'You have been successfully logged out.'}
          </p>
          <div className="mt-4">
            <button
              onClick={() => {
                onClose()
                router.push('/')
              }}
              className="w-full bg-pink-600 text-white py-2 px-4 rounded-lg hover:bg-pink-700 transition-colors"
            >
              Go to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}