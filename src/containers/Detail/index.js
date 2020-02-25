import React from 'react'
import PropTypes from 'prop-types'
import { map, prop } from 'ramda'

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
}) => (
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
        <img src={prop('image', product)} alt="product" />
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
              text={`AL: ${prop('height', product)} cm x L: ${prop('width', product)} cm x P: ${prop('deep', product)} cm - Peso: ${prop('weight', product)} kg`}
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
      {map(issue, prop('issues', product))}
    </div>
  </div>
)

Detail.propTypes = {
  goBack: PropTypes.func.isRequired,
  product: PropTypes.shape({}).isRequired,
}

export default Detail
