import React, {
  useRef,
  useState,
} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import arrowIcon from '../../assets/icons/arrow-up.svg'
import Title from '../Title'
import styles from './style.module.css'

const calcHeight = value => {
  if (value === 57) {
    return 147
  }
  return (value + 56)
}

const Collapse = ({
  children,
  title,
}) => {
  const [collapsed, setCollapsed] = useState(false)
  const [height, setHeight] = useState(65)
  const ref = useRef(null)

  const openCollapse = () => {
    let newHeight = 65
    const { current: { clientHeight } } = ref
    if (!collapsed) {
      newHeight = calcHeight(clientHeight + 50)
    }
    setHeight(newHeight)
    return setCollapsed(!collapsed)
  }

  return (
    <div
      className={styles.collapse}
      style={{ height: `${height}px` }}
    >
      <div
        className={styles.collapseHeader}
        onKeyPress={openCollapse}
        onClick={openCollapse}
        tabIndex="0"
        role="button"
      >
        <Title
          size="medium"
          text={title}
        />
        <div className={classNames(
          styles.icon, {
            [styles.collapseIcon]: collapsed,
          }
        )}>
          <img src={arrowIcon} alt="arrow" />
        </div>
      </div>
      <div
        className={styles.collapseBody}
        ref={ref}
      >
        { children }
      </div>
    </div>
  )
}

Collapse.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
}

export default Collapse
