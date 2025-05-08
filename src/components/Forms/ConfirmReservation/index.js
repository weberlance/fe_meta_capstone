import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Email is invalid').required('Email is required'),
  phone: yup.string().matches(/\d{8}/, 'Invalid format').required('Phone is required'),
});

export default function ReserveForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })
  const onSubmit = (data) => console.log(data)

  return (
    <div>
      <h2 className="formTitle">Confirm Reservation</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="name" {...register("name")} placeholder="Enter Your First Name" />
        <p className="error">{errors.name?.message}</p>

        <input type="email" {...register("email")} placeholder="Enter Your Email" />
        <p className="error">{errors.email?.message}</p>

        <input type="tel" {...register("phone")} placeholder="Enter Your Phone Number" />
        <p className="error">{errors.phone?.message}</p>

        <button type="submit" className="btn btn-primary">Booking Confirm</button>
      </form>
    </div>
  )
}
