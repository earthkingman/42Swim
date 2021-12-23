import { useState } from "react";

type validatorType = (value: string) => boolean;
const useInput = (
  initialValue: string,
  validator: validatorType = () => true
) => {
  const [value, setValue] = useState(initialValue);
  const [valid, setValid] = useState(true);
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;
    if (validator(value)) setValue(value);
    else setValid(false);
  };
  const onBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
    const eValue = event.target.innerText;
    if (validator(eValue)) setValue(eValue);
    else setValid(false);
  };
  return { value, onChange, onBlur, setValue, valid };
};

export default useInput;
