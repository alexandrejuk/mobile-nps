import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import EquipmentsContainer from '../../../containers/Equipments'
import EquipmentsMock from '../../../utils/api/mocks'

import GAInitialize from '../../../utils/ga'

const Equipments = ({
  history,
}) => {
  GAInitialize('/logged/equipments')
  const goToDetail = id => history.push(`/logged/detail/${id}`)
  const practicesAction = () => history.push(`/logged/practices`)
  return (
    <EquipmentsContainer
      action={goToDetail}
      equipments={EquipmentsMock}
      practicesAction={practicesAction}
    />
  )
}

Equipments.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
}

export default withRouter(Equipments)
