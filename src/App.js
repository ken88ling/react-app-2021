import React from 'react';
import './App.css';
import Nav from './components/Nav';
import WhyMember from './components/WhyMember';
import Pack from './components/Pack';
import SignOut from './components/SignOut';
import Footer from './components/Footer';
import HeroPanel from './components/HeroPanel';

function App() {
  return (
    <>

      <div>
        <Nav />
      </div>
      <div>
        <HeroPanel />
      </div>
   
      <div>
        <WhyMember />
      </div>
      <div>
        <Pack />
      </div>
      <div>
        <SignOut />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
