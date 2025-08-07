import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <>
        <header>
          <div className='logo'>Grid Demo</div>
        </header>
        <section>
          {[...Array(9)].map((_, i) => (
            <div className='card' key={i}>
              <img src={`/p5/${i + 1}.jpeg`} alt={`Image 0${i + 1}`} />
              <label>Image 0{i + 1}</label>
            </div>
          ))}
        </section>
        <footer>Copyright © 2025. All rights reserved.</footer>
      </>
    );
  }
}

export default App;
