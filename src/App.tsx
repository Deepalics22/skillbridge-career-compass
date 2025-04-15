
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SkillsAssessment from "./pages/SkillsAssessment";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/skills-assessment" element={<SkillsAssessment />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
