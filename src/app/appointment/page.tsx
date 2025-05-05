import { Suspense } from 'react';
import ClientAppointment from './ClientAppointment';

export default function AppointmentPage() {
  return (
    <Suspense fallback={<div className="text-white p-10">Loading appointment page...</div>}>
      <ClientAppointment />
    </Suspense>
  );
}
