import React from 'react'
import PropTypes from 'prop-types'

import CompanyLogo from '../../assets/images/logo.svg'
import { Card } from '../../components'
import styles from './style.module.css'
import helpSVG from '../../assets/icons/help.svg'

import {
  imagesProduct,
} from './images'

const Equipments = ({
  action,
  equipments = [],
  practicesAction,
}) => {
  return (
    <div className={styles.container}>
      <div
        className={styles.tools}
        onClick={practicesAction}
        role="button"
      >
        <img src={helpSVG} alt="tool help" />
      </div>
      <div className={styles.logo}>
        <img src={CompanyLogo} alt="company logo" />
      </div>
      <div className={styles.equipments}>
        {equipments.map(({
          id,
          image,
          name,
        }) => (
          <div
            key={id}
            className={styles.equipmentItem}
          >
            <Card
              action={() => action(id)}
              image={imagesProduct[image]}
              title={name}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

Equipments.propTypes = {
  action: PropTypes.func.isRequired,
  equipments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  practicesAction: PropTypes.func.isRequired,
}

export default Equipments
