
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, Mail, Lock } from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Mock authentication - replace with actual auth when backend is ready
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Successful login simulation
      localStorage.setItem("isLoggedIn", "true");
      toast({
        title: "Login successful",
        description: "Welcome back to your AI Career Navigator!",
      });
      navigate("/dashboard");
    } catch (error) {
      toast({
        title: "Login failed",
        description: "Please check your credentials and try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50 py-16">
      <div className="container max-w-md mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome Back</h1>
          <p className="text-gray-600 mt-2">Log in to access your career journey</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-center">
                <Mail className="mr-2 h-4 w-4 text-gray-500" />
                <label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email
                </label>
              </div>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center">
                <Lock className="mr-2 h-4 w-4 text-gray-500" />
                <label htmlFor="password" className="text-sm font-medium text-gray-700">
                  Password
                </label>
              </div>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div className="text-right">
                <Link to="/forgot-password" className="text-sm text-[#9b87f5] hover:text-[#7E69AB]">
                  Forgot password?
                </Link>
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full bg-[#9b87f5] hover:bg-[#7E69AB]"
              disabled={isLoading}
            >
              {isLoading ? "Logging in..." : "Log In"}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Don't have an account?{" "}
              <Link to="/signup" className="text-[#9b87f5] hover:text-[#7E69AB] font-medium">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
