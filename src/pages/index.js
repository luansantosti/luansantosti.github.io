import React from 'react'
import ExperienceSection from '../components/ExperienceSection'
import SkillsSection from '../components/SkillsSection'
import About from '../components/Sidebar/About'
import Links from '../components/Sidebar/Links'

import './style.scss'

const IndexPage = () => (
    <div className="index">
      <div className="main">
        <h5>
          Hi, I'm <span className="bold">Luan Santos</span>
        </h5>

        <h3 className="bold">
          I have been working as a Front-end developer for over 6 years. During this time, I was able to acquire a strong experience building web/mobile pages with the main technologies of the market in projects for large clients. I have a solid knowledge of HTML, CSS, Javascript and currently, as a Full-stack developer, I'm improving my experience with React, Relay, GraphQL, REST, Jest, NodeJs, MongoDB. Today, my main goal is to become a specialist with the stack mentioned above. 
        </h3>

        <ExperienceSection />
        {/* <SkillsSection /> */}
      </div>

      <div className="aside">
        <div className="top">
          <About />
        </div>
        <div className="bottom">
          <Links />
        </div>
      </div>
    </div>
)

export default IndexPage
