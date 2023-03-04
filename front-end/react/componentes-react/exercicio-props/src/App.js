import './App.css';
import Image from './Image';
import React from 'react';
import  ImgCat from './staringCat.jpg'


function App() {
  return (
 <main>
<Image src={ImgCat} alternativeText="Cute cat staring" />
 </main>
);
}

export default App;
