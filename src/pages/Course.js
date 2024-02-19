import React from 'react'
import './Course.css'
import user from '../imgs/user1.svg'
import course1 from '../imgs/course1.svg'
import card1 from '../imgs/card1.svg'
import card2 from '../imgs/card2.svg'
import card3 from '../imgs/card3.svg'
import cd5 from '../imgs/cd5.svg'

function Course() {
  return (
    <div>
      <div className="container">
        <div className="navbar">
          <nav className="nav">
            <div className="course_users">
              <div className="course_logos">
                <img src={user} />
              </div>
              <a href="/" className="nav_logo">
                Courses by John
              </a>
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

        <div className="course_main">
          <div className="course_main1">
            <img className="course_img" src={course1} />
          </div>
          <div className="course_main2">
            <div className="course_main_text1">Profession Video Editing</div>
            <div className="course_main_text2">
              Start editing your video professionally with Adobe Premiere Pro
              CC!
            </div>
            <div className="course_main_text3">
              If you are looking for a video editing application that will allow
              you to edit videos however you want them, Adobe Premiere Pro is
              the best answer. Premiere Pro is used by professionals across the
              world for every type of production from business & marketing
              videos, music videos to documentaries, feature films. This full
              course is the best way to jump right in and start editing. Make
              videos the way you imagine them! Practice editing while you learn.
              This course includes practice video files so you can follow along
              and actually learn by doing. By the end of the course, you'll have
              edited a 1-minute documentary with the supplied footage. I'll be
              teaching the course using the creative cloud version, but if you
              have a previous version (Mac or PC), you can still learn to edit
              like a pro. What makes me qualified to teach you? My name is Phil
              and I've been editing videos with Adobe Premiere Pro for over a
              decade. Plus I'm the creator of some of the world's most popular
              video editing courses - with over 3,000,000 students and thousands
              of 5-star reviews like these from the Adobe Premiere Pro course:
            </div>
            <div className="course_main_text4">
              <div className="course_main_text41">Created on 27/11/2022</div>
              <div className="course_main_text41">Creator: Bruce Wayne</div>
            </div>
            <div className="course_main_text5">
              <a className="course_main_text51">Buy Now</a>
            </div>
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
    </div>
  )
}

export default Course
