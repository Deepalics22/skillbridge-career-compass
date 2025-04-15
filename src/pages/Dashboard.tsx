
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronRight, BookOpen, Target, BarChart2, Award } from "lucide-react";
import SkillProgressChart from "@/components/SkillProgressChart";
import CareerCard from "@/components/CareerCard";

const Dashboard = () => {
  const [name, setName] = useState("User");

  useEffect(() => {
    // Animation for cards
    const cards = document.querySelectorAll('.dashboard-card');
    cards.forEach((card, index) => {
      card.classList.add('animate-fade-in');
      (card as HTMLElement).style.animationDelay = `${index * 150}ms`;
    });
  }, []);

  // Mock data - would come from user profile and assessment
  const recommendedCareers = [
    {
      title: "AI Solutions Architect",
      match: "Your technical background and problem-solving skills make you an excellent fit.",
      skills: ["System Design", "Machine Learning", "Cloud Architecture"]
    },
    {
      title: "Digital Transformation Consultant",
      match: "Your experience positions you well to guide organizations through changes.",
      skills: ["Change Management", "Digital Strategy", "Process Optimization"]
    }
  ];

  const learningResources = [
    {
      title: "System Design Fundamentals",
      provider: "Udemy",
      progress: 65,
      url: "#"
    },
    {
      title: "Introduction to Machine Learning",
      provider: "Coursera",
      progress: 30,
      url: "#"
    },
    {
      title: "Cloud Computing Principles",
      provider: "edX",
      progress: 15,
      url: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50 py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome back, {name}</h1>
          <p className="text-gray-600 mt-1">
            Track your career progress and recommended paths
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content - 2/3 width */}
          <div className="lg:col-span-2 space-y-8">
            <section>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-900">Career Recommendations</h2>
                <Button variant="outline" size="sm" className="text-sm" asChild>
                  <Link to="/skills-assessment">
                    Retake Assessment
                  </Link>
                </Button>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {recommendedCareers.map((career, index) => (
                  <div key={index} className="dashboard-card opacity-0">
                    <CareerCard {...career} />
                  </div>
                ))}
              </div>
            </section>

            <section className="dashboard-card opacity-0">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <Target className="h-5 w-5 text-[#9b87f5] mr-2" />
                    Skill Gap Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <SkillProgressChart />
                  <div className="mt-4">
                    <Button className="bg-[#9b87f5] hover:bg-[#7E69AB]" asChild>
                      <Link to="/skill-gap">View Detailed Analysis</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>

          {/* Sidebar - 1/3 width */}
          <div className="space-y-8">
            <section className="dashboard-card opacity-0">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <BookOpen className="h-5 w-5 text-[#9b87f5] mr-2" />
                    Learning Resources
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {learningResources.map((resource, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between">
                        <h3 className="font-medium">{resource.title}</h3>
                        <span className="text-sm text-gray-500">{resource.progress}%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-[#9b87f5]" 
                          style={{ width: `${resource.progress}%` }}
                        ></div>
                      </div>
                      <p className="text-xs text-gray-500">{resource.provider}</p>
                    </div>
                  ))}
                  <Button variant="outline" size="sm" className="w-full mt-2" asChild>
                    <Link to="/learning-resources">
                      View All Resources
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </section>

            <section className="dashboard-card opacity-0">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <Award className="h-5 w-5 text-[#9b87f5] mr-2" />
                    Quick Actions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <Link to="/interview-prep">
                        <BarChart2 className="mr-2 h-4 w-4" /> Interview Preparation
                      </Link>
                    </Button>
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <Link to="/resume">
                        <Award className="mr-2 h-4 w-4" /> Generate Resume
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
