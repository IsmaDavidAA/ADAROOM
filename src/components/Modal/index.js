import { Close, Wrapper, ModalContainer } from "./Modal.styles";

const Modal = ({ children, isOpen, closeModal }) => {
  const handleModalContainerClick = (e) => e.stopPropagation();
  return (
    <Wrapper isOpenM={isOpen} >
      <ModalContainer onClick={handleModalContainerClick}>
        <Close onClick={() => {
          closeModal()
          window.location.reload(false)}}>❌</Close>
        {children}
      </ModalContainer>
    </Wrapper>
  );
};

export default Modal;
