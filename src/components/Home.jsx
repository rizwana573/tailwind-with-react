import Counter from "./Counter.jsx";
import ClickCounter from "./ClickCounter.jsx";
import HoverCounter from "./HoverCounter.jsx";

const Home = () => {
  return (
    <>
      <h1>Hii, Welcome to our site.</h1>
      {/* <Counter name="Functional Component Counter"></Counter>
      <hr className="my-4"></hr> */}
      <ClickCounter name="Class Component Counter"></ClickCounter>
       <HoverCounter name="Class Component Counter"></HoverCounter>
    </>
  );
};

export default Home;
