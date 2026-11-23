import { useParams } from 'react-router-dom';
import styles from './TicketView.module.css';
import useFetch from '../../services/api/useFetch';
import TicketClick from '../../components/ticket/ticket-click/TicketClick';

function TicketView() {

  const { id } = useParams();
  const { data, loading } = useFetch(`http://localhost:3000/api/tickets/${id}`);

  return (
    <div className={styles.container}>

        {loading ? <div>Loading...</div> : <TicketClick data={data} />};
    </div>
  )
}

export default TicketView