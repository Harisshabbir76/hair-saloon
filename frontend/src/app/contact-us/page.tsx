'use client'

import axios from 'axios'
import React, { useState } from 'react'
import { FaInstagram, FaFacebook, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

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
        
        if (!name || !email || !message) {
            setError('All fields are required')
            setLoading(false)
            return
        }

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
        } catch (err: unknown) {
  if (axios.isAxiosError(err)) {
    setError(err.response?.data?.message || err.response?.data?.error || 'Failed to send message. Please try again.')
  } else if (err instanceof Error) {
    setError(err.message)
  } else {
    setError('Failed to send message. Please try again.')
  }
}finally {
            setLoading(false)
        }
    }

    return (
        <div className="bg-gradient-to-br from-[#ffb8d5] via-[#ffd6e7] to-[#ffe8f0]">
            <div className="h-64 flex items-center justify-center bg-pink-600/10">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800">Contact Us</h1>
            </div>

            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-8 mb-16">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-6 md:mb-0 space-y-4">
                            <div className="flex items-center space-x-3">
                                <FaMapMarkerAlt className="text-pink-600 text-2xl" />
                                <span className="text-gray-700 text-lg">123 Beauty Street, Salon City, SC 12345</span>
                            </div>
                            
                            <div className="flex items-center space-x-3">
                                <FaPhone className="text-pink-600 text-2xl" />
                                <span className="text-gray-700 text-lg">(123) 456-7890</span>
                            </div>

                            <div className="flex items-center space-x-3">
                                <MdEmail className="text-pink-600 text-2xl" />
                                <span className="text-gray-700 text-lg">contact@beautysalon.com</span>
                            </div>
                        </div>
                        
                        <div className="flex space-x-6">
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                               className="text-pink-600 hover:text-pink-800 transition-colors">
                                <FaInstagram className="text-4xl" />
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                               className="text-pink-600 hover:text-pink-800 transition-colors">
                                <FaFacebook className="text-4xl" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-4 mb-16 h-96">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215209132576!2d-73.98784492452562!3d40.74844047138969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ0JzU0LjQiTiA3M8KwNTknMTEuNiJX!5e0!3m2!1sen!2sus!4v1623862347218!5m2!1sen!2sus" 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen="" 
                        loading="lazy"
                        className="rounded-lg"
                        title="Salon Location Map"
                    ></iframe>
                </div>

                <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-8 max-w-2xl ml-auto">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
                    
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
                                rows={4}
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
        </div>
    )
}