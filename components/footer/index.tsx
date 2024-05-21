import Logo from '../../assets/icons/logo';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__description">
            <h6><Logo /> <span>Shop</span> - karo</h6>
            <p>The future of e-commerce is sustainable,</p>
            <p>equitable and inclusive. As we continue</p>
            <p>to drive changes across key areas of our</p>
            <p>operations, our commitment is embedded in</p>
            <p>our vision to create a positive impact,</p>
            <p>for the planet and communities.</p>
            <ul className="site-footer__social-networks">
              <li><a href="https://www.facebook.com/pratik.sen.33633"><i className="icon-facebook"></i></a></li>
              <li><a href="http://twitter.com/akashsen1711?s=08"><i className="icon-twitter"></i></a></li>
              <li><a href="https://www.linkedin.com/in/pratik-sen-772013280/"><i className="icon-linkedin"></i></a></li>
              <li><a href="https://www.youtube.com/@pratiksen18"><i className="icon-youtube-play"></i></a></li>
            </ul>
          </div>

          <div className="site-footer__links">
            <ul>
              <li>Shopping online</li>
              <li><a href="#">Order Status</a></li>
              <li><a href="#">Shipping and Delivery</a></li>
              <li><a href="#">Returns</a></li>
              <li><a href="#">Payment options</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
            <ul>
              <li>Information</li>
              <li><a href="#">Gift Cards</a></li>
              <li><a href="#">Find a store</a></li>
              <li><a href="#">Newsletter</a></li>
              <li><a href="#">Bacome a member</a></li>
              <li><a href="#">Site feedback</a></li>
            </ul>
            <ul>
              <li>Contact</li>
              <li><a href="#">pratiksen2018@gmail.com</a></li>
              <li><a href="#">Mobile: 8695153695</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="site-footer__bottom">
        <div className="container">
          <p>DESIGNED BY PRATIK SEN © 2024.</p>
        </div>
      </div>
    </footer>
  )
};


export default Footer