import React from 'react';
import { FaEnvelope, FaGithub } from 'react-icons/fa';

function Contact() {
  return (
    <>
      <h1 className="page-title">Contact</h1>
      <div className="section">
        <h3>📨 연락처 정보</h3>
        <div className="contact-list">
            <p><FaEnvelope /><a href="mailto:your-email@example.com">your-email@example.com</a></p>
            <p><FaGithub /><a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">github.com/your-username</a></p>
        </div>
      </div>
    </>
  );
}

export default Contact;