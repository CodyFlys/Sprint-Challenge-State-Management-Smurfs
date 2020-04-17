import React, { useState, useContext } from 'react';
import Axios from 'axios';
import DataContext from '../contexts/data';

const SmurfForm = () => {
    const {data} = useContext(DataContext);

    const [newSmurf, setNewSmurf] = useState({name: "", age: "", height: ""})

    const submitSmurf = (event) => {
        event.preventDefault();
        Axios.post('http://localhost:3333/smurfs', newSmurf)
        .then(console.log('SMURFFFF', newSmurf))
    }

    const handleChanges = (event) => {
        setNewSmurf({...newSmurf, [event.target.name] : event.target.value})
    }

    return (
        <div className="smurfForm">
            <form onSubmit={submitSmurf}>
                <input
                className="inputField"
                type="Text" 
                placeholder="ENTER YOUR SMURF NAME!" 
                onChange={handleChanges}
                value={newSmurf.name}
                name="name"
                /><br/>

                <input 
                className="inputField"
                type="Text" 
                placeholder="ENTER YOUR SMURF AGE!" 
                onChange={handleChanges}
                value={newSmurf.age}
                name="age"
                /><br/>

                <input 
                className="inputField"
                type="Text" 
                placeholder="ENTER YOUR SMURF HEIGHT!" 
                onChange={handleChanges}
                value={newSmurf.height}
                name="height"
                /><br/>
                <input type="submit" className="submitButton"/>
            </form>
        </div>
    )
}

export default SmurfForm;