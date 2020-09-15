import React from 'react'
import Section from '../Section'
import SkillUnit from '../SkillUnit'

class SkillsSection extends React.Component {
  render() {
    return (
      <Section title="Skills">
        <div className="row">
          <SkillUnit
            title='HTML'
            progress='90%'
          />
        </div>
      </Section>
    )
  }
}

export default SkillsSection
