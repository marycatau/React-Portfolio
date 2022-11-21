import React from 'react';

export default function Project(props) {

  return (
    <div id={props.title} className="WorkProject">
      <h3>{props.title}</h3>
      <a href={props.link}>
        <img src={process.env.PUBLIC_URL+`/assets/images/${props.image}`} alt={`photos of ${props.title}`}/>
      </a>
      <a href={props.link2}>{`Github Repository of ${props.title}`}</a>
    </div>
  );
}
