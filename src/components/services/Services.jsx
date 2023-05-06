import './services.css';
import Hotel from '../../assets/restaurant.jpg';
import Hospital from '../../assets/hospital.jpg';
import Store from '../../assets/stores.jpg';
import Truck from '../../assets/truck.webp';
import Recycle from '../../assets/recycle.png';

const Card = (props) => {
    return (
        <div className="card">
            <img  alt="alt" src={props.image}></img>
            <div className="card-info">
                <h3>{props.title}</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, dolorum!</p>

            </div>

        </div>
    )
}
const CountCard = (props) => {
    return (
        <div className="count-card">
            <div className='number'>
                <span>{props.num}</span>
                <img alt="alt"  src={Recycle}></img>
            </div>
            <div className="count-info">
                <h3>{props.title}</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, dolorum!</p>

            </div>

        </div>
    )
}
const Services = () => {
    return (
        <>
            <div className="service" id="services">
                <h1 className="service-heading">INDUSTRIES WE SERVE</h1>
                <div className='list'>
                    <Card image={Hospital} title="Hospital" />
                    <Card image={Hotel} title="Hotel" />
                    <Card image={Store} title="Store" />
                </div>
            </div>
            <div className="skills">
                <div className="skills-left">

                    <div className='about1'>
                        Our skills and expertise
                    </div>
                    <h1 className="skill-heading">
                        We are dedicated to serve you all our time
                    </h1>
                    <div>
                        <h3> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum corporis quasi a deleniti magnam laboriosam commodi eum dolorem autem ad </h3>
                    </div>
                    <div className="slider-container">
                        <div className='slider1'>
                            <div><span>Total E-waste recycling</span><span>90%</span></div>
                            <input type="range" min="0" max="100" value="90" className="slider waste">
                            </input>
                        </div>
                        <div>
                            <div><span>Li-Battries</span><span>46%</span></div>
                            <input type="range" min="0" max="100" value="46" className="slider battries">
                            </input>
                        </div>
                    </div>
                </div>
                <div className="skills-right">
                    <img className="skills-image" alt='truck' src={Truck}></img>
                </div>
            </div>
            <div className='count-container'>
                <CountCard num="260+" title="Industries Served" />
                <CountCard num="3600" title="Li battries picked up" />
                <CountCard num="890+" title="Happy Customers" />
            </div>
            <div className="pickup">
                <div className="question">
                    Have WASTE/PICKUP?
                </div>
                <div className='call'>
                    <i className="fa-sharp fa-solid fa-phone-volume fa-2xl" style={{"color": "#ecdd5e"}}></i>
                </div>
                <div>Lorem ipsum dolor sit am cons sid<br></br>
                +1- ( 246 ) 333 -0079
                </div>
            </div>

        </>
        // #3d473a

    )
}
export default Services;
//light #568c4d
//dark ##4a6a45