import React from 'react';

export default function Contact() {
  return (
    <section id="Contact">
        Contact
    
    <label for="Name">Name</label><br/>
    <input type="text" class="form-control" id="Name" placeholder="Please input name"/><br/>
    
    <label for="exampleInputEmail1">Email address</label><br/>
    <input type="email"  id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/><br/>
    <label for="Message">message</label><br/>
    <input type="textl"  id="Message"  placeholder="Enter Message"/><br/>
    
  </section>
  );
}
