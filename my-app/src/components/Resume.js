import React from 'react';

export default function Resume() {
  return (
    <section id="Resume" className="Contentbox">
    <h2>Resume </h2>
    <p><a href= {process.env.PUBLIC_URL+`/assets/CatherineResume.pdf`}>Download my resume</a></p>
    
    <p>My proficiencies</p>
    <ul>
        <li>Javascript</li>
        <li>CSS</li>
        <li>Html</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>Bootstrap</li>
        <li>React</li>
    </ul>
  </section>
  );
}