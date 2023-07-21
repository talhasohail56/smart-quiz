import { Box, Button, Checkbox, CheckboxIcon, Flex, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text, useDisclosure } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../SmartQuiz/components/Header";
import { outlinedClasses } from "./Classes";

function TeacherModal() {
  const { id } = useParams();
  const [teachers, setTeachers] = useState({});
  const [selectedContact, setSelectedContact] = useState(null);
  const [validationError, setValidationError] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate=useNavigate()

  useEffect(() => {
    fetch("http://localhost:8008/"+id)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setTeachers(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [id]);

  const OverlayOne = () => (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
      <ModalContent bg="transparent" boxShadow="none" p={0}>
        <Text color="white" fontSize="2xl" fontWeight={700} lineHeight="150%" w="100%" ml={6} mb={2} textAlign="center"></Text>
        {/* Add your modal content here */}
      </ModalContent>
    </Modal>
  );

  const handleProceed = (e) => {
    e.preventDefault();
    if (selectedContact === null) {
      setValidationError(true); // Show validation error if no contact is selected
    } else {
      setValidationError(false); // Clear validation error if contact is selected
      onOpen(); // Open the modal
    }
  };
  console.log(teachers)

  return (
    <>
    <Header/>
    <Flex w="100%" h="100vh" color="#19191D" alignItems="center" justifyContent="center" p={4} bg="linear-gradient(to bottom, #0c283f, #ffcd1f)">
    <Box w="100%" maxW="308px" bg="white" p={15} borderRadius={24} boxShadow="0px 8px 16px rgba(58, 58, 68, 0.12), 0px 16px 32px rgba(90, 91, 106, 0.12);" textAlign="center">
      <Text fontSize="2xl" fontWeight={700} lineHeight="150%" textAlign="center" mb={2} margin="22px">
        Select Your Teacher
      </Text>
      {Object.values(teachers).map((teacher) => (
       <Checkbox
       key={teacher.id}
       isChecked={selectedContact === teacher.name}
       onChange={() => setSelectedContact(teacher.name)}
       sx={outlinedClasses} // Apply outlinedClasses here for outlined style
       // sx={smoothClasses} // Apply smoothClasses here for smooth style
     >
          <CheckboxIcon color="white" size="1.2em" />
          <Flex alignItems="center" justifyContent="space-between">
            <Image
              borderRadius="full"
              boxSize="40px"
              src={teacher.img}
              alt={teacher.name}
              mr={2}
            />
            <Stack spacing={0}>
              <Text
                style={{ marginBottom: "5px", color: "black" }}
                letterSpacing="0.0275em"
                fontWeight={400}
                marginLeft="23px"
              >
                {teacher.name}
              </Text>
            </Stack>
          </Flex>
        </Checkbox>
      ))}
      {validationError && <Text color="red" mt={2}>Please select a contact.</Text>}
      <Button onClick={handleProceed} mt={4} width="40%" marginLeft="80px" margin="19px" bg="#0c283f" color="white">
        <b>Proceed</b>
      </Button>
    </Box>

      <OverlayOne />
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg="white" align="center" mx={4} my={8} maxWidth={["90%", "80%", "456px"]} borderRadius={8}>
          <ModalCloseButton bg="#a72828" color="white" size="lg" position="absolute" top={2} right={2} />
          <ModalHeader align="center" color="black" borderBottom="5px">Are you sure....</ModalHeader>
          <ModalBody>
            <Text color="black">Do you want to give the quiz now?</Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={()=>{
              navigate("/StudentTest")
            }} marginBottom="15px" color="#0c283f" >
              <b>START</b>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
    </>
  );
}

export default TeacherModal;
