import styles from './Modal.module.css';

function Modal({ modalRef }) {

  return (
    <dialog ref={modalRef} className={styles.container}>
        <div className={styles.main}>
            <h4>Thank you for submitting the ticket!</h4>
            <span>We will work on your issue soon and keep you updated</span>
            <button className={styles.btn} onClick={() => modalRef.current.close()}>Close</button>
        </div>
    </dialog>
  )
}

export default Modal