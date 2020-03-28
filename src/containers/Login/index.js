import React from 'react'
import Form from 'react-vanilla-form'
import PropTypes from 'prop-types'

import Translate from '../../locales'
import CloseSvg from '../../assets/icons/close.svg'
import CompanyLogo from '../../assets/images/logo.svg'
import {
  Button,
  Title,
  Modal,
} from '../../components'
import styles from './style.module.css'

const Login = ({
  data,
  onChange,
  onShowModal,
  onSubmit,
  showModal,
}) => (
  <div className={styles.container}>
    <div className={styles.logo}>
      <img src={CompanyLogo} alt="company logo" />
    </div>
    <div className={styles.form}>
      <Form
        data={data}
        onChange={onChange}
        onSubmit={onSubmit}
      >
        <label
          className={styles.label}
          htmlFor="code_access"
        >
          {Translate('login.accessCode')}
        </label>
        <input
          className={styles.input}
          id="code_access"
          type="number"
          name="code_access"
          value={data.code_access}
        />
        <div className={styles.buttonForm}>
          <Button
            color="primary"
            type="submit"
          >
            {Translate('login.buttonTitle')}
          </Button>
        </div>
        <div className={styles.terms}>
          <Title
            size="small"
            text={Translate('login.terms.initialText')}
          />
          <div
            onClick={onShowModal}
            role="button"
            className={styles.termsUnderscore}
          >
            <Title
              styleText="undercore"
              size="small"
              type='bold'
              text={Translate('login.terms.finalText')}
            />
          </div>
        </div>
      </Form>
    </div>
    <Modal show={showModal}>
      <div className={styles.headerModalLogin}>
        <div
          onClick={onShowModal}
          role="button"
          className={styles.headerModalItem}
        >
          <img src={CloseSvg} alt="close modal" />
        </div>
      </div>
      <div className={styles.contentModalLogin}>
        <div className={styles.modalTitle}>
          <Title
            size="large"
            text={Translate('login.modal.terms.title')}
          />
        </div>
        <Title
          color="secondary"
          size="medium"
          text={Translate('login.modal.terms.content')}
        />
        <div className={styles.modalTitle}>
          <Title
            size="large"
            text={Translate('login.modal.communityCommitment.title')}
          />
        </div>
        <Title
          color="secondary"
          size="medium"
          text={Translate('login.modal.communityCommitment.content')}
        />
        <div className={styles.modalTitle}>
          <Title
            size="large"
            text={Translate('login.modal.serviceTerms.title')}
          />
        </div>
        <Title
          color="secondary"
          size="medium"
          text={Translate('login.modal.serviceTerms.content')}
        />
      </div>
    </Modal>
  </div>
)


Login.propTypes = {
  data: PropTypes.shape({
    code_access: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
  }).isRequired,
  onChange: PropTypes.func.isRequired,
  onShowModal: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  showModal: PropTypes.bool.isRequired,
}

export default Login
