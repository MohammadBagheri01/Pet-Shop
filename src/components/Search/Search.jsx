import styles from './Search.module.scss'

function Search({value,onChangeValue,onClear}) {
  return (
    <form className={styles.form}>
        <input className={styles.form__input} value={value} onChange={onChangeValue} type="text" placeholder='جستوجو' />
        {value &&  <button className={styles.form__button} onClick={onClear}>مشاهده همه</button>}
       
    </form>
  )
}

export default Search