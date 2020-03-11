import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import DetailContainer from '../../../containers/Detail'
import EquipmentsMock from '../../../utils/api/mocks'

import GAInitialize from '../../../utils/ga'

const Detail = ({
  history,
  match
}) => {
  GAInitialize('/equipment-detail')
  const goBack = () => history.goBack()
  const { id } = match.params
  const product = EquipmentsMock.find(product => product.id === Number(id))
  return (
    <DetailContainer
      goBack={goBack}
      product={product || {}}
    />
  )
}

Detail.propTypes = {
  history: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
      ]).isRequired,
    }).isRequired,
  }).isRequired
}

export default withRouter(Detail)
