import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import ConfirmReservation from './index';

const formTexts = {
  namePlaceholder: 'Enter Your First Name',
  emailPlaceholder: 'Enter Your Email',
  phonePlaceholder: 'Enter Your Phone Number',
};

describe('ConfirmReservation Component', () => {
  test('renders the form with all input fields and submit button', () => {
    render(<ConfirmReservation />);

    expect(screen.getByPlaceholderText(formTexts.namePlaceholder)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(formTexts.emailPlaceholder)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(formTexts.phonePlaceholder)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Booking Confirm/i })).toBeInTheDocument();
  });

  test('shows validation errors when inputs are empty and form is submitted', async () => {
    render(<ConfirmReservation />);

    fireEvent.click(screen.getByRole('button', { name: /Booking Confirm/i }));

    expect(await screen.findByText('Name is required')).toBeInTheDocument();
    expect(await screen.findByText('Email is required')).toBeInTheDocument();
    expect(await screen.findByText('Invalid format')).toBeInTheDocument();
  });

  test('shows validation error for invalid email format', async () => {
    render(<ConfirmReservation />);

    fireEvent.input(screen.getByPlaceholderText(formTexts.emailPlaceholder), {
      target: { value: 'invalid-email' },
    });
    fireEvent.click(screen.getByRole('button', { name: /Booking Confirm/i }));

    expect(await screen.findByText('Email is invalid')).toBeInTheDocument();
  });

  test('submits the form when all fields are valid', async () => {
    const testValues = {
      name: 'John',
      email: 'john@example.com',
      phone: '12345678',
    };
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

    render(<ConfirmReservation />);

    await act(async () => {
      fireEvent.input(screen.getByPlaceholderText(formTexts.namePlaceholder), {
        target: { value: testValues.name },
      });
      fireEvent.input(screen.getByPlaceholderText(formTexts.emailPlaceholder), {
        target: { value: testValues.email },
      });
      fireEvent.input(screen.getByPlaceholderText(formTexts.phonePlaceholder), {
        target: { value: testValues.phone },
      });

      fireEvent.click(screen.getByRole('button', { name: /Booking Confirm/i }));
    });

    expect(consoleSpy).toHaveBeenCalledWith(testValues);

    consoleSpy.mockRestore();
  });
});