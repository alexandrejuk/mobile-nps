import React from 'react'
import CompanyLogo from '../../assets/images/logo.svg'
import {
  Button,
  Input,
} from '../../components'
import styles from './style.module.css'

const Login = () => (
  <div className={styles.container}>
    <div className={styles.logo}>
      <img src={CompanyLogo} alt="company logo" />
    </div>
    <div className={styles.form}>
      <Input
        label="Código"
        type="number"
        name="code_access"
      />
      <div className={styles.buttonForm}>
        <Button>
          Entrar
        </Button>
      </div>
    </div>
  </div>
)

export default Login
