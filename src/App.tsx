
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SkillsAssessment from "./pages/SkillsAssessment";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import InterviewPrep from "./pages/InterviewPrep";
import LearningResources from "./pages/LearningResources";
import ResumeGenerator from "./pages/ResumeGenerator";
import SkillGap from "./pages/SkillGap";
import { Toaster } from "@/components/ui/toaster";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/skills-assessment" element={<SkillsAssessment />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/interview-prep" element={<InterviewPrep />} />
        <Route path="/learning-resources" element={<LearningResources />} />
        <Route path="/resume" element={<ResumeGenerator />} />
        <Route path="/skill-gap" element={<SkillGap />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </>
  );
};

export default App;
