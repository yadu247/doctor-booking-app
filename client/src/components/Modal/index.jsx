import './modal.css';

const Modal = ({ text, showmodal, setModal, onOk }) => {
  return (
    <div
      style={{ display: showmodal ? 'block' : 'none' }}
      className="modal-cover"
    >
      <div
        className="cover"
        onClick={() => {
          setModal(false);
        }}
      ></div>

      <div className="modal">
        <p>{text}</p>
        <div className="controls">
          <button
            onClick={() => {
              setModal(false);
            }}
          >
            No
          </button>
          <button
            onClick={() => {
              onOk();
              setModal(false);
            }}
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
