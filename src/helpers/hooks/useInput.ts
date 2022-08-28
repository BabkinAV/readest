import React, { useState } from 'react';

export const useInput = (
  initialValue: string
): {value: string, valueChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void} => {
  const [value, setEnteredValue] = useState(initialValue);

  const valueChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredValue(event.target.value);
  }

  return {value, valueChangeHandler};
};
