import styles from "./AddCharacter.module.css"
function AddCharacter(Props)
{
  let buttonNames=["C","/","*","Del","7","8","9","-","4","5","6","+","1","2","3","%",".","0","^","="]
  

    return(
      <div className={styles.container}>
      {buttonNames.map((B)=>(
      <button className={styles.btn} key={B} onClick={()=>Props.onButtonClick(B)}>{B}</button>

  ))}

      
  </div>
    )


}
export default AddCharacter