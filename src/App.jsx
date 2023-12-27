import React from 'react';
import useStorage from './useStorage.jsx'; 

const App = () => {
  const [inputValue, setInputValue] = useStorage('yourKey', '', 'local');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
      <p>Value stored in local storage: {inputValue}</p>
    </div>
  );
};

export default App;
