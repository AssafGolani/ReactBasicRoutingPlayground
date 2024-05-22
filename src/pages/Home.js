import { Link } from "react-router-dom";
function HomePage() {
  return (
    <>
      <h1>My home page</h1>
      <p> Go To</p> <Link to="/products">the list of products</Link>
    </>
  );
}
export default HomePage;
