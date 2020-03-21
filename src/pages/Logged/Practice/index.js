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
  match,
}) => {
  GAInitialize('/logged/practice-detail')

  const { id } = match.params
  const { practices } = goodPractices.find(practice => practice.id === Number(id))
  const [step, setStep] = useState(0)
  const [progress, setProgress] = useState(
    progressValue(practices.length, step, 'increment')
  )

  const handleNext = () => {
    const incrementProgress = progressValue(practices.length, step, 'increment')
    if(step < (practices.length - 1)) {
      setProgress(incrementProgress)
      setStep(step + 1)
    }
  }

  const handlePrev =  () => {
    const decrementProgress = progressValue(practices.length, step, 'decrement')
    if(step > 0) {
      setProgress(decrementProgress)
      setStep(step - 1)
    }
  }

  const actionNext = (
    step === (practices.length - 1)
    ? history.goBack
    : handleNext
  )

  return (
    <PracticeContainer
      close={history.goBack}
      onStep={actionNext}
      onPrevStep={handlePrev}
      practice={practices[step]}
      step={step}
      steps={(practices.length - 1)}
      progress={progress}
    />
  )
}

Practice.propTypes = {
  history: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
      ]).isRequired,
    }).isRequired,
  }).isRequired
}

export default withRouter(Practice)
