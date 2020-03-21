import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import DetailContainer from '../../../containers/Detail'
import EquipmentsMock from '../../../utils/api/mocks'

import GAInitialize from '../../../utils/ga'

const Detail = ({
  history,
  match
}) => {
  const [showModal, setShowModal] = useState(false)
  const [issue, setIssue] = useState({})

  const goBack = () => history.goBack()
  const { id } = match.params
  const product = EquipmentsMock.find(product => product.id === Number(id))
  GAInitialize(`/logged/detail/${id}`)

  const handleShowModal = issue => {
    setIssue(issue)
    setShowModal(true)
  }

  const handleCloseModal = () => setShowModal(false)

  return (
    <DetailContainer
      goBack={goBack}
      product={product || {}}
      showModal={showModal}
      onOpenModal={handleShowModal}
      issueSelected={issue}
      onCloseModal={handleCloseModal}
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
