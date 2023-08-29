import { BrowserRouter, Routes, Route } from "react-router-dom";
import Acceuill from "./Components/Pages/Acceuill/Acceuill";
import HomeLayout from "./Components/Layout/HomeLayout/HomeLayout";
import Login from "./Components/Pages/Login/Login";
import Signup from "./Components/Pages/Signup/Signup";

import Filieres from "./Components/Pages/Filiere/Filieres";
import CoursFilieres from "./Components/Pages/CoursFiliere/CoursFilires";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Acceuill />} />
          <Route path="filiere" element={<Filieres />} />
          <Route path="cours" element={<CoursFilieres />} />
          <Route path="login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
