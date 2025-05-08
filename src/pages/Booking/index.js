import React from 'react';
import ReserveForm from 'components/Forms/Reserve';
import ConfirmReservationForm from 'components/Forms/ConfirmReservation';
import './BookingPage.scss'

export default function BookingPage() {
  return (
    <div className="bookingPage">
      <ReserveForm />
      <ConfirmReservationForm />
    </div>
  )
}
