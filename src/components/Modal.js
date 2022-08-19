import { useDispatch, useSelector } from "react-redux";
import { setOpen } from "../redux/features/modalSlice";

function Modal(props) {
  const dispatch = useDispatch();
  const { isOpen, current } = useSelector((state) => state.modal);

  const closeHandler = (e) => {
    if (e.target.getAttribute("class") === "modal") {
      dispatch(setOpen(false));
    }
  };

  return isOpen && props.current === current ? (
    <div className="modal" onClick={closeHandler}>
      <div className="modal__body">{props.children}</div>
    </div>
  ) : (
    ""
  );
}

export default Modal;
