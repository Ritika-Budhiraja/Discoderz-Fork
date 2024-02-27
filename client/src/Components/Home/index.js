import React from 'react'
import './Home.css'
import Home_img from './../../Images/Home/home.png'

const Home = () => {
  return (
    <section className="frame-group home">
        <div className="connecting-frames-parent">
          <div className="connecting-frames">
            <div className="connecting-givers-and-container">
              <span>
                <p className="connecting">Connecting</p>
                <p className="givers-and-needers">Givers and needers</p>
              </span>
            </div>
            <div className="connecting-those-who">
              Connecting Those Who Give with Those Who Need
            </div>
          </div>
          <button className="rectangle-group">
            <div className="frame-inner"></div>
            <div className="get-started">Get Started</div>
          </button>
        </div>
        <img
          className="rectangle-icon"
          loading="eager"
          alt="Connecting Those Who Give with Those Who Need"
          src={Home_img}
        />
      </section>
  )
}

export default Home