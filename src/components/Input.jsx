import styles from "./Input.module.css"
function Input(Props)
{
     return(
        <input type="text" className={styles.display} value={Props.CalVal} readOnly></input>
     )
}
export default Input