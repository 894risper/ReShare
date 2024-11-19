import React from 'react';
import { MdLocalPhone,MdOutlineMailOutline } from "react-icons/md";
const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1>Welcome to ReShare</h1>
      <p>
        We are a user-focused platform designed to help students share, manage, and discover educational resources efficiently. 
        Our mission is to empower students and educators by providing a seamless way to upload, access, and organize academic materials.
      </p>
      <h2>What We Offer</h2>
      <ul className='list-disc ml-5'>
        <li>
          <strong>Resource Management:</strong> Easily upload, edit, and manage your study resources.
        </li>
        <li>
          <strong>Privacy Control:</strong> Choose whether your files are public or private, ensuring you share content on your terms.
        </li>
        <li>
          <strong>Search & Filter Tools:</strong> Quickly find the resources you need with our intuitive search and category filters.
        </li>
        <li>
          <strong>Public Resource Library:</strong> Explore a growing collection of study materials shared by students worldwide.
        </li>
      </ul>
      <h1>Why choose us?</h1>
      <p>
      At ReShare, we believe that learning is better when knowledge is shared. We are committed to creating a user-friendly, secure, and accessible space for students to collaborate and succeed in their academic journeys.
      </p>
      <h1>
        Our vision
      </h1>
      <p>
      
      To build a community where students can share resources, gain knowledge, and contribute to one another’s success.
      </p>
    <h1>Contact Us</h1>
    <div>
        <ul>
            <li className='flex flex-row'>
              <MdLocalPhone/> phone:+254791894370
            </li>
            <li className="flex flex-row ">
            <MdOutlineMailOutline className="mr-2" />
            <a href="mailto:risperochieng8@gmail.com" >
              risperochieng8@gmail.com
            </a>
          </li>
        </ul>
    </div>
    </div>
  );
};

export default AboutUs;
