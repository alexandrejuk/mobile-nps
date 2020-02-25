import React from 'react'
import PropTypes from 'prop-types'

import CompanyLogo from '../../assets/images/logo.svg'
import { Card } from '../../components'
import styles from './style.module.css'

const Equipments = ({
  action,
  equipments,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src={CompanyLogo} alt="company logo" />
      </div>
      <div className={styles.equipments}>
        {equipments.map(({
          id,
          image,
          title,
        }) => (
          <div
            key={id}
            className={styles.equipmentItem}
          >
            <Card
              action={() => action(id)}
              image={image}
              title={title}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

Equipments.propTypes = {
  action: PropTypes.func.isRequired,
  equipments: PropTypes.shape({
    action: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
}

export default Equipments
