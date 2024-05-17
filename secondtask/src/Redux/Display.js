import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Delete , Edit} from "./Action";


function Display() {
    const dispatch = useDispatch()
    const data = useSelector((state) => state.ToReducer)

    const deletTodo = (id) => {
        dispatch(Delete(id))
    };

    const editTodo = (index, newValue) => {
        const newData = [...data];
        newData[index] = newValue;
        dispatch(Edit({ index, newValue }));
    };

    useEffect(() => {
        localStorage.setItem("todolist", JSON.stringify(data));
    }, [data]);

    return (
        <div>
            <h1>Display</h1>
            {
                data.map((ele, index) => {
                    return (
                        <>
                            <li key={index}>{ele}</li>
                            <button
                                onClick={() => {
                                    const newValue = prompt("Enter Value");

                                    if (newValue !== null) {
                                        editTodo(index, newValue);
                                    }
                                }}
                            >
                                Edit
                            </button>
                            <button onClick={() => deletTodo(index)}>Delete</button>

                        </>
                    )
                })
            }
        </div>
    )
}

export default Display;