import React, { useState } from 'react';

export const useInput = (
  initialValue: string,
  validateValue: (a: string) => boolean
): {
  value: string;
  isValid: boolean;
  valueChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  hasError: boolean;
  inputBlurHandler: () => void;
  reset: () => void;
} => {
 
  //TODO: utilize useReducer for state management https://github.com/academind/react-complete-guide-code/blob/16-working-with-forms/code/12-finished/src/hooks/use-input.js
  const [enteredValue, setEnteredValue] = useState(initialValue);
  const [isTouched, setIsTouched] = useState(false);

  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  const valueIsValid = validateValue(enteredValue)
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredValue(event.target.value);
  };

  const reset = () => {
    setEnteredValue('');
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    valueChangeHandler,
    hasError,
    inputBlurHandler,
    reset,
  };
};
