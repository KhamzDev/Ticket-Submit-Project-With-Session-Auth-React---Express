
import { useState } from 'react';
import Display from './display/Display';
import styles from './MainPage.module.css';
import Sidebar from './sidebar/Sidebar';

function MainPage() {

  
  const [priority, setPriority] = useState("ALL");

  return (
    <div className={styles.container}>
      <Sidebar setPriority={setPriority}/>
      <Display priority={priority} />
    </div>
  )
}

export default MainPage