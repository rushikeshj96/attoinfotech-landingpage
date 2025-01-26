import React, { useState } from 'react'
import '../Slider/slider.css';
import img1 from '../../assets/img/webDevelopment.jpg';
import img2 from '../../assets/img/dashboardProject.jpg';
import img3 from '../../assets/img/appsProject.jpg';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { data } from 'react-router-dom';






function Slider() {




    const cards = [
        {
            id: 1,
            img: img1,
            subTitle: 'Website, Landing',
            cardheading: 'Website Project'
        },
        {
            id: 2,
            img: img2,
            subTitle: 'Dashboard, UI/UX Design',
            cardheading: 'Dashboard Project'
        },
        {
            id: 3,
            img: img3,
            subTitle: 'Apps, Mobile, iOs',
            cardheading: 'Apps Project'
        },
        {
            id: 4,
            img: img2,
            subTitle: 'Illustration, Instagram',
            cardheading: 'Illustration Project'
        },
        {
          id: 5,
          img: img2,
          subTitle: 'Dashboard, UI/UX Design',
          cardheading: 'Dashboard Project'
      },
      {
        id: 6,
        img: img1,
        subTitle: 'Website, Landing',
        cardheading: 'Website Project'
    },
    ];

    
      const [startIndex, setStartIndex] = useState(0);
      const visibleCards = 4;
    
      const handleNext = () => {
        setStartIndex((prev) => (prev + 1) % data.length);

      };
    
      const handlePrev = () => {
        setStartIndex((prev) =>
          prev === 0 ? data.length - 1 : prev - 1
        );
      };
  return (
    <div className="card-slider-container">
      <div className="card-slider">
        {cards.slice(startIndex, startIndex + visibleCards).map((card) => (
          <div className="card" key={card.id}>
            <img src={card.img} alt={card.heading} className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">{card.subTitle}</h5>
              <p className="card-text">{card.cardheading}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="slider-controls">
        <button className="btn btn-light prev-btn" onClick={handlePrev}>
          <FaArrowLeft />
        </button>
        <button className="btn btn-light next-btn" onClick={handleNext}>
          <FaArrowRight />
        </button>
      </div>
    </div>
  )
}

export default Slider