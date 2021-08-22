import React from 'react';
import { Button, ControlGroup, Input, Modal } from '@dtdot/lego';

export interface SignInModalProps {
  onClose: () => void;
}

const SignInModal = ({ onClose }: SignInModalProps) => {
  return (
    <Modal onClose={onClose}>
      <Modal.Header header='Sign in' />
      <Modal.Body>
        <ControlGroup variation='comfortable'>
          <Input label='Name' name='name' />
          <Input label='Email' name='email' />
          <Input label='Site' name='site' />
          <ControlGroup.Spacer />
          <Button>Go</Button>
        </ControlGroup>
      </Modal.Body>
    </Modal>
  );
};

export default SignInModal;
