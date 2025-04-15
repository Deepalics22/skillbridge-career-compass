
import { useState } from "react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { 
  Collapsible, 
  CollapsibleContent, 
  CollapsibleTrigger 
} from "@/components/ui/collapsible";
import { useToast } from "@/hooks/use-toast";
import { ChevronDown, Send, MessageSquare, ThumbsUp, ThumbsDown } from "lucide-react";

const InterviewPrep = () => {
  const [userQuestion, setUserQuestion] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userQuestion.trim()) return;
    
    setIsLoading(true);
    
    // Simulate AI response delay
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Response Generated",
        description: "Check the answer to your interview question below.",
      });
      
      // In a real implementation, you'd add the Q&A to the list
      setUserQuestion("");
    }, 1500);
  };

  // Mock interview questions and answers
  const commonQuestions = [
    {
      role: "AI Solutions Architect",
      questions: [
        {
          question: "How do you balance technical requirements with ethical considerations in AI systems?",
          answer: "When balancing technical requirements with ethical considerations in AI systems, I follow a structured approach. First, I identify potential ethical issues early in the design phase through diverse stakeholder input. Next, I implement technical safeguards like robust testing for bias and transparency mechanisms. Throughout development, I maintain documentation of design decisions and their ethical implications. Additionally, I establish ongoing monitoring systems to detect and address emerging ethical issues. Finally, I believe in designing systems with human oversight capabilities, ensuring AI remains a tool that enhances human decision-making rather than replacing it entirely."
        },
        {
          question: "Describe your experience with machine learning model deployment.",
          answer: "In my experience with machine learning model deployment, I've developed a comprehensive pipeline approach that ensures both technical performance and business value. I begin with establishing clear success metrics aligned with business objectives, followed by rigorous model validation using appropriate metrics and cross-validation techniques. For deployment, I emphasize containerization (Docker) and orchestration tools (Kubernetes) to ensure scalability and consistent environments. My monitoring strategy includes technical metrics (latency, memory usage) and business metrics (prediction accuracy, business impact). For model updates, I maintain CI/CD pipelines that automate testing and deployment while preserving versioning for reproducibility. Throughout this process, I prioritize transparent documentation to facilitate knowledge sharing across teams."
        },
      ]
    },
    {
      role: "Digital Transformation Consultant",
      questions: [
        {
          question: "How do you handle resistance to digital change within an organization?",
          answer: "When handling resistance to digital change, I employ a multi-faceted approach that acknowledges both emotional and practical concerns. I start by understanding underlying fears through active listening and empathy, recognizing that resistance often stems from valid concerns. Clear communication is essential—articulating the 'why' behind changes and providing a compelling vision of future benefits. Early involvement of key stakeholders creates ownership and valuable input. I implement change in measured phases with quick wins to build confidence. Comprehensive training and support address skill gaps, while celebrating successes reinforces positive momentum. Throughout the process, I maintain flexibility to adapt based on feedback, recognizing that the most successful transformations evolve through collaborative refinement."
        },
        {
          question: "Describe a challenging digital transformation project and how you ensured its success.",
          answer: "I led a digital transformation for a mid-size manufacturing company struggling with fragmented legacy systems and resistance to new technology. The challenge involved both technical complexity and significant cultural barriers. I began by forming a cross-functional team representing all departments to ensure diverse perspectives. Through workshop sessions, we collaboratively mapped current pain points and developed a shared vision. Rather than a wholesale replacement, we employed a phased approach, starting with a pilot program in inventory management that demonstrated tangible efficiency gains within 60 days. This early win built credibility for broader changes. We implemented a comprehensive training program with role-specific tracks and designated 'digital champions' who provided peer support. When implementation challenges emerged with supplier integration, we quickly adjusted our approach based on front-line feedback. The project ultimately resulted in a 30% reduction in processing time and significantly improved data accuracy, transforming initial skeptics into advocates for continued digital innovation."
        },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Interview Preparation</h1>
          <p className="text-gray-600 mt-2">
            Practice answering common interview questions for AI-safe career paths
          </p>
        </div>

        <div className="grid gap-8">
          {/* AI Interview Coach */}
          <section className="animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageSquare className="h-5 w-5 text-[#9b87f5] mr-2" />
                  AI Interview Coach
                </CardTitle>
                <CardDescription>
                  Ask any interview question and get immediate feedback
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Textarea
                    placeholder="Type your interview question here... (e.g., How do you handle difficult team members?)"
                    value={userQuestion}
                    onChange={(e) => setUserQuestion(e.target.value)}
                    className="min-h-[100px]"
                  />
                  <div className="flex justify-end">
                    <Button 
                      type="submit" 
                      className="bg-[#9b87f5] hover:bg-[#7E69AB]"
                      disabled={isLoading || !userQuestion.trim()}
                    >
                      {isLoading ? "Processing..." : "Get Answer"}
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </section>

          {/* Common Interview Questions */}
          <section className="space-y-6 animate-fade-in" style={{ animationDelay: "150ms" }}>
            <h2 className="text-xl font-semibold text-gray-900">Common Questions by Role</h2>
            
            {commonQuestions.map((roleQuestions, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{roleQuestions.role}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {roleQuestions.questions.map((qa, qaIndex) => (
                    <Collapsible key={qaIndex}>
                      <div className="border rounded-lg p-4">
                        <CollapsibleTrigger className="flex justify-between items-center w-full text-left">
                          <h3 className="font-medium">{qa.question}</h3>
                          <ChevronDown className="h-4 w-4 text-gray-500" />
                        </CollapsibleTrigger>
                        <CollapsibleContent className="pt-4 text-gray-700">
                          <p>{qa.answer}</p>
                          <div className="flex justify-end space-x-2 mt-4">
                            <Button variant="outline" size="sm" className="text-xs">
                              <ThumbsUp className="h-3 w-3 mr-1" />
                              Helpful
                            </Button>
                            <Button variant="outline" size="sm" className="text-xs">
                              <ThumbsDown className="h-3 w-3 mr-1" />
                              Not helpful
                            </Button>
                          </div>
                        </CollapsibleContent>
                      </div>
                    </Collapsible>
                  ))}
                </CardContent>
              </Card>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};

export default InterviewPrep;
