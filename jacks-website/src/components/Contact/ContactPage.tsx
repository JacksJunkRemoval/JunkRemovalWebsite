import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faEnvelope,
  faPhone,
  faTag,
  faComments,
  faPaperPlane,
  faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import './ContactPage.css'

const ContactPage: React.FC = ({}) => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      await axios.post('https://jacks-website-backend.onrender.com/api/contact', formData);
      alert('Message sent successfully!');
      setFormData({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-white mx-auto min-h-[72vh] items-center flex justify-center py-12 px-4">
      <div className="w-[80%] min-w-[400px] max-w-[1000px]">
        <div className="text-center mb-8">
          <h1 className="text-6xl font-bold text-[#014421]">
            Contact Us Here!
          </h1>
          <h3 className="text-6xl font-bold text-[#014421]">-</h3>
          <h3 className="text-xl md:text-3xl mt-4 font-bold text-[#014421]">
            Just fill out the information below and we'll get back to you as soon
            as possible!
          </h3>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative">
              <input
                id="firstname"
                type="text"
                name="firstname"
                required
                value={formData.firstname}
                onChange={handleInputChange}
                className={`w-full input-field pl-10 py-2 ${
                  formData.firstname ? 'has-content' : ''
                }`}
              />
              <label htmlFor="firstname" className="text-[#014421]">
                <FontAwesomeIcon icon={faUser} className="fa-solid" /> First
                Name
              </label>
            </div>
            <div className="relative mt-4 md:mt-0">
              <input
                id="lastname"
                type="text"
                name="lastname"
                required
                value={formData.lastname}
                onChange={handleInputChange}
                className={`w-full input-field pl-10 py-2 ${
                  formData.lastname ? 'has-content' : ''
                }`}
              />
              <label htmlFor="lastname" className="text-[#014421]">
                <FontAwesomeIcon icon={faUser} className="fa-solid" /> Last Name
              </label>
            </div>
          </div>
          <div className="relative mt-12">
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`w-full email input-field pl-10 py-2 keep-raised ${
                formData.email ? 'has-content' : ''
              }`}
            />
            <label htmlFor="email" className="text-[#014421]">
              <FontAwesomeIcon icon={faEnvelope} className="fa-solid" /> Email
            </label>
          </div>
          <div className="relative mt-12">
            <input
              id="phone"
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleInputChange}
              className={`w-full phone input-field pl-10 py-2 keep-raised ${
                formData.phone ? 'has-content' : ''
              }`}
            />
            <label htmlFor="phone" className="text-[#014421] phone">
              <FontAwesomeIcon icon={faPhone} className="fa-solid" /> Phone
              Number
            </label>
          </div>
          <div className="relative mt-12">
            <input
              id="subject"
              type="text"
              name="subject"
              required
              value={formData.subject}
              onChange={handleInputChange}
              className={`w-full input-field pl-10 py-2 ${
                formData.subject ? 'has-content' : ''
              }`}

            />
            <label htmlFor="subject" className="text-[#014421]">
              <FontAwesomeIcon icon={faTag} className="fa-solid" /> Subject
            </label>
          </div>
          <div className="relative mt-12">
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              value={formData.message}
              onChange={handleInputChange}
              className={`w-full input-field pl-10 py-2 ${
                formData.message ? 'has-content' : ''
              }`}
            ></textarea>
            <label htmlFor="message" className="text-[#014421]">
              <FontAwesomeIcon icon={faComments} className="fa-solid" /> Message
            </label>
          </div>

          <div className="flex justify-center mt-12">
            <button
              type="submit"
              className="bg-[#014421] text-white font-bold py-4 px-8 rounded hover:bg-[#013421]"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  Sending...
                  <FontAwesomeIcon
                    icon={faSpinner}
                    className="fa-solid fa-spin ml-2"
                  />
                </>
              ) : (
                <>
                  Submit{' '}
                  <FontAwesomeIcon
                    icon={faPaperPlane}
                    className="fa-solid ml-2"
                  />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;