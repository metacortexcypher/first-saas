import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import AlertBox from '../components/AlertBox';

const HomePage = () => {
  const [logItems, setLogItems] = useState([
    {
      id: 1,
      text: 'Still figuring out how to make this shitty website mobile responsive',
    },
    {
      id: 2,
      text: 'Last night I figured out how to setup vercel, github, vercel analytics, npm',
    },
    {
      id: 3,
      text: 'I finally managed to make this page responsive (i think). Will ship more often now.',
    },
  ]);

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
          <div className="cta-container">
            <a href="https://twitter.com/therealprineur" target="_blank" className="btn">
              Follow the Journey
            </a>
          </div>
          <AlertBox />
        </div>
        <section className="log-section">
          <h2 className="log-heading">Console.log(Progress)</h2>
          <div className="log-feed">
            {logItems.map((item) => (
              <div key={item.id} className="log-item">
                <div className="log-item-content">{item.text}</div>
                <div className="log-item-overlay">
                  <button className="log-item-btn">View Details</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <footer></footer>
    </div>
  );
};

export default HomePage;