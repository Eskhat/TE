import React from 'react'
import user from '../imgs/user1.svg'
import img from '../imgs/img.svg'
import card1 from '../imgs/card1.svg'
import card2 from '../imgs/card2.svg'
import card3 from '../imgs/card3.svg'
import card4 from '../imgs/card4.svg'
import card5 from '../imgs/card5.svg'
import card6 from '../imgs/card6.svg'
import card7 from '../imgs/card7.svg'
import card8 from '../imgs/card8.svg'
import card9 from '../imgs/card9.svg'
import cd5 from '../imgs/cd5.svg'
import './Courses.css'

function Courses() {
  return (
    <div>
      <div className="container">
        <div className="navbar">
          <nav className="nav">
            <div className="course_users">
              <div className="course_logos">
                <img src={user} />
              </div>
              <div className="nav_logo">Courses by John</div>
            </div>
            <ul className="nav_ul">
              <li className="nav_li">
                <a className="nav_a">Create Course</a>
              </li>

              <li className="nav_li">
                <a className="active">Log In</a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="main">
          <div className="main1">
            <div className="main_text1">Team Management Course</div>
            <div className="main_text2">
              Learn how to manage and grow with your team.
            </div>
            <div>
              <a href="/course" className="main_text3">
                Check out
              </a>
            </div>
          </div>
          <div className="main2">
            <img src={img} />
          </div>
        </div>

        <div className="course_cards">
          <div className="course_cards1">
            <div className="course_card_text">New Courses</div>

            <div className="course_card_cards">
              <div className="course_card">
                <img src={card1} />
                <div className="course_card_names">
                  <div className="course_card_name">
                    PowerBi for Professionals
                  </div>
                  <div className="course_card_price">$165</div>
                </div>
              </div>

              <div className="course_card">
                <img src={card2} />
                <div className="course_card_names">
                  <div className="course_card_name">
                    Google Analytics for Beginners
                  </div>
                  <div className="course_card_price">$189</div>
                </div>
              </div>

              <div className="course_card">
                <img src={card3} />
                <div className="course_card_names">
                  <div className="course_card_name">Learn Kuberenetes</div>
                  <div className="course_card_price">$120</div>
                </div>
              </div>
            </div>
          </div>

          <div className="course_cards2">
            <div className="course_card_text">Video Editing</div>

            <div className="course_card_cards">
              <div className="course_card">
                <img src={card4} />
                <div className="course_card_names">
                  <div className="course_card_name">
                    Adobe Premiere Pro: Full Guide
                  </div>
                  <div className="course_card_price">$160</div>
                </div>
              </div>

              <div className="course_card">
                <img src={card5} />
                <div className="course_card_names">
                  <div className="course_card_name">Mastering DaVinci</div>
                  <div className="course_card_price">$165</div>
                </div>
              </div>

              <div className="course_card">
                <img src={card6} />
                <div className="course_card_names">
                  <div className="course_card_name">Overlays and Shadows</div>
                  <div className="course_card_price">$125</div>
                </div>
              </div>
            </div>
          </div>

          <div className="course_cards3">
            <div className="course_card_text">Programming</div>

            <div className="course_card_cards">
              <div className="course_card">
                <img src={card7} />
                <div className="course_card_names">
                  <div className="course_card_name">
                    Getting Started with AWS
                  </div>
                  <div className="course_card_price">$265</div>
                </div>
              </div>

              <div className="course_card">
                <img src={card8} />
                <div className="course_card_names">
                  <div className="course_card_name">Master Vue.js</div>
                  <div className="course_card_price">$130</div>
                </div>
              </div>

              <div className="course_card">
                <img src={card9} />
                <div className="course_card_names">
                  <div className="course_card_name">Learn React 18</div>
                  <div className="course_card_price">$195</div>
                </div>
              </div>
            </div>
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

export default Courses
