import React from 'react'
import logo from '../assets/logo.png'
import styled from 'styled-components';
import {IconButton } from '@mui/material';
import { Add, ExpandMore, Forum, Notifications, Search } from '@mui/icons-material';

function Header() {
  return (
    <HeaderWrapper>
        <HeaderLeft>
            <img src={logo} alt="logo" />
        </HeaderLeft>
        <HeaderInput>
            <Search />
            <input type="text" placeholder=" Recherche" />
        </HeaderInput>
        <HeaderCenter>
            <div className="header__title" > Recipe-by-Aimée </div>
        </HeaderCenter>

        <HeaderRight>
           
            <IconButton>
                <Add/>
            </IconButton>
            <IconButton>
                <Forum/>
            </IconButton>
            <IconButton>
                <Notifications/>
            </IconButton>
            <IconButton>
                <ExpandMore/>
            </IconButton>
        </HeaderRight>
    </HeaderWrapper>
  )
}


const HeaderWrapper = styled.div`
width:100%;
display:flex;
padding: 15px 20px; 
justify-content: space-between;
align-items: center; 
position: sticky; 
background-color: #412222; 
`;

const HeaderLeft = styled.div`
display: flex;
justify-content: space-evenly;
img  {
    height: 60px;
}
`;

const HeaderInput = styled.div`
display: flex;
align-items:center;
background-color: #eff2f5;
padding: 10px;
margin-left: 10px;
border-radius: 33px;
input  {
    border: none;
    background-color: transparent;
    outline-width: 0;
}
`;
const HeaderRight = styled.div`
display: flex;
.header__info{
    display:flex;
    align-items: center;
    h4{
        margin-left:10px;
    }
}
`;

const HeaderCenter = styled.div`
 @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&display=swap');
 font-family: 'Libre Baskerville', serif;
width: 800px;
display: flex;
flex:1;
justify-content:center;
color: whitesmoke;
font-size:30px;
font-weight: 600;
font-style: italic;


`;
export default Header