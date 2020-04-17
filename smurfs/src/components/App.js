import React, { Component, useState, useEffect, useContext } from "react";
import "./App.css";
import axios from 'axios';

import DataContext from '../contexts/data';
import SmurfList from './SmurfList';
import SmurfForm from "./SmurfForm";


function App () {

  const [data, setData] = useState([])
  const [smurf, setSmurf] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3333/smurfs')
    .then(response => {
      setData(response.data)
      console.log(response)
    })
  }, [data])

    return (
      <div className="App">
        <DataContext.Provider value={{data}}>
          <SmurfForm />
          <SmurfList />
        </DataContext.Provider>
      </div>
    );
}

export default App;