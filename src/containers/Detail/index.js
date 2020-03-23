import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { map, prop } from 'ramda'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'

import Translate from '../../locales'

import ScaleWidthSvg from '../../assets/icons/scale-width.svg'
import ScaleHeightSvg from '../../assets/icons/scale-height.svg'
import ScaleDeepSvg from '../../assets/icons/scale-deep.svg'
import VoltstSvg from '../../assets/icons/volts.svg'
import weightSvg from '../../assets/icons/weight.svg'
import CloseSvg from '../../assets/icons/close.svg'
import ArrowSvg from '../../assets/icons/arrow-left.svg'

import {
  Button,
  Modal,
  Title,
} from '../../components'

import styles from './style.module.css'

import {
  revenuesImage,
  imagesProduct,
} from './images'

const Detail = ({
  issueSelected,
  onCloseModal,
  onOpenModal,
  product = {},
  showModal,
  goBack,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [photoIndex, setPhotoIndex] = useState(0)
  const revenues = prop('revenues', product)
  const images = map(({ src }) => (revenuesImage[src]), revenues)
  const issues = prop('issues', product)

  const handleRevenue = (index) => {
    setPhotoIndex(index)
    setIsOpen(true)
  }

  const issue = issueItem => (
    <div
      className={styles.issueItem}
      key={issueItem.id}
    >
      <Button
        action={() => onOpenModal(issueItem)}
        color="secondary"
        size="xsmall"
      >
        {issueItem.name}
      </Button>
    </div>
  )

  const revenue = ({
    title,
  }, index) => (
    <div
      className={styles.revenueItem}
      key={index}
    >
      <Button
        action={() => handleRevenue(index)}
        color="outline"
        size="small"
      >
        {title}
      </Button>
    </div>
  )

  return (
    <div className={
      classNames(styles.container, {
        [styles.fixed]: showModal,
      })
    }>
      <div
        onClick={goBack}
        role="button"
      >
        <img src={ArrowSvg} alt="go back" />
      </div>
      <div className={styles.productImage}>
        <img src={imagesProduct[prop('image', product)]} alt="product" />
      </div>
      <Title
        size="large"
        type="bold"
        text={prop('name', product)}
      />
      <Title
        size="medium"
        type="bold"
        text={Translate('detail.description')}
      />
      <Title
        color="secondary"
        size="normal"
        text={prop('description', product)}
      />
      <div className={styles.equipmentInfoContainer}>
        <div className={styles.equipmentInfo}>
          <img src={ScaleWidthSvg} alt="scale product" />
          <Title
            size="small"
            type="bold"
            textAlign="center"
            color="cardinal"
            text={`${Translate('detail.width')} ${prop('width', product)}`}
          />
        </div>
        <div className={styles.equipmentInfo}>
          <img src={ScaleHeightSvg} alt="scale product" />
          <Title
            size="small"
            type="bold"
            textAlign="center"
            color="cardinal"
            text={`${Translate('detail.height')} ${prop('height', product)}`}
          />
        </div>
        <div className={styles.equipmentInfo}>
          <img src={ScaleDeepSvg} alt="scale product" />
          <Title
            size="small"
            type="bold"
            textAlign="center"
            color="cardinal"
            text={`${Translate('detail.deep')} ${prop('deep', product)}`}
          />
        </div>
        <div className={styles.equipmentInfo}>
          <img src={VoltstSvg} alt="volts product" />
          <Title
            size="small"
            type="bold"
            textAlign="center"
            color="cardinal"
            text={`${prop('potency', product)} | ${prop('tension', product)}`}
          />
        </div>
        <div className={styles.equipmentInfo}>
          <img src={weightSvg} alt="weight product" />
          <Title
            size="small"
            type="bold"
            textAlign="center"
            color="cardinal"
            text={`${prop('weight', product)}`}
          />
        </div>
      </div>
      <div className={styles.revenuesTitle}>
        <Title
          size="medium"
          type="bold"
          text={Translate('detail.revenues')}
        />
      </div>
      <div className={styles.revenuesContainer}>
        { revenues && revenues.map(revenue)}
      </div>
      <div className={styles.issuesTitle}>
        <Title
          size="medium"
          type="bold"
          text={Translate('detail.errors')}
        />
      </div>
      <div className={styles.issuesContainer}>
        {product.issues && map(issue, issues)}
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
      <Modal show={showModal}>
        <div className={styles.headerModalIssue}>
          <div
            onClick={onCloseModal}
            role="button"
            className={styles.headerModalItem}
          >
            <img src={CloseSvg} alt="close modal" />
          </div>
          <div className={styles.headerModalItem}>
            <Title
              size="medium-1"
              text={issueSelected.name || ''}
              textAlign="center"
            />
          </div>
        </div>
        <div className={styles.modalContentIssue}>
          <div className={styles.issueModalContent}>
            <div className={styles.issueModalTitle}>
              <Title
                size="large"
                text={Translate('detail.problem')}
              />
            </div>
            {issueSelected.problems && issueSelected.problems.map((problem, index) => (
              <Title
                key={index}
                color="secondary"
                size="medium"
                text={problem}
              />
            ))}
          </div>
          <div className={styles.issueModalContent}>
            <div className={styles.issueModalTitle}>
              <Title
                size="large"
                text={Translate('detail.solution')}
              />
            </div>
            {issueSelected.resolves && issueSelected.resolves.map((resolve, index) => (
              <Title
                key={index}
                color="secondary"
                size="medium"
                text={resolve}
              />
            ))}
          </div>
        </div>
      </Modal>
    </div>
  )
}

Detail.propTypes = {
  goBack: PropTypes.func.isRequired,
  issueSelected: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    problems: PropTypes.arrayOf(
      PropTypes.string,
    ),
    resolves: PropTypes.arrayOf(
      PropTypes.string,
    ),
  }).isRequired,
  onCloseModal: PropTypes.func.isRequired,
  onOpenModal: PropTypes.func.isRequired,
  product: PropTypes.shape({}).isRequired,
  showModal: PropTypes.bool.isRequired,
}

export default Detail
