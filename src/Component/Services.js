import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function ClickableChips() {
    // const[video, setVideos] = useState(44)
  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  return (
    <div className='main-4' style={{
      alignItems:"center",
      margin:"-69px"
    }}>
      <Stack 
        style={{alignItems:'center',
        justifyContent:'center'}}
        direction="row" spacing={2}>
      <Chip href="#Home" style={{backgroundColor:"black", color:"white", fontWeight:"bold"}} label="Home" onClick={handleClick} />
      <Chip href="#Videos" style={{backgroundColor:'none', fontWeight:'bold', border:'none'}} label="Videos" variant="outlined" onClick={handleClick} />
      <Chip href="#Leaderboard" style={{backgroundColor:'none', fontWeight:'bold', border:'none'}} label="LeaderBoard" variant='outlined' onClick={handleClick} />
      <Chip href="#Challeges" style={{backgroundColor:'none', fontWeight:'bold', border:'none'}} label="Challenges" variant="outlined" onClick={handleClick} />
    </Stack>
    </div>
  );
}