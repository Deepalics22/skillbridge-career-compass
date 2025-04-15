
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Brain, FileText, Compass, User, Book, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50">
      {/* Navigation */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <div className="font-bold text-xl text-gray-900">AI Career Navigator</div>
          <div className="flex space-x-4">
            <Button variant="ghost" asChild>
              <Link to="/login">Log In</Link>
            </Button>
            <Button className="bg-[#9b87f5] hover:bg-[#7E69AB]" asChild>
              <Link to="/signup">Sign Up</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-16 pb-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
            Navigate Your Career in the AI Era
          </h1>
          <p className="text-xl text-gray-600 mb-8 animate-fade-in" style={{ animationDelay: "100ms" }}>
            Discover AI-safe career paths, enhance your skills, and build your future with personalized guidance.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{ animationDelay: "200ms" }}>
            <Link to="/skills-assessment">
              <Button size="lg" className="bg-[#9b87f5] hover:bg-[#7E69AB] w-full sm:w-auto">
                Start Assessment <ArrowRight className="ml-2" />
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                View Demo Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Comprehensive Career Guidance
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-none shadow-lg animate-fade-in" style={{ animationDelay: "100ms" }}>
            <CardContent className="pt-6">
              <div className="mb-4">
                <Brain className="w-12 h-12 text-[#9b87f5]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Skill Mapping</h3>
              <p className="text-gray-600 mb-4">
                Analyze your current skills and discover AI-resistant career opportunities
              </p>
              <Button variant="outline" className="w-full" asChild>
                <Link to="/skill-gap">Explore Skills</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg animate-fade-in" style={{ animationDelay: "200ms" }}>
            <CardContent className="pt-6">
              <div className="mb-4">
                <FileText className="w-12 h-12 text-[#9b87f5]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Smart Resume Builder</h3>
              <p className="text-gray-600 mb-4">
                Create AI-optimized resumes that highlight your transferable skills
              </p>
              <Button variant="outline" className="w-full" asChild>
                <Link to="/resume">Build Resume</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg animate-fade-in" style={{ animationDelay: "300ms" }}>
            <CardContent className="pt-6">
              <div className="mb-4">
                <Compass className="w-12 h-12 text-[#9b87f5]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Career Guidance</h3>
              <p className="text-gray-600 mb-4">
                Get personalized recommendations for your career transition
              </p>
              <Button variant="outline" className="w-full" asChild>
                <Link to="/skills-assessment">Get Guidance</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
      
      {/* Additional Features */}
      <section className="container mx-auto px-4 py-16 bg-[#F8F7FF] rounded-3xl mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Complete Support System
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center animate-fade-in" style={{ animationDelay: "150ms" }}>
            <div className="h-16 w-16 bg-[#D3E4FD] rounded-full flex items-center justify-center mb-4">
              <Book className="h-8 w-8 text-[#7E69AB]" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Learning Resources</h3>
            <p className="text-gray-600 mb-4">
              Access curated materials to develop skills for AI-safe careers
            </p>
            <Link to="/learning-resources" className="text-[#9b87f5] font-medium hover:underline">
              Browse Resources
            </Link>
          </div>
          
          <div className="flex flex-col items-center text-center animate-fade-in" style={{ animationDelay: "250ms" }}>
            <div className="h-16 w-16 bg-[#D3E4FD] rounded-full flex items-center justify-center mb-4">
              <MessageCircle className="h-8 w-8 text-[#7E69AB]" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Interview Preparation</h3>
            <p className="text-gray-600 mb-4">
              Practice with AI-powered interview coaching for your target roles
            </p>
            <Link to="/interview-prep" className="text-[#9b87f5] font-medium hover:underline">
              Start Practicing
            </Link>
          </div>
          
          <div className="flex flex-col items-center text-center animate-fade-in" style={{ animationDelay: "350ms" }}>
            <div className="h-16 w-16 bg-[#D3E4FD] rounded-full flex items-center justify-center mb-4">
              <User className="h-8 w-8 text-[#7E69AB]" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Personal Dashboard</h3>
            <p className="text-gray-600 mb-4">
              Track your progress and manage your career development journey
            </p>
            <Link to="/dashboard" className="text-[#9b87f5] font-medium hover:underline">
              View Dashboard
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 text-center mb-16">
        <div className="bg-[#D3E4FD] rounded-2xl p-12 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: "400ms" }}>
          <h2 className="text-3xl font-bold mb-4">Ready to Future-Proof Your Career?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of professionals who are successfully navigating their careers in the AI age
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-[#9b87f5] hover:bg-[#7E69AB]" asChild>
              <Link to="/signup">Create Free Account</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white" asChild>
              <Link to="/skills-assessment">Try Assessment</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="font-bold text-xl text-gray-900 mb-2">AI Career Navigator</div>
              <p className="text-gray-600">Guiding your career in the age of AI</p>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>
              <Link to="/skills-assessment" className="text-gray-600 hover:text-gray-900">Assessment</Link>
              <Link to="/learning-resources" className="text-gray-600 hover:text-gray-900">Resources</Link>
              <Link to="/login" className="text-gray-600 hover:text-gray-900">Login</Link>
              <Link to="/signup" className="text-gray-600 hover:text-gray-900">Sign Up</Link>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-500">
            <p>&copy; 2025 AI Career Navigator. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
