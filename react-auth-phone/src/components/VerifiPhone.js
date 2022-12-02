import { React, useState } from "react";
import { createData } from "../services/data.service";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";
import "../assist/style.css";

const Verify = () => {
  const [otp, setOtp] = useState("");
  const [numbers, setNumbers] = useState({
    number: "",
  });

  let { number } = useParams();
  
  const dataForCreate = () => {
    return {
      number: number,
      otp: otp,
    };
  };
  

  async function createNewProducts() {
    
      const data = dataForCreate();
      const path = "signup";
      const res = await createData(path, "", data);
      console.log("Check res", res);
      if (res && res.status === 200) {
        Swal.fire("Login Success", "", "success");
      } else {
        Swal.fire("Otp is wrong", "", "error", );  
      }
  }
  console.log("check", number);
  const handleUpdate = (e) => {
    setNumbers({ ...numbers, [e.target.number]: e.target.value });
  };

  return (
    <div>
      <div className="overlay">
        <form>
          <div className="con">
            <header className="head-form">
              <h2>Input Otp</h2>
              <p>Input opts to verify</p>
            </header>
            <br />
            <div className="field-set">
              <input
                className="form-input"
                id="txt-input"
                type="number"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              
                name="number"
                required
                value={number}
                onChange={(e) => handleUpdate(e)}
              />

              <br />

              <input
                className="form-input"
                id="txt-input"
                type="text"
                placeholder="Input Your Otp"
                required=""
                value={otp}
                onChange={(e) => {
                  setOtp(e.target.value);
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
                Log In{" "}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Verify;
