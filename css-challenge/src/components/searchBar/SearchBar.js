import React from 'react'
import './SearchBar.css'
import { TextField } from '@material-ui/core';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import InputLabel from '@material-ui/core/InputLabel';


function SearchBar() {
  return (
    <div className="search_container">
      <div className="search_container_input">
        <TextField
          id="outlined-basic"
          variant="standard"
        
          placeholder="Search"
          InputProps={{
            startAdornment: (
              <InputAdornment position="end">
                <SearchRoundedIcon fontSize="large" style={{color: "white"}}/>
              </InputAdornment>
            ),
          }}
        />
      </div>
    </div>
  );
}

export default SearchBar
