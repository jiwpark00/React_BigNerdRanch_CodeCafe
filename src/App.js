import axios from 'axios';
import { useEffect } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import { items } from './items';

function App() {
  useEffect(() => {
    axios.get('/api/items');
  }, []);

  return (
    <div>
      <Header />
      <Home items={items} />
    </div>
  );
}

export default App;
