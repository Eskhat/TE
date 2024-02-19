import React from 'react'
import './Home.css'
import cd1 from '../imgs/cd1.svg'
import cd2 from '../imgs/cd2.svg'
import cd3 from '../imgs/cd3.svg'
import cd4 from '../imgs/cd4.svg'
import cd5 from '../imgs/cd5.svg'
import Navbar from '../components/Navbar'

function HomeMain() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="home_main">
          <div className="home_text">My Published Courses</div>
          <div className="home_cards">
            <div className="home_card">
              <img className="card_img" src={cd1} />
              <div className="card_texts">
                <div className="card_text1">DevOps</div>
                <div className="card_text2">
                  DevOps is a methodology in the softwa...
                </div>
              </div>
            </div>
            <div className="home_card">
              <img className="card_img" src={cd2} />
              <div className="card_texts">
                <div className="card_text1">Software Testing</div>
                <div className="card_text2">
                  Software testing is the act of exa...
                </div>
              </div>
            </div>
            <div className="home_card">
              <img className="card_img" src={cd3} />
              <div className="card_texts">
                <div className="card_text1">Technical Writing</div>
                <div className="card_text2">
                  Technical writing is writing or drafting...
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home_stars">
          <div className="home_star">
            <img src={cd4} />
          </div>
          <div className="home_star_text1">
            <div className="home_star_text2">Let's get started!</div>
          </div>
          <div className="home_start_text3">
            <div className="home_star_text4">Add your first course</div>
          </div>
        </div>
      </div>
      <div className="footer_main">
        <div className="footer_icons">
          <img src={cd5} />
        </div>
        <div className="footer_company">
          <h3 className="footer_text1">Company</h3>
          <div className="footer_text2">About as</div>
          <div className="footer_text2">News</div>
          <div className="footer_text2">Careers</div>
          <div className="footer_text2">How we work</div>
        </div>
        <div className="footer_company">
          <h3 className="footer_text1">Support</h3>
          <div className="footer_text2">FAQ</div>
          <div className="footer_text2">US Office</div>
          <div className="footer_text2">Asia Office</div>
          <div className="footer_text2">How we work</div>
        </div>
        <div className="footer_company">
          <h3 className="footer_text1">More</h3>
          <div className="footer_text2">Become a partner</div>
          <div className="footer_text2">Partner Support</div>
          <div className="footer_text2">Driver Requirements</div>
        </div>
        <div className="footer_company2">
          <h3 className="footer_text1">App</h3>
          <div className="footer_text2">Report Bug</div>
          <div className="footer_text2">App Heldpesk</div>
          <div className="footer_text2">Mobile app links</div>
        </div>
      </div>
    </div>
  )
}

export default HomeMain
