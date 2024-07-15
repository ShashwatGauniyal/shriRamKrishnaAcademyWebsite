import React from 'react';
import './Facilities.css';
import StartCoursesImg from '../../utils/images/start-courses-img.jpg';

function Facilities() {
    return (
        <div className='Facilities-page'>
            <header className='header-container'>
                <h1>Our Facilities</h1>
            </header>

            <div className='py-5 bg-light'>
                <div className="facility-container">
                    <div className='row d-flex align-items-center justify-content-around'>
                        <div className='col-lg-5'>
                            <h2 className='text-capitalize'>LAB</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, placeat.</p>
                        </div>
                        <div className='col-lg-5 mt-5 mt-lg-0'>
                            <img src={StartCoursesImg} className='img-fluid' alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className='py-5 bg-light'>
                <div className="facility-container">
                    <div className='row d-flex align-items-center justify-content-around'>
                        <div className='col-lg-5'>
                            <h2 className='text-capitalize'>Ground</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, placeat.</p>
                        </div>
                        <div className='col-lg-5 mt-5 mt-lg-0'>
                            <img src={StartCoursesImg} className='img-fluid' alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className='py-5 bg-light'>
                <div className="facility-container">
                    <div className='row d-flex align-items-center justify-content-around'>
                        <div className='col-lg-5'>
                            <h2 className='text-capitalize'>Class Rooms</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, placeat.</p>
                        </div>
                        <div className='col-lg-5 mt-5 mt-lg-0'>
                            <img src={StartCoursesImg} className='img-fluid' alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className='py-5 bg-light'>
                <div className="facility-container">
                    <div className='row d-flex align-items-center justify-content-around'>
                        <div className='col-lg-5'>
                            <h2 className='text-capitalize'>Infirmary</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, placeat.</p>
                        </div>
                        <div className='col-lg-5 mt-5 mt-lg-0'>
                            <img src={StartCoursesImg} className='img-fluid' alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className='py-5 bg-light'>
                <div className="facility-container">
                    <div className='row d-flex align-items-center justify-content-around'>
                        <div className='col-lg-5'>
                            <h2 className='text-capitalize'>Canteen</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, placeat.</p>
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

export default Facilities;
