import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-left">
            <h4>Sosial Media</h4>
            <ul className="social-links">
              <li>
                <a href="https://www.instagram.com/irfanrsydm/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i> Instagram
                </a>
              </li>
              <li>
                <a href="https://www.tiktok.com/@irfnrasyidm" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-whatsapp"></i> TikTok
                </a>
              </li>
              <li>
                <a href="https://github.com/IrfanRasyid" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook"></i> Facebook
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-center">
            <h4>PT. Carenimal Hidup Abadi, Tbk.</h4>
          </div>
          <div className="footer-right">
            <h4>Kontak</h4>
            <p>Nomor Telepon: 087883604232</p>
            <p>Alamat: Komplek Migas III no 28</p>
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.506595011482!2d106.78403847592874!3d-6.196692760709097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f6e9bf140efb%3A0x22f08595a5a3f742!2sJl.%20Komp.%20Migas%20III%20No.8%2C%20RT.8%2FRW.1%2C%20Palmerah%2C%20Kec.%20Palmerah%2C%20Kota%20Jakarta%20Barat%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2011480!5e0!3m2!1sid!2sid!4v1693985541519!5m2!1sid!2sid"
              width="250"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
