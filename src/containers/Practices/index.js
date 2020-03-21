import React from 'react'
import PropTypes from 'prop-types'

import Translate from '../../locales'
import {
  PracticeCard,
  Title,
} from '../../components'
import styles from './style.module.css'

import ArrowSvg from '../../assets/icons/arrow-left-white.svg'
import BannerSvg from '../../assets/images/banners/banner-2.svg'

const Practices = ({
  goBack,
  practices,
  goToPractice
}) => {
  const PracticeItem = ({
    id,
    image,
    title,
    readTime,
  }) => (
    <PracticeCard
      action={() => goToPractice(id)}
      key={id}
      image={image}
      title={title}
      readTime={readTime}
    />
  )

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div
          onClick={goBack}
          role="button"
        >
          <img src={ArrowSvg} alt="go back" />
        </div>
        <img src={BannerSvg} alt="ilustration" />
      </div>
      <div className={styles.content}>
        <Title
          type="bold"
          text={Translate('practices.title')}
        />
        <div className={styles.pratices}>
          {practices.map(PracticeItem)}
        </div>
      </div>
    </div>
  )
}

Practices.propTypes = {
  goBack: PropTypes.func.isRequired,
  goToPractice: PropTypes.func.isRequired,
  practices: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      readTime: PropTypes.string,
    }).isRequired,
  ).isRequired,
}

export default Practices
