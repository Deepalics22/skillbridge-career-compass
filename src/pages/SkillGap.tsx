
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  Legend 
} from 'recharts';
import { BookOpen, Target, TrendingUp } from "lucide-react";

const SkillGap = () => {
  // Mock data for skill gaps
  const skillGapData = [
    { 
      skill: "System Design", 
      currentLevel: 65, 
      requiredLevel: 85,
      resources: [
        { title: "System Design Fundamentals", provider: "Udemy", url: "#" },
        { title: "Advanced System Architecture", provider: "Coursera", url: "#" }
      ]
    },
    { 
      skill: "Machine Learning", 
      currentLevel: 40, 
      requiredLevel: 75,
      resources: [
        { title: "Introduction to Machine Learning", provider: "edX", url: "#" },
        { title: "Practical ML Projects", provider: "Pluralsight", url: "#" }
      ]
    },
    { 
      skill: "Cloud Architecture", 
      currentLevel: 55, 
      requiredLevel: 80,
      resources: [
        { title: "AWS Certified Solutions Architect", provider: "AWS Training", url: "#" },
        { title: "Cloud Computing Principles", provider: "Google Cloud", url: "#" }
      ]
    },
    { 
      skill: "AI Ethics", 
      currentLevel: 70, 
      requiredLevel: 70,
      resources: [
        { title: "Ethics in Artificial Intelligence", provider: "MIT OpenCourseware", url: "#" }
      ]
    }
  ];

  // Chart data
  const chartData = skillGapData.map(item => ({
    name: item.skill,
    current: item.currentLevel,
    required: item.requiredLevel,
    gap: Math.max(0, item.requiredLevel - item.currentLevel)
  }));

  // Development timeline data
  const timelineData = [
    {
      phase: "Month 1-2",
      focus: "System Design Fundamentals",
      description: "Focus on core system design principles and patterns relevant to AI applications."
    },
    {
      phase: "Month 3-4",
      focus: "Machine Learning Basics",
      description: "Learn foundational ML concepts and how they apply to business solutions."
    },
    {
      phase: "Month 5-6",
      focus: "Cloud Architecture",
      description: "Master cloud deployment patterns for scalable AI systems."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Skill Gap Analysis</h1>
          <p className="text-gray-600 mt-2">
            Understand your current skills compared to AI-safe career requirements
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main content - 2/3 width */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview Chart */}
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Target className="h-5 w-5 text-[#9b87f5] mr-2" />
                  Skills Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={chartData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="current" name="Current Level" fill="#9b87f5" />
                      <Bar dataKey="required" name="Required Level" fill="#7E69AB" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* Development Plan */}
            <Card className="animate-fade-in" style={{animationDelay: "150ms"}}>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <TrendingUp className="h-5 w-5 text-[#9b87f5] mr-2" />
                  Skill Development Timeline
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  {/* Timeline line */}
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                  
                  {/* Timeline items */}
                  <div className="space-y-8">
                    {timelineData.map((item, index) => (
                      <div key={index} className="relative pl-10">
                        {/* Timeline dot */}
                        <div className="absolute left-0 top-1.5 h-8 w-8 rounded-full bg-[#9b87f5] flex items-center justify-center text-white font-medium">
                          {index + 1}
                        </div>
                        
                        <div className="bg-white p-4 rounded-lg border">
                          <h3 className="font-semibold text-gray-900">{item.phase}</h3>
                          <div className="font-medium text-[#9b87f5] mt-1">{item.focus}</div>
                          <p className="text-gray-600 mt-2">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar - 1/3 width */}
          <div className="space-y-8">
            {/* Detailed Skill Gaps */}
            <Card className="animate-fade-in" style={{animationDelay: "200ms"}}>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <BookOpen className="h-5 w-5 text-[#9b87f5] mr-2" />
                  Recommended Learning
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {skillGapData.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium">{item.skill}</h3>
                      <div className="text-sm">
                        <span className="text-[#9b87f5]">{item.currentLevel}%</span>
                        <span className="text-gray-400"> / </span>
                        <span className="text-gray-700">{item.requiredLevel}%</span>
                      </div>
                    </div>
                    
                    <Progress 
                      value={item.currentLevel} 
                      max={item.requiredLevel} 
                      className="h-2 bg-gray-100"
                    />
                    
                    {item.currentLevel < item.requiredLevel ? (
                      <div className="space-y-2 pt-2">
                        <p className="text-sm text-gray-600">Recommended resources:</p>
                        <div className="space-y-1">
                          {item.resources.map((resource, idx) => (
                            <a 
                              key={idx} 
                              href={resource.url}
                              className="block text-sm text-[#9b87f5] hover:underline"
                            >
                              {resource.title} ({resource.provider})
                            </a>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <p className="text-sm text-green-600 pt-1">
                        ✓ You meet the required skill level
                      </p>
                    )}
                  </div>
                ))}
                
                <Button className="w-full mt-4 bg-[#9b87f5] hover:bg-[#7E69AB]">
                  View All Learning Resources
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillGap;
