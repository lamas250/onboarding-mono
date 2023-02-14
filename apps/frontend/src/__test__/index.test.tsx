import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { TagForm } from '../components/TagForm';

describe('TagForm', () => {
  describe('Unit tests', () => {
    it('has tag field present', () => {
      const { getByLabelText } = render(<TagForm />);
      const input = getByLabelText(/tag/i);
      expect(input).toBeInTheDocument();
      expect(input).toBeTruthy();
    });

    it('has value field present', () => {
      const { getByLabelText } = render(<TagForm />);
      const input = getByLabelText(/value/i);
      expect(input).toBeInTheDocument();
      expect(input).toBeTruthy();
    });

    it('has type field present', () => {
      const { getByLabelText } = render(<TagForm />);
      const input = getByLabelText(/type/i);
      expect(input).toBeInTheDocument();
      expect(input).toBeTruthy();
    });
  });
});

describe('TagForm', () => {
  test('render and submitting tag form', async () => {
    const fetchTags = jest.fn();
    // const handleSubmit = jest.fn();
    const { getByTestId, getByLabelText } = render(<TagForm fetchTags={fetchTags} />);

    const user = userEvent.setup();

    await user.type(getByLabelText(/tag/i), 'tag by test');
    await user.type(getByLabelText(/value/i), '10');
    await user.type(getByLabelText(/type/i), 'type by test');

    await user.click(getByTestId('button-submit'));

    // await waitFor(() => {
    // expect(handleSubmit).toHaveBeenCalledWith({
    //   tag: 'tag by test',
    //   value: '10',
    //   type: 'type by test',
    // });
    expect(fetchTags).toHaveBeenCalledTimes(1);
    // });
  });
});
