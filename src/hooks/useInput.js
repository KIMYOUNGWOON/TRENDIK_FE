import { useState } from 'react';

function useInput(initialValue) {
  const [inputValue, setInputValue] = useState(initialValue);

  const onChange = (e) => {
    const { name, value, checked } = e.target;

    if (name === 'requiredAgree') {
      setInputValue({ ...inputValue, [name]: checked });
    } else {
      setInputValue({ ...inputValue, [name]: value });
    }
  };

  return [inputValue, onChange];
}

export default useInput;
