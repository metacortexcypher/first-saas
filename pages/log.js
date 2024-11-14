import React from 'react';
import NavBar from '../components/NavBar';

const LogPage = () => {
  return (
    <div>
      <NavBar />
      <h2>You may see some random shit happening on this website because I am learning and shipping things on the go. Please bare with me :-)</h2>
      <ul className="loglist">
        <br />
        <br />
        <li>Still figuring out how to make this shitty website mobile responsive</li>
        <br />
        <li>Last night I figured out how to setup vercel, github, vercel analytics, npm</li>
        <br />
        <li>I finally managed to make this page responsive (i think). Will ship more often now.</li>
      </ul>
    </div>
  );
};

export default LogPage;