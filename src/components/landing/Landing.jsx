import Logo from '../../assets/logo.png';
import Man from '../../assets/Man2.jpg';
import Waste1 from '../../assets/waste1.jpg';
import Waste2 from '../../assets/waste2.jpg';

import './landing.css';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const Landing = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        
    }
      
    return (
        <div className='landing'>
            <div className='landing-left'><img alt="alt" src={Logo}></img> </div>
            <div className='landing-right'>
                <Slider className='carousel' {...settings} >
                    
                    <div>
                        <img alt="alt" src={Man} />
                        <div className="carousel-button">Request a Pickup</div>
                    </div>
                    <div>
                        <img alt="alt" src={Waste1} />
                        <div className="carousel-button">Request a Pickup</div>
                    </div>
                    <div>
                        <img alt="alt" src={Waste2} />
                        <div className="carousel-button">Request a Pickup</div>
                    </div>
                </Slider>
            </div>
        </div>
    )
}
export default Landing;