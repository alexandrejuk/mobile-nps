/* eslint-disable */
import React from 'react'
import PropTypes from 'prop-types'

import styles from './style.module.css'

const Card = ({
  action,
  image,
  title,
}) => (
  <div
    onClick={action}
    className={styles.card}
  >
    <div className={styles.imageContainer}>
      <img src={image} alt="item card" />
    </div>
    <div className={styles.title}>
      {title}
    </div>
   </div>
)

Card.propTypes = {
  action: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Card
