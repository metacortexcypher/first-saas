import React from 'react';
import NavBar from '../components/NavBar';
import AlertBox from '../components/AlertBox';

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <main className="container">
        <div className="hero-section">
          <h1>Watch this shitty page become a SaaS in 90 days</h1>
          <p id="light">Just a humble start. Follow along as I build this from scratch.</p>
          <p id="new">
            By visiting daily, you'll see every stage of this transformation. I'll ship what I learn
            <span>*as I learn it*</span>, turning this sandbox into a real, <span id="colored">functional SaaS</span> to solve an actual problem.
            Suggestions, feedback, or even constructive criticism are all welcome along the way!
          </p>
          <a href="https://twitter.com/therealprineur" target="_blank" className="btn">
            Follow the Journey
          </a>
          <AlertBox />
        </div>
      </main>
      <footer></footer>
    </div>
  );
};

export default HomePage;