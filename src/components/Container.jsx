import styles from "./Container.module.css"
function Container(Props)
{

    return(
        <div className={styles.itemContainer}>
            {Props.children}
        </div>
    )
}
export default Container