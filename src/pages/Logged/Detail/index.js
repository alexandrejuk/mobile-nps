import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import DetailContainer from '../../../containers/Detail'

const product = {
  description: 'Maquina de café premium, criada com o mais alto padrão de qualidade, lider de venda em mais de 2.000 mil países.',
  deep: 2400,
  id: 3,
  image: 'https://www.nestleprofessional.com.br/sites/g/files/gfb331/f/styles/product/public/media/maquina-alegria-8x60-2.png?itok=3w8wjKl9',
  issues: [
    {
      id: 1,
      name: 'off 0',
      problem: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto sequi totam corporis cum?',
      resolve: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto sequi totam corporis cum.',
    },
    {
      id: 2,
      name: 'off 1',
      problem: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto sequi totam corporis cum?',
      resolve: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto sequi totam corporis cum.',
    },
  ],
  name: 'A6/30',
  height: 100,
  revenues: [
    {
      id: 1,
      src: 'https://www.nestleprofessional.com.br/sites/g/files/gfb331/f/styles/product/public/media/maquina-alegria-8x60-2.png?itok=3w8wjKl9',
      title: 'AL',
      description: 'Receita blabla',
    },
    {
      id: 2,
      src: 'https://www.nestleprofessional.com.br/sites/g/files/gfb331/f/styles/product/public/media/maquina-alegria-8x60-2.png?itok=3w8wjKl9',
      title: 'P',
      description: 'Receita blabla',
    },
    {
      id: 3,
      src: 'https://www.nestleprofessional.com.br/sites/g/files/gfb331/f/styles/product/public/media/maquina-alegria-8x60-2.png?itok=3w8wjKl9',
      title: 'P',
      description: 'Receita blabla',
    },
    {
      id: 4,
      src: 'https://www.nestleprofessional.com.br/sites/g/files/gfb331/f/styles/product/public/media/maquina-alegria-8x60-2.png?itok=3w8wjKl9',
      title: 'P',
      description: 'Receita blabla',
    },
  ],
  voltage: '220v~/110v~',
  width: 330,
  weight: 1.2,
}

const Detail = ({
  history,
}) => {
  const goBack = () => history.goBack()
  return (
    <DetailContainer
      goBack={goBack}
      product={product}
    />
  )
}

Detail.propTypes = {
  history: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
}

export default withRouter(Detail)
