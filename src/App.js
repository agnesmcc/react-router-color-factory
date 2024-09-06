import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import {v4 as uuid} from 'uuid';
import ColorPicker from './ColorPicker';
import Color from './Color.js';

function App() {
  const initialState = [
    {"id": uuid(), "name": "red"},
    {"id": uuid(), "name": "green"},
    {"id": uuid(), "name": "blue"},
  ]
  const [colors, setColors] = useState(initialState);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ColorPicker colors={colors}/>} />
          <Route path="/color/:name" element={<Color/>} />
        </Routes>
      </BrowserRouter>      
    </div>
  );
}

export default App;
