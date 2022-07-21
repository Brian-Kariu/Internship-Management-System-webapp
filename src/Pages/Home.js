import { Link } from "react-router-dom";

function LandingPageButton() {
  return (
    <>
      <Link to="/signup" class="nav-link">
        <button class="btn btn-primary">
          <span style={{ "font-size": "24px" }}>SignUp</span>
        </button>
      </Link>
      <Link to="/signin" class="nav-link">
        <button class="btn btn-primary">
          <span style={{ "font-size": "24px" }}>SignIn</span>
        </button>
      </Link>
    </>
  );
}

function LandingFrameMessage() {
  const style = {
    margin: "auto",
    padding: "10% 35% 10% 15%",
    color: "white",
  };
  return (
    <div style={style}>
      <div style={{ "font-size": "96px" }}>Hello</div>

      <div style={{ "font-size": "36px" }}>
        Welcome to the InternManage system. To start you journey to your dream
        job, Signup. Or if you already have an account Signin.
      </div>
      <br />
      <LandingPageButton />
    </div>
  );
}
function LandingFrame() {
  const style = {
    "background-image": `url("images/backgroundimage.jpg")`,
    "background-repeat": "no-repeat",
    "background-size": "cover",
    position: "absolute",
    height: "100%",
    width: "100%",
  };
  return (
    <div style={style}>
      <LandingFrameMessage />
    </div>
  );
}
function HomePage() {
  return (
    <div>
      <LandingFrame />
    </div>
  );
}
export default HomePage;
