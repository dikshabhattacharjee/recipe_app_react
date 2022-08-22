import React from 'react'

export const Recipe = ({title,img,cal,ingredients}) => {
  return (
    <div>
      <h2>{title}</h2>
      <ol>
        {/* {ingredients.map(ingredient=>(
            <h1>{ingredient.text}</h1>
        ))} */}
      </ol>
      <p>{cal}</p>
      <img src={img}></img>
    </div>
  )
}

//export  Recipe
