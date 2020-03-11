import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { map, prop } from 'ramda'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'

import {
  Collapse,
  Header,
  Title,
} from '../../components'

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

// revenues image
import AO140mlLP from '../../assets/images/revenues/AO140mlLP.png'
import AO90mlLP from '../../assets/images/revenues/AO90mlLP.png'
import AP140mlLP from '../../assets/images/revenues/AP140mlLP.png'
import AP90mlLP from '../../assets/images/revenues/AP90mlLP.png'
import X140ml from '../../assets/images/revenues/X140ml.png'
import X90ml from '../../assets/images/revenues/X90ml.png'
import AM140ml from '../../assets/images/revenues/AM140ml.png'
import AM90ml from '../../assets/images/revenues/AM90ml.png'
import AO140ml from '../../assets/images/revenues/AO140ml.png'
import AO90ml from '../../assets/images/revenues/AO90ml.png'
import AP140ml from '../../assets/images/revenues/AP140ml.png'
import AP90ml from '../../assets/images/revenues/AP90ml.png'
import C018 from '../../assets/images/revenues/C018.png'
import BM860 from '../../assets/images/revenues/BM860.png'
import EM860 from '../../assets/images/revenues/EM860.png'
import AI140ml from '../../assets/images/revenues/AI140ml.png'
import AI90ml from '../../assets/images/revenues/AI90ml.png'
import C001 from '../../assets/images/revenues/C001.png'
import HMTS60E from '../../assets/images/revenues/HMTS60E.png'
import HMenu2MTS60E from '../../assets/images/revenues/HMenu2MTS60E.png'
import FMTS60E from '../../assets/images/revenues/FMTS60E.png'
import IMTS60E from '../../assets/images/revenues/IMTS60E.png'
import GMTS60E from '../../assets/images/revenues/GMTS60E.png'
import JMTS60E from '../../assets/images/revenues/JMTS60E.png'
import C009GPA from '../../assets/images/revenues/C009GPA.png'
import C009GPAMenu2 from '../../assets/images/revenues/C009GPAMenu2.png'
import C010Minuto from '../../assets/images/revenues/C010Minuto.png'
import KMTS60E from '../../assets/images/revenues/KMTS60E.png'

const revenuesImage = {
  AO140mlLP,
  AO90mlLP,
  AP140mlLP,
  AP90mlLP,
  X140ml,
  X90ml,
  AM140ml,
  AM90ml,
  AO140ml,
  AO90ml,
  AP140ml,
  AP90ml,
  C018,
  BM860,
  EM860,
  AI140ml,
  AI90ml,
  C001,
  HMTS60E,
  HMenu2MTS60E,
  FMTS60E,
  IMTS60E,
  GMTS60E,
  JMTS60E,
  C009GPA,
  C009GPAMenu2,
  C010Minuto,
  KMTS60E,
}

const imagesProduct = {
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

const issue = ({
  id,
  name,
  problem,
  resolve,
}) => (
  <Collapse key={id} title={name}>
    <div className={styles.issueSection}>
      <Title
        size="small"
        text="Problema"
        type="bold"
      />
      <Title
        size="small"
        text={problem}
      />
    </div>
    <div className={styles.issueSection}>
      <Title
        size="small"
        text="Solução"
        type="bold"
      />
      <Title
        size="small"
        text={resolve}
      />
    </div>
  </Collapse>
)

const Detail = ({
  product = {},
  goBack,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [photoIndex, setPhotoIndex] = useState(0)
  const revenues = prop('revenues', product)
  const images = map(({ src }) => (revenuesImage[src]), revenues)

  const handleRevenue = (index) => {
    setPhotoIndex(index)
    setIsOpen(true)
  }

  const revenue = ({
    src,
    title,
  }, index) => (
    <div
      className={styles.revenueItem}
      key={index}
      onClick={() => handleRevenue(index)}
    >
      <Title
        size="small"
        text={`Cod: ${title}`}
        type="bold"
      />
      <div className={styles.revenuesAvatar}>
        <img src={revenuesImage[src]} alt="revenue gallery" />
      </div>
    </div>
  )
  return (
    <div className={styles.container}>
      <Header
        action={goBack}
      />
      <div className={styles.product}>
        <Title
          size="medium"
          text={prop('name', product)}
          textAlign="right"
        />
        <div className={styles.productImage}>
          <img src={imagesProduct[prop('image', product)]} alt="product" />
        </div>
        <div className={styles.productContent}>
          <Title
            size="medium"
            text="Descrição"
          />
          <div className={styles.productInfo}>
            <div className={styles.productInfoSection}>
              <Title
                color="primary"
                size="small"
                text="Tensão"
              />
              <Title
                color="primary"
                size="small"
                text={prop('voltage', product)}
              />
            </div>
            <div className={styles.productInfoSection}>
              <Title
                color="primary"
                size="small"
                text="Dimensões"
              />
              <Title
                color="primary"
                size="small"
                text={`AL: ${prop('height', product)} x L: ${prop('width', product)} x P: ${prop('deep', product)} - Peso: ${prop('weight', product)}`}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.productRevenue}>
        <Title
          size="medium"
          text="Receitas"
        />
      </div>
      <div className={styles.productRevenueDocumet}>
        <div className={styles.revenueGallery}>
          {revenues.map(revenue)}
        </div>
        {
          isOpen && (
            <Lightbox
              mainSrc={images[photoIndex]}
              nextSrc={images[(photoIndex + 1) % images.length]}
              prevSrc={images[(photoIndex + images.length - 1) % images.length]}
              onCloseRequest={() => setIsOpen(false)}
              onMovePrevRequest={() =>
                setPhotoIndex((photoIndex + images.length - 1) % images.length)
              }
              onMoveNextRequest={() =>
                setPhotoIndex((photoIndex + 1) % images.length)
              }
            />
          )
        }
      </div>
      <div className={styles.productIssue}>
      {product.issues && (
          <div className={styles.productIssueTitle}>
            <Title
              size="medium"
              text="Erros"
            />
          </div>
        )}
        { product.issues && (
           map(issue, prop('issues', product))
        )}
      </div>
    </div>
  )
}

Detail.propTypes = {
  goBack: PropTypes.func.isRequired,
  product: PropTypes.shape({}).isRequired,
}

export default Detail
