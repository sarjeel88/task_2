import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function SelectSmall() {
  const [age, setAge] = React.useState('');

  const handleChange = (event: electChangeEvent) => {
    setAge(event.target.value);
  };

  return (
   <div style={{
    backgroundColor:"red"
   }}>
    <div>
    <h2 style={{
        paddingTop:"312pxpx",
        fontWeight:"bold",
        float:"left",
        padding:"143px 10px"
        // margin:"353px 1px",
        // backgroundColor:"red"

    }}>Free Stock Photos</h2>
    </div>
    <FormControl style={{
        float:"right",
        margin: '-48px 40px',
        top:"190px"
    }} sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">Trending</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={age}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>Trending</em>
        </MenuItem>
        <MenuItem>New</MenuItem>
        <MenuItem>Following</MenuItem>
      </Select>
    </FormControl>
    </div>
  );
}