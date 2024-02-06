import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
/* eslint-disable react/prop-types */
export const ToastNotification = ({
  showToast,
  toggleShowA,
  toastColor,
  toastData,
  time,
}) => {
  return (
    <div>
      <ToastContainer
        className="p-3"
        position={"top-end"}
        style={{ zIndex: 1 }}
      >
        <Toast show={showToast} onClose={toggleShowA}>
          <Toast.Header>
            x<div className={toastColor}></div>
            <strong className="me-auto .bg-success">Notification</strong>
            <small>{time === "" ? "now" : time}</small>
          </Toast.Header>
          <Toast.Body className={toastColor}>
            {toastData ? toastData : ""}
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
};
