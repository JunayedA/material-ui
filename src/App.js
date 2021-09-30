import logo from './logo.svg';
import './App.css';
import { Button, Rating, Slider } from '@mui/material';

function App() {
  return (
    <div className="App">
      <Button variant="contained">Contained</Button>
      <Rating name="read-only" value={4} readOnly />
      <Slider
  size="small"
  defaultValue={70}
  aria-label="Small"
  valueLabelDisplay="auto"
/>
<Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
    </div>
  );
}

export default App;
