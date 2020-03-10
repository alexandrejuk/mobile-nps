import React from 'react'
import PropTypes from 'prop-types'

import CompanyLogo from '../../assets/images/logo.svg'
import { Card } from '../../components'
import styles from './style.module.css'

import A630 from '../../assets/images/equipments/a6-30.png'
import A860 from '../../assets/images/equipments/a8-60.png'
import ATP60E from '../../assets/images/equipments/atp60e.png'
import FTP60E from '../../assets/images/equipments/ftp60e.png'
import FTS60E from '../../assets/images/equipments/fts60e.png'
import Lioness from '../../assets/images/equipments/lioness.png'
import MTS60E from '../../assets/images/equipments/mts60e.png'
import PrimaPremix from '../../assets/images/equipments/prima-premix.png'
import M860 from '../../assets/images/equipments/m8-60.png'

const images = {
  A630,
  A860,
  ATP60E,
  FTP60E,
  FTS60E,
  Lioness,
  MTS60E,
  PrimaPremix,
  M860,
}

const Equipments = ({
  action,
  equipments = [],
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
          name,
        }) => (
          <div
            key={id}
            className={styles.equipmentItem}
          >
            <Card
              action={() => action(id)}
              image={images[image]}
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
}

export default Equipments
