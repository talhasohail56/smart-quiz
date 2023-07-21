import {
    Button,
    Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text,
    useDisclosure
} from '@chakra-ui/react';
import React from 'react';
import Modal2 from './Modal2';


const OverlayOne = () => (
  <ModalOverlay
    bg='none'
    backdropFilter='blur(10px)'
  />
);
const handleModalClick = (e) => {
    e.stopPropagation(); // Prevent closing modal on backdrop click
  };
function ModalSure() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);

  return (
    <>
      <Button
        onClick={() => {
          setOverlay(<OverlayOne />);
          onOpen();
        }}
      >
        Use Overlay one
      </Button>
      <Modal onClick={handleModalClick}  isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader>Change Password</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Do you want to change password!</Text>
          </ModalBody>
          <ModalFooter style={{display:"flex",justifyContent:"space-between"}}>
          <Modal2/>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      </>
  );
}

export default ModalSure;
