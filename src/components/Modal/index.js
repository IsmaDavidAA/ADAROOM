import { Close, Wrapper, ModalContainer } from "./Modal.styles";

const Modal = ({ children, isOpen, closeModal, hasClose = false }) => {
  const handleModalContainerClick = (e) => e.stopPropagation();
  return (
    <Wrapper isOpenM={isOpen}>
      <ModalContainer onClick={handleModalContainerClick}>
        {hasClose ? (
          <Close
            onClick={() => {
              window.location.reload(false);
            }}
          >
            ❌
          </Close>
        ) : (
          <></>
        )}
        {children}
      </ModalContainer>
    </Wrapper>
  );
};

export default Modal;
