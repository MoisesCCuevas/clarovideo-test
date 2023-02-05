import React, { useEffect, useState, lazy, Suspense } from "react";
import { createPortal } from 'react-dom';
import '../../../theme/components/core/modal.scss';

interface ModalProps {
  activeModal: string,
  onCloseModal?: () => void
}

const LazyComponent = (modal: string) => lazy(() => import(`../../modals/${modal}`));

const Modal : React.FC<ModalProps> = (props) => {
  const {
    activeModal,
    onCloseModal
  } = props;

  const root = document.getElementById('root') as HTMLElement;

  const [ActiveModal, setActiveModal] = useState<any>();

  useEffect(() => {
    setActiveModal(LazyComponent(activeModal)); 
  }, [activeModal]);

  return createPortal(
    <React.Fragment>
      {activeModal !== '' && (
        <section className="modal">
          <i className="fas fa-times close-icon" onClick={onCloseModal} />
          <Suspense fallback={<i className="fas fa-spinner fa-spin" />}>
            <ActiveModal />
          </Suspense>
        </section>
      )}
    </React.Fragment>
  , root);
}

export default Modal;
