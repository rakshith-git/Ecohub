import { Button } from '@mui/material'
import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import logo from '../images/logo.PNG';
const Navbar = ({ type }) => {
    const navigate = useNavigate();

    // if (type == 'user')
    //     return (
    //         <div>User navbar</div>
    //     )
    // else {
        var size;
        if(type==='user'){
                size='15rem'
            }
            else{size='25rem'}
        return (
            

            <div
            
                style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: '', alignItems: 'center', marginTop: '10px' }}>
                
                <Link to='/'>
                    <img src={logo} alt='no img' />
                </Link>
                <div className='menu' flex={1} style={{
                    display: 'flex', alignItems: 'center', fontFamily: 'Inter',
                    fontWeight: '800',
                    fontSize: '25px',
                     backgroundColor: '', justifyContent: 'space-between',
                    alignContent: 'center',
                    width:`${size}`



                }}>
                    <Link to='/services' style={{ textDecoration: 'none', color: '#FFFFFF' }}>Services</Link>
                    <Link to='/blog' style={{ textDecoration: 'none', color: '#FFFFFF' }}>Blog</Link>
                    {type==='home'&&<Button  style={{
                        backgroundColor: '#4E9F3D',
                        borderRadius: '19px', color: 'white', fontFamily: 'Inter'
                        , fontWeight: '800', fontSize: '25px', paddingLeft: '10px'
                        , fontVariant: 'none',
                        textTransform:'capitalize',
                        paddingLeft:'15px',
                        paddingRight:'15px',
                        paddingTop:'0',
                        paddingBottom:'0',
                        filter:'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.5))',
                        
                        
                    }} onClick={() => navigate('/signup')}>
                        Signup</Button>}
                </div>

            </div>
        );
                }        
    
// }

export default Navbar