"use client";
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import "../styles/style.css";
import SearchIcon from '@mui/icons-material/Search';
import { DetailsModal } from '@/components/modal';
import { fetchAgeData, fetchGenderData, fetchCountryData } from '@/store/actions';

type Props = {}

const Name = (props: Props) => {

  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState(false);
  const dispatch = useDispatch();

  const handleOpen = async (event: any) =>
  {
    setOpen(true);
    event.preventDefault();
    
    if (name.trim() !== '') { 
      dispatch(fetchAgeData(name));
      dispatch(fetchGenderData(name));
      dispatch(fetchCountryData(name));
      setOpen(true);
      setNameError(false);
    } else {
      setNameError(true);
      alert('Please enter a name!');
    }
  }

  const handleClose = () => setOpen(false);

  return (
    <div className="wrapper">
      <div className="container">
        <input 
          name="Name" 
          className="input" 
          placeholder="Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)}
        /> 
        <button className="btn" onClick={handleOpen}>
          <SearchIcon sx={{fontSize:"10rem", color:"#fff", "&:hover":{color:"black"}}}/>
        </button>
      </div>

      {!nameError && <DetailsModal open={open} handleClose={handleClose} />}
    </div>
  )
}

export default Name;