'use client'

import axios from 'axios'
import React, { useState } from 'react'
import { FiUser, FiMail, FiLock, FiEye, FiEyeOff } from 'react-icons/fi'
import { useRouter } from 'next/navigation'

export default function Signup() {
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [age, setage] = useState('')
    const [password, setpassword] = useState('')
    const [confirmpassword, setconfirmpassword] = useState('')
    const [error, seterror] = useState('')
    const [success, setsuccess] = useState('')
    const [loading, setloading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const router = useRouter()

    const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setloading(true)
        seterror('')
        setsuccess('')
        if(!name || !email || !age || !password || !confirmpassword){
            seterror('Please fill all the fields')
            setloading(false)
            return
        }
        if(password !== confirmpassword){
            seterror('Passwords do not match')
            setloading(false)
            return
        }
        if(password.length < 6){
            seterror('Password must be at least 6 characters long')
            setloading(false)
            return
        }
        if(!email.includes('@')){
            seterror('Please enter a valid email')
            setloading(false)
            return
        }
        try{
            const res = await axios.post('http://localhost:5000/signup',{
                name,
                email,
                age,
                password,
                confirmpassword
            })
            if(res.data.success){
                setsuccess('Signup successful')
                setloading(false)
                router.push('/login')
            }else{
                seterror(res.data.message)
                setloading(false)
            }
        }
        catch(err){
            seterror(err)
            setloading(false)
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
                                onChange={(e) => setname(e.target.value)}
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
                                onChange={(e) => setemail(e.target.value)}
                            />
                        </div>

                        <div className="relative">
                            <input
                                type="number"
                                placeholder="Age"
                                className="w-full pl-4 pr-4 py-3 bg-white/70 rounded-lg border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition"
                                value={age}
                                onChange={(e) => setage(e.target.value)}
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
                                onChange={(e) => setpassword(e.target.value)}
                            />
                            <button
                                type="button"
                                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                onClick={() => setShowPassword(!showPassword)}
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
                                value={confirmpassword}
                                onChange={(e) => setconfirmpassword(e.target.value)}
                            />
                            <button
                                type="button"
                                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
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
                            {loading ? 'Creating Account...' : 'Sign Up'}
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