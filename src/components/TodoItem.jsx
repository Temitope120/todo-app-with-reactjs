import styles from "./todoItem.module.css";

export default function TodoItem({ item, todos, setTodos }) {

    function handleDelete(item){
        setTodos(todos.filter((todo)=> todo !== item.name));
    }

    function completeTask(name){
    const newArray = todos.map((todo) => todo.name === name ? {...todo, done: !todo.done } : todo);
        setTodos(newArray);
        console.log(newArray

        );
        
    }

    const className = item.done ? styles.completed : "";
  return (
    <div className={styles.item}>
      <div onClick={() => completeTask(item.name)} className={styles.itemName}>
        <span className={className}> {item.name} </span>
      <span>
        <button onClick={(e) => handleDelete(item)} className={styles.deleteButton}> X</button>
      </span>
      </div>

      <hr  className={styles.line}/>
    </div>
  );
}
