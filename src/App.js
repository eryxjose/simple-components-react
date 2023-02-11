import { useState } from 'react';
import Dropdown from "./components/Dropdown";

function App() {
  const [selection, setSelection] = useState(null);

  const handleSelect = (option) => {
    setSelection(option);
  };

  const options = [
    { label: 'Vermelho', value: 'vermelho' },
    { label: 'Verde', value: 'verde' },
    { label: 'Azul', value: 'azul' },
  ]
  
  return <Dropdown options={options} value={selection} onChange={handleSelect} />
}

export default App;
