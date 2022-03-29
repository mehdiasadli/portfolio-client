import { useState } from 'react'
import { images } from '../../constants'
import { AppWrap, MotionWrap } from '../../wrappers'
import { client } from '../../client'
import './Footer.scss'

const Footer = () => {
  const [ formData, setFormData ] = useState({ name: '', email: '', message: '' })
  const [ isFormSubmitted, setIsFormSubmitted ] = useState(false)
  const [ loading, setLoading ] = useState(false)

  const { name, email, message } = formData

  const handleChangeInput = e => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = () => {
    setLoading(true)

    const contact = {
      _type: 'contact',
      name, email, message 
    }

    client.create(contact)
      .then(() => {
        setLoading(false)
        setIsFormSubmitted(true)
      })

  }
  
  return (
    <>
      <h2 className="head-text">Contact with me</h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email-img" />
          <a href="mailto:asadlimehdi25@gmail.com" className="p-text" >asadlimehdi25@gmail.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile-img" />
          <a href="tell:+994557908445" className="p-text" >+994 (055)-790-84-45</a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex ">
        <div className="app__flex">
          <input name='name' type="text" className='p-text' placeholder="Your Name" value={name} onChange={handleChangeInput}/>
        </div>
        <div className="app__flex">
          <input name='email' type="text" className='p-text' placeholder="Your Email" value={email} onChange={handleChangeInput}/>
        </div>
        <div>
          <textarea
            className='p-text'
            placeholder='Your Message'
            name='message'
            value={message}
            onChange={handleChangeInput}
          />
        </div>
        <button type='button' className='p-text' onClick={handleSubmit} >{loading ? 'Sending' : 'Send Message' }</button>
      </div>
      ) : (
        <div>
          <h3 className='head-text' >Thank You For Getting In Touch</h3>
        </div>
      )}
    </>
  )
}

export default AppWrap(MotionWrap(Footer, 'app__footer'), 'contact', 'app__whitebg')