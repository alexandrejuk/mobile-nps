import React from 'react'
import PropTypes from 'prop-types'
import Translate from '../../locales'

import {
  Button,
  Card,
  Confirm,
  Title,
} from '../../components/'

import CoffeeSvg from '../../assets/icons/coffee.svg'
import bookSvg from '../../assets/icons/book.svg'
import Banner from '../../assets/images/banners/banner-4.svg'
import LoggoutSvg from '../../assets/icons/loggout.svg'
import styles from './style.module.css'

const Home = ({
  closeModal,
  goToPage,
  logout,
  show,
  showModal
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div
          className={styles.headerLoggout}
          onClick={showModal}
          role="button"
        >
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
      <Confirm
        show={show}
        close={closeModal}
      >
        <Title
          text={Translate('home.modal.title')}
          size="medium"
          textAlign="center"
        />
        <div className={styles.modalFooter}>
          <Button
            action={logout}
            color="primary"
          >
            {Translate('home.modal.confirm')}
          </Button>
          <Button
            action={closeModal}
            color="outline"
          >
            {Translate('home.modal.cancel')}
          </Button>
        </div>
      </Confirm>
    </div>
  )
}

Home.propTypes = {
  closeModal: PropTypes.func.isRequired,
  goToPage: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  showModal: PropTypes.func.isRequired
}

export default Home
