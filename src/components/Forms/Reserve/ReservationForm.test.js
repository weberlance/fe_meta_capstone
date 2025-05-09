import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ReservationForm from './index';
// TODO
import { log, error } from 'console';

const formTexts = {
  datePlaceholder: 'Select Date',
  timePlaceholder: 'Select Time',
  guestsPlaceholder: 'No of Guests',
};

const mockedUseNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
 useNavigate: () => mockedUseNavigate,
}));

describe('Reservation Form Component', () => {

  // test('renders the form with all input fields and submit button', async () => {

  //   render(<ReservationForm />);

  //   expect(screen.getByPlaceholderText(formTexts.datePlaceholder)).toBeInTheDocument();
  //   expect(await screen.findByText(formTexts.timePlaceholder)).toBeInTheDocument();
  //   expect(screen.getByPlaceholderText(formTexts.guestsPlaceholder)).toBeInTheDocument();
  //   expect(screen.getByRole('button', { name: /Reserve/i })).toBeInTheDocument();
  // });

  // test('shows validation errors when inputs are empty and form is submitted', async () => {
  //   render(<ReservationForm />);

  //   fireEvent.click(screen.getByRole('button', { name: /Reserve/i }));

  //   expect(await screen.findByText(/Invalid Date/i)).toBeInTheDocument();
  //   expect(await screen.findByText('Time is required')).toBeInTheDocument();
  //   expect(await screen.findByText('guests must be a positive number')).toBeInTheDocument();
  // });











  test('submits the form when all fields are valid', async () => {

    // const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});


    const testValues = {
      date: new Date().toISOString().slice(0, 10),
      time: '18.05',
      guests: '5',
    };

    Object.defineProperty(window, 'fetchAPI', {
      value: () => {},
      writable: true,
    });
    const fetchAPISpy = jest.spyOn(window, 'fetchAPI').mockImplementation(() => [testValues.time]);

    Object.defineProperty(window, 'submitAPI', {
      value: () => {},
      writable: true,
    });
    const submitAPISpy = jest.spyOn(window, 'submitAPI').mockImplementation(() => true);

    const { container } = render(<ReservationForm />);

    await act(async () => {
      fireEvent.change(screen.getByPlaceholderText(formTexts.datePlaceholder), {
        target: { value: testValues.date },
      });
      fireEvent.input(screen.getByPlaceholderText(formTexts.guestsPlaceholder), {
        target: { value: testValues.guests },
      });
    });

    const f = async () => new Promise(res => setTimeout(res, 1000));
    await f();

    await act(async () => {
      fireEvent.change(await screen.findByText(formTexts.timePlaceholder), {
        target: { value: testValues.time },
      });

      // container.querySelector(`option[value=""]`).selected=false;
      // container.querySelector(`option[value="${testValues.time}"]`).selected=true;

      /*
      const selectEl = await screen.findByText(formTexts.timePlaceholder);
      const selector = `option[value="${testValues.time}"]`;
      // const optionToSelect = container.querySelector(selector);
      const optionToSelect = screen.getByText(testValues.time);
      // log(optionToSelect);
      userEvent.selectOptions(selectEl, [optionToSelect]);
      */
    });

    await act(async () => {
      fireEvent.click(screen.getByRole('button', { name: /Reserve/i }));
    });

    log(container.querySelector('input[name="date"]').value);
    log(container.querySelector('select[name="time"]').value);
    log(container.querySelector('input[name="guests"]').value);
    // log(container.querySelector(`option[value="${testValues.time}"]`));
    // log([...container.querySelectorAll('option')]);

    // console.log([container.querySelectorAll('.error')].filter(node => !!node.innerText).toString());

    // const errors = [...container.querySelectorAll('.error')].filter(node => !!node.innerText);
    // if (errors.length) {
    //   console.log(errors[0].innerText);
    // } else {
    //   console.log(200);
    // }
    // console.log('**********************');
    // console.log(errors
    //   .filter(node => !!node.innerText)
    //   .map(node => node.innerText)
    //   .join('***')
    // );
    // console.log('**********************2');

    // expect(await screen.findByText('VALID')).toBeInTheDocument();
    // const test = await screen.findByText('/test3/i');
    // console.log(test);
    // expect(test).toBeInTheDocument();

    expect(fetchAPISpy).toHaveBeenCalledWith(new Date(testValues.date));
    // expect(consoleSpy).toHaveBeenCalledWith(testValues);
    // expect(submitAPISpy).toHaveBeenCalledWith(testValues);



    // consoleSpy.mockRestore();
  });
});