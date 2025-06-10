"use client";

import { useRouter } from 'next/navigation';
import { useState, useEffect, ChangeEvent } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface FormData {
    name: string;
    age: string;
    gender: string;
    services: string[];
    date: string;
    startTime: string;
    endTime: string;
    phone: string;
    payment: string;
}

interface Errors {
    [key: string]: string;
}

export default function AppointmentPage() {
    const router = useRouter();

    const [formData, setFormData] = useState<FormData>({
        name: '',
        age: '',
        gender: '',
        services: [],
        date: '',
        startTime: '',
        endTime: '',
        phone: '',
        payment: 'cash'
    });

    const [availableServices, setAvailableServices] = useState<string[]>([]);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState<Errors>({});
    const [isSuccess, setIsSuccess] = useState(false);

    useEffect(() => {
        if (formData.gender === 'female') {
            setAvailableServices([
                "Haircut & Styling", "Hair Coloring", "Balayage & Highlights",
                "Keratin Treatment", "Hair Spa", "Bridal Makeup",
                "Facial Treatments", "Waxing & Threading", "Manicure & Pedicure"
            ]);
        } else if (formData.gender === 'male') {
            setAvailableServices([
                "Men's Haircut", "Beard Trim & Styling", "Hair Coloring",
                "Hair Spa", "Scalp Treatment", "Shaving Services",
                "Facial for Men", "Waxing", "Manicure & Pedicure"
            ]);
        } else {
            setAvailableServices([]);
        }

        setFormData(prev => ({ ...prev, services: [] }));
    }, [formData.gender]);

    const validateForm = () => {
        const newErrors: Errors = {};

        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.age || parseInt(formData.age) < 1) newErrors.age = 'Valid age is required';
        if (!formData.gender) newErrors.gender = 'Gender is required';
        if (!formData.phone || !/^\d{10}$/.test(formData.phone)) newErrors.phone = 'Valid 10-digit phone number is required';
        if (!formData.date) newErrors.date = 'Date is required';
        if (!formData.startTime) newErrors.startTime = 'Start time is required';
        if (!formData.endTime) newErrors.endTime = 'End time is required';
        if (formData.services.length === 0) newErrors.services = 'At least one service is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleServiceToggle = (service: string) => {
        setFormData(prev => ({
            ...prev,
            services: prev.services.includes(service)
                ? prev.services.filter(s => s !== service)
                : [...prev.services, service]
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsSubmitting(true);

        try {
            const response = await axios.post('hair-saloon-production.up.railway.app/appointment', {
                ...formData,
                age: Number(formData.age)
            }, {
                timeout: 5000
            });

            if (response.data.success) {
                setIsSuccess(true);
                toast.success('Appointment booked successfully!', {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: true,
                });

                router.push(`/appointment/confirmation/${response.data.appointment._id}`);

                setTimeout(() => {
                    if (!document.hidden) {
                        router.push(`/appointment/confirmation/${response.data.appointment._id}`);
                    }
                }, 1500);
            }
        } catch (error: unknown) {
  if (axios.isAxiosError(error)) {
    toast.error(error.response?.data?.message || 'Booking failed. Please try again.', {
      autoClose: 3000
    });
  } else {
    toast.error('Booking failed. Please try again.', {
      autoClose: 3000
    });
  }
}
    };

    return (
        <div className="container mx-auto p-4 max-w-2xl">
            <ToastContainer />
            {isSuccess && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg text-center animate-fade-in">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                        </div>
                        <h3 className="text-lg font-medium text-gray-900 mb-2">Appointment Confirmed!</h3>
                        <p className="text-gray-600">Redirecting to confirmation page...</p>
                    </div>
                </div>
            )}

            <h1 className="text-2xl font-bold mb-6">Book Appointment</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Personal Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block mb-1 font-medium">Full Name*</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={`w-full p-2 border rounded ${errors.name ? 'border-red-500' : ''}`}
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                    </div>

                    <div>
                        <label className="block mb-1 font-medium">Age*</label>
                        <input
                            type="number"
                            name="age"
                            value={formData.age}
                            onChange={handleChange}
                            min="1"
                            className={`w-full p-2 border rounded ${errors.age ? 'border-red-500' : ''}`}
                        />
                        {errors.age && <p className="text-red-500 text-sm mt-1">{errors.age}</p>}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block mb-1 font-medium">Gender*</label>
                        <select
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                            className={`w-full p-2 border rounded ${errors.gender ? 'border-red-500' : ''}`}
                        >
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                        {errors.gender && <p className="text-red-500 text-sm mt-1">{errors.gender}</p>}
                    </div>

                    <div>
                        <label className="block mb-1 font-medium">Phone Number*</label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            pattern="[0-9]{10}"
                            className={`w-full p-2 border rounded ${errors.phone ? 'border-red-500' : ''}`}
                        />
                        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                    </div>
                </div>

                {/* Services */}
                <div>
                    <label className="block mb-1 font-medium">Services*</label>
                    {errors.services && <p className="text-red-500 text-sm mb-2">{errors.services}</p>}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {availableServices.map(service => (
                            <label key={service} className="flex items-center space-x-2 p-2 hover:bg-gray-50 rounded">
                                <input
                                    type="checkbox"
                                    checked={formData.services.includes(service)}
                                    onChange={() => handleServiceToggle(service)}
                                    className="rounded h-4 w-4"
                                />
                                <span>{service}</span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Date & Time */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                        <label className="block mb-1 font-medium">Date*</label>
                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            min={new Date().toISOString().split('T')[0]}
                            className={`w-full p-2 border rounded ${errors.date ? 'border-red-500' : ''}`}
                        />
                        {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date}</p>}
                    </div>

                    <div>
                        <label className="block mb-1 font-medium">Start Time*</label>
                        <input
                            type="time"
                            name="startTime"
                            value={formData.startTime}
                            onChange={handleChange}
                            className={`w-full p-2 border rounded ${errors.startTime ? 'border-red-500' : ''}`}
                        />
                        {errors.startTime && <p className="text-red-500 text-sm mt-1">{errors.startTime}</p>}
                    </div>

                    <div>
                        <label className="block mb-1 font-medium">End Time*</label>
                        <input
                            type="time"
                            name="endTime"
                            value={formData.endTime}
                            onChange={handleChange}
                            className={`w-full p-2 border rounded ${errors.endTime ? 'border-red-500' : ''}`}
                        />
                        {errors.endTime && <p className="text-red-500 text-sm mt-1">{errors.endTime}</p>}
                    </div>
                </div>

                {/* Payment */}
                <div>
                    <label className="block mb-1 font-medium">Payment Method*</label>
                    <select
                        name="payment"
                        value={formData.payment}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                    >
                        <option value="cash">Cash</option>
                    </select>
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 mt-6"
                >
                    {isSubmitting ? (
                        <span className="flex items-center justify-center">
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                            </svg>
                            Processing...
                        </span>
                    ) : (
                        'Confirm Appointment'
                    )}
                </button>
            </form>
        </div>
    );
}
