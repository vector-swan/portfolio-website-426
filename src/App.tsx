import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ComingSoon from "@/components/ComingSoon";
// --- Portfolio imports (re-enable when ready to launch full site) ---
// import PasswordGate from "@/components/PasswordGate";
// import Index from "./pages/Index.tsx";
// import NotFound from "./pages/NotFound.tsx";
// import PromptEngineeringStudio from "./pages/PromptEngineeringStudio.tsx";
// import MultiSurfaceAgentDesign from "./pages/MultiSurfaceAgentDesign.tsx";
// import GenAITextFramework from "./pages/GenAITextFramework.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <ComingSoon />
      {/* --- Full portfolio (re-enable when ready to launch) --- */}
      {/*
      <PasswordGate>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/prompt-engineering-studio" element={<PromptEngineeringStudio />} />
            <Route path="/multi-surface-agent-design" element={<MultiSurfaceAgentDesign />} />
            <Route path="/genai-text-framework" element={<GenAITextFramework />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </PasswordGate>
      */}
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
