import { useState } from 'react'
import '../home/Home.css'
import job from '../../assets/job 2.png'
import About from '../../pages/About/About'
// import imperial from '../../assets/hero-bg.jpg'
import { RiArrowDownSLine } from "react-icons/ri";



const Home =()=>{
   const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
    return(
        <div className='container'>
        <div className="home">
           <div className='home-container'>
              <div className='left-para'>
                <span>Lets start your careers here!</span>
                <h1>Looking for a career change? Browse our job listings now!</h1>
                <p>Mus vehicula dignissim quis si lorem libero cras pulvinar orci dapibus. Sagittis quisque orci pretium donec elit platea porta integer maecenas risus lobortis.</p>
              </div>
              <div className='job-img'>
                  <img src={job} alt="job image" />
              </div>
           </div>
        </div>
        <div id='about-section'>
            <About/>
        </div>
        <div id="job-list">
           <div className="job-list-heading">
               <h1>Featured jobs</h1>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.</p>
           </div>
            <div className="job-content">
               <div className='job-card'>
                    <span>Lagos Nigeria</span>
                    <hr />
                   <h5>HR Team Leader</h5>
                   <p>Neque urna integer ridiculus tristique scelerisque tempor torquent vulputate ullamcorper risus euismod</p>
                   <div className="job-card-bottom">
                      <p>Full Time</p>
                      <button>View Detail</button>
                   </div>
               </div>
               <div className='job-card'>
                    <span>Port Harcourt Nigeria</span>
                    <hr />
                   <h5>IT Support Associate</h5>
                   <p>Neque urna integer ridiculus tristique scelerisque tempor torquent vulputate ullamcorper risus euismod</p>
                   <div className="job-card-bottom">
                      <p>Full Time</p>
                      <button>View Detail</button>
                   </div>
               </div>
               <div className='job-card'>
                    <span>Lagos Nigeria</span>
                    <hr />
                   <h5>HR Team Leader</h5>
                   <p>Neque urna integer ridiculus tristique scelerisque tempor torquent vulputate ullamcorper risus euismod</p>
                   <div className="job-card-bottom">
                      <p>Full Time</p>
                      <button>View Detail</button>
                   </div>
               </div>
               <div className='job-card'>
                    <span>Lagos Nigeria</span>
                    <hr />
                   <h5>HR Team Leader</h5>
                   <p>Neque urna integer ridiculus tristique scelerisque tempor torquent vulputate ullamcorper risus euismod</p>
                   <div className="job-card-bottom">
                      <p>Full Time</p>
                      <button>View Detail</button>
                   </div>
               </div>
               <div className='job-card'>
                    <span>Lagos Nigeria</span>
                    <hr />
                   <h5>HR Team Leader</h5>
                   <p>Neque urna integer ridiculus tristique scelerisque tempor torquent vulputate ullamcorper risus euismod</p>
                   <div className="job-card-bottom">
                      <p>Full Time</p>
                      <button>View Detail</button>
                   </div>
               </div>
               <div className='job-card'>
                    <span>Lagos Nigeria</span>
                    <hr />
                   <h5>HR Team Leader</h5>
                   <p>Neque urna integer ridiculus tristique scelerisque tempor torquent vulputate ullamcorper risus euismod</p>
                   <div className="job-card-bottom">
                      <p>Full Time</p>
                      <button>View Detail</button>
                   </div>
               </div>
               <div className='job-card'>
                    <span>Lagos Nigeria</span>
                    <hr />
                   <h5>HR Team Leader</h5>
                   <p>Neque urna integer ridiculus tristique scelerisque tempor torquent vulputate ullamcorper risus euismod</p>
                   <div className="job-card-bottom">
                      <p>Full Time</p>
                      <button>View Detail</button>
                   </div>
               </div>
               <div className='job-card'>
                    <span>Lagos Nigeria</span>
                    <hr />
                   <h5>HR Team Leader</h5>
                   <p>Neque urna integer ridiculus tristique scelerisque tempor torquent vulputate ullamcorper risus euismod</p>
                   <div className="job-card-bottom">
                      <p>Full Time</p>
                      <button>View Detail</button>
                   </div>
               </div>
            </div>
        </div>
        <div className="faq">
          <div className="faq-content">
            <div className="faq-left">
               <p>Common Questions</p>
               <h1>Frequently Ask Question.</h1>
               <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, 
                  luctus nec ullamcorper mattis, pulvinar dapibus leo.
               </span>
            </div>
            <div className="faq-right">
            <div className="accordion-container">
      <div className={`accordion ${activeIndex === 0 ? 'active' : ''}`}>
        <div
          className={`accordion-header ${activeIndex === 0 ? 'expanded' : ''}`}
          onClick={() => toggleAccordion(0)}
        >
          <span className="accordion-title">Section 1</span>
          <span className={`accordion-icon ${activeIndex === 0 ? 'rotate' : ''}`}>
            <RiArrowDownSLine />
          </span>
        </div>
        <div className="accordion-content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
            facilisis urna. Praesent ac gravida libero.
          </p>
        </div>
      </div>

      <div className={`accordion ${activeIndex === 1 ? 'active' : ''}`}>
        <div
          className={`accordion-header ${activeIndex === 1 ? 'expanded' : ''}`}
          onClick={() => toggleAccordion(1)}
        >
          <span className="accordion-title">Section 2</span>
          <span className={`accordion-icon ${activeIndex === 1 ? 'rotate' : ''}`}>
            <RiArrowDownSLine />
          </span>
        </div>
        <div className="accordion-content">
          <p>
            Nulla facilisi. Fusce posuere nibh libero, a venenatis nisl fermentum in.
          </p>
        </div>
      </div>

      <div className={`accordion ${activeIndex === 2 ? 'active' : ''}`}>
        <div
          className={`accordion-header ${activeIndex === 2 ? 'expanded' : ''}`}
          onClick={() => toggleAccordion(2)}
        >
          <span className="accordion-title">Section 3</span>
          <span className={`accordion-icon ${activeIndex === 2 ? 'rotate' : ''}`}>
            <RiArrowDownSLine />
          </span>
        </div>
        <div className="accordion-content">
          <p>
            Proin ut lacus gravida, sollicitudin neque nec, condimentum lectus.
          </p>
        </div>
      </div>
      <div className={`accordion ${activeIndex === 3 ? 'active' : ''}`}>
        <div
          className={`accordion-header ${activeIndex === 3 ? 'expanded' : ''}`}
          onClick={() => toggleAccordion(2)}
        >
          <span className="accordion-title">Section 3</span>
          <span className={`accordion-icon ${activeIndex === 3 ? 'rotate' : ''}`}>
            <RiArrowDownSLine />
          </span>
        </div>
        <div className="accordion-content">
          <p>
            Proin ut lacus gravida, sollicitudin neque nec, condimentum lectus.
          </p>
        </div>
      </div>
      <div className={`accordion ${activeIndex === 4 ? 'active' : ''}`}>
        <div
          className={`accordion-header ${activeIndex === 4 ? 'expanded' : ''}`}
          onClick={() => toggleAccordion(2)}
        >
          <span className="accordion-title">Section 3</span>
          <span className={`accordion-icon ${activeIndex === 4 ? 'rotate' : ''}`}>
            <RiArrowDownSLine />
          </span>
        </div>
        <div className="accordion-content">
          <p>
            Proin ut lacus gravida, sollicitudin neque nec, condimentum lectus.
          </p>
        </div>
      </div>
    </div>
            </div>
          </div>
        </div>
        </div>
    )
}


export default Home