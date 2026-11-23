import Ticket from '../../../components/ticket/table-ticket/Ticket';
import useFetch from '../../../services/api/useFetch';
import { useInputVal } from '../../../services/context/InputVal';
import styles from './Display.module.css';

function Display({ priority }) {

  const { data, loading } = useFetch("http://localhost:3000/api/tickets");
  const { inputValue } = useInputVal();

  let filterData;
  if(priority === "ALL"){
    filterData = data;
  }else{
    filterData = data.filter((t) => t.ticket.priority.toUpperCase() === priority);
  }

  return (
    <div className={styles.container}>
      <Ticket data={filterData} loading={loading} inputValue={inputValue}/>
    </div>
  )
}

export default Display