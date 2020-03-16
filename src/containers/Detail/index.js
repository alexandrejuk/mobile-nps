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

import {
  revenuesImage,
  imagesProduct,
} from './images'

const issue = ({
  id,
  name,
  problems,
  resolves,
}) => (
  <Collapse key={id} title={name}>
    <div className={styles.issueSection}>
      <Title
        size="small"
        text="Problema"
        type="bold"
      />
    {
      problems && map((problem, index) =>(
        <Title
          key={`${index}${problem}`}
          size="small"
          text={problem}
        />
      ), problems)
    }
    </div>
    <div className={styles.issueSection}>
      <Title
        size="small"
        text="Solução"
        type="bold"
      />
    {
      resolves && map((resolve, index) => (
        <Title
          key={`${index}${resolve}`}
          size="small"
          text={resolve}
        />
      ), resolves)
    }
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
            <div className={styles.descriptionText}>
              <Title
                color="primary"
                size="small"
                text={prop('description', product)}
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
                type="bold"
                text={`A: ${prop('height', product)} x L: ${prop('width', product)} x P: ${prop('deep', product)}`}
              />
            </div>
            <div className={styles.equipmentTechnical}>
              <div className={styles.productInfoSection}>
                <Title
                  color="primary"
                  size="small"
                  text="Potência/Tensão"
                />
                <Title
                  color="primary"
                  size="small"
                  type="bold"
                  text={`${prop('potency', product)} / ${prop('tension', product)}`}
                />
              </div>
              <div className={styles.productInfoSection}>
                <Title
                  color="primary"
                  size="small"
                  text="Peso"
                />
                <Title
                  color="primary"
                  size="small"
                  type="bold"
                  text={`${prop('weight', product)}`}
                />
              </div>
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
