import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddPirate = () => {
  const [name, setName] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [treasure, setTreasure] = useState(0);
  const [phrase, setPhrase] = useState('');
  const [position, setPosition] = useState("");
  const [hookHand, setHookHand] = useState(true);
  const [eyePatch, setEyePatch] = useState(true);
  const [pegLeg, setPegLeg] = useState(true);
  const [errors, setErrors] = useState([]);
  
  const navigate = useNavigate(); 

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const newPirate = { name, imageUrl,treasure,phrase,position,hookHand,eyePatch,pegLeg};

    axios.post('http://localhost:5000/api/pirate/new', newPirate)
      .then(res => {
        console.log(res.data);
        console.log("CREATE SUCCESS!");
        navigate('/pirates'); 
      })
      .catch((err) => {
        const errorRes = err.response.data.error.errors;
        const errArr = [];
        console.log(errorRes);
        for (const key of Object.keys(errorRes)) {
          console.log(errorRes[key].message);
          errArr.push(errorRes[key].message);
        }
        setErrors(errArr);
        
      });
  }  
  return (
    <div>
      <div className='nav'>
      
        <h1>Add Pirate</h1>
        <button className='btn' onClick={() => navigate('/pirates')}>Crew Board</button>
      </div>
      <div className='container'>
        <form onSubmit={onSubmitHandler}>
          <div className='flex-container'>
            <div className='input-group'>
            {errors.map((err, key) => {
        return (
          <p key={key} style={{ color: "red" }}>
            {err}
          </p>
        );
      })}
              <label>Pirate name:</label>
              <input
                onChange={(e) => setName(e.target.value)} value={name} name="name" type="text" error={!!errors} />

              <label>image Url:</label>
              <input
                onChange={(e) => setImageUrl(e.target.value)} value={imageUrl} error={!!errors} />

              <label># of treasure Chests:</label>
              <input
                onChange={(e) => setTreasure(e.target.value)} value={treasure} error={!!errors} type='number' />

              <label>Pirate catch phrase:</label>
              <input
                onChange={(e) => setPhrase(e.target.value)} value={phrase} error={!!errors} />
            </div>
            <div className='input-group'>
              <label>Crew Position:</label>
              <select onChange={(e) => setPosition(e.target.value)} value={position} error={!!errors}>
                <option value="capitan">Captain</option>
                <option value="first mate">First Mate</option>
                <option value="boatswain">Boatswain</option>
                <option value="powder monkey">Powder Monkey</option>
              </select>

              <div className='checkbox'>
                <input type="checkbox" checked={hookHand} onChange={(e) => setHookHand(e.target.checked)} />
                <label>Hook Hand</label>
              </div>

              <div className='checkbox'>
                <input type="checkbox" checked={eyePatch} onChange={(e) => setEyePatch(e.target.checked)} />
                <label>Eye Patch</label>
              </div>

              <div className='checkbox'>
                <input type="checkbox" checked={pegLeg} onChange={(e) => setPegLeg(e.target.checked)} />
                <label>Peg Leg</label>
              </div>

              <button type="submit">Add Pirate</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPirate;
