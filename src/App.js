import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./Page/Home";
import Login from "./Page/Login";

function App() {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={user === null ? <Login /> : <Navigate to="/" replace />}
        />
      </Routes>
    </>
  );
}

export default App;
