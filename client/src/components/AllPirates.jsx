import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const AllPirates = () => {
  const [pirates, setPirates] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    axios.get('http://localhost:5000/api/pirates')
      .then(res => {
        setPirates(res.data.allPirates);
      })
      .catch(err => {
        console.log('An error occurred', err);
      });
  }, []);

  const deletePirate = (deleteId) => {
    axios.delete(`http://localhost:5000/api/pirate/${deleteId}`)
      .then(res => {
        console.log(res.data);
        console.log("DELETE SUCCESS!");
        setPirates(pirates.filter((p) => p._id !== deleteId));
      })
      .catch(err => console.log(err));
  };

  return (
    <>
      <div className='nav'>
        <h1>Pirate crew</h1>
        <Link to={`/pirate/new`}>
          <button className='btn'> Add Pirate</button>
        </Link>
      </div>
      <div className='container'>
        <div className='pirates'>
          {pirates.map((p) => (
            <div key={p._id} className='pirate'>
              <img src={p.imageUrl} alt={p.name} />
              <h3>{p.name}</h3>
              <button className="btn1" onClick={() => navigate(`/pirate/${p._id}`)}>View Pirate</button>
              <button className="btn2"onClick={() => deletePirate(p._id)}>Walk the Plank</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AllPirates;
