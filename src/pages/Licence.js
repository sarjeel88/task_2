import React from 'react'
import '../assets/legil.css'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Picture from '../Component/images/pic12.jpeg'
import Picture1 from '../Component/images/pic13.jpeg'
import Picture4 from '../Component/images/pic15.jpeg'
// import Header from '../pages/Header'
import Footer from './Footer';
// import Main from '../Header/Main'

const Licence = () => {
  return (
    <div>
    {/* <Main /> */}
   
    <div className='section-1' style={{
        alignItems:"center"
    }}>
    <Stack direction="row" spacing={2} style={{
        width:"87px",
        alignItems:"center",
        margin:"10px 392px"
    }}>
      <Chip  style={{
        fontWeight:"bold",
        border:"none"
      }}  label="About Us" variant="outlined" />
      <Chip style={{
         backgroundColor:"black",
         color:"white",
        fontWeight:"bold",
        border:"none"
      }} label="Licence" variant="outlined" />
      <Chip  style={{
        fontWeight:"bold",
        border:"none"
      }}  label="FAQ" variant="outlined" />
    </Stack>
    <div>
        <h1 style={{
            textAlign:"center",
            marginTop:"59px",
            marginLeft:"-72px",
            color:"#2c343e",
            fontWeight:"bold",

        }}>
        Legal Simplicity
        </h1>
        <p style={{
            textAlign:"center",
            fontWeight:"bold",
            fontSize: "30px",
            color:"#2c343e"

        }}>
        All photos and videos on Pexels can be <br /> downloaded and used for free.
        </p>
        <h2 style={{
            textAlign:"center",
            marginTop:"59px",
            marginLeft:"-72px",
            color:"#2c343e",
            fontWeight:"bold",
        }}>What is Allowed?👌</h2>


        <h5 style={{
            borderColor:"gray",
            fontWeight:"bold",
            borderStyle:"solid",
            borderRadius:"10px",
            // fontWeight:"600",
            padding:"23px 105px",
            margin:"40px"
        }}>All photos and videos on Pexels are free to use.</h5>
        <h5 style={{
            borderColor:"gray",
            fontWeight:"bold",
            borderStyle:"solid",
            borderRadius:"10px",
            // fontWeight:"600",
            padding:"23px 105px",
            margin:"40px"
        }}>Attribution is not required. Giving credit to the photographer or Pexels is not <br /> necessary but always appreciated.</h5>
        <h5 style={{
            borderColor:"gray",
            fontWeight:"bold",
            borderStyle:"solid",
            borderRadius:"10px",
            // fontWeight:"600",
            padding:"23px 105px",
            margin:"40px"
        }}>You can modify the photos and videos from Pexels. Be creative and <br /> edit them as you like.</h5>

<h2 style={{
            textAlign:"center",
            marginTop:"59px",
            marginLeft:"-72px",
            color:"#2c343e",
            fontWeight:"bold",
        }}>What is not Allowed?👎</h2>
        <h5 style={{
            borderColor:"gray",
            fontWeight:"bold",
            borderStyle:"solid",
            borderRadius:"10px",
            // fontWeight:"600",
            padding:"23px 105px",
            margin:"40px"
        }}>Identifiable people may not appear in a bad light or in a way that is offensive.</h5>
        <h5 style={{
            borderColor:"gray",
            fontWeight:"bold",
            borderStyle:"solid",
            borderRadius:"10px",
            // fontWeight:"600",
            padding:"23px 105px",
            margin:"40px"
        }}>Don't sell unaltered copies of a photo or video, e.g. as a poster, print or on a <br /> physical product without modifying it first.</h5>
        <h5 style={{
            borderColor:"gray",
            fontWeight:"bold",
            borderStyle:"solid",
            borderRadius:"10px",
            // fontWeight:"600",
            padding:"23px 105px",
            margin:"40px"
        }}>Don't imply endorsement of your product by people or brands on the  <br /> imagery.</h5>
         <h5 style={{
            borderColor:"gray",
            fontWeight:"bold",
            borderStyle:"solid",
            borderRadius:"10px",
            // fontWeight:"600",
            padding:"23px 105px",
            margin:"40px"
        }}>Don't redistribute or sell the photos and videos on other stock photo or  <br /> wallpaper platforms.</h5>
       

    </div>
    <div className='headerside1' style={{
        backgroundColor:"#f7f7f7",
        maxWidth:"1300px"
    }}>
        <h2 style={{
            textAlign:"center",
            marginTop:"59px",
            marginLeft:"-72px",
            color:"#2c343e",
            fontWeight:"bold",
        }}>Tell your story with imagery</h2>
        <h5 style={{
            borderColor:"gray",
            fontWeight:"bold",
            padding:"23px 105px",
            margin:"0px 212px"
        }}>Some of the use cases for which you can use <br /> photos and videos from Pexels.</h5>
        <img className='pictures-1' src={Picture} alt='main-1' />
        
        <h3 style={{
            float:"right",
            margin:"67px"
        }}>On your website, blog or app</h3>
        <h3 style={{
            float:"right",
            margin:"-263px 36px",
            fontSize:'18px'
        }}>Use the photos and videos online – whether it’s a <br /> website, e-commerce shop, newsletter, e-book,<br /> presentation, blog or a template you sell.</h3>
         <div style={{
            backgroundColor: '#f7f7f7'
         }}>
            <div>
            <img className='pictures-1' style={{
                float:'right',
                width:"518px",
                height:"450px", 
                }} src={Picture1} alt='blog' />
                <div>
                    <h2 style={{
                        margin:"0px 99px",
                        padding:"199px 19px"
                    }}>

                    Promote your product
                    </h2>
                    <h5 style={{
                        margin:"-168px 89px"
                    }}>
                    Create unique ads, banners and marketing <br /> campaigns with photos from Pexels and promote <br />  your product.
                    </h5>
                </div>
               
                </div>
                
         </div>
         
    </div>
    <div>
         <img className='pictures-1' src={Picture4} alt='main-1' />
        
        <h3 style={{
            float:"right",
            margin:"67px"
        }}>On your website, blog or app</h3>
        <h3 style={{
            float:"right",
            margin:"-362px 39px",
            fontSize:'18px'
        }}>Use the photos and videos online – whether it’s a <br /> website, e-commerce shop, newsletter, e-book,<br /> presentation, blog or a template you sell.</h3>
    </div>
    <div style={{
        margin:"77px 422px"
    }} >
    <button style={{
        backgroundColor:"#059377",
        marginLeft:"-82px"
    }} type="button" class="btn btn-primary btn-lg">Upload Your Own Photos</button>
    <button style={{
        backgroundColor:"#059377",
        position:"absolute",
        margin:"0px 14px",
        background:"none",
        color:"black",
        fontWeight:"bold"
    }} type="button" class="btn btn-primary btn-lg">Upload Your Own Photos</button>
    </div>
    <Footer />
    </div>
    </div>
    
  )
}

export default Licence