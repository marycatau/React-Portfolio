import React from 'react';

export default function AboutMe() {
  return (
    <section id="AboutMe" className="Contentbox">
    <h2>About Me</h2>
    <div id="selfdescription">
      <p> My name is Catherine Au. I was borned in Hong Kong and moved to Manchester with my family since November 2011. Being a bachelor degree holder in Machatronic Engineering, once I worked as a Microprocessor Engineer who wrote coding to Microprocessor using C and Assembly programming language in Micom Tech Co. Ltd. in Hong Kong. For my family needs at that time, I resigned my position and worked as secretary and then as a stay-home mum for several years.  As my younger son has settled in reception Class this year, I am eager to persue my career as a Web developer again. </p>
    </div>
    <figure id="CatPhotos"> 
      <img src={process.env.PUBLIC_URL+`/assets/images/catherinephoto.jpg`} alt="Recent photo of catherine"/>
      <figcaption>My recent photos</figcaption>
    </figure>
  </section>
  );
}
