import Main from "../../components/Main";
import Title from "../../components/Title";
import { CheckSituation } from "../../utils/checkSituation";
import icon from '../../assets/helmet.png';
import Header from "../../components/Header";
import { useState, useEffect } from "react";
import {v4 as uuidv4} from 'uuid';
import TodoList from "../../components/TodoList";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";

function TodoListPage() {
    const [todoName, setTodoName] = useState("");
    const [todos, setTodos] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [selectedTodoIds, setSelectedTodoIds] = useState([]);
    const [editedTodoId, seteditedTodoId] = useState();
    const [editedName, setEditedName] = useState('');


    const handleAllDelete = () => {
        setTodos([]);
    }

    const handleTodoName = ({target: {value}}) => {
        setTodoName(value);
    }

    const handleKeyPress = (event) => {
        if (event.keyCode === 13) {
            addTodo();
        }
      };

    const handleSearchValue = ({target: {value}}) => {
        setSearchValue(value)
    } 

    const handleEditedName = ((name) => {
        setEditedName(name);
    })

    const toggleEditTodo = (id) => {
        seteditedTodoId(prevState => (prevState === id ? undefined : id));
    }

    const handleDeleteTodo = (id) => {
        setTodos(prevState => {
            const filterTodos = [...prevState].filter(todo => todo.id !== id);
            return filterTodos;
        })
    }

    const addTodo = () => {
        todoName && setTodos((prevState) => [{id: uuidv4(), name: todoName}, ...prevState]);
    }

    const editTodo = () => {
        setTodos((prevState) => {
            return prevState.map(({id, name}) => {
                if (id === editedTodoId) {
                    return {id, name: editedName};
                }
                return {id, name};
            })
        });
        seteditedTodoId(undefined);
        setEditedName('');
    }

    useEffect(() => {
        setTodoName('');
    },[todos])

    let is = CheckSituation();

    return (
        <>
            <Header type={is} borderWidth={100}/>
            <Main>
                <div className={is + "-box"}>
                    <Title type={is} title="투두리스트" icon={icon} contents="스케줄을 작성해 보세요!"/>
                    <div className={is + "-input-create"}>
                            <input value={todoName} onChange={handleTodoName} onKeyUp={handleKeyPress} placeholder="오늘의 스케줄을 적어 보세요!"/>
                            {is === "pc" ? <button onClick={addTodo}>+</button> : ""}
                    </div>
                    <div className={is + "-todoList-box"}>
                        <div className={is + "-todosList-box-input"}>
                            <input onChange={handleSearchValue} placeholder="스케줄 검색"/>
                            {is === "pc" ? <button onClick={handleAllDelete}>모두 삭제</button> : ""}
                        </div>
                        <TodoList is={is} todos={todos} searchValue={searchValue} deleteTodo={handleDeleteTodo} setSelectedTodoIds={setSelectedTodoIds} toggleEditTodo={toggleEditTodo} editedTodoId={editedTodoId} setEditedName={handleEditedName} editTodo={editTodo}/>
                    </div>
                    {is === "pc" ?
                        <div className={is + "-router-box flex-center-center"}>
                            <Link to="/"><button className={is + '-router-button'}>홈 &#62;</button></Link>
                            <Link to="/abti"><button className={is + '-router-button'}>군비티아이 &#62;</button></Link>
                            <Link to="/testSite"><button className={is + '-router-button'}>시험장 검색 &#62;</button></Link>
                        </div>
                        :
                        ""
                    }   

                </div>
            </Main>
            {is !== "pc" ? <Footer /> : ""}
        </>
    );
}

export default TodoListPage;