import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  // name: yup.string().required('Name is required'),
  // email: yup.string().email('Email is invalid').required('Email is required'),
  date: yup.date().required('Date is required'),
  time: yup.string().required('Time is required'),
  guests: yup.number().positive().integer().required('Number of guests is required'),
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
      <h2 className="formTitle">Reserve a Table</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="date" {...register("date")} placeholder="Select Date" />
        <p className="error">{errors.date?.message}</p>

        <input type="time" {...register("time")} placeholder="Select Time" />
        <p className="error">{errors.time?.message}</p>

        <input type="number" {...register("guests")} placeholder="No of Guests" />
        <p className="error">{errors.guests?.message}</p>

        <button type="submit" className="btn btn-primary">Reserve</button>
      </form>


    </div>
  )
}
