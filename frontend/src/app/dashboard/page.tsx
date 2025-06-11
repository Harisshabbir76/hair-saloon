// app/dashboard/page.tsx
'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Spinner } from 'react-bootstrap';

type ButtonVariant = 
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'light'
  | 'dark'
  | 'link';

interface DashboardButton {
  path: string;
  variant: ButtonVariant;
  text: string;
}

export default function DashboardPage() {
  const router = useRouter();
  const [authStatus, setAuthStatus] = useState<'checking' | 'authorized' | 'unauthorized'>('checking');

  useEffect(() => {
    const checkAuth = async () => {
      try {
        // Get token from localStorage
        const token = localStorage.getItem('token');
        
        if (!token) {
          setAuthStatus('unauthorized');
          router.replace('/not-found');
          return;
        }

        // Verify token and get user data
        const response = await axios.get('https://sublime-magic-production.up.railway.app/auth/me', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        // Check if user is admin (case-insensitive)
        if (response.data.user.email.toLowerCase() === 'admin@gmail.com') {
          setAuthStatus('authorized');
        } else {
          setAuthStatus('unauthorized');
          router.replace('/not-found');
        }
      } catch (error) {
        console.error('Authentication error:', error);
        localStorage.removeItem('token');
        setAuthStatus('unauthorized');
        router.replace('/not-found');
      }
    };

    checkAuth();
  }, [router]);

  const dashboardButtons: DashboardButton[] = [
    { path: '/dashboard/add-product', variant: 'primary', text: 'Add New Product' },
    { path: '/dashboard/order-management', variant: 'success', text: 'Order Management' },
    { path: '/dashboard/contactus', variant: 'info', text: 'Customer Messages' },
    { path: '/dashboard/catalog', variant: 'info', text: 'Products' },
    { path: '/dashboard/analytics', variant: 'info', text: 'Analytics' }
  ];

  if (authStatus === 'checking') {
    return null; // Don't show anything while checking
  }

  if (authStatus === 'unauthorized') {
    return null; // Redirect will happen in useEffect
  }

  return (
    <Container className="py-5">
      <h1 className="mb-4">Admin Dashboard</h1>
      <div className="d-flex flex-wrap gap-3">
        {dashboardButtons.map((button, index) => (
          <button
            key={index}
            className={`btn btn-${button.variant} btn-lg p-4`}
            onClick={() => router.push(button.path)}
          >
            {button.text}
          </button>
        ))}
      </div>
    </Container>
  );
}