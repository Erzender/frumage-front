import React from 'react';
import PropTypes from 'prop-types';
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

const CreateModal = (props) => {
  const {
    onClose, t, type, isModalOpen,
  } = props;
  // console.log(modal);
  // console.log(isModalOpen);
  return (
    <div>
      <Modal isOpen={isModalOpen} toggle={onClose}>
        <ModalHeader toggle={onClose}>{t(`modal.${type}Header`)}</ModalHeader>
        <ModalBody>
          <Input type="value" placeholder={t(`modal.${type}Name`)} />
          {' '}
          <Input type="textarea" placeholder={t(`modal.${type}Desc`)} rows={5} />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={(onClose)}>{t('modal.create')}</Button>
          {' '}
          <Button color="secondary" onClick={onClose}>{t('modal.cancel')}</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

CreateModal.propTypes = {
  isModalOpen: PropTypes.bool,
  modal: PropTypes.shape({
    isModalOpen: PropTypes.bool,
    title: PropTypes.string,
    description: PropTypes.string,
  }),
  onClose: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
  type: PropTypes.string,
};

CreateModal.defaultProps = {
  modal: {
    isModalOpen: false,
    title: '',
    description: '',
  },
  isModalOpen: false,
  type: 'topic',
};

export default CreateModal;
