import { useNavigate } from "react-router-dom";
function HomePage() {
  const navigate = useNavigate();

  function navigateHandler() {
    navigate("/products");
  }
  return (
    <>
      <h1>My home page</h1>
      <p>
        <button onClick={navigateHandler}>NAVIGATE</button>
      </p>
    </>
  );
}
export default HomePage;
