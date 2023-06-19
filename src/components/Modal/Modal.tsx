import classNames from "classnames";
import classnames from "../../styles/Modal.module.css";
type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

function Modal({ isOpen, onClose, children, className, ...rest }: ModalProps) {
  return (
    <div
      className={classNames(classnames.modal, {
        [classnames.open]: isOpen,
      })}
    >
      <div className={classNames(className, classnames["modal-content"])} {...rest}>
        <span className={classnames.close} onClick={onClose}>
          &times;
        </span>
        {children}
      </div>
    </div>
  );
}

export default Modal;
