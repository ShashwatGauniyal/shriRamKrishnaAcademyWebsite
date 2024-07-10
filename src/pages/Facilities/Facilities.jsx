import React from 'react';
import './Facilities.css';
import { Link } from 'react-router-dom';
import AboutUsSectionImg from '../../utils/images/about-us-section-img.jpg';


function Facilities() {
  return (
    <div className='Facilities-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'>Facilities</h1>
                <p className='text-center w-75 mb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error recusandae harum ullam repellat cum? Nisi unde, incidunt natus ut ratione dolore quasi at dolores molestias.</p>
            </div>
        </header>

        <div className='container my-5'>
            <div className="row">
                <div className='col-lg-6 d-flex flex-column justify-content-center mb-4 mb-lg-0'>
                    <h2 className='mb-4 mb-lg-5'>Study with us</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, sunt saepe fugit dolores error mollitia doloribus optio, recusandae aperiam, nihil eius rem eum eaque sequi. Earum perspiciatis laudantium at quo sapiente perferendis distinctio, voluptatum obcaecati ipsa, eos nesciunt saepe adipisci placeat ducimus! Dignissimos quaerat fugiat consequuntur tempora fuga eveniet nobis!</p>
                    <p className='mb-4 mb-lg-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et quas ipsa assumenda eos veritatis nemo fuga dolore saepe eius, laborum earum magni id quae quidem tempore tempora consequuntur eveniet voluptatibus, suscipit atque, voluptatem blanditiis deleniti perferendis dolores. Architecto corporis sit suscipit labore modi sint facilis alias laboriosam facere et? Quo eum neque dolores iure, nam voluptates nesciunt quisquam modi maxime alias! Blanditiis vel dicta voluptates ab vero quia incidunt facilis ratione deserunt, inventore atque necessitatibus?</p>
                </div>
                <div className='col-lg-6 d-flex justify-content-center'>
                    <img src={AboutUsSectionImg} className='img-fluid w-75' alt="" />
                </div>
            </div>
        </div>






        <div className='container my-5'>
        <div className='row'>
          <div className='col-lg-4 mb-4'>
            <div className='card'>
              <div className='card-body'>
                <h5 className='card-title'>Classrooms</h5>
                <p className='card-text'>Our classrooms are equipped with modern facilities to enhance learning.</p>
              </div>
            </div>
          </div>
          <div className='col-lg-4 mb-4'>
            <div className='card'>
              <div className='card-body'>
                <h5 className='card-title'>Labs</h5>
                <p className='card-text'>Our state-of-the-art labs provide the perfect environment for practical learning.</p>
              </div>
            </div>
          </div>
          <div className='col-lg-4 mb-4'>
            <div className='card'>
              <div className='card-body'>
                <h5 className='card-title'>Playgrounds</h5>
                <p className='card-text'>Our playgrounds are spacious and well-maintained for various sports and activities.</p>
              </div>
            </div>
          </div>
        </div>
      </div>







    </div>
  )
}

export default Facilities;