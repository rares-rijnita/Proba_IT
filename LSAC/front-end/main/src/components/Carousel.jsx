import React, { useState, useEffect } from "react";
import "./CarouselStyle.css";
import "./../styles/AllStyles.css";
import "./../styles/Homepage.css";
import linie from './../assets/linie.svg';

const RecipeCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {}, []);

  const nextRecipe = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % recipes.length);
  };

  const prevRecipe = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + recipes.length) % recipes.length);
  };

  return (
    <div className="carousel-container">
      <h2 className="carousel-title">Top Rated Recipes</h2>
      <div className="carousel-wrapper">
        <button className="carousel-button prev-btn" onClick={prevRecipe}>
          ❮
        </button>
        <div className="carousel">
          {recipes.map((recipe, idx) => (
            <div
              key={idx}
              className={`carousel-item ${idx === activeIndex ? "active" : "hidden"}`}
            >
              <img src={`http://localhost:5000${recipe.image}`} alt={recipe.title} />
              <img className="linie" src={linie} alt="linie" />
              <div className="info">
                <p className="recipe-title">{recipe.title}</p>
                <div className="ratings">
                  {"★".repeat(recipe.ratings)}
                  {"☆".repeat(5 - recipe.ratings)}
                </div>
                <p className="additional-info">Number of Ratings</p>
                <p className="rating-count">{recipe.nrratinguri}</p>
                <p className="additional-info">Author:</p>
                <p className="author">{recipe.author}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-button next-btn" onClick={nextRecipe}>
          ❯
        </button>
      </div>
    </div>
  );
};

export default RecipeCarousel;