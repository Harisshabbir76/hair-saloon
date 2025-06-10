'use client';

import { useRouter } from 'next/navigation';
import { Container } from 'react-bootstrap';

type ButtonVariant = 'primary' | 'success' | 'info';

interface DashboardButton {
  path: string;
  variant: ButtonVariant;
  text: string;
}

export default function DashboardPage() {
  const router = useRouter();
  
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