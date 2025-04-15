
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, User, Mail, Lock } from "lucide-react";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Mock signup - replace with actual registration when backend is ready
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Account created",
        description: "Welcome to AI Career Navigator! Start your journey with us.",
      });
      navigate("/dashboard");
    } catch (error) {
      toast({
        title: "Signup failed",
        description: "There was an error creating your account. Please try again.",
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
          <h1 className="text-3xl font-bold text-gray-900">Create Your Account</h1>
          <p className="text-gray-600 mt-2">Join us to navigate your AI-safe career journey</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <form onSubmit={handleSignup} className="space-y-5">
            <div className="space-y-2">
              <div className="flex items-center">
                <User className="mr-2 h-4 w-4 text-gray-500" />
                <label htmlFor="name" className="text-sm font-medium text-gray-700">
                  Full Name
                </label>
              </div>
              <Input
                id="name"
                type="text"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            
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
              <p className="text-xs text-gray-500">
                Password must be at least 8 characters long
              </p>
            </div>

            <Button 
              type="submit" 
              className="w-full bg-[#9b87f5] hover:bg-[#7E69AB]"
              disabled={isLoading}
            >
              {isLoading ? "Creating Account..." : "Sign Up"}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="text-[#9b87f5] hover:text-[#7E69AB] font-medium">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
