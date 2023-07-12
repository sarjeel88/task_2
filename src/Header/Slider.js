import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Avatar from '@mui/material/Avatar';
import Image from '../Component/images/background1.jpg'


function NavScrollExample() {
  return (
  <div className='media'>
    <Navbar className='flex-container'>
        <Navbar.Brand  className='flex-container' href="#" style={{color:'white', fontWeight:'bold'}}>Pexels</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse  id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px'}}
            navbarScroll
          >
            <div className='main-3' style={{
               marginRight: '690px',
               
               
               
            }}>
            </div> 
            <div className='flex-container'>
            <NavDropdown style={{fontWeight:'bold', color:"white"}} title="Explore" id="navbarScrollingDropdown">
              <NavDropdown.Item style={{color:'gray', fontWeight:'bold'}} href="#action3">
                Discover Photo
                </NavDropdown.Item>
              <NavDropdown.Item style={{color:'gray', fontWeight:'bold'}} href="#action4">
                Popular Reserches
              </NavDropdown.Item>
              
              <NavDropdown.Item style={{color:'gray', fontWeight:'bold'}} href="#action5">
                LeaderBoard
              </NavDropdown.Item>
              <NavDropdown.Item style={{color:'gray', fontWeight:'bold'}} href="#action5">
                Challenges
              </NavDropdown.Item>
              <NavDropdown.Item style={{color:'gray', fontWeight:'bold'}} href="#action5">
                Free Videos
              </NavDropdown.Item>
              <NavDropdown.Item style={{color:'gray', fontWeight:'bold'}} href="#action5">
                Pexels Blog
              </NavDropdown.Item>
            </NavDropdown>
            </div>
            <Nav.Link href="#action2" style={{color:'white', fontWeight:'bold'}}>Licence</Nav.Link>
            <svg xmlns="http://www.w3.org/2000/svg" style={{ marginTop: "10px", color:'white',marginLeft:'13px' }} width="20" height="20" fill="currentColor" class="bi bi-bell-fill" viewBox="0 0 16 16">
              <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
            </svg>

            {/* <svg xmlns="http://www.w3.org/2000/svg" style={{ marginTop: "10px", color:'white', marginLeft:'25px' }} width="20" height="20" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
            </svg> */}
            <Avatar style={{ color:'white', marginLeft:'25px' }} alt="Profile" src={Image} />

            <Button style={{color:"white",backgroundColor:'green', fontWeight:"bold", margin:'0px 39px'}}  variant="contained" component="span">
              Upload
            </Button>
          </Nav>

        </Navbar.Collapse>
      
    </Navbar>
    </div>
  );
}

export default NavScrollExample;