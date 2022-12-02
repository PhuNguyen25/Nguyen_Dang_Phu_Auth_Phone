import { useState } from "react";
import { createData } from "../services/data.service";
import "../assist/style.css";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";

const Login = () => {

  const [number, setNumber] = useState("");
  const history = useHistory();

  const dataForCreate = () => {
    return {
      number: number,
    };
  };

  
  async function createNewProducts() {
      const data = dataForCreate();
      const path = "login";
      const res = await createData(path, "", data);
      console.log("Check res", res);
      if (res && res.status === 200) {
        history.push(`verify/${number}`);
      }else{
        Swal.fire("Phone must 10 digits", "", "error", ); 
      }
    
  }

  return (
    <div>
      <div className="overlay">
        <form>
          <div className="con">
            <header className="head-form">
              <h2>Verify</h2>
              <p>Input phone to verify</p>
            </header>
            <br />
            <div className="field-set">
              <input
                className="form-input"
                id="txt-input"
                type="text"
                placeholder="Input Phone Number"
                required=""
                value={number}
                onChange={(e) => {
                  setNumber(e.target.value);
                }}
              />

              <br />

              <button
                className="log-in"
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  createNewProducts();
                }}
              >
                {" "}
                Login{" "}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
