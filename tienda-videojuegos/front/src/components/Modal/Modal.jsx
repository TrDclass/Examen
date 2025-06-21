import './Modal.css'

const Modal = ({Children, onClose}) => {
    return (
       <div id="myModal" className="modal">
            <div className="modal-content">
                <span className="close" onClick={()=>onClose()}>&times;</span>
                {Children && <Children />}
            </div>
        </div>
    )
}

export default Modal;