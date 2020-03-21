import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import BannerSvg from '../../assets/images/banners/banner-1.svg'
import styles from './style.module.css'

const Banner = ({
  fill,
}) => (
  <div 
    className={classNames(
      styles.banner,
      styles[fill],
    )}
  >
    <img 
      src={BannerSvg} 
      alt="banner information" 
    />
  </div>
)

Banner.propTypes = {
  fill: PropTypes.oneOf([
    'primary',
    'secondary',
  ]).isRequired,
}

export default Banner 
