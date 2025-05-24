'use client'

import axios from 'axios'
import React, { useState } from 'react'

export default function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [submitted, setSubmitted] = useState(false)
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const handleContact = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)
        setError('')
        setSubmitted(false)
        
        // Basic validation
        if (!name || !email || !message) {
            setError('All fields are required')
            setLoading(false)
            return
        }

        // Email validation
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setError('Please enter a valid email address')
            setLoading(false)
            return
        }

        try {
            const res = await axios.post('http://localhost:5000/contact', {
                name,
                email,
                message
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            
            if (res.data.success) {
                setSubmitted(true)
                setName('')
                setEmail('')
                setMessage('')
            } else {
                setError(res.data.message || 'Error sending message')
            }
        } catch (err) {
            setError(err.response?.data?.message || 
                   err.response?.data?.error || 
                   'Failed to send message. Please try again.')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#ffb8d5] via-[#ffd6e7] to-[#ffe8f0] py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto bg-white/80 backdrop-blur-sm rounded-xl shadow-md overflow-hidden p-8">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Contact Us</h1>
                
                <form onSubmit={handleContact} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Your name"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:border-pink-500 focus:ring-pink-500"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="your@email.com"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:border-pink-500 focus:ring-pink-500"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                            Message
                        </label>
                        <textarea
                            id="message"
                            rows="4"
                            placeholder="Your message..."
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:border-pink-500 focus:ring-pink-500"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        ></textarea>
                    </div>
                    
                    <div>
                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white ${
                                loading ? 'bg-pink-400' : 'bg-pink-600 hover:bg-pink-700'
                            } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500`}
                        >
                            {loading ? (
                                <>
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Sending...
                                </>
                            ) : 'Send Message'}
                        </button>
                    </div>
                </form>
                
                {submitted && (
                    <div className="mt-6 p-4 bg-green-100 text-green-700 rounded-lg text-center">
                        Message sent successfully! We&apos;ll get back to you soon.
                    </div>
                )}
                
                {error && (
                    <div className="mt-6 p-4 bg-red-100 text-red-700 rounded-lg text-center">
                        {error}
                    </div>
                )}
            </div>
        </div>
    )
}