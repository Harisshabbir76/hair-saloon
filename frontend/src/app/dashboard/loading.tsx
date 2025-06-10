// app/dashboard/loading.tsx
import { Container, Spinner } from 'react-bootstrap';

export default function Loading() {
  return (
    <Container className="text-center py-5">
      <Spinner animation="border" variant="primary" />
      <p className="mt-3">Verifying access...</p>
    </Container>
  );
}