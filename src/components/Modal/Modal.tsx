import '../../styles/Modal.css'
type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode
};

function Modal({
  isOpen,
  onClose,
  children
}: ModalProps) {
  return (
    <div className={`modal ${isOpen ? "open" : ""}`}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        {children}
      </div>
    </div>
  )
}

export default Modal