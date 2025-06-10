// app/dashboard/page.tsx
'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Spinner, Button } from 'react-bootstrap';

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
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
        
        if (!token) {
          router.push('/login');
          return;
        }

        const response = await axios.get('https://hair-saloon-production.up.railway.app/auth/me', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        if (!response.data?.user?.email) {
          throw new Error('Invalid user data received');
        }

        if (response.data.user.email.toLowerCase() === 'admin@gmail.com') {
          setIsAuthorized(true);
        } else {
          router.push('/');
        }
      } catch (error) {
        console.error('Authentication error:', error);
        if (typeof window !== 'undefined') {
          localStorage.removeItem('token');
        }
        router.push('/login');
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, [router]);

  if (isLoading) {
    return (
      <Container className="text-center py-5">
        <Spinner animation="border" variant="primary" />
        <p className="mt-3">Loading dashboard...</p>
      </Container>
    );
  }

  if (!isAuthorized) {
    return null;
  }

  const dashboardButtons: DashboardButton[] = [
    { path: '/dashboard/add-product', variant: 'primary', text: 'Add New Product' },
    { path: '/dashboard/order-management', variant: 'success', text: 'Order Management' },
    { path: '/dashboard/contactus', variant: 'info', text: 'Customer Messages' },
    { path: '/dashboard/catalog', variant: 'info', text: 'Products' },
    { path: '/dashboard/analytics', variant: 'info', text: 'Analytics' }
  ];

  return (
    <Container className="py-5">
      <h1 className="mb-4">Admin Dashboard</h1>
      <div className="d-flex flex-wrap gap-3">
        {dashboardButtons.map((button, index) => (
          <Button
            key={index}
            variant={button.variant}
            size="lg"
            onClick={() => router.push(button.path)}
            className="p-4"
          >
            {button.text}
          </Button>
        ))}
      </div>
    </Container>
  );
}