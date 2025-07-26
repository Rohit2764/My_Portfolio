import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background pt-16">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="animate-fade-in">
          <div className="text-8xl font-bold primary-gradient bg-clip-text text-transparent mb-4">
            404
          </div>
          <h1 className="text-2xl font-bold text-foreground mb-4">Page Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button variant="hero" size="lg">
                <Home className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go Back
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
