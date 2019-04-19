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
  // Label,
  // Form,
  // FormGroup,
} from 'reactstrap';
import {
  closeModal, modalTitleChange, modalDescChange, createTopic,
} from '../duck';

const CreateModal = (props) => {
  const {
    t, type, onTitleChange, onDescChange, closeModalClick,
    modal, modal: { isOpen }, createFromModal,
  } = props;
  // console.log(modal);
  // console.log(isModalOpen);
  const modalToService = () => createFromModal(type, modal);
  return (
    <div>
      <Modal isOpen={isOpen} toggle={closeModalClick}>
        <ModalHeader toggle={closeModalClick}>{t(`modal.${type}Header`)}</ModalHeader>
        <ModalBody>
          <Input type="value" placeholder={t(`modal.${type}Name`)} onChange={onTitleChange} />
          {' '}
          <Input type="textarea" placeholder={t(`modal.${type}Desc`)} rows={5} onChange={onDescChange} />
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
    title: PropTypes.string,
    desc: PropTypes.string,
  }),
  closeModalClick: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
  type: PropTypes.string,
  onTitleChange: PropTypes.func.isRequired,
  onDescChange: PropTypes.func.isRequired,
  createFromModal: PropTypes.func.isRequired,
};

CreateModal.defaultProps = {
  modal: { isOpen: false },
  type: 'topic',
};

const mapDispatchToProps = dispatch => ({
  onTitleChange: e => dispatch(modalTitleChange(e.target.value)),
  onDescChange: e => dispatch(modalDescChange(e.target.value)),
  closeModalClick: () => dispatch(closeModal()),
  createFromModal: () => dispatch(createTopic()),
});

const mapStateToProps = state => ({
  modal: state.board.modal,
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withNamespaces(),
)(CreateModal);
