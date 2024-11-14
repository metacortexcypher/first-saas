import React from 'react';
import Link from 'next/link';

const NavBar = () => {
  return (
    <header className="nav-container">
      <nav className="nav">
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/log">👉Console.log(Progress)</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;