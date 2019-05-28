import React from 'react'
import H2Styled from '../styled/H2Styled'
import H3Styled from '../styled/H3Styled'
import PStyled from '../styled/PStyled'

const Experience = props => (
  <div className="Experience">
    <H2Styled name="Experience" />
    <div className="Experience-container">
      {props.data.map((experience, index) => (
        <div className="Experience-item" key={`Experience-${index}`}>
          <H3Styled>{experience.jobTitle} @ {experience.company}
            <span>{experience.startDate} - {experience.endDate}</span>
          </H3Styled>
          <PStyled name={experience.jobDescription} />
        </div>
      ))}
    </div>
  </div>
)

export default Experience