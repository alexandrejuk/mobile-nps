import React from 'react'
import { Progress } from '../../../components'
import styles from './style.module.css'

export default {
  title: 'Components/Progress/Radial',
}

export const Default = () => (
  <div className={styles.container}>
    <div className={styles.radial}>
      <Progress
        progress={25}
        setup={{
          type: 'radial',
          radial: {
            cx: 8,
            cy: 8,
            r: 8,
          },
        }}
      />
      <h4>25 %</h4>
    </div>
    <div className={styles.radial}>
      <Progress
        progress={50}
        setup={{
          type: 'radial',
          radial: {
            cx: 8,
            cy: 8,
            r: 8,
          },
        }}
      />
      <h4>50 %</h4>
    </div>
    <div className={styles.radial}>
      <Progress
        progress={75}
        setup={{
          type: 'radial',
          radial: {
            cx: 8,
            cy: 8,
            r: 8,
          },
        }}
      />
      <h4>75 %</h4>
    </div>
    <div className={styles.radial}>
      <Progress
        progress={100}
        setup={{
          type: 'radial',
          radial: {
            cx: 8,
            cy: 8,
            r: 8,
          },
        }}
      />
      <h4>100 %</h4>
    </div>
  </div>
)
