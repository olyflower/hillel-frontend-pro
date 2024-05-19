import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


function Header() {
  return (
      <header className='header'>
        {/* <img src="logo.svg" alt="logo" className="logo" /> */}
        <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
      </header>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App> <Header />
      </App>
  </React.StrictMode>
);


