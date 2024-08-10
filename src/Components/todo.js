import React, { useState } from 'react'
import '../App.css'

const Todo = () => {

    const [inputItem, setInputItem] = useState('');
    const [item, setItem] = useState([]);

    const itemSubmitbtn = ()=>{
        if(!inputItem){
            
        }else{
            setItem([...item, inputItem]);
            setInputItem('');
        }
    }

    const deleteItembtn=(id)=>{
        const updateItem = item.filter((elem, index)=>{
            return index !== id;
        })
        setItem(updateItem);
    }

  return (
    <div className='body'>
        <div className="container">
            <div className="todo-body">
                <div className="title">
                    <h2>ToDo List App</h2>
                    <hr />
                </div>

                <div className="input-field">
                    <input className='input' type="text" placeholder='✍️Enter Items ......' value={inputItem} onChange={(e)=>{setInputItem(e.target.value)}}/>
                    <input className='add' type="submit" value="Add" title='Add item....' onClick={itemSubmitbtn}/>
                </div>

                <div className="showItems">                   
                    {
                        item.map((elem, index)=>{
                            
                            return(
                                <div className="each-item" key={index}>
                                    
                                    <h3>{elem}</h3>
                                    <i className="fa-solid fa-trash-can" onClick={() => deleteItembtn(index) }></i>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Todo