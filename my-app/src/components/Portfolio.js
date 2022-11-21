import React from 'react';
import Project from './Project';

export default function Portfolio() {

  return (
    <section id="Work" className="Contentbox">
    <h2>Project</h2>
    <Project title="Horiseon-website" image="Horiseonwebsite.jpeg" link="https://marycatau.github.io/Horiseon-website/" link2="https://github.com/marycatau/Horiseon-website"/>
    <Project title="Group Project1 Movie Madness" image="MovieMadness.jpeg" link="https://nenebeji.github.io/Movie-Madness/" link2="https://github.com/nenebeji/Movie-Madness"/>
    <Project title="Group Project2 Digital Exercise Book" image="exercisepage.png" link="https://immense-mountain-30351.herokuapp.com/profile-upload-single" link2="https://github.com/mikehui1124/digital_excercise_book"/>
    <Project title="PWA " image="PWA.jpeg" link="https://limitless-plateau-34360.herokuapp.com/" link2="https://github.com/marycatau/PWA-Challenge"/>
    <Project title="Weather Dashboard" image="WeatherDashboard.jpeg" link="https://marycatau.github.io/Weather-Dashboard/" link2="https://github.com/marycatau/Weather-Dashboard"/>
    <Project title="Code Quiz" image="CodeQuiz.jpeg" link="https://marycatau.github.io/Code-Quiz/" link2="https://github.com/marycatau/Code-Quiz"/>
    </section>
  );
}
