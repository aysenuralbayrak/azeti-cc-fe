import React from 'react';
import './App.css';
import {ProfilePage} from './pages/ProfilePage';
import {Header} from './components/commons/Header';

const App = () => {
  return (
    <div>
      <Header/>
      <ProfilePage/>
    </div>
  );
};

export default App;
