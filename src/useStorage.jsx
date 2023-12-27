import { useState, useEffect } from 'react';

const useStorage = (key, initialValue, storageType = 'local') => {
  const storage = storageType === 'local' ? localStorage : sessionStorage;

  const storedValue = storage.getItem(key);


  const [value, setValue] = useState(storedValue ? JSON.parse(storedValue) : initialValue);


  useEffect(() => {
    storage.setItem(key, JSON.stringify(value));
  }, [key, value, storage]);

  return [value, setValue];
};

export default useStorage;
