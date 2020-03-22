import React from 'react'
import PropTypes from 'prop-types'
import Translate from '../../locales'

import {
  Title,
  Card,
} from '../../components/'

import CoffeeSvg from '../../assets/icons/coffee.svg'
import bookSvg from '../../assets/icons/book.svg'
import Banner from '../../assets/images/banners/banner-4.svg'
import LoggoutSvg from '../../assets/icons/loggout.svg'
import styles from './style.module.css'

const Home = ({
  goToPage,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerLoggout}>
          <img src={LoggoutSvg} alt="loggout" />
        </div>
        <div className={styles.headerBanner}>
          <img src={Banner} alt="banner information" />
        </div>
      </div>
      <div className={styles.borderEffect} />
      <div className={styles.content}>
        <Title
          type="bold"
          text={Translate('home.title')}
        />
        <div className={styles.contentMenu}>
          <Card
            action={() => goToPage('equipments')}
            image={CoffeeSvg}
            title={Translate('home.equipmentButton')}
          />
          <Card
            action={() => goToPage('practices')}
            image={bookSvg}
            title={Translate('home.goodPracticesButton')}
          />
        </div>
      </div>
    </div>
  )
}

Home.propTypes = {
  goToPage: PropTypes.func.isRequired,
}

export default Home
