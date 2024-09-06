import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import {v4 as uuid} from 'uuid';
import ColorPicker from './ColorPicker';
import Color from './Color.js';
import NewColorForm from './NewColorForm.js';

function App() {
  const initialState = [
    {"id": uuid(), "name": "red"},
    {"id": uuid(), "name": "green"},
    {"id": uuid(), "name": "blue"},
  ]
  const [colors, setColors] = useState(initialState);

  const addColor = (color) => {
    setColors([{id: uuid(), name: color}, ...colors])
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/colors" element={<ColorPicker colors={colors}/>} />
          <Route path="/colors/:name" element={<Color colors={colors}/>} />
          <Route path="/colors/new" element={<NewColorForm addColor={addColor}/>} />
          <Route path='*' element={<Navigate to="/colors" />} />
        </Routes>
      </BrowserRouter>      
    </div>
  );
}

export default App;
