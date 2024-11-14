import React from 'react';
import Link from 'next/link';

const NavBar = () => {
  return (
    <header className="nav-container">
      <nav className="nav">
        <ul>
          <li><Link href="/">Home</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;