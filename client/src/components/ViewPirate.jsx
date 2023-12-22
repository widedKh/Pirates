

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


import axios from 'axios';

const ViewPirate= () => {
  const [pirate, setPirate] = useState(null);
  const { id } = useParams();


  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/pirate/${id}`)
      .then(res => {
        console.log(res.data);
        setPirate(res.data.onePirate);
        
      })
      .catch(err => {
        console.log('you have an error', err);
      });
  }, [id]);



  return (
    <>
      {pirate ? (
        <div>
          <div className='nav'>
            <h1>{pirate.name}</h1>
          </div>
          <div className='container'>
            <div className='flex-container'>
              <div className='prof-left'>
                <img src={pirate.imageUrl} alt={pirate.name} />
                <h3>"{pirate.phrase}"</h3>
              </div>

              <div className='prof-right'>
                <h3>About</h3>
                <p>Position: {pirate.position}</p>
                <p>Treasures: {pirate.treasure}</p>
                <p>Peg Leg: {pirate.pegLeg ? 'Yes' : 'No'}</p>
                <p>Eye Patch: {pirate.eyePatch ? 'Yes' : 'No'}</p>
                <p>Hook Hand: {pirate.hookHand ? 'Yes' : 'No'}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

    export default ViewPirate;