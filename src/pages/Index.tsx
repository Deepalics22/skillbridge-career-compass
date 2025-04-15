import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Brain, FileText, Compass } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-20 pb-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Navigate Your Career in the AI Era
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Discover AI-safe career paths, enhance your skills, and build your future with personalized guidance.
          </p>
          <Link to="/skills-assessment">
            <Button size="lg" className="bg-[#9b87f5] hover:bg-[#7E69AB]">
              Get Started <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-none shadow-lg">
            <CardContent className="pt-6">
              <div className="mb-4">
                <Brain className="w-12 h-12 text-[#9b87f5]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Skill Mapping</h3>
              <p className="text-gray-600">
                Analyze your current skills and discover AI-resistant career opportunities
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg">
            <CardContent className="pt-6">
              <div className="mb-4">
                <FileText className="w-12 h-12 text-[#9b87f5]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Smart Resume Builder</h3>
              <p className="text-gray-600">
                Create AI-optimized resumes that highlight your transferable skills
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg">
            <CardContent className="pt-6">
              <div className="mb-4">
                <Compass className="w-12 h-12 text-[#9b87f5]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Career Guidance</h3>
              <p className="text-gray-600">
                Get personalized recommendations for your career transition
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="bg-[#D3E4FD] rounded-2xl p-12 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Future-Proof Your Career?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of professionals who are successfully navigating their careers in the AI age
          </p>
          <Button size="lg" variant="secondary" className="bg-[#9b87f5] text-white hover:bg-[#7E69AB]">
            Start Your Journey
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
