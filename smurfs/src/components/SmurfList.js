import React, { useContext } from 'react';
import DataContext from '../contexts/data';
import SmurfCard from '../components/SmurfCard';

const SmurfList = () => {

    const {data} = useContext(DataContext);
    return (
        <div>
            {data.map(item => {
            return <SmurfCard key={item.id} smurf={item}/>
            })}
        </div>
    )
}

export default SmurfList