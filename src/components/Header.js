import React from 'react';
import Nav from './Nav';

export default function Header() {
  //const linkStyle = { border: '1px black', padding: '5px' };

  return (
    <header>
      <h1 className="MyName">
        Catherine Au
      </h1>
      <Nav/>
    </header>
  );
}
