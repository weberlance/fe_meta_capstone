import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app root tag', () => {
  const { container } = render(<App />);
  const wrapper = container.querySelector('.app-wrapper')
  expect(wrapper).toBeInTheDocument();
});
