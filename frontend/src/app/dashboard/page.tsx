// app/dashboard/page.tsx
'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Spinner, Button } from 'react-bootstrap';

export default function DashboardPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        // Safely get token from localStorage
        const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
        
        if (!token) {
          router.push('/login');
          return;
        }

        // Verify token and get user data
        const response = await axios.get('https://hair-saloon-production.up.railway.app/auth/me', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        // Validate response structure
        if (!response.data?.user?.email) {
          throw new Error('Invalid user data received');
        }

        // Check if user is admin (case-insensitive)
        if (response.data.user.email.toLowerCase() === 'admin@gmail.com') {
          setIsAuthorized(true);
        } else {
          router.push('/');
        }
      } catch (error) {
        console.error('Authentication error:', error);
        // Clear invalid token
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
    return null; // Redirect will happen in useEffect
  }

  // Dashboard buttons data for cleaner rendering
  const dashboardButtons = [
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
            variant={button.variant as any}
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