import {useRecoilValue} from "recoil";
import { todos } from "../Store/Todos";

export default function Todos(){
    const todo = useRecoilValue(todos)
    return(
        <>
        {todo.map(todo =>
        {
            <div key={todo.id}>
                <div>{todo.Title}</div>
                <div>{todo.Description}</div>
                <button>{todo.Complete?"Pending":"Complete"}</button>
            </div>
        }
        )}
        </>
    )
}