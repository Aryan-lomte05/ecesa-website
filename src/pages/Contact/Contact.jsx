import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({name:'', email:'', message:''});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Implement form submission logic here (e.g., email API)
    setSubmitted(true);
  };

  return (
    <div className="container" style={{ padding: '3rem 1rem', maxWidth:'600px' }}>
      <h1 className="section-title">Contact Us</h1>
      {submitted ? (
        <p>Thank you for reaching out! We will get back to you soon.</p>
      ) : (
        <form onSubmit={handleSubmit} style={{ display:'flex', flexDirection:'column', gap:'1rem' }}>
          <input 
            type="text" 
            placeholder="Name" 
            name="name"
            value={formData.name}
            onChange={handleChange}
            required 
            style={{padding:'0.75rem', borderRadius:'var(--border-radius)', border:'1px solid var(--gray-400)'}}
          />
          <input 
            type="email" 
            placeholder="Email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{padding:'0.75rem', borderRadius:'var(--border-radius)', border:'1px solid var(--gray-400)'}}
          />
          <textarea 
            placeholder="Message" 
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            required
            style={{padding:'0.75rem', borderRadius:'var(--border-radius)', border:'1px solid var(--gray-400)'}}
          />
          <button className="btn-primary" type="submit">Send Message</button>
        </form>
      )}
    </div>
  );
};

export default Contact;
