import React from 'react'
import PropTypes from 'prop-types'
import {
  Button,
  Title,
} from '../../components'
import Translate from '../../locales'
import styles from './style.module.css'
import ErrorSvg from './error.svg'

const Error = ({
  goBack,
}) => (
  <div className={styles.container}>
    <div className={styles.content}>
      <div className={styles.image}>
        <img src={ErrorSvg} alt="error" />
      </div>
      <Title
        type="bold"
        size="large"
        color="primary"
        text={Translate('error.title')}
        textAlign="center"
      />
      <Title
        color="secondary"
        text={Translate('error.message.initialText')}
        textAlign="center"
      />
      <Title
        color="secondary"
        text={Translate('error.message.finalText')}
        textAlign="center"
      />
    </div>
    <div className={styles.footer}>
      <Button color="primary" action={goBack}>
        {Translate('error.buttonTitle')}
      </Button>
    </div>
  </div>
)

Error.propTypes = {
  goBack: PropTypes.func.isRequired,
}

export default Error
