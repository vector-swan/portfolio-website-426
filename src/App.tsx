import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import PromptEngineeringStudio from "./pages/PromptEngineeringStudio.tsx";
import MultiSurfaceAgentDesign from "./pages/MultiSurfaceAgentDesign.tsx";
import GenAITextFramework from "./pages/GenAITextFramework.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/prompt-engineering-studio" element={<PromptEngineeringStudio />} />
          <Route path="/multi-surface-agent-design" element={<MultiSurfaceAgentDesign />} />
          <Route path="/genai-text-framework" element={<GenAITextFramework />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
