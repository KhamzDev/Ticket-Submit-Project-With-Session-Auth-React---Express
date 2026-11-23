import styles from "./TC.module.css";
import TicketDetails from "./ticket-com/TicketDetails";

function TicketClick({ data }) {
    return (
        <div className={styles.ticket}>
            <div className={styles.div1}>
                <div className={styles.t_id}>
                    <span>Ticket #{data?.id}</span>
                </div>
                <div className={styles.deadline}>
                    <span>Priotity: {data?.ticket.priority}</span>
                    <span>Status: {data?.status}</span>
                </div>
            </div>

            <div className={styles.div2}>
                <TicketDetails data={data} />
            </div>
        </div>
    );
}

export default TicketClick;
