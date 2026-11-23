import { useRef } from 'react';
import FetchReq from '../../services/api/FetchReq';
import styles from './TForm.module.css';
import Modal from '../../components/modals/Modal';

function TForm() {

    const { handleFetch } = FetchReq();
    const modalRef = useRef();
    
    async function handleForm(e){
        e.preventDefault();

        const formVals = e.target.elements;
        const title = formVals.title.value;
        const priority = formVals.priority.value;
        const desc = formVals.desc.value;

        await handleFetch({
            url: "http://localhost:3000/api/tickets",
            mth: "POST",
            by: {
                ticketForm: {
                    title: title,
                    priority: priority,
                    desc: desc
                }
            }
        });
        
        modalRef.current.showModal();
        e.target.reset();
    }

  return (
    <div className={styles.container}>
        <form className={styles.form} onSubmit={handleForm}>

            <div className={styles.f_div1}>
                <div>
                    <span>Title:</span> 
                    <textarea required minLength={5} maxLength={50} name='title'></textarea>  
                </div>
                <div>
                    <span>Priority:</span>
                    <select name='priority'>
                        <option>Low</option>
                        <option>Medium</option>
                        <option>high</option>
                    </select>
                </div>
            </div>

            <div className={styles.f_div2}>
                <span>Description:</span>
                <textarea required minLength={15} maxLength={700} name='desc'></textarea>
            </div>

            <button type='submit' className={styles.s_btn}>Submit</button> 
        </form>
        <Modal modalRef={modalRef} />
    </div>
  )
}

export default TForm