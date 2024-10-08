import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('YOUR_BACKEND_ENDPOINT', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' }); // Clear form
    } else {
      alert('Error sending message. Please try again.');
    }
  };

  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <p>You can reach me through this section.</p>
      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="NAME"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="EMAIL"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <textarea
              className="form-control"
              name="message"
              placeholder="MESSAGE"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" id="submit" className="btn btn-lg">
            SEND MESSAGE
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
