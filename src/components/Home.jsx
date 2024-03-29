import React from 'react';
import { useState } from 'react';
import axios from 'axios';
// iconst
import { FaCalendarDays, FaReact } from 'react-icons/fa6';
import { BsTelephoneFill, BsWordpress } from 'react-icons/bs';
import { TbBrandMailgun } from 'react-icons/tb';
import { BiSolidMap } from 'react-icons/bi';
import { TbDevicesCode } from 'react-icons/tb';
import { CgShapeZigzag } from 'react-icons/cg';


import Card from './Card.jsx';

// images
import profileIamge from '../images/profile-image.jpg';
import imgCalculator from '../images/calculator.avif';
import imgSexta from '../images/BannerSextaCompania2.webp';
import weatherapp from '../images/weatherAppSS.png';
import codeOne from '../images/codeOne.webp';
import { CircularProgress } from '@mui/material';

const Home = () => {

    const [receiver, setReciver] = useState();
    const [affair, setAffair] = useState();
    const [message, setMessage] = useState();
    const [Name, setName] = useState();
    const [loading, setLoading] = useState(false);

    //
    const experienceList = [
        {
            title: 'Weather app',
            image: weatherapp,
            category: 'ReactJS',
            route: 'https://weatherappwhitreact.netlify.app/'
        },
        {
            title: 'Page for firefighters',
            image: imgSexta,
            category: 'Wordpress',
            route: 'https://sextacompañia.cl'
        },
        {
            title: 'My company website',
            image: codeOne,
            category: 'Wordpress',
            route: 'https://codeone.cl'
        }
    ]


    const handleSubmitMail = async (e) => {
        e.preventDefault();
        setLoading(true);
        const data = {
            receiver,
            affair,
            message: `Nombre: ${Name}\n mensaje: ${message}`

        }

        try {
            await axios.post(import.meta.env.VITE_URI_SERVER, data, {
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then((response) => {
                    if (response.ok) {
                        setLoading(false)
                        alert('Send message successful 📑');
                        return response.json();
                    } else {
                        setLoading(false)
                        console.log(response);
                        setLoading(false)
                    }
                })
                .catch(err => {
                    console.log(`Error catch axios -> ${err}`);

                    alert('Error to send message, please try again later');
                    setLoading(false)
                })
        } catch (err) {
            console.log(err);

            alert('Error to send message, please try again later');
            setLoading(false)
        }
    }
    return (


        <div className='container-portfolio'>

            <div className="container-presentation" id='targetHome'>
                <div className="container-profile-img">
                    <img src={profileIamge} alt="Martín Salazar´s image" />
                </div>
                <div className="container-info-principal">
                    <div className="container-hello">
                        <p>Hi everyone 👋</p>
                        <h3>I´m Martin Salazar</h3>
                        <h1>I´m <strong style={{ color: 'var(--principal-color)' }}>web developer.</strong></h1>
                    </div>
                    <div className="contact-info-principal">

                        <a href='tel:+56961094078' target='_blank'><strong style={{ color: 'var(--principal-color)', marginRight: '.8vw' }}><BsTelephoneFill /></strong> +56 9 6109 4078</a>

                        <a href="mailto:msalazar@codeone.cl" target='_blank'><strong style={{ color: 'var(--principal-color)', marginRight: '.8vw' }}><TbBrandMailgun /></strong> msalazar@codeone.cl</a>
                        <a style={{ justifyContent: 'flex-end' }} href="https://goo.gl/maps/CUbzAV73B1EuMqvu7" target='_blank'><strong style={{ color: 'var(--principal-color)', marginRight: '.8vw' }}><BiSolidMap /></strong>Santiago, Chile</a>
                        <p  > <strong style={{ color: 'var(--principal-color)', marginRight: '.8vw', }}><FaCalendarDays /></strong> 10/01/2003</p>


                    </div>
                </div>
            </div>
            <div className="container-description-text">
                <p>I am a passionate web developer specializing in building dynamic web applications with React, as well as designing and developing custom websites using WordPress and Elementor. My focus is on delivering engaging and functional online experiences that exceed my clients' expectations. With an unwavering commitment to quality and innovation, I'm ready to take your ideas into the digital world and make them a reality.</p>
            </div>

            <div className="container-what-i-do" id='targetWhat'>
                <div className="title">
                    <p>What i do</p>
                </div>
                <ul>
                    <li>
                        <a href="https://es.react.dev/">
                            <strong style={{ color: 'var(--principal-color)', paddingRight: '1vw' }}>
                                <TbDevicesCode />
                            </strong>Web sites
                        </a>
                    </li>
                    <li>
                        <a href="https://wordpress.com/">
                            <strong style={{ color: 'var(--principal-color)', paddingRight: '1vw' }}>
                                <BsWordpress />
                            </strong>WordPress sites
                        </a>
                    </li>
                    <li><strong style={{ color: 'var(--principal-color)', paddingRight: '1vw' }}><FaReact /></strong>Internet applications</li>
                </ul>
            </div>
            <div className="container-seccion-portfolio" id='portfolio' >
                <div className="title">
                    <p>Portfolio</p>
                </div>
                <div className="show-cards" >

                    {
                        experienceList.length != 0 ?
                            experienceList.map((exp, i) => (
                                <Card
                                    key={i}
                                    category={exp.category}
                                    image={exp.image}
                                    route={exp.route}
                                    title={exp.title}
                                />
                            ))
                            : 'Loading data...'
                    }
                </div>
            </div>
            <div className="container-get-in-touch" id='targetContact'>
                <div className="title">
                    <p>Get in touch</p>
                </div>
                <form onSubmit={(e) => handleSubmitMail(e)} className='form-get-in-touch'>
                    <input type="text" placeholder='Name' onChange={(e) => {
                        setName(e.target.value)
                    }} />
                    <input type="mail" placeholder='Email' onChange={(e) => {
                        setReciver(e.target.value)
                    }} />
                    <input type="text" placeholder='Subject' onChange={(e) => {
                        setAffair(e.target.value)
                    }} />
                    <textarea name="message" id="message" cols="30" rows="10" placeholder='Tell me about your project' onChange={(e) => {
                        setMessage(e.target.value)
                    }} ></textarea>
                    <button type="submit" className='btn-form'>{loading ? <CircularProgress id="loading-form" /> : 'Send'}</button>
                </form>
            </div>
        </div>
    );
}

export default Home;