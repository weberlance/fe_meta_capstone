import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  date: yup.date().required('Date is required'),
  time: yup.string().required('Time is required'),
  guests: yup.number().positive().integer().required('Number of guests is required'),
});

export default function ReserveForm() {
  const navigate = useNavigate();
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      time: '',
      guests: 0,
    },
    // resolver: yupResolver(schema),
  })

  const [timeOptions, setTimeOptions] = React.useState([]);
  const selectedDate = watch('date');

  const onSubmit = (data) => {
    console.log(data);
    if (window.submitAPI(data)) {
      navigate('/booking-confirmation');
    } else {
      alert('There is a server error. Please try again.');
    };
  };

  useEffect(() => {
    if (selectedDate) {
      // fetchAPI is stub function from outside
      setTimeOptions(window.fetchAPI(new Date(selectedDate)));
    }
  }, [selectedDate]);

  return (
    <div>
      <h2 className="formTitle">Reserve a Table</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input"
          type="date"
          {...register("date")}
          placeholder="Select Date"
        />
        <p className="error">{errors.date?.message && 'test1'}</p>

        <select
           className="input"
          {...register("time", {
            disabled: selectedDate === '',
          })}
        >
          <option value="" disabled>Select Time</option>
          {timeOptions.map(optionData => <option value={optionData} key={optionData}>{optionData}</option>)}
        </select>
        <p className="error">{errors.time?.message && 'test2'}</p>

        <input
          className="input"
          type="number"
          {...register("guests")}
          placeholder="No of Guests"
        />
        <p className="error">{errors.guests?.message && 'test3'}</p>
        {/* <p className="error">test</p> */}


          {isValid && <p>VALID</p>}

        <button type="submit" className="btn btn-primary">Reserve</button>
      </form>


    </div>
  )
}
