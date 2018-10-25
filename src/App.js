import React, { Component } from 'react'
import Particles from 'react-particles-js'

import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Particles
          params={{
            particles: {
              line_linked: {
                shadow: {
                  enable: true,
                  color: '#3CA9D1',
                  blur: 10
                }
              }
            }
          }}
          style={{
            width: '100%'
          }}
        />
        <header className="App-header">
          <p>
            <code>nth degree consulting</code>
          </p>
          <p>Small and medium size digital consulting</p>
          <a
            className="App-link"
            href="mailto:higginni@tcd.ie"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact Us
          </a>
        </header>
      </div>
    )
  }
}

export default App
