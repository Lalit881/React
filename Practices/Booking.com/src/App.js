import React, { useRef, useState } from "react";
import './App.css'
import { city } from "./City";
import { suggestCity } from "./City";
import Card from "./Card";

function SearchBar(){

  const [suggest,setSuggest] = useState([]);
  const [cityData,setCityData] = useState([]);
  const [search, setSearch] = useState([]);
  const [selectedHotel, setSelectedHotel] = useState([]);
  const inpTag = useRef();

  const handleFocus =()=>{
    setSuggest(suggestCity)
  }
  const handleBlur =()=>{
    setSuggest([]);
  }
  const handleChange = (event) => {
    const currentValue = event.target.value;
    setSearch(currentValue);
    setCityData(city.filter((v) => v.name.toLowerCase().includes(currentValue.toLowerCase())));
    setSuggest([]);

    if(inpTag.current.value==""){
      setCityData([]);
    }

  }
  const handleSuggestionClick = (cityName) => {
    setCityData([]);
    setSearch(cityName);
    setSuggest([]);
  };
  const handleCitySelect = (selectedCity) => {
    const filteredCities = city.filter((c) => (c.name === selectedCity)); // grab whole array
    const hotelDetails = filteredCities[0].HotelDetails;
    
      setSelectedHotel(hotelDetails ? Object.values(hotelDetails) : null);// extracts all the values from the hotelDetails object and returns them as an array

    };
  

  return(
    <div style={{marginLeft:"30%"}}>

      <input type="text"
      ref={inpTag}
      value={search} 
      onFocus={handleFocus}
      onBlur={handleBlur}
      onChange={handleChange} 
      ></input>
      <button onClick={()=>handleCitySelect(search)}>Search</button>

    {suggest.map((v) => (
      <li onMouseDown={() => handleSuggestionClick(v.name)}>
        {v.name}
      </li>
    ))}


      {cityData.map((v)=><li 
      onClick={()=>(
        setCityData([]),
        setSearch(v.name)
      )} >{v.name}</li>)}

      <Card hotel={selectedHotel} />
      
    </div> 
  )
}

export default SearchBar;