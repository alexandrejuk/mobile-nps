import React from 'react'
import PropTypes from 'prop-types'
import {
  Button,
  Progress,
  Title,
} from '../../components'
import Translate from '../../locales'
import styles from './style.module.css'
import ImagesPractice from './images'
import CloseSvg from '../../assets/icons/close.svg'

const Practice = ({
  close,
  onStep,
  onPrevStep,
  practice,
  progress,
  step,
  steps,
}) => {
  const {
    title,
    message,
    image,
  } = practice

  const ButtonText = (
    step === 0
      ? Translate('practice.start')
      : Translate('practice.next')
  )

  return (
    <div className={styles.container}>
      <div
        onClick={close}
        role="button"
        className={styles.headerClose}
      >
        <img src={CloseSvg} alt="close practices" />
      </div>
      <div className={styles.header}>
        <Title
          type="bold"
          text={title}
          textAlign="center"
        />
        <div className={styles.progressPosition}>
          <Progress
            progress={progress}
            setup={{
              type: 'radial',
              radial: {
                cx: 8,
                cy: 8,
                r: 8,
              },
            }}
          />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.image}>
          <img src={ImagesPractice[image]} alt="good practices" />
        </div>
        <Title
          color="secondary"
          text={message}
          textAlign="center"
          size="normal"
        />
      </div>
      <div className={styles.footer}>
        <Button color="primary" action={onStep}>
          {step === steps ? Translate('practice.goToHome') : ButtonText}
        </Button>
        {
          step > 0 && (
            <Button color="outline" action={onPrevStep}>
              {Translate('practice.previous')}
            </Button>
          )
        }
      </div>
    </div>
  )
}

Practice.propTypes = {
  close: PropTypes.func.isRequired,
  onStep: PropTypes.func.isRequired,
  onPrevStep: PropTypes.func.isRequired,
  progress: PropTypes.number.isRequired,
  practice: PropTypes.shape({
    title: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  step: PropTypes.number.isRequired,
  steps: PropTypes.number.isRequired,
}

export default Practice
