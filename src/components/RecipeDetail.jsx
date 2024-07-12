import React from 'react'
import styled from 'styled-components';

function RecipeDetail({title, image, detail, onClose}) {
  return (
    <>
         <RecipeDetailWrapper>
            <h2>{title}</h2>
            <img src={image} alt={title} />
            <div dangerouslySetInnerHTML={detail}/>
            <button onClick={onClose}>Fermer</button>

         </RecipeDetailWrapper>
    </>
  )
}

const RecipeDetailWrapper = styled.div`
  padding: 20px;
  background-color: #fff;
  box-shadow: 0px 5px 17px -7px rgba(0, 0, 0, 0.75);
  border-radius: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  max-width: 80%;
  text-align: center;

  h2 {
    color: #412222;
  }

  img {
    max-width: 100%;
    border-radius: 10px;
    margin-top: 10px;
  }

  p {
    color: #412222;
  }

  button {
    background-color: #412222;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #634f4f;
    }
  }
`;

export default RecipeDetail