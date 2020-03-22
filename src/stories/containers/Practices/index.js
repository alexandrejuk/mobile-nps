import React, { useState } from 'react'
import { action } from '@storybook/addon-actions'
import PracticesContainer from '../../../containers/Practices'

import goodPractices from '../../../utils/api/practices.mock'

export default {
  title: 'Containers/Practices',
}

const progressValue = (steps, step, type) => (
  type === 'increment'
   ? (((step + 1) / steps) * 100)
   : (((step - 1) / steps) * 100)
)

export const Default = () => {
  const [step, setStep] = useState(0)
  const [progress, setProgress] = useState(
    progressValue(goodPractices.length, step, 'increment')
  )

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
    ? action('go to home!')
    : handleNext
  )

  return (
    <PracticesContainer
      onStep={actionNext}
      onPrevStep={handlePrev}
      practice={goodPractices[step]}
      step={step}
      progress={progress}
    />
  )
}
