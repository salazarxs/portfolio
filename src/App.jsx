import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';

// iconst
import { FaCalendarDays } from 'react-icons/fa6';
import { BsTelephoneFill } from 'react-icons/bs';
import { TbBrandMailgun } from 'react-icons/tb';
import { BiSolidMap } from 'react-icons/bi';

// images
import profileIamge from './images/profile-image.jpg';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <div className='container-portfolio'>

        <div className="container-presentation">
          <div className="container-profile-img">
            <img src={profileIamge} alt="Martín Salazar´s image" />
          </div>
          <div className="container-info-principal">
            <div className="container-hello">
              <p>Hi everyone 👋</p>
              <h3>I´m Martin Salazar</h3>
              <p>I´m <strong style={{ color: 'var(--principal-color)' }}>web developer</strong></p>
            </div>
            <div className="contact-info-principal">
              <p><FaCalendarDays /> 10/01/2003</p>
              <a href='tel:+56961094078'><BsTelephoneFill /> +56 9 6109 4078</a>
              <a href="mailto:martin.salazardev@gmail.com"><TbBrandMailgun /> martin.salazardev@gmail.com</a>
              <a href="https://goo.gl/maps/CUbzAV73B1EuMqvu7"><BiSolidMap />Santiago, Chile</a>
            </div>
          </div>
        </div>
        <div className="container-description-text">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, harum odit voluptatum itaque consectetur eius molestias temporibus pariatur? Laboriosam sapiente quisquam accusamus consequatur quibusdam obcaecati unde quas, aut aliquam corporis!</p>
        </div>

        <div className="container-what-i-do">

        </div>
      </div>
    </>
  )
}

export default App
