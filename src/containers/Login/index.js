import React from 'react'
import Form from 'react-vanilla-form'
import PropTypes from 'prop-types'

import Translate from '../../locales'

import CompanyLogo from '../../assets/images/logo-white.svg'
import {
  Button,
} from '../../components'
import styles from './style.module.css'

const Login = ({
  data,
  onChange,
  onSubmit,
}) => (
  <div className={styles.container}>
    <div className={styles.logo}>
      <img src={CompanyLogo} alt="company logo" />
    </div>
    <div className={styles.form}>
      <Form
        data={data}
        onChange={onChange}
        onSubmit={onSubmit}
      >
        <label
          className={styles.label}
          htmlFor="code_access"
        >
          {Translate('login.accessCode')}
        </label>
        <input
          className={styles.input}
          type="number"
          name="code_access"
          value={data.code_access}
        />
        <div className={styles.buttonForm}>
          <Button
            color="primary"
            type="submit"
          >
            {Translate('login.buttonTitle')}
          </Button>
        </div>
      </Form>
    </div>
  </div>
)


Login.propTypes = {
  data: PropTypes.shape({
    code_access: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
  }).isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

export default Login
