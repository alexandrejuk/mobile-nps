import React, { useState } from 'react'
import { action } from '@storybook/addon-actions'
import PracticesContainer from '../../../containers/Practices'

import goodPractices from '../../../utils/api/practices.mock'

export default {
  title: 'Containers/Practices',
}

export const Default = () => {
  const [step, setStep] = useState(40)

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
    ? action('go to home!')
    : handleNext
  )

  return (
    <PracticesContainer
      onStep={actionNext}
      onPrevStep={handlePrev}
      practice={goodPractices[step]}
      step={step}
    />
  )
}
