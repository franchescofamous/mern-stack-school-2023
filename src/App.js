import { BrowserRouter, Routes, Route } from "react-router-dom";
import Acceuill from "./Components/Pages/Acceuill/Acceuill";
import HomeLayout from "./Components/Layout/HomeLayout/HomeLayout";
import Login from "./Components/Pages/Login/Login";
import Signup from "./Components/Pages/Signup/Signup";

import Filieres from "./Components/Pages/Filiere/Filieres";
import CoursFilieres from "./Components/Pages/CoursFiliere/CoursFilires";
import AddCours from "./Components/Pages/Admin/AddCours/AddCours";
import AddFiliere from "./Components/Pages/Admin/AddFiliere/AddFiliere";
import Cours from "./Components/Pages/Cours/Cours";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Acceuill />} />
          <Route path="filiere" element={<Filieres />}></Route>
          <Route path="filiere/:idFiliere" element={<CoursFilieres />} />
          <Route path="filiere/:idFiliere" element={<ProtectedRoute />}>
            <Route path=":idCours" element={<Cours />} />
          </Route>

          <Route path="addcours" element={<AddCours />} />
          <Route path="addfiliere" element={<AddFiliere />} />

          <Route path="login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
