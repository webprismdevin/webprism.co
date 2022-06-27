import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import Calculator from "../Calculator";

declare interface CostModalTypes {
  buttonText: string;
}

export default function CostModal({ buttonText }: CostModalTypes) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen} variant={"outline"}>{buttonText}</Button>
      <Modal isOpen={isOpen} onClose={onClose} size={["sm", "md"]}>
        <ModalOverlay />
        <ModalContent mx={4}>
          <ModalCloseButton />
          <ModalBody>
            <Calculator />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
