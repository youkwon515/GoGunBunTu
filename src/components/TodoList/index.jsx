
import Todo from '../Todo';

function TodoList({todos, searchValue, deleteTodo, setSelectedTodoIds, toggleEditTodo, editedTodoId, setEditedName, editTodo}) {
    return (
        <ul className='overflow-scroll'>
            {todos.
            filter(({name}) => name.includes(searchValue))
            .map(({id, name}) => {
                const handleDeleteTodo = () => {
                    deleteTodo(id);
                };

                const handleSelected = (checked) => {
                    if (checked) {
                        setSelectedTodoIds((prevState) => [...prevState, id]);
                    } else {
                        setSelectedTodoIds((prevState) => 
                            prevState.filter((prevId) => prevId !== id)
                        );
                    }
                };

                const handleEditTodo = () => {
                    toggleEditTodo(id);
                }

                const isEdit = editedTodoId === id;

                return (
                    <div>
                        <Todo 
                            key={id} 
                            name={name}
                            deleteTodo={handleDeleteTodo} 
                            handleSelected={handleSelected}
                            toggleEditTodo={handleEditTodo}
                            isEdited={isEdit}
                            setEditedName={setEditedName}
                            editTodo={editTodo}
                        />
                    </div>
                );
            })}
        </ul>
    );
}

export default TodoList;