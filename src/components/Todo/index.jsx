export default function Todo({name, deleteTodo, handleSelected, toggleEditTodo, isEdited, setEditedName, editTodo}) {
    const handleEditedName = ({target: {value}}) => {
        setEditedName(value)
    }
    return (
    <div className="todo-item">
        {isEdited ? <input className="editInput" placeholder='수정내용' defaultValue={name} onChange={handleEditedName}/> : <span>{name}</span>}
        <div className="todo-item-btns">
            {isEdited || <button onClick={toggleEditTodo}>수정</button>}
            <button onClick={isEdited ? toggleEditTodo : deleteTodo}>{isEdited ? "취소" : "삭제"}</button>
            {isEdited && <button onClick={editTodo}>완료</button>}
        </div>
    </div> 
    )
}