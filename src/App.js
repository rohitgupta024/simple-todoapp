import React, { useState } from "react"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import AddBoxIcon from '@material-ui/icons/AddBox';


function App() {
    const [inputItem, setinputItem] = useState()
    const [Item, setItem] = useState([])

    const changefun = (e) => {
        setinputItem(e.target.value)
        console.log(e.target.value)
    }
    const clickfun = () => {
        if (inputItem) {
            setItem((pre) => {
                return (
                    [...pre, inputItem]
                )
            })
            setinputItem('')
        } else {

        }
    }

    const deletefun = (id) => {
        setItem((pre) => {
            return pre.filter((elm, index) => {
                return index !== id
            })
        })
    }

    return (
        <div className="mein">
            <div className="input-group mb-3 w-50 m-auto">
                <input type="text" className="form-control" placeholder="Add list" value={inputItem} onChange={changefun} />
                <div className="input-group-append">
              
                    <button className="btn btn-dark" onClick={clickfun} >< AddBoxIcon/></button>
                </div>
            </div>
            {
                Item.map((itemmap, index) => {
                    return (<div className="listStyle">
                        <li key={index} style={{listStyle:"none"}}>{itemmap}</li>
                        <DeleteOutlineIcon onClick={() => deletefun(index)} style={{fontSize:"2rem"}}/>

                    </div>
                    )
                })
            }
        </div>
    )
}

export default App
