import React from 'react'
import "./Footer.css";
function Footer() {
  const currentyr=new Date().getFullYear();
  return (
    <footer className='footer-parent'>
        <p className='footer-one'>created ♥ by Balraj Singh</p>
        <p className='footer-two'> © {currentyr}</p>
    </footer>
  )
}

export default Footer