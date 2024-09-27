import { useState } from 'react';
import Todo from './components/Todo';
import InlineStyledComponent from './components/InlineStyledComponent';
import Header from './components/Header';
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
     <Todo />

{/* JUST USED TO LEARN WAYS OF STYLING REACT APP: INLINE, CSS STYLESHEET, CSS MODULE */}
     {/* <InlineStyledComponent /> */}
    </div>
  )
}

export default App
