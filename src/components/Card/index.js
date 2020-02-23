import React from 'react'
import PropTypes from 'prop-types'
import Title from '../Title'

import styles from './style.module.css'

const Card = ({
  action,
  image,
  title,
}) => (
  <div
    onKeyPress={action}
    onClick={action}
    className={styles.card}
    tabIndex="0"
    role="button"
  >
    <div className={styles.imageContainer}>
      <img src={image} alt="item card" />
    </div>
    <div className={styles.title}>
      <Title text={title} />
    </div>
   </div>
)

Card.propTypes = {
  action: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Card
