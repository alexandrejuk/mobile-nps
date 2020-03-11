import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import PracticesContainer from '../../../containers/Practices'
import goodPractices from '../../../utils/api/practices.mock'

import GAInitialize from '../../../utils/ga'

const Practices = ({
  history,
}) => {
  GAInitialize('/practices')
  const [step, setStep] = useState(0)

  const goBack = () => history.push('/logged/equipments')

  const handleNext = () => {
    if(step < (goodPractices.length - 1)) {
      setStep(step + 1)
    }
  }

  const handlePrev =  () => {
    if(step > 0) {
      setStep(step - 1)
    }
  }

  const actionNext = (
    step === (goodPractices.length - 1)
    ? goBack
    : handleNext
  )

  return (
    <PracticesContainer
      close={goBack}
      onStep={actionNext}
      onPrevStep={handlePrev}
      practice={goodPractices[step]}
      step={step}
    />
  )
}

Practices.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
}

export default withRouter(Practices)
