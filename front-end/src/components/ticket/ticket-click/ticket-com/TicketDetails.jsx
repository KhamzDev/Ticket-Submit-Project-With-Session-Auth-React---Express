import styles from "../TC.module.css";

function TicketDetails({ data }) {

  return (
    <div className={styles.ticket_details}>
      <div className={styles.t_title}>
        <h4>Title:</h4>
        <span>{data?.ticket?.title}</span>
      </div>
      <div className={styles.t_desc}>
        <h4>Description:</h4>
        <span>{data?.ticket?.desc}</span>
      </div>
      <div className={styles.t_creation}>
        <h4>Created by:</h4>
        <span>{data?.user.user},</span>
        <span>{data?.user.company},</span>
        <span>{new Date(data?.createdAt).toLocaleDateString()}</span>
        <span>{new Date(data?.createdAt).toLocaleTimeString()}</span>
      </div>
    </div>
  );
}

export default TicketDetails;
