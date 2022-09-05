import React, { useReducer } from 'react';

enum stateUpdateKind {
  UPDATE_VALUE = 'UPDATE_VALUE',
  SET_IS_TOUCHED = 'SET_IS_TOUCHED',
  RESET = 'RESET',
}

type updateAction =
  | { type: stateUpdateKind.UPDATE_VALUE; payload: string }
  | { type: stateUpdateKind.SET_IS_TOUCHED }
  | { type: stateUpdateKind.RESET };

interface inputState {
  enteredValue: string;
  isTouched: boolean;
}

function inputReducer(state: inputState, action: updateAction) {
  switch (action.type) {
    case stateUpdateKind.UPDATE_VALUE:
      return {
        ...state,
        enteredValue: action.payload,
      };
    case stateUpdateKind.SET_IS_TOUCHED:
      return {
        ...state,
        isTouched: true,
      };
    case stateUpdateKind.RESET:
      return {
        enteredValue: '',
        isTouched: false,
      };
    default:
      return state;
  }
}

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
  const [inputState, dispatch] = useReducer(inputReducer, {
    enteredValue: initialValue,
    isTouched: false,
  });

  const inputBlurHandler = () => {
    dispatch({ type: stateUpdateKind.SET_IS_TOUCHED });
  };

  const valueIsValid = validateValue(inputState.enteredValue);
  const hasError = !valueIsValid && inputState.isTouched;

  const valueChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: stateUpdateKind.UPDATE_VALUE,
      payload: event.target.value,
    });
  };

  const reset = () => {
    dispatch({ type: stateUpdateKind.RESET });
  };

  return {
    value: inputState.enteredValue,
    isValid: valueIsValid,
    valueChangeHandler,
    hasError,
    inputBlurHandler,
    reset,
  };
};
