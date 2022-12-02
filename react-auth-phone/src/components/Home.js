import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="overlay">
        <form>
          <div className="con">
            <header className="head-form">
              <h2>Verify</h2>
              <p>Click to verify</p>
            </header>
            <br />
            <div className="field-set">
            <Link
                  to="/login"
                  style={{ textDecoration: "none", color: "black" }}
                >
              <button className="log-in">
                {" "}
               
                  Click to verify
                {" "}
              </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
