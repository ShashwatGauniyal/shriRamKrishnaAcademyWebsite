import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import ChooseSection from '../../components/ChooseSection/ChooseSection';
import StartCoursesImg from '../../utils/images/start-courses-img.jpg';
import FaqAccordion from '../../components/FaqAccordion/FaqAccordion';
import { Card } from 'react-bootstrap';
import Blog1Img from '../../utils/images/blog1-img.jpg';
import Blog2Img from '../../utils/images/blog2-img.jpg';
import Blog3Img from '../../utils/images/blog3-img.jpg';

const blogs = [
    {
        id: 1,
        img: [Blog1Img],
        title: 'Blog 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, fugit? Doloremque deserunt ipsum eaque, dolor tempore, minima nisi debitis, et quas voluptatibus nam ex. Necessitatibus eligendi ratione expedita! Porro, ut.'
    },
    {
        id: 2,
        img: [Blog2Img],
        title: 'Blog 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, fugit? Doloremque deserunt ipsum eaque, dolor tempore, minima nisi debitis, et quas voluptatibus nam ex. Necessitatibus eligendi ratione expedita! Porro, ut.'
    },
    {
        id: 3,
        img: [Blog3Img],
        title: 'Blog 3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, fugit? Doloremque deserunt ipsum eaque, dolor tempore, minima nisi debitis, et quas voluptatibus nam ex. Necessitatibus eligendi ratione expedita! Porro, ut.'
    }
];

function Home() {
  return (
    <div className='home-page'>
        <header className='h-100 min-vh-100 d-flex align-items-center text-light'>
            <div className='container d-flex flex-column align-items-center'>
                <h2>Welcome To</h2>
                <h1 className='text-center fw-semibold'>Shri RamKrishna Academy</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, fugit? Doloremque deserunt ipsum eaque, dolor tempore, minima nisi debitis, et quas voluptatibus nam ex. Necessitatibus eligendi ratione expedita! Porro, ut.</p>
                <div className='d-flex flex-column flex-sm-row align-items-center'>
                    {/* Button change karne hai */}
                    <Link to="/courses">
                        <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Our Courses</button>
                    </Link>
                    <Link to="/contact">
                        <button type='button' className='btn btn-outline-light btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Contact Us</button>
                    </Link>
                </div>
            </div>
        </header>
        {/* ise change karna hai  */}
        <div className="py-5">
            <ChooseSection />
        </div>
        
        {/* idhar bhi change karna hai */}
        <div className='py-5 bg-light'>
            <div className="container">
                <div className='row d-flex align-items-center justify-content-around'>
                    <div className='col-lg-5'>
                        <h2 className='text-capitalize'>2024 start courses</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, placeat.</p>
                        <Link to="/courses">
                            <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Learn More</button>
                        </Link>
                    </div>
                    <div className='col-lg-5 mt-5 mt-lg-0'>
                        <img src={StartCoursesImg} className='img-fluid' alt="" />
                    </div>
                </div>
            </div>
        </div>
        
        {/* ye bhi */}
        <div className="py-5">
            <FaqAccordion />
        </div>

        {/* ye bhi */}
        <div className='blog-section text-light py-5'>
            <div className='container d-flex flex-column align-items-center'>
                <h2 className='text-center text-capitalize mb-5'>Latest on the blog</h2>
              


                <div className='row g-4'>
                    <div className='col-md-6 col-lg-4' id='card-component'>
                        <Link to="/courses">
                        <div className='card'>
                            <img className='card-image' src={Blog1Img} alt='Course' />
                            <div className='overlay'>
                            <p className='card-text'>Courses</p>
                            </div>
                        </div>
                        </Link>
                    </div>
                    <div className='col-md-6 col-lg-4' id='card-component'>
                        <Link to="/about">
                        <div className='card'>
                            <img className='card-image' src={Blog2Img} alt='About' />
                            <div className='overlay'>
                            <p className='card-text'>About</p>
                            </div>
                        </div>
                        </Link>
                    </div>

                    <div className='col-md-6 col-lg-4' id='card-component'>
                        <Link to="/blog">
                        <div className='card'>
                            <img className='card-image' src={Blog3Img} alt='About' />
                            <div className='overlay'>
                            <p className='card-text'>Blog</p>
                            </div>
                        </div>
                        </Link>
                    </div>
                    <div className='col-md-6 col-lg-4' id='card-component'>
                        <Link to="/contact">
                        <div className='card'>
                            <img className='card-image' src={Blog3Img} alt='About' />
                            <div className='overlay'>
                            <p className='card-text'>Contact US</p>
                            </div>
                        </div>
                        </Link>
                    </div>
    </div>

            </div>
        </div>
    </div>
  )
}

export default Home;