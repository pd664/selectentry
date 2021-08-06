import React, { useState } from 'react'
import './static/Search.css'


const Submit = () => {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [date, setDate] = useState("")
    const [copy, setCopy] = useState("")

    const host = process.env.REACT_APP_BACKEND_URL

    const add = () => {
        fetch(`${host}/submit`, {
                method: "POST",
    
                body: JSON.stringify({
                   name: name,
                   phone: phone,
                   copy: copy,
                   date: date,
                   
                }),
                 
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
            .then(response => response.json())
    }
    return (
        <>
        <div className="submitForm">
            <div className="heading">
                <h1 className="heading">ADD A ENTRY</h1>
            </div>
            <div className="Sform for">
                <form onSubmit={add} className="fom">
                    <label>Name</label>
                    <input type="text" name="name" placeholder="Enter a name" onChange={(e) => { setName(e.target.value) }}></input><br />

                    <label>Phone No.</label>
                    <input type="number" name="phone" placeholder="Enter a phone no." onChange={(e) => { setPhone(e.target.value) }}></input><br/>

                    <label>Date</label><br />
                    <input type="date" name="date" placeholder="select a date" onChange={(e) => { setDate(e.target.value) }}></input><br/>

                    <label>Copy No.</label>
                    <input type="number" name="copy" placeholder="Enter a copy no." onChange={(e) => { setCopy(e.target.value) }}></input><br/><br />

                    <input type="submit" value="Submit"></input>
                </form>
            </div>
        </div>
        </>
    )
}

export default Submit