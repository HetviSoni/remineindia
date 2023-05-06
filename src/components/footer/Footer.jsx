import './footer.css';
const Footer =()=>{
    return (
        <footer>
          <div className="footer-container" id="contact">
            <div className="column">
              <h3>About</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod euismod enim, ac tristique lacus varius in. </p>
            </div>
            <div className="column">
              <h3>Links</h3>
              <ul>
                <li>About</li>
                <li>Request Pickup</li>
                <li>Management</li>
                <li>Start Service</li>
              </ul>
            </div>
            <div className="column">
              <h3>Services</h3>
              <ul>
                <li>Dumpster Rentals</li>
                <li>Waste Removal</li>
                <li>Zero Waste</li>
              </ul>
            </div>
              
            <div className="column">
              <h3>Contact</h3>
              <ul>
                <li>1234 Main St.</li>
                <li>info@company.com</li>
                <li>(123) 456-7890</li>
              </ul>
            </div>
          </div>
        </footer>
      );
}
export default Footer;