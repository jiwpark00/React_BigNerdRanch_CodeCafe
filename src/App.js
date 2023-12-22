import axios from 'axios';
import { useEffect, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('/api/items')
      .then((result) => setItems(result.data))
      .catch(console.error);
  }, []);

  return (
    <Router>
      <Header />
      <Home items={items} />
    </Router>
  );
}

export default App;
