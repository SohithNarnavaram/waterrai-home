import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Embed from "./pages/resources/Embed";
import API from "./pages/resources/API";
import Customization from "./pages/resources/Customization";
import Link from "./pages/resources/Link";
import Schedule from "./pages/resources/Schedule";
import Personal from "./pages/resources/Personal";
import Blog from "./pages/Blog";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/resources/embed" element={<Embed />} />
          <Route path="/resources/api" element={<API />} />
          <Route path="/resources/customization" element={<Customization />} />
          <Route path="/resources/link" element={<Link />} />
          <Route path="/resources/schedule" element={<Schedule />} />
          <Route path="/resources/personal" element={<Personal />} />
          <Route path="/blog" element={<Blog />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
