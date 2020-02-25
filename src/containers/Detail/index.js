import React from 'react'
import PropTypes from 'prop-types'
import { map, path } from 'ramda'

import {
  Collapse,
  Header,
  Title,
} from '../../components'

import styles from './style.module.css'

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
  product,
  goBack,
}) => {
  const deep = path(['deep'], product)
  const height = path(['height'], product)
  const image = path(['image'], product)
  const issues = path(['issues'], product)
  const name = path(['name'], product)
  const voltage = path(['voltage'], product)
  const weight = path(['weight'], product)
  const width = path(['width'], product)

  return (
    <div className={styles.container}>
      <Header
        action={goBack}
      />
      <div className={styles.product}>
        <Title
          size="medium"
          text={name}
          textAlign="right"
        />
        <div className={styles.productImage}>
          <img src={image} alt="product" />
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
                text={voltage}
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
                text={`AL: ${height} cm x L: ${width} cm x P: ${deep} cm - Peso: ${weight} kg`}
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
      <div className={styles.productIssue}>
        <div className={styles.productIssueTitle}>
          <Title
            size="medium"
            text="Erros"
          />
        </div>
        {map(issue, issues)}
      </div>
    </div>
  )
}

Detail.propTypes = {
  goBack: PropTypes.func.isRequired,
  product: PropTypes.shape({}).isRequired,
}

export default Detail
