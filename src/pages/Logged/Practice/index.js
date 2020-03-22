import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import PracticeContainer from '../../../containers/Practice'
import goodPractices from '../../../utils/api/practices.mock'

import GAInitialize from '../../../utils/ga'

const progressValue = (steps, step, type) => (
  type === 'increment'
   ? (((step + 1) / steps) * 100)
   : (((step - 1) / steps) * 100)
)

const Practice = ({
  history,
}) => {
  GAInitialize('/logged/practice-detail')

  const [step, setStep] = useState(0)
  const [progress, setProgress] = useState(
    progressValue(goodPractices.length, step, 'increment')
  )

  const goBack = () => history.push('/logged/equipments')

  const handleNext = () => {
    const incrementProgress = progressValue(goodPractices.length, step, 'increment')
    if(step < (goodPractices.length - 1)) {
      setProgress(incrementProgress)
      setStep(step + 1)
    }
  }

  const handlePrev =  () => {
    const decrementProgress = progressValue(goodPractices.length, step, 'decrement')
    if(step > 0) {
      setProgress(decrementProgress)
      setStep(step - 1)
    }
  }

  const actionNext = (
    step === (goodPractices.length - 1)
    ? goBack
    : handleNext
  )

  return (
    <PracticeContainer
      close={goBack}
      onStep={actionNext}
      onPrevStep={handlePrev}
      practice={goodPractices[step]}
      step={step}
      steps={(goodPractices.length - 1)}
      progress={progress}
    />
  )
}

Practice.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
}

export default withRouter(Practice)
