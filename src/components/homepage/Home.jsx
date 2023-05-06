import Navbar from '../navbar/Navbar';
import Services from '../services/Services';
import About from '../about/About';
import Footer from '../footer/Footer';
import Landing from '../landing/Landing';
import './home.css';

const Homepage = () => {

  return (
    <div className="homepage">
      <Navbar />
      <Landing />
      <About />
      <Services />
      <Footer />
    </div>
  );
};

export default Homepage;
