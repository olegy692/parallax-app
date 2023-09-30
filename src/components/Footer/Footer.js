import React from 'react';
import './footer.css'




function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className='line1'>

          <div className='contacts'>
            <p>Kontakter: +45 56231489 - change to real number</p>
          </div>

          <div className='Attribution'>
            <a
              href='#'
              style={{ textDecoration: 'underline', color: 'inherit' }}
              target='_blank'
              rel='noopener noreferrer'
            >
              Attribution
            </a>
          </div>


        </div>

        <div className='line2'>

          <div className='privacy'>
            <a
              href='https://www.termsfeed.com/live/afc66a02-1416-43cf-8530-e97c5ddd9947'
              style={{ textDecoration: 'underline', color: 'inherit' }}
              target='_blank'
              rel='noopener noreferrer'
            >
              Fortrolighedspolitik
            </a>
          </div>


          <div className='argo'>
            <p>&copy; Argo. Alle rettigheder forbeholdes.</p>
          </div>


        </div>


      </div>
    </footer>
  )
}

export default Footer;


