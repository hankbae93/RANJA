import { useState, useCallback, ChangeEvent } from 'react';

type onChangeType = (e: ChangeEvent<HTMLInputElement>) => void;

const useInput = (defaultValue: string) => {
  const [value, setValue] = useState<string>(defaultValue);

  const onChange = useCallback(
    (e) => {
      setValue(e.target.value);
    },
    [value],
  );

  return [value, onChange] as [string, onChangeType];
};

export default useInput;
