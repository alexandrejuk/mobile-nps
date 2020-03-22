import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Title from '../Title'

import styles from './style.module.css'

import BannerSvg3 from '../../assets/images/banners/banner-3.svg'
import BannerSvg5 from '../../assets/images/banners/banner-5.svg'

const practicesImage = {
  BannerSvg3,
  BannerSvg5,
}

const PracticeCard = ({
  action,
  fill,
  image,
  title,
  readTime,
}) => (
  <div
    onKeyPress={action}
    onClick={action}
    className={styles.card}
    tabIndex="0"
    role="button"
  >
    <div
       className={classNames(
        styles.imageContainer,
        styles[fill],
      )}
    >
      <img src={practicesImage[image]} alt="item card" />
    </div>
    <div className={styles.content}>
      <Title
        text={title}
        type="bold"
        size="medium"
      />
      <Title
        text={readTime}
        size="small"
        textAlign="right"
        type="mediumBold"
        color="secondary"
      />
    </div>
   </div>
)

PracticeCard.propTypes = {
  action: PropTypes.func.isRequired,
  fill: PropTypes.string,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  readTime: PropTypes.string,
}

PracticeCard.defaultProps = {
  fill: 'primary',
  readTime: null,
}

export default PracticeCard
