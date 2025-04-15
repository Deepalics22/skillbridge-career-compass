
import { useState } from "react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle,
  CardFooter
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Filter, Search, BookOpen, ExternalLink, Star } from "lucide-react";

interface Resource {
  id: number;
  title: string;
  provider: string;
  description: string;
  skillArea: string[];
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  rating: number;
  url: string;
}

const LearningResources = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  // Mock resources data
  const resources: Resource[] = [
    {
      id: 1,
      title: "System Design for AI Applications",
      provider: "Coursera",
      description: "Learn how to design scalable systems that integrate AI components effectively",
      skillArea: ["System Design", "Architecture", "AI Integration"],
      difficulty: "Intermediate",
      duration: "6 weeks",
      rating: 4.8,
      url: "#"
    },
    {
      id: 2,
      title: "Ethical Implications of AI in Business",
      provider: "edX",
      description: "Explore the ethical considerations when implementing AI solutions in business contexts",
      skillArea: ["Ethics", "Business", "AI Governance"],
      difficulty: "Intermediate",
      duration: "4 weeks",
      rating: 4.6,
      url: "#"
    },
    {
      id: 3,
      title: "Change Management for Digital Transformation",
      provider: "Udemy",
      description: "Master techniques for managing organizational change during digital transitions",
      skillArea: ["Change Management", "Leadership", "Digital Strategy"],
      difficulty: "Beginner",
      duration: "5 hours",
      rating: 4.5,
      url: "#"
    },
    {
      id: 4,
      title: "Advanced Machine Learning Interpretability",
      provider: "DataCamp",
      description: "Learn techniques to interpret and explain complex machine learning models",
      skillArea: ["Machine Learning", "Data Science", "AI Ethics"],
      difficulty: "Advanced",
      duration: "10 hours",
      rating: 4.7,
      url: "#"
    },
    {
      id: 5,
      title: "Human-AI Collaboration Frameworks",
      provider: "LinkedIn Learning",
      description: "Develop frameworks for effective collaboration between humans and AI systems",
      skillArea: ["Human-AI Integration", "Workflow Design", "Collaboration"],
      difficulty: "Intermediate",
      duration: "3 hours",
      rating: 4.4,
      url: "#"
    }
  ];

  // Filter categories
  const categories = [
    "All", 
    "System Design", 
    "Ethics", 
    "Leadership", 
    "Machine Learning", 
    "Human-AI Integration"
  ];

  // Filter and search resources
  const filteredResources = resources.filter(resource => {
    // Search term filter
    const matchesSearch = searchTerm === "" || 
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.provider.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Category filter
    const matchesCategory = activeFilter === "All" || 
      resource.skillArea.some(skill => skill.includes(activeFilter));
    
    return matchesSearch && matchesCategory;
  });

  // Render stars based on rating
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star 
          key={i} 
          className={`h-4 w-4 ${i <= rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
        />
      );
    }
    return stars;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Learning Resources</h1>
          <p className="text-gray-600 mt-2">
            Curated learning materials to help you develop skills for AI-safe careers
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
            <Input 
              placeholder="Search resources..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="overflow-x-auto">
            <div className="flex space-x-2">
              {categories.map((category, index) => (
                <Button 
                  key={index}
                  variant={activeFilter === category ? "default" : "outline"}
                  className={activeFilter === category ? "bg-[#9b87f5] hover:bg-[#7E69AB]" : ""}
                  onClick={() => setActiveFilter(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((resource) => (
            <Card key={resource.id} className="animate-fade-in h-full flex flex-col">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg">{resource.title}</CardTitle>
                    <CardDescription className="flex items-center text-sm mt-1">
                      <BookOpen className="h-4 w-4 mr-1" />
                      {resource.provider}
                    </CardDescription>
                  </div>
                  <Badge 
                    className={`
                      ${resource.difficulty === "Beginner" ? "bg-green-100 text-green-800" : ""}
                      ${resource.difficulty === "Intermediate" ? "bg-blue-100 text-blue-800" : ""}
                      ${resource.difficulty === "Advanced" ? "bg-purple-100 text-purple-800" : ""}
                    `}
                  >
                    {resource.difficulty}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-gray-700 text-sm mb-4">{resource.description}</p>
                <div className="flex flex-wrap gap-2 mb-2">
                  {resource.skillArea.map((skill, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">{skill}</Badge>
                  ))}
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex">
                    {renderStars(resource.rating)}
                  </div>
                  <span className="text-sm text-gray-600">{resource.duration}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-[#9b87f5] hover:bg-[#7E69AB]" asChild>
                  <a href={resource.url} target="_blank" rel="noopener noreferrer">
                    Start Learning <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}

          {filteredResources.length === 0 && (
            <div className="col-span-3 text-center py-12">
              <p className="text-gray-500">No resources found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LearningResources;
