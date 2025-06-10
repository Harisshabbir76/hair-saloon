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
        const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
        
        if (!token) {
          throw new Error('No token found');
        }

        const response = await axios.get('https://hair-saloon-production.up.railway.app/auth/me', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        if (!response.data?.user?.email) {
          throw new Error('Invalid user data received');
        }

        if (response.data.user.email.toLowerCase() !== 'admin@gmail.com') {
          throw new Error('Unauthorized access');
        }

        setAuthStatus('authorized');
      } catch (error) {
        console.error('Authentication error:', error);
        if (typeof window !== 'undefined') {
          localStorage.removeItem('token');
        }
        setAuthStatus('unauthorized');
        
        // Immediately redirect without showing any content
        if (error instanceof Error && error.message === 'Unauthorized access') {
          router.replace('/404');
        } else {
          router.replace('/login');
        }
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
    return (
      <Container className="text-center py-5">
        <Spinner animation="border" variant="primary" />
        <p className="mt-3">Verifying access...</p>
      </Container>
    );
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