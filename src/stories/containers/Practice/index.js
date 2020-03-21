import React, { useState } from 'react'
import { action } from '@storybook/addon-actions'
import PracticeContainer from '../../../containers/Practice'

import goodPractices from '../../../utils/api/practices.mock'

export default {
  title: 'Containers/Practice',
}

const progressValue = (steps, step, type) => (
  type === 'increment'
   ? (((step + 1) / steps) * 100)
   : (((step - 1) / steps) * 100)
)

export const Default = () => {
  const practices = goodPractices[0].practices
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
    ? action('go to home!')
    : handleNext
  )

  return (
    <PracticeContainer
      onStep={actionNext}
      onPrevStep={handlePrev}
      practice={goodPractices[0].practices[step]}
      step={step}
      progress={progress}
    />
  )
}
