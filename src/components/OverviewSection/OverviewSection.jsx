import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card'; 
import Blog1Img from '../../utils/images/blog1-img.jpg';
import Blog2Img from '../../utils/images/blog2-img.jpg';
import Blog3Img from '../../utils/images/blog3-img.jpg';
import './OverviewSection.css';

function OverviewSection () {
  return (
    <div className='blog-section text-light py-5'>
      <div className='container d-flex flex-column align-items-center'>
        <h2 className='text-center text-capitalize mb-5'>Latest on the blog</h2>
        <div className='scroll-container'>
          <div className='card-wrapper'>
            <Link to="/courses">
              <Card className='card'>
                <img className='card-image' src={Blog1Img} alt='Course' />
                <div className='overlay'>
                  <p className='card-text'>Courses</p>
                </div>
              </Card>
            </Link>
          </div>
          <div className='card-wrapper'>
            <Link to="/about">
              <Card className='card'>
                <img className='card-image' src={Blog2Img} alt='About' />
                <div className='overlay'>
                  <p className='card-text'>About</p>
                </div>
              </Card>
            </Link>
          </div>
          <div className='card-wrapper'>
            <Link to="/blog">
              <Card className='card'>
                <img className='card-image' src={Blog3Img} alt='Blog' />
                <div className='overlay'>
                  <p className='card-text'>Blog</p>
                </div>
              </Card>
            </Link>
          </div>
          <div className='card-wrapper'>
            <Link to="/contact">
              <Card className='card'>
                <img className='card-image' src={Blog3Img} alt='Contact' />
                <div className='overlay'>
                  <p className='card-text'>Contact Us</p>
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OverviewSection;
