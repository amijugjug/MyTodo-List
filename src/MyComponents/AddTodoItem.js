import React,{useState} from 'react'

export const AddTodoItem = (props) => {
    const [title,setTitle] = useState("")
    const [desc, setDesc] = useState("")

    const submit = (e)=>{
        // e.preventDefault is used so that page do not reload while submitting. 
        e.preventDefault();
        if(!title || !desc)
            alert("Title or Description can not be blank")
        else{
            props.addTodo(title,desc);
        }
        setTitle("");
        setDesc("");
    }
    return (
            <>
            <div className='container my-3'>
                <h3>Enter item in Todo List</h3>
                <form onSubmit = {submit}>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Todo Title &nbsp;</label>
                        <input type="text" className="form-contorl" value={title} onChange={(e)=>setTitle(e.target.value)} id="title"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="desc" className="form-label">Todo Description &nbsp;</label>
                        <input type="text" className="form-contorl" value={desc} onChange={(e)=>setDesc(e.target.value)} id="desc"/>
                    </div>
                    <button type="submit" className="btn btn-sm btn-success">Add item</button>
                </form>
            </div>
            </>
    )
}