import classnames from '../../styles/Modal.module.css'
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
    <div className={`${classnames.modal} ${isOpen ? classnames.open: ""}`}>
      <div className={classnames['modal-content']}>
        <span className={classnames.close} onClick={onClose}>
          &times;
        </span>
        {children}
      </div>
    </div>
  )
}

export default Modal