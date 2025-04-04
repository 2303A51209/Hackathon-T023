
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center bg-gray-50 py-20">
        <div className="text-center max-w-md px-4">
          <h1 className="text-6xl font-bold text-rajasthan-blue mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-6">
            Oops! The page you're looking for isn't available.
          </p>
          <p className="text-gray-500 mb-8">
            The page you requested could not be found. It might have been moved, renamed, or doesn't exist.
          </p>
          <Button asChild className="bg-rajasthan-blue hover:bg-rajasthan-blue/90">
            <Link to="/">Return to Home</Link>
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
