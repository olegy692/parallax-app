import React from 'react';
import './footer.css'


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

      <div className='line1'>

          <div className='contacts'>
            <p>Contacts: +45 56231489</p>
          </div>

          <div className='terms'>
            <p>Terms & Conditions</p>
          </div>


        </div>

        <div className='line2'>

          <div className='privacy'>
            <p>Privacy Policy</p>
          </div>


          <div className='argo'>
            <p>&copy; Argo. All rights reserved.</p>
          </div>


        </div>


      </div>
    </footer>
  )
}

export default Footer;


