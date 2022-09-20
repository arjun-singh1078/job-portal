import { useState } from "react";

const useEmptyInput = () => {
  const [enteredValue, setEnteredValue] = useState("");

  const valueChangeHandler = (e) => {
    setEnteredValue(e.target.value);
  };

  const reset = () => {
    setEnteredValue("");
  };

  return {
    value: enteredValue,
    valueChangeHandler,
    reset,
  };
};

export default useEmptyInput;
