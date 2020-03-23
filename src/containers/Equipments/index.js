import React from 'react'
import PropTypes from 'prop-types'

import { Card, Banner, Title } from '../../components'
import styles from './style.module.css'
import helpSVG from '../../assets/icons/help.svg'

import {
  imagesProduct,
} from './images'
import Translate from '../../locales'

const Equipments = ({
  action,
  equipments = [],
  practicesAction,
}) => {
  return (
    <div className={styles.container}>
        <Title 
          type="bold"
          text={Translate('equipments.title')}
          textAlign="center"
        />
        <Banner fill="primary" />
      <div
        className={styles.tools}
        onClick={practicesAction}
        role="button"
      >
        <img src={helpSVG} alt="tool help" />
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
