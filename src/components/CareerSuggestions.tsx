
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import CareerCard from "./CareerCard";
import { Download } from "lucide-react";

const mockSuggestions = [
  {
    title: "AI Solutions Architect",
    match: "Your technical background and problem-solving skills make you an excellent fit for designing AI systems while staying in control of the technology.",
    skills: ["System Design", "Machine Learning", "Cloud Architecture", "Ethics in AI"]
  },
  {
    title: "Digital Transformation Consultant",
    match: "Your experience combined with understanding of technology positions you well to guide organizations through digital changes.",
    skills: ["Change Management", "Digital Strategy", "Process Optimization", "Stakeholder Management"]
  },
  {
    title: "Human-AI Integration Specialist",
    match: "Your skills bridge the gap between human needs and AI capabilities, ensuring AI enhances rather than replaces human work.",
    skills: ["AI Systems", "Human-Centered Design", "Training & Development", "Workplace Psychology"]
  }
];

const CareerSuggestions = () => {
  useEffect(() => {
    const cards = document.querySelectorAll('.career-card');
    cards.forEach((card, index) => {
      card.classList.add('animate-fade-in');
      (card as HTMLElement).style.animationDelay = `${index * 150}ms`;
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            AI-Safe Career Paths
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Based on your skills and experience, here are career paths likely to thrive alongside AI
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {mockSuggestions.map((suggestion, index) => (
            <div key={index} className="career-card opacity-0">
              <CareerCard {...suggestion} />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            className="bg-[#9b87f5] hover:bg-[#7E69AB] animate-fade-in"
          >
            <Download className="mr-2 h-4 w-4" />
            Generate Resume
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CareerSuggestions;
