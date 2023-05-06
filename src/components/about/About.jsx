import Man from '../../assets/man.webp';
import './about.css';
const myStyle = {
    color: '#07bb5e',
  };
  
const About = () => {
    return (
        <div className="About" id="about">
            <div className="about-left">
                <img className="about-image" src={Man} alt='alt'></img>
            </div>
            <div className="about-right">
                <div className="about1">Get to know about us</div>
                <h1>Leading in E-waste disposal management system</h1>
                <div><h3> We are in the business since 2015 </h3><h3>and we provide the best</h3>
                     </div>
                <ul class="tick-list">
                    <li><i className="fa-solid fa-check fa-beat" style={myStyle}></i> Lorem ipsum dolor sit amet consectetur </li><br></br>
                    <li><i className="fa-solid fa-check fa-beat" style={myStyle}></i> Lorem ipsum dolor sit.</li><br></br>
                    <li><i className="fa-solid fa-check fa-beat" style={myStyle}></i> Lorem ipsum dolor sit amet.</li><br></br>
                </ul>
                <button className="more">Discover more</button>
            </div>


        </div>
    )
}
export default About;