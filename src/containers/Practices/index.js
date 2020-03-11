import React from 'react'
import PropTypes from 'prop-types'
import {
  Button,
  Title
} from '../../components'

import styles from './style.module.css'
import ImagesPractice from './images'
import CloseSvg from '../../assets/icons/close.svg'

const Practice = ({
  close,
  practice,
  step,
  onStep,
  onPrevStep
}) => {
  const {
    title,
    subtitle = '',
    message,
    image,
  } = practice

  const ButtonText = (
    step === 0
      ? 'Iniciar'
      : 'Próximo'
  )

  return (
    <div className={styles.container}>
      <div
        className={styles.closeTools}
        onClick={close}
        role="button"
      >
        <img src={CloseSvg} alt="tool close" />
      </div>
      <div className={styles.padding20}>
        <Title
          type="bold"
          text={title}
          textAlign="center"
        />
        <Title
          color="secondary"
          text={subtitle}
          textAlign="center"
        />
      </div>
      <div>
        <div className={styles.image}>
          <img src={ImagesPractice[image]} alt="good practices" />
        </div>
        <div className={styles.padding20}>
          <Title
            color="secondary"
            text={message}
            textAlign="center"
          />
        </div>
      </div>
      <div className={styles.stepButton}>
        <div className={styles.firtButton}>
          <Button color="primary" action={onStep}>
            {step === 44 ? 'Ir para home' : ButtonText}
          </Button>
        </div>
        {
          step > 0 && (
            <Button color="outline" action={onPrevStep}>
              Voltar
            </Button>
          )
        }
      </div>
    </div>
  )
}

Practice.propTypes = {
  close: PropTypes.func.isRequired,
  step: PropTypes.number.isRequired,
  onStep: PropTypes.func.isRequired,
  onPrevStep: PropTypes.func.isRequired,
  practice: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    message: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
}

export default Practice
