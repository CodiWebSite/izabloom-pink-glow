import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import LumanariMici from "./pages/LumanariMici";
import LumanariMari from "./pages/LumanariMari";
import LumanariDelicioase from "./pages/LumanariDelicioase";
import LumanariServit from "./pages/LumanariServit";
import MartiriiNunta from "./pages/MartiriiNunta";
import MarturiiBotez from "./pages/MarturiiBotez";
import CadouriSpeciale from "./pages/CadouriSpeciale";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/lumanari-mici" element={<LumanariMici />} />
          <Route path="/lumanari-mari" element={<LumanariMari />} />
          <Route path="/lumanari-delicioase" element={<LumanariDelicioase />} />
          <Route path="/lumanari-servit" element={<LumanariServit />} />
          <Route path="/marturii-nunta" element={<MartiriiNunta />} />
          <Route path="/marturii-botez" element={<MarturiiBotez />} />
          <Route path="/cadouri-speciale" element={<CadouriSpeciale />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
