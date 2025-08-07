import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const BASEURL = import.meta.env.BASE_URL;

    return (
      <>
        <header>
          <div className="logo">Grid Demo</div>
        </header>

        <section>
          {[...Array(9)].map((_, i) => (
            <div className="card" key={i}>
              <img src={`${BASEURL}${i + 1}.jpeg`} alt={`Image ${i + 1}`} />
              <label>{`Image ${String(i + 1).padStart(2, '0')}`}</label>
            </div>
          ))}
        </section>

        <footer>Copyright © 2025. All rights reserved.</footer>
      </>
    );
  }
}

export default App;
