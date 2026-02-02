import { useEffect } from "react";
import Route from "./routes/Index";
import axios from "axios";

function App() {
  useEffect(() => {
    // login
    // sigup
    // axios.get("backend/api/auth/me") send jwt token along witht he request
    // setu up user in redux

    let token = localStorage.getItem("accessToken");
    axios
      .get("http://localhost:3000/api/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        //
        // set up user data in redux
      });
  }, []);

  return (
    <>
      <Route />
    </>
  );
}

export default App;
