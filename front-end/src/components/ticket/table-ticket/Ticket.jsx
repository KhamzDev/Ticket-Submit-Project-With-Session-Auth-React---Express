import { useNavigate } from 'react-router-dom';
import styles from './Ticket.module.css';
import TableInfo from './table-info/TableInfo';

function Ticket({ data, loading, inputValue }) {

    const navigate = useNavigate();

    const handleNavigate = (id) => {
        navigate(`/ticket/${id}`)
    }

    if(loading) return <div>Loading...</div>;
    return (
        <div className={styles.ticket_container}>

            <TableInfo />

            <div className={styles.table_content}>
                {data?.filter((t) => inputValue === "" 
                ? t 
                : t.ticket.title.toLowerCase().includes(inputValue.toLowerCase())
                ).map((item) => (
                    <div key={item.id} className={styles.ticket_div} onClick={() => handleNavigate(item.id)}>
                        <div className={styles.title}>
                            <span>{item.ticket.title}</span> 
                        </div>
                        <div className={styles.ticket_id}>
                            <span>{item.id}</span> 
                        </div>
                        <div className={styles.priority}>
                            <span>{item.ticket.priority}</span> 
                        </div>
                        <div className={styles.creation_date}>
                            <span>
                                <span>{new Date(item.createdAt).toLocaleDateString()}</span>
                                <span>{new Date(item.createdAt).toLocaleTimeString()}</span>
                            </span> 
                        </div>
                        <div className={styles.status}>
                            <span>{item.status}</span> 
                        </div>
                    </div>
                ))}
            </div>
        </div>
  )
}

export default Ticket