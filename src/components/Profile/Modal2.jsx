import {
    Button, Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Text,
    useDisclosure
} from "@chakra-ui/react";
import { MDBInput } from "mdb-react-ui-kit";
import React, { useEffect, useState } from "react";


const OverlayOne = () => <ModalOverlay bg="none" backdropFilter="blur(10px)" zIndex={20} />;

function Modal2() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [overlay, setOverlay] = useState(null);
    const [passwordInput, setPasswordInput] = useState("");
    const [confirmPasswordInput, setConfirmPasswordInput] = useState("");
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState("");
    const [showSuccessModal, setShowSuccessModal] = useState(false);
  
    useEffect(() => {
      fetch("http://localhost:8004/user")
        .then((res) => res.json())
        .then((data) => {
          setUserData(data);
        });
    }, []);
  
    const handlePasswordChange = (e) => {
      setPasswordInput(e.target.value);
      setError("");
    };
  
    const handleConfirmPasswordChange = (e) => {
      setConfirmPasswordInput(e.target.value);
      setError("");
    };
  
    const handleEnterButtonClick = () => {
      const enteredPassword = passwordInput;
      const storedPassword = userData?.[0]?.password;
  
      if (enteredPassword === storedPassword) {
        setShowSuccessModal(true);
      } else {
        setError("Password doesn't match. Please try again.");
      }
    };
  
    const handleSaveButtonClick = () => {
      const newPassword = passwordInput;
      const confirmedPassword = confirmPasswordInput;
  
      if (newPassword !== confirmedPassword) {
        setError("Passwords don't match. Please try again.");
        return;
      }
  
      // Perform save action
      console.log("Saving...");
      onClose();
    };
  
    const handleSuccessModalClose = () => {
      setShowSuccessModal(false);
      onClose();
    };
  
    const handleModalClick = (e) => {
      e.stopPropagation();
    };
  
    const openModal = () => {
      setOverlay(<OverlayOne />);
      onOpen();
    };
  
    return (
      <>
        <Button   onClick={openModal}>Edit</Button>
        <Modal onClick={handleModalClick} isCentered isOpen={isOpen} onClose={onClose}>
          {overlay}
          <ModalContent>
            <ModalHeader>Change Password</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>Enter your old Password</Text>
              <MDBInput
                style={{ marginTop: "8px" }}
                label="Password"
                type="password"
                value={passwordInput}
                onChange={handlePasswordChange}
              />
              {error && <Text color="red" mt={2}>{error}</Text>}
            </ModalBody>
            <ModalFooter style={{ display: "flex", justifyContent: "space-between" }}>
              <Button onClick={handleEnterButtonClick}>Enter</Button>
              <Button onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
  
        {showSuccessModal && (
          <Modal onClick={handleModalClick} isOpen={showSuccessModal} onClose={handleSuccessModalClose}>
            <OverlayOne />
            <ModalContent style={{ marginTop: "200px" }} zIndex={21}>
              <ModalHeader>Change Password</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Text>Enter new Password</Text>
                <MDBInput
                  style={{ marginTop: "8px" }}
                  label="New Password"
                  type="password"
                  value={passwordInput}
                  onChange={handlePasswordChange}
                />
                <Text>Confirm Password</Text>
                <MDBInput
                  style={{ marginTop: "8px" }}
                  label="Confirm Password"
                  type="password"
                  value={confirmPasswordInput}
                  onChange={handleConfirmPasswordChange}
                />
                {error && <Text color="red" mt={2}>{error}</Text>}
              </ModalBody>
              <ModalFooter>
                <Button onClick={handleSaveButtonClick}>Save</Button>
                <Button onClick={handleSuccessModalClose}>Close</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        )}
      </>
    );
  }
  
  export default Modal2;
  
  
