import "./notFound.css";

export const NotFound = () => {
  return (
    <>
      <div className="not-found-hero-container">
        <img className="not-found-hero-image" src="/src/assets/hero-forest.jpg" alt="Hero Image" />
        <div className="not-found-content-box">
          <h2 className="not-found-title">Page not found!</h2>
          <p className="not-found-text">It seems like the trail to the page or recipe has gone off the map. Feel free to explore other savory paths in our recipe forest.</p>
        </div>
      </div>
    </>
  )
};
