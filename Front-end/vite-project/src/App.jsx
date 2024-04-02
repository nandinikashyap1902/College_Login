import LoginPage from "./components/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentLogin from "./components/StudentLogin";
import UploadHistoryTable from "./components/UploadHistoryTable";
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPage/>}/>
      <Route path="/student" element={<StudentLogin/>}/>
      <Route path="/staff" element={<UploadHistoryTable/>}/>
    </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App
