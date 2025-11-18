import Counter from "./Counter.jsx";
import OldCounter from "./OldCounter.jsx";

const Home = () => {
  return (
    <>
      <h1>Hii, Welcome to our site.</h1>
      <Counter name="Functional Component Counter"></Counter>
      <hr className="my-4"></hr>
      <Counter name="Class Component Counter"></Counter>
    </>
  );
};

export default Home;
