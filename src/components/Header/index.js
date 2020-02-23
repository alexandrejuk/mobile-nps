import React from 'react'
import PropTypes from 'prop-types'
import CompanyLogo from '../../assets/images/logo.svg'
import arrowIcon from '../../assets/icons/arrow-left.svg'
import styles from './style.module.css'

const Header = ({
  action,
}) => (
  <div className={styles.header}>
    <div
      className={styles.icon}
      onClick={action}
      role="button"
    >
      <img src={arrowIcon} alt="action go back" />
    </div>
    <div className={styles.logo}>
      <img src={CompanyLogo} alt="company logo" />
    </div>
  </div>
)

Header.propTypes = {
  action: PropTypes.func.isRequired,
}

export default Header
