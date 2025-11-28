import AuthPage from "./components/AuthPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import AuthPage from "./pages/AuthPage";
import StudentDashboard from "../src/components/page/StudentDashboard";
import TeacherDashboard from "../src/components/page/TeacherDashboard";
import ParentDashboard from '../src/components/page/ParentDashboard';
import StudentEvaluation from "./components/page/StudentEvaluation";
import HomePage from "./components/page/HomePage";
import HealthCommittee from "./components/page/HealthCommittee";
import StudentHealthInfo from "../src/components/page/StudentHealthInfo";
function App() {
  
  return (
    <div className="App">
      

      <BrowserRouter>
        <Routes>
      
          <Route path="/" element={<AuthPage />} />
          <Route path="/student-dashboard" element={<StudentDashboard />} />
          <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
          <Route path="/parent-dashboard" element={<ParentDashboard />} />
           <Route path="/student/health-info" element={<StudentHealthInfo />} />
          <Route
            path="/teacher-dashboard/student-evaluation"
            element={<StudentEvaluation />}
          />
          <Route path="/home" element={<HomePage />} />
          <Route path="/health-committee" element={<HealthCommittee />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
