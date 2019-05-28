import React from 'react'
import H2Styled from '../styled/H2Styled'
import H3Styled from '../styled/H3Styled'
import PStyled from '../styled/PStyled'

const Education = props => (
  <div className="Education">
    <H2Styled name="Education" />
    <div className="Education-container">
      {props.data.map((education, index) => (
        <div className="Education-item" key={`Education-${index}`}>
          <H3Styled>{education.degree} {education.institution} 
            <span>{education.startDate} - {education.endDate}</span>
          </H3Styled>
          <PStyled name={education.description} />
        </div>
      ))}
      </div>
  </div>
)

export default Education