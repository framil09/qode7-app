import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import CookieBanner from "@/components/CookieBanner";
import NotFound from "@/pages/NotFound";
import Contact from "@/pages/Contact";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import Cookies from "@/pages/Cookies";
import TermsOfService from "@/pages/TermsOfService";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { ScheduleMeetingProvider } from "./contexts/ScheduleMeetingContext";
import ScheduleMeetingDialog from "./components/ScheduleMeetingDialog";
import Home from "./pages/Home";


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/contact"} component={Contact} />
      <Route path={"/privacy"} component={PrivacyPolicy} />
      <Route path={"/cookies"} component={Cookies} />
      <Route path={"/terms"} component={TermsOfService} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <ScheduleMeetingProvider>
          <TooltipProvider>
            <Toaster />
            <ScheduleMeetingDialog />
            <CookieBanner />
            <Router />
          </TooltipProvider>
        </ScheduleMeetingProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
