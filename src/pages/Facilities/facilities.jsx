import React from 'react';
import './facilities.css';

function Facilities() {
    const facilities = [
        {
            title: "Science Labs",
            description: "Our school is equipped with state-of-the-art science labs for Physics, Chemistry, and Biology.",
            image: "path_to_your_lab_image.jpg"
        },
        {
            title: "Library",
            description: "The library has a vast collection of books, journals, and digital resources for students and teachers.",
            image: "path_to_your_library_image.jpg"
        },
        {
            title: "Computer Labs",
            description: "Modern computer labs with the latest software and hardware for enhancing students' technological skills.",
            image: "path_to_your_computer_lab_image.jpg"
        },
        {
            title: "Sports Facilities",
            description: "We have extensive sports facilities, including a football field, basketball court, and swimming pool.",
            image: "path_to_your_sports_image.jpg"
        },
        {
            title: "Art Room",
            description: "A dedicated art room for students to explore their creativity through various art forms.",
            image: "path_to_your_art_image.jpg"
        }
    ];

    return (
        <div className='facilities-container'>
            <header className='header-container'>
                <h1>Our Facilities</h1>
            </header>
            <div className="facilities-content">
                <div className="facilities-grid">
                    {facilities.map((facility, index) => (
                        <div key={index} className="facility-card">
                            <img src={facility.image} alt={facility.title} />
                            <h3>{facility.title}</h3>
                            <p>{facility.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Facilities;
