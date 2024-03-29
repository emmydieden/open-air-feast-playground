// import OpenAiAssistant from '../components/OpenAIAssistant'
import { useEffect, useRef } from "react";
import { Spinner } from "../components/spinner/Spinner";
import { HeroSection } from "../components/heroSection/HeroSection";
import { CreateSection } from "../components/createSection/CreateSection";
import { NewRecipe } from "../components/newRecipe/NewRecipe";
import { CollectionRecipes } from "../components/collectionRecipes/CollectionRecipes";
import { recipeStore } from "../stores/recipeStore";
import "../components/collectionRecipes/collectionRecipes.css";
import "../App.css";

export const Home = () => {
  const { newRecipe, isGenerating } = recipeStore();

  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  return (
    <>
      <HeroSection />
      <CreateSection />
     
{isGenerating && <NewRecipe/>}
{newRecipe && <NewRecipe />}
      {/* Conditionally render NewRecipe only when newRecipe is truthy */}
      <CollectionRecipes />
    </>
  );
};

// {isGenerating ? (
//   <div className="spinner-container-new" ref={spinnerRef}>
//     {" "}
//     {/*CSS for spinner in App.css and collectionRecipes.css*/}
//     <Spinner/>
//     <p>Be patient, you're just a minute away from your delicious meal!</p>
//   </div>
// ) : (
//   newRecipe && <NewRecipe />
// )}{" "}
