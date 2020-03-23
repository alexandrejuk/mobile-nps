import React from 'react'
import PropTypes from 'prop-types'

import { Card, Banner, Title } from '../../components'
import styles from './style.module.css'
import ArrowSvg from '../../assets/icons/arrow-left.svg'

import {
  imagesProduct,
} from './images'
import Translate from '../../locales'

const Equipments = ({
  action,
  equipments = [],
  goBack,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div
          onClick={goBack}
          role="button"
        >
          <img src={ArrowSvg} alt="go back" />
        </div>
        <div className={styles.title}>
          <Title
            type="bold"
            text={Translate('equipments.title')}
            textAlign="center"
          />
        </div>
      </div>
      <div className={styles.banner}>
        <Banner fill="primary" />
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
  goBack: PropTypes.func.isRequired,
}

export default Equipments
