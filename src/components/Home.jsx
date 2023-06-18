import React from 'react'
import bgImage from '../images/bg.png';
import Spline from '@splinetool/react-spline';
const Home = () => {
  return (
    <div className='main-div'>
            <div style={{height:'auto',zIndex:"-1",position:'absolute',left:'50%',top:'50%',transform:'translate(-50%,-50%)'}}>
            <Spline scene="https://prod.spline.design/CktNnBRu6qIyzwwS/scene.splinecode" />
            
  
  
  
</div>

      {/* <img src={require('E:/eco_hub/src/images/bg.png')}
        style={{

          width: '70%',
          position: 'absolute',
          left: '50%',
          bottom: '0%',
          transform: 'translate(-50%,0)'
        }}

      /> */}
      <div style={{
        display:'flex',
        flexDirection:'column',
        lineHeight:0,
        alignItems:'center',
        justifyContent:'center',
        fontFamily:'Inter',
        marginTop:'15%',
      }}>
        <h1 style={{color:'#4E9F3D',fontWeight:'700',fontSize:'4vw'}}>The Right Place</h1>
        
        <h1 style={{fontWeight:'800',fontSize:'4.5vw',marginTop:'7rem'}}>To Dump Your E-Waste</h1>
        
      </div>


    </div>
  )
}

export default Home