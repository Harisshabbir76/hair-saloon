'use client'

import axios from 'axios'
import React, { useState } from 'react'
import { FiUser, FiMail, FiLock, FiEye, FiEyeOff } from 'react-icons/fi'
import { useRouter } from 'next/navigation'

interface AxiosError {
    response?: {
        data: {
            message?: string;
            error?: string;
        };
    };
    request?: unknown;
    message?: string;
}

interface SignupResponse {
    success: boolean;
    message?: string;
}

export default function Signup() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [age, setAge] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [loading, setLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const router = useRouter()

    const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)
        setError('')
        setSuccess('')
        
        if(!name || !email || !age || !password || !confirmPassword){
            setError('Please fill all the fields')
            setLoading(false)
            return
        }
        if(password !== confirmPassword){
            setError('Passwords do not match')
            setLoading(false)
            return
        }
        if(password.length < 6){
            setError('Password must be at least 6 characters long')
            setLoading(false)
            return
        }
        if(!email.includes('@')){
            setError('Please enter a valid email')
            setLoading(false)
            return
        }
        
        try {
            const res = await axios.post<SignupResponse>('https://hair-saloon-production.up.railway.app/signup', {
                name,
                email,
                age,
                password,
                confirmpassword: confirmPassword
            })
            
            if(res.data.success){
                setSuccess('Signup successful')
                setLoading(false)
                router.push('/login')
            } else {
                setError(res.data.message || 'Signup failed')
                setLoading(false)
            }
        } catch (err: unknown) {
            const error = err as AxiosError
            if (error.response) {
                setError(error.response.data.message || 
                        error.response.data.error || 
                        'Signup failed. Please try again.')
            } else if (error.request) {
                setError('No response from server. Please check your connection.')
            } else {
                setError('Request error: ' + (error.message || 'Unknown error'))
            }
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#ffb8d5] via-[#ffd6e7] to-[#ffe8f0] flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-white/30">
                <div className="p-8">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-gray-800 mb-2">Create Your Account</h1>
                        <p className="text-pink-600">Join our beauty community today</p>
                    </div>

                    {error && (
                        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-sm">
                            {error}
                        </div>
                    )}
                    {success && (
                        <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg text-sm">
                            {success}
                        </div>
                    )}

                    <form onSubmit={handleSignup} className="space-y-5">
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <FiUser className="h-5 w-5 text-pink-500" />
                            </div>
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="w-full pl-10 pr-4 py-3 bg-white/70 rounded-lg border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>

                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <FiMail className="h-5 w-5 text-pink-500" />
                            </div>
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full pl-10 pr-4 py-3 bg-white/70 rounded-lg border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="relative">
                            <input
                                type="number"
                                placeholder="Age"
                                className="w-full pl-4 pr-4 py-3 bg-white/70 rounded-lg border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition"
                                value={age}
                                onChange={(e) => setAge(e.target.value)}
                                min="1"
                            />
                        </div>

                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <FiLock className="h-5 w-5 text-pink-500" />
                            </div>
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                className="w-full pl-10 pr-10 py-3 bg-white/70 rounded-lg border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button
                                type="button"
                                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                onClick={() => setShowPassword(!showPassword)}
                                aria-label={showPassword ? "Hide password" : "Show password"}
                            >
                                {showPassword ? (
                                    <FiEyeOff className="h-5 w-5 text-pink-500" />
                                ) : (
                                    <FiEye className="h-5 w-5 text-pink-500" />
                                )}
                            </button>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <FiLock className="h-5 w-5 text-pink-500" />
                            </div>
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                placeholder="Confirm Password"
                                className="w-full pl-10 pr-10 py-3 bg-white/70 rounded-lg border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                            <button
                                type="button"
                                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                            >
                                {showConfirmPassword ? (
                                    <FiEyeOff className="h-5 w-5 text-pink-500" />
                                ) : (
                                    <FiEye className="h-5 w-5 text-pink-500" />
                                )}
                            </button>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full py-3 px-4 rounded-lg font-medium text-white transition ${loading ? 'bg-pink-400 cursor-not-allowed' : 'bg-pink-600 hover:bg-pink-700 shadow-md'}`}
                        >
                            {loading ? (
                                <span className="flex items-center justify-center">
                                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Creating Account...
                                </span>
                            ) : 'Sign Up'}
                        </button>
                    </form>

                    <div className="mt-6 text-center">
                        <p className="text-gray-600">
                            Already have an account?{' '}
                            <button
                                onClick={() => router.push('/login')}
                                className="text-pink-600 font-medium hover:underline focus:outline-none"
                            >
                                Log in
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}