import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'

const linkStyles = {
  display: 'flex', justifyContent: 'center', alignItems: 'center'
}

const SocialMedia = () => {
  return (
    <div className='app__social' >
        <a href="https://www.facebook.com/asadov.mehdi" target="_blank" style={linkStyles} ><div><FaFacebookF /></div></a>
        <a href="https://www.linkedin.com/in/mehdi-%C9%99s%C9%99dli-52143b194/" target="_blank" style={linkStyles} ><div><BsLinkedin /></div></a>
        <a href="https://github.com/mehdiasadli" target="_blank" style={linkStyles} ><div><BsGithub /></div></a>
    </div>
  )
}

export default SocialMedia