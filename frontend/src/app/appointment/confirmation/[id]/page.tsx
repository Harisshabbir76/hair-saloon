"use client"
import { useRouter, useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function ConfirmationPage() {
    const router = useRouter();
    const { id } = useParams();
    const [appointment, setAppointment] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchAppointment = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/appointment/${id}`);
                if (response.data.success) {
                    setAppointment(response.data.appointment);
                } else {
                    setError(response.data.message || 'Failed to load appointment');
                }
            } catch (err) {
                setError('Failed to load appointment details');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        if (id) fetchAppointment();
    }, [id]);

    if (loading) return <div className="text-center py-8">Loading appointment details...</div>;
    if (error) return <div className="text-center py-8 text-red-500">{error}</div>;
    if (!appointment) return <div className="text-center py-8">No appointment found</div>;

    return (
        <div className="container mx-auto p-4 max-w-2xl">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-green-600 p-4 text-white">
                    <h1 className="text-2xl font-bold">Booking Confirmed!</h1>
                    <p className="opacity-90">Thank you for your appointment</p>
                </div>

                <div className="p-6">
                    <h2 className="text-xl font-semibold mb-4">Appointment Details</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <h3 className="font-medium text-gray-700 mb-2">Personal Information</h3>
                            <p><span className="font-semibold">Name:</span> {appointment.name}</p>
                            <p><span className="font-semibold">Age:</span> {appointment.age}</p>
                            <p><span className="font-semibold">Gender:</span> {appointment.gender}</p>
                            <p><span className="font-semibold">Phone:</span> {appointment.phone}</p>
                        </div>

                        <div>
                            <h3 className="font-medium text-gray-700 mb-2">Appointment Timing</h3>
                            <p><span className="font-semibold">Date:</span> {new Date(appointment.date).toLocaleDateString()}</p>
                            <p><span className="font-semibold">Time:</span> {appointment.startTime} - {appointment.endTime}</p>
                            <p>
                                <span className="font-semibold">Status:</span> 
                                <span className={`ml-2 px-2 py-1 rounded text-xs ${
                                    appointment.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                                    'bg-yellow-100 text-yellow-800'
                                }`}>
                                    {appointment.status}
                                </span>
                            </p>
                        </div>
                    </div>

                    <div className="mb-6">
                        <h3 className="font-medium text-gray-700 mb-2">Services</h3>
                        <ul className="list-disc pl-5 space-y-1">
                            {appointment.services.map((service, index) => (
                                <li key={index}>{service}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="border-t pt-4">
                        <h3 className="font-medium text-gray-700 mb-2">Payment Information</h3>
                        <p><span className="font-semibold">Method:</span> {appointment.payment}</p>
                        <p><span className="font-semibold">Status:</span> {appointment.payment === 'cash' ? 'To be paid at salon' : 'Paid'}</p>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-4 justify-between">
                        <button
                            onClick={() => window.print()}
                            className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50"
                        >
                            Print Confirmation
                        </button>
                        <button
                            onClick={() => router.push('/')}
                            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                        >
                            Back to Home
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}