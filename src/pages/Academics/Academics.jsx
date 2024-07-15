import React from 'react';
import './Academics.css';
import { Link } from 'react-router-dom';
import StartCoursesImg from '../../utils/images/start-courses-img.jpg';
import Card from 'react-bootstrap/Card';

function Academics() {
  return (
    <div className='Academics-page'>
      <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'>Academics</h1>
            </div>
        </header>

      <div className='Academics-section py-5 bg-light'>
        <div className='container d-flex flex-column align-items-center'>
          <div className='scroll-container'>
            <div className='card-wrapper'>
              <Link to="/courses">
                <Card className='card'>
                  <img className='card-image' src={StartCoursesImg} alt='Course' />
                  <Card.Footer className='text-center'>
                    <p className='card-footer-text'>Syllabus</p>
                  </Card.Footer>
                </Card>
              </Link>
            </div>
            <div className='card-wrapper'>
              <Link to="/contact">
                <Card className='card'>
                  <img className='card-image' src={StartCoursesImg} alt='Contact' />
                  <Card.Footer className='text-center'>
                    <p className='card-footer-text'>Uniform</p>
                  </Card.Footer>
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* School Song Section */}
      <div className='py-5 bg-light'>
        <div className="song-container">
          <div className='row d-flex align-items-center justify-content-around'>
            <div className='col-lg-5'>
              <h2 className='text-capitalize'>School Song</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, placeat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quidem eveniet impedit, omnis repellat laborum assumenda quam iste, molestiae nemo dolores eum pariatur similique inventore minima rem, voluptatem atque totam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, placeat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quidem eveniet impedit,
              </p>
            </div>
            <div className='col-lg-5 mt-5 mt-lg-0'>
              <img src={StartCoursesImg} className='img-fluid' alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Academics;