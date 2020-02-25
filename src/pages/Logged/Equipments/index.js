import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import EquipmentsContainer from '../../../containers/Equipments'

const equipments = [
  {
    id: 1,
    image: 'https://www.nestleprofessional.com.br/sites/g/files/gfb331/f/styles/product/public/media/maquina-alegria-8x60-2.png?itok=3w8wjKl9',
    title: 'A8/60',
  },
  {
    id: 2,
    image: 'https://www.nestleprofessional.com.br/sites/g/files/gfb331/f/styles/product/public/media/maquina-alegria-8x60-2.png?itok=3w8wjKl9',
    title: 'A8/60',
  },
  {
    id: 3,
    image: 'https://www.nestleprofessional.com.br/sites/g/files/gfb331/f/styles/product/public/media/maquina-alegria-8x60-2.png?itok=3w8wjKl9',
    title: 'A8/60',
  },
  {
    id: 4,
    image: 'https://www.nestleprofessional.com.br/sites/g/files/gfb331/f/styles/product/public/media/maquina-alegria-8x60-2.png?itok=3w8wjKl9',
    title: 'A8/60',
  },
  {
    id: 5,
    image: 'https://www.nestleprofessional.com.br/sites/g/files/gfb331/f/styles/product/public/media/maquina-alegria-8x60-2.png?itok=3w8wjKl9',
    title: 'A8/60',
  },
]

const Equipments = ({
  history,
}) => {
  const goToDetail = id => history.push(`/logged/detail/${id}`)
  return (
    <EquipmentsContainer
      action={goToDetail}
      equipments={equipments}
    />
  )
}

Equipments.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
}

export default withRouter(Equipments)
