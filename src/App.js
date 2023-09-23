import './App.css';
import Header from './components/Header';
import Thumbnail from './components/Thumbnail';
import { items, itemImages } from './items';

function App() {
  return (
    <div>
      <Header />
      {items.map((item) => (
        <Thumbnail
        key={item.itemId}
        image={itemImages[item.imageId]}
        title={item.title}
        />
      ))}
    </div>
  );
}

export default App;
