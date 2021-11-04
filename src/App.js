import React from 'react';
import './App.css';
import Portfolio from './components/Portfolio';
import cards from './cards';

export default function App() {
  return <Portfolio cards={cards} />;
}
