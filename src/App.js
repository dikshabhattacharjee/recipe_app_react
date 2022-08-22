import {Recipe} from './Recipe';
import logo from './logo.svg';
import './App.css';
import React,{useEffect , useState} from 'react';
//import {Recipe} from './Recipe';
  const APP_ID='68d8a05a';
  const APP_KEY='398638cd957b2df87d8c8f803021f30d';

const App=()=>{
  const[recipes,setRecipes]=useState([]);
  const [search,setSearch]=useState("");
  const [query,setQuery]=useState("chicken");
  
  useEffect(()=>{
    getRecipes();
    
  },[query]);
  const getRecipes= async ()=>{
    const response= await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data=await response.json();
   // console.log(data);
   setRecipes(data.hits);
    //console.log(data.PromiseResults.hits);
  }
  const changeInput=e=>{
    setSearch(e.target.value);

  }
  const finalSubmit=e=>{
    e.preventDefault();
    setQuery(search);
    setSearch("");

  }

  return (
    <div className="App">
      <form onSubmit={finalSubmit}>
        <input className="search-form" type="text" value={search} onChange={changeInput}></input>
        <button className="search-bar" type="submit" >Search</button>
      </form>
      {recipes.map(recipe=> (
   <Recipe key={recipe.recipe.label}title={recipe.recipe.label} img={recipe.recipe.image} cal={recipe.recipe.calories} ingredients={recipe.recipe.ingredients}/>
      )

      )}
      
      
    </div>
  );
};

export default App;
