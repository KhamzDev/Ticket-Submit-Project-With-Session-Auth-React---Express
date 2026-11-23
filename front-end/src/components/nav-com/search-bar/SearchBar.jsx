import styles from './SB.module.css';
import searchImg from '../../../assets/searchImg.png';
import { useInputVal } from '../../../services/context/InputVal';

function SearchBar() {

    const { setInputValue } = useInputVal();
    
    return (
        <div className={styles.container}>
            <div className={styles.search}>
                <input placeholder='Enter Ticket Title...' onChange={(e) => setInputValue(e.target.value)}></input>
                <img src={searchImg} />
            </div>
        </div>
    )
}

export default SearchBar