import React ,{ useEffect,useState } from 'react';
import styled from 'styled-components'
import RecipeCard from './RecipeCard'


function RecipeList() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
      fetch('../../src/recipes.json')
        .then(response => response.json())
        .then(data => {
            setRecipes(data)
        })
        .catch(error => console.error('Error loading recipes:', error));
    }, []);
   
  return (
    <>
    <RecipesTitle>
        <div> Des recettes et des actus culinaires </div>
    </RecipesTitle>
    <RecipesWrapper>
    {recipes.map((recipe, index) => (
        <RecipeCard
          key={index}
          title={recipe.title}
          image={recipe.image}
          resume={recipe.resume}
          detail={{ __html: recipe.detail }}
        />
      ))}

    </RecipesWrapper>
    </>
  )
}

const RecipesTitle =styled.div`
@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&display=swap');
font-family: 'Libre Baskerville', serif;
display:flex;
justify-content:center;
padding-top: 2rem;
font-weight:800;
font-size:40px;


`;

const RecipesWrapper =styled.div`
padding-top: 2rem;
display:flex;
flex-direction: row;
margin-left: 50px;


`;

export default RecipeList