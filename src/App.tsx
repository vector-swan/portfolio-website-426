import { Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import PasswordGate from "@/components/PasswordGate";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "@/pages/Index";
import GenAITextFramework from "@/pages/GenAITextFramework";
import PromptEngineeringStudio from "@/pages/PromptEngineeringStudio";
import MultiSurfaceAgentDesign from "@/pages/MultiSurfaceAgentDesign";
import NotFound from "@/pages/NotFound";

const App = () => (
  <PasswordGate>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/genai-text-framework" element={<GenAITextFramework />} />
      <Route path="/prompt-engineering-studio" element={<PromptEngineeringStudio />} />
      <Route path="/multi-surface-agent-design" element={<MultiSurfaceAgentDesign />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </PasswordGate>
  <Analytics />
);

export default App;
