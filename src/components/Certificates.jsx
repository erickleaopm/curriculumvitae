import React from 'react'
import H2Styled from '../styled/H2Styled'
import H3Styled from '../styled/H3Styled'
import PStyled from '../styled/PStyled'

const Certificates = props => (
  <div className="Certificates">
    <H2Styled name="Certificates" />
    <div className="Certificates-container">
      {props.data.map((certificate, index) => (
        <div className="Certificates-item" key={`Certificate-${index}`}>
          <H3Styled>{certificate.name} @ {certificate.institution}
            <span>{certificate.date}</span>
          </H3Styled>
          <PStyled name={certificate.description} />
        </div>
      ))}
    </div>
  </div>
)

export default Certificates