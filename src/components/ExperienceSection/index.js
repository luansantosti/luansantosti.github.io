import React from 'react'
import Section from '../Section'
import ExperienceUnit from '../ExperienceUnit'

import dblinksLogo from '../../assets/images/experience/dblinks-logo.png'
import valuenetLogo from '../../assets/images/experience/valuenet-logo.png'
import entriaLogo from '../../assets/images/experience/entria-logo.png'

class ExperienceSection extends React.Component {
  render() {
    return (
      <Section title="Experience">
        <div className="row">
          <ExperienceUnit
            logo={dblinksLogo}
            colour='#272a38'
            title="DB'links"
            link='https://www.dblinks.com.br/'
            timeperiod='2012 - 2017'
            subtitle='Front-end development of custom websites and e-commerces. Building responsive pages in HTML5, CSS3, Javascript, and Jquery.'
          />
          <ExperienceUnit
            logo={valuenetLogo}
            colour='#5ba3a5'
            title='Valuenet Incentive Solutions'
            link='https://www.valuenet.com.br/'
            timeperiod='2017 - 2019'
            subtitle='Front-end development of custom websites using the Salesforce platform.
            Building responsive pages in HTML5, CSS3, Javascript, Jquery and Visualforce.'
          />
          <ExperienceUnit
            logo={entriaLogo}
            colour='#d2d2ef'
            title='Entria'
            link='https://entria.com.br/'
            timeperiod='2019 - Present'
            subtitle="Full-stack development of the company's main product.
            Front-end: development of components in React using GraphQL and Relay to request data.
            Back-end: modeling the necessary structure for new modules or improvements to existing ones using Node.js, GraphQL, and MongoDB."
          />
        </div>
      </Section>
    )
  }
}

export default ExperienceSection
