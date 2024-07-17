import { useNavigate } from "react-router-dom";

export default () => {
  const navigate = useNavigate();

  return (
    <>
      <h2>HomeView</h2>
      <button onClick={() => navigate("/about")}>Go to About</button>
    </>
  );
};
