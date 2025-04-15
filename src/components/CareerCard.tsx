
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, ThumbsUp } from "lucide-react";

interface CareerCardProps {
  title: string;
  match: string;
  skills: string[];
}

const CareerCard = ({ title, match, skills }: CareerCardProps) => {
  return (
    <Card className="transform transition-all duration-300 hover:scale-105 hover:shadow-lg border-none">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl text-gray-900 flex items-center gap-2">
          <ThumbsUp className="h-5 w-5 text-[#9b87f5]" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-4">{match}</p>
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-gray-700">
            <BookOpen className="h-4 w-4 text-[#9b87f5]" />
            <span>Recommended skills:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge 
                key={skill} 
                className="bg-[#D3E4FD] text-[#7E69AB] hover:bg-[#C2D7F9]"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CareerCard;
