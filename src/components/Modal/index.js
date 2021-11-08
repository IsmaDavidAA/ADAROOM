import { Close, Wrapper, ModalContainer } from "./Modal.styles";

const Modal = ({ children, isOpen, closeModal }) => {
  const handleModalContainerClick = (e) => e.stopPropagation();
  console.log(isOpen);
  return (
    <Wrapper isOpenM={isOpen} onClick={closeModal}>
      <ModalContainer onClick={handleModalContainerClick}>
        <Close onClick={closeModal}>❌</Close>
        {children}
      </ModalContainer>
    </Wrapper>
  );
};

export default Modal;
