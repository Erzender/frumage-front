import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { withNamespaces } from 'react-i18next';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
} from 'reactstrap';
import {
  closeModal, modalTitleChange, modalDescChange, createFromModal,
} from '../duck';

const CreateModal = (props) => {
  const {
    t, onTitleChange, onDescChange, closeModalClick,
    modal, modal: { isOpen, type }, onCreateFromModal, token, topic,
  } = props;
  const modalToService = () => onCreateFromModal(type, modal, token, topic);
  return (
    <div>
      <Modal isOpen={isOpen} toggle={closeModalClick}>
        <ModalHeader toggle={closeModalClick}>{type && t(`modal.${type}Header`)}</ModalHeader>
        <ModalBody>
          <Input type="value" placeholder={type && t(`modal.${type}Name`)} onChange={onTitleChange} />
          {' '}
          <Input type="textarea" placeholder={type && t(`modal.${type}Desc`)} rows={5} onChange={onDescChange} />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={modalToService}>{t('modal.create')}</Button>
          {' '}
          <Button color="secondary" onClick={closeModalClick}>{t('modal.cancel')}</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

CreateModal.propTypes = {
  modal: PropTypes.shape({
    isOpen: PropTypes.bool,
    type: PropTypes.string,
    title: PropTypes.string,
    desc: PropTypes.string,
  }),
  closeModalClick: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
  onTitleChange: PropTypes.func.isRequired,
  onDescChange: PropTypes.func.isRequired,
  onCreateFromModal: PropTypes.func.isRequired,
  token: PropTypes.string.isRequired,
  topic: PropTypes.string,
};

CreateModal.defaultProps = {
  modal: { isOpen: false },
  topic: 1,
};

const mapDispatchToProps = dispatch => ({
  onTitleChange: e => dispatch(modalTitleChange(e.target.value)),
  onDescChange: e => dispatch(modalDescChange(e.target.value)),
  closeModalClick: () => dispatch(closeModal()),
  onCreateFromModal: (type, m, token, topic) => dispatch(createFromModal(type, m, token, topic)),
});

const mapStateToProps = state => ({
  modal: state.board.modal,
  token: state.persistedReducer.token,
  topic: state.board.selectedTopic,
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withNamespaces(),
)(CreateModal);
