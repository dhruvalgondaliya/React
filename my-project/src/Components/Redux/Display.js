import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Delete, Edit } from "./Action";


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
            <h1 className="text-center">Display</h1>
            {
                data.map((ele, index) => {
                    return (
                        <>
                            <div className="disp">
                                
                                <div className="element" key={index}>{ele}</div>
                                <button className="add me-3 ms-2"
                                    onClick={() => {
                                        const newValue = prompt("Enter Value");

                                        if (newValue !== null) {
                                            editTodo(index, newValue);
                                        }
                                    }}
                                >
                                    Edit
                                </button>
                                <button className="add " onClick={() => deletTodo(index)}>Delete</button>
                            </div>
                        </>
                    )
                })
            }
        </div>
    )
}

export default Display;