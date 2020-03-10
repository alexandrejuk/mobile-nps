import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import EquipmentsContainer from '../../../containers/Equipments'
import EquipmentsMock from '../../../utils/api/mocks'

const Equipments = ({
  history,
}) => {
  const goToDetail = id => history.push(`/logged/detail/${id}`)
  return (
    <EquipmentsContainer
      action={goToDetail}
      equipments={EquipmentsMock}
    />
  )
}

Equipments.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
}

export default withRouter(Equipments)
