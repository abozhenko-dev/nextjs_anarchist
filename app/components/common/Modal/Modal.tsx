import {
  CSSProperties,
  FC,
  ReactNode,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";

import ReactDOM from "react-dom";
import { Transition } from "react-transition-group";

interface ModalProps {
  visible: boolean;
  animationDuration?: number;
  width?: number;
  cancelHandler: (value: boolean) => void;
  children: ReactNode;
}

export const Modal: FC<ModalProps> = (props) => {
  // **Props
  const {
    visible,
    animationDuration = 300,
    width = 80,
    cancelHandler,
    children,
  } = props;

  // **Local state
  const [isBrowser, setIsBrowser] = useState(false);

  const styles = {
    "--duration": `${animationDuration}ms`,
    "--width": `${width}rem`,
  };

  const closeModal = () => {
    cancelHandler(false);
  };

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  if (!isBrowser) {
    return null;
  }

  return ReactDOM.createPortal(
    <Transition
      in={visible}
      timeout={animationDuration}
      mountOnEnter
      unmountOnExit
    >
      {(state) => (
        <div
          style={styles as CSSProperties}
          className={`modal ${state}`}
          onClick={closeModal}
        >
          <div className="modal__wrapper">
            <div
              className="modal__content"
              onClick={(e) => e.stopPropagation()}
            >
              {children}
              <button
                className="modal__close"
                aria-label="Закрыть модальное окно"
                onClick={closeModal}
              ></button>
            </div>
          </div>
        </div>
      )}
    </Transition>,
    document.getElementById("root-modal")!
  );
};
