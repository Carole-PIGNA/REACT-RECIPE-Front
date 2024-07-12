import React, { useState } from 'react'
import styled from 'styled-components'
import RecipeDetail from './RecipeDetail';

function RecipeCard({title, image, resume, detail=false}) {

  const [showDetail, setShowDetail] = useState(false)
 

  const handleCardClick =() =>{
    setShowDetail(true);
  }
  const handleCloseDetail =() =>{
    setShowDetail(false);
  }
 

  return (
    <>
    <RecipeCardWrapper onClick={handleCardClick} imageurl={image}>
        <h4>{title}</h4>
        <p>{resume}</p>

    </RecipeCardWrapper>

    {showDetail && (
      <RecipeDetail
        title={title}
        image={image}
        resume={resume}
        detail={detail}
        onClose={handleCloseDetail}
      />
    )}
    </>
  );
}

const RecipeCardWrapper = styled.div`
background-image: url(${(props)=> (props.imageurl ? props.imageurl : "")});
position: relative;
background-position: center center;
background-size: cover;
background-repeat: no-repeat;
width: 300px;
height:400px;
box-shadow: 0px 5px 17px -7px rbga(0,0,0,0.75);
border-radius:10px;
margin-right:10px;
cursor:pointer;
transition: transform 100ms ease-in;
&:hover {
    transform: scale(1.07);
  }
  h4 {
    position: absolute;
    bottom: 120px;
    left: 20px;
    color: #412222;
    background-color:whitesmoke;
    border-radius:10px;

  }
  p{

    position: absolute;
    bottom: 20px;
    left: 20px;
    color: #412222;
    background-color:whitesmoke;
    border-radius:10px;
  }
`;

export default RecipeCard