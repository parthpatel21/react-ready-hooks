import { useState } from 'react';

const useToggle = (
  defaultValue: boolean
): [boolean, (value?: boolean) => void] => {
  const [value, setValue] = useState(defaultValue);

  function toggleValue(value?: boolean) {
    setValue(currentValue =>
      typeof value === 'boolean' ? value : !currentValue
    );
  }

  return [value, toggleValue];
};

export default useToggle;
