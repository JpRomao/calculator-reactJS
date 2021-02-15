import React from 'react';

import Calculator from './components/Calculator';
import Header from './components/Header';

import './assets/global.css';

export default function App() {
  return (
    <div className="app">
      <Header/>
      <main className="content">
        <Calculator/>
      </main>
    </div>
  );
}