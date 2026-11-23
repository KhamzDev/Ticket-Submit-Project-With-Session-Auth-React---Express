import styles from './Sidebar.module.css';

function Sidebar({ setPriority }) {
  return (
    <div className={styles.container}>
      <div className={styles.priority}>
        <h2>Priority:</h2>
        <div>
          <input type='radio' name='option' id='option1' onChange={() => setPriority("ALL")} />
          <label htmlFor="option1">All</label>
        </div>
        <div>
          <input type='radio' name='option' id='option2' onChange={() => setPriority("LOW")}/>
          <label htmlFor="option2">Low</label>
        </div>
        <div>
          <input type='radio' name='option' id='option3' onChange={() => setPriority("MEDIUM")}/>
          <label htmlFor="option3">Medium</label>
        </div>
        <div>
          <input type='radio' name='option' id='option4' onChange={() => setPriority("HIGH")}/>
          <label htmlFor="option4">High</label>
        </div>
        <div>
          <input type='radio' name='option' id='option5' onChange={() => setPriority("URGENT")}/>
          <label htmlFor="option5">Urgent</label>
        </div>

      </div>
    </div>
  )
}

export default Sidebar