import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import PasswordGate from "@/components/PasswordGate";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PromptEngineeringStudio from "./pages/PromptEngineeringStudio";
import MultiSurfaceAgentDesign from "./pages/MultiSurfaceAgentDesign";
import GenAITextFramework from "./pages/GenAITextFramework";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
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
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
