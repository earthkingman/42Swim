import { useState } from "react";

type validatorType = (value: string) => boolean;
const useInput = (
  initialValue: string,
  validator: validatorType = () => {
    true;
  }
) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;
    if (!validator(value)) setValue(value);
  };

  return { value, onChange };
};

export default useInput;
