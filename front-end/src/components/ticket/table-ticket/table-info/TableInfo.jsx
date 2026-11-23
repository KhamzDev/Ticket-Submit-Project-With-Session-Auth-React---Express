import styles from "../Ticket.module.css";

function TableInfo() {
  return (
    <div className={styles.table_info}>
      <div className={styles.title}>
        <span>Title</span>
      </div>
      <div className={styles.ticket_id}>
        <span>Ticket ID</span>
      </div>
      <div className={styles.priority}>
        <span>Priotity</span>
      </div>
      <div className={styles.creation_date}>
        <span>Creation Date</span>
      </div>
      <div className={styles.status}>
        <span>Status</span>
      </div>
    </div>
  );
}

export default TableInfo;
