import React, { useState } from 'react'
import { action } from '@storybook/addon-actions'
import Detail from '../../../containers/Detail'

export default {
  title: 'Containers/Detail',
}

const product = {
  description: 'Maquina de café premium, criada com o mais alto padrão de qualidade, lider de venda em mais de 2.000 mil países.',
  deep: '2400 cm',
  id: 3,
  image: 'A630',
  name: 'A6/30',
  height: '100 cm',
  revenues:[
    {
      title: 'AO 140ml LP',
      src: 'AO140mlLP',
    },
    {
      title: 'AO 90ml LP',
      src: 'AO90mlLP',
    },
    {
      title: 'AP 140ml LP',
      src: 'AP140mlLP',
    },
    {
      title: 'AP 90ml LP',
      src: 'AP90mlLP',
    }
  ],
  issues: [
    {
      id: 0,
      name: 'off 3',
      problems: [
          'Bandeja de resíduos cheia.',
      ],
      resolves: [
          'Esvazie a bandeja, verifique se sensor da bandeja está seco e reinicie o equipamento.',
      ],
    },
   {
      id: 1,
      name: 'off 6A',
      problems: [
          '1° Verifique se há água no PDV.',
          '2° Verifique se há fluxo de água, após o filtro(checar a validade do mesmo).',
          '3° Verifique o funcionamento dos componentes envolvidos: eletroválvula de entrada de água, sonda de nível de água.',
      ],
        resolves: [
          '1° Verifique se há água no PDV',
          '2° Verifique o fluxo de água, após o filtro.',
          '3° Verifique o funcionamento dos componentes envolvidos: eletroválvula de entrada de água, sonda de nível de água.',
      ],
    },
   {
      id: 2,
      name: 'off 6B',
      problems: [
          'O circuito da caldeira instantânea foi reabastecido com água, mas nenhuma bebida foi servida; o circuito de alimentação pode ter um vazamento.',
      ],
      resolves: [
          '1° Verifique se há água no PDV' ,
          '2° Verifique o fluxo de água, após o filtro.',
          '3° Verifique o funcionamento dos componentes envolvidos: eletroválvula de entrada de água, sonda de nível de água.',
      ],
    },
   {
      id: 3,
      name: 'off 6C',
      problems: [
          'Tempo de enchimento para a interrupção de ar muito longo; o fornecimento de água pode estar totalmente escasso, sua pressão pode não ser suficiente ou algum obstáculo pode desacelerar o fluxo de água (tubos de carga obstruídos ou entupidos); a segurança da válvula solenoide da entrada de água foi acionada;',
      ],
      resolves: [
          '1° Verifique se há água no PDV' ,
          '2° Verifique o fluxo de água, após o filtro.',
          '3° Verifique o funcionamento dos componentes envolvidos: eletroválvula de entrada de água, sonda de nível de água.',
      ],
    },
    {
      id: 4,
      name: 'off 6D',
      problems: [
          'Tempo de enchimento para a interrupção de ar muito longo; o fornecimento de água pode estar totalmente escasso, sua pressão pode não ser suficiente ou algum obstáculo pode desacelerar o fluxo de água (tubos de carga obstruídos ou entupidos); a segurança da válvula solenoide da entrada de água foi acionada;',
      ],
      resolves: [
          '1° Verifique se há água no PDV' ,
          '2° Verifique o fluxo de água, após o filtro.',
          '3° Verifique o funcionamento dos componentes envolvidos: eletroválvula de entrada de água, sonda de nível de água.',
      ],
    },
  ],
  width: '330 cm',
  weight: '1.2 kg',
  potency: '1600w',
  tension: '220v~',
}

export const Default = () => {
  const [showModal, setShowModal] = useState(false)
  const [issue, setIssue] = useState({})

  const handleShowModal = issue => {
    setIssue(issue)
    setShowModal(true)
  }

  const handleCloseModal = () => setShowModal(false)
  return (
    <Detail
      goBack={action('go back!')}
      product={product || {}}
      showModal={showModal}
      onOpenModal={handleShowModal}
      onCloseModal={handleCloseModal}
      issueSelected={issue}
    />
  )
}
