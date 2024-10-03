import './Info.css'; 
import avatar from '../../assets/zach.jpg';

function Info() {
  return (
    <div className="info">
      <img src={avatar} alt="Zachary Polof" className="header-image" />
      <h1>Zachary Polof</h1>
      <h2>Frontend Developer</h2>
      <a href="https://ivionstersdesigns.netlify.app/" className="btn">Portfolio</a>
      <a href="https://www.linkedin.com/in/zacharypolof/" className="btn">LinkedIn</a>
    </div>
  );
}

export default Info;
