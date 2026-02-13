import { useEffect, useState } from "react";
import Route from "./routes/Index";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { login } from "./redux/slice/userSlice";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {

    
    axios.get("http://localhost:8000/api/packages")


    let token = localStorage.getItem("accessToken");
    

    axios
      .get("http://localhost:3000/api/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        dispatch(login(res.data.data));
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="flex h-screen items-center justify-center">
          <p className="text-3xl">Loading: .......</p>
        </div>
      ) : (
        <>
          <Route />
          <ToastContainer />
        </>
      )}
    </>
  );
}

export default App;
