
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const workTypes = [
  { value: "remote", label: "Remote" },
  { value: "onsite", label: "On-site" },
  { value: "hybrid", label: "Hybrid" }
];

const careerGoals = [
  { value: "reskill", label: "Reskill for new role" },
  { value: "career-change", label: "Complete career change" },
  { value: "remote-work", label: "Find remote work" },
  { value: "advancement", label: "Career advancement" }
];

const SkillsAssessment = () => {
  const [isLoading, setIsLoading] = useState(false);
  
  const form = useForm({
    defaultValues: {
      jobTitle: "",
      yearsOfExperience: "",
      workType: "",
      careerGoal: "",
      skills: []
    }
  });

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      console.log("Form data:", data);
      // Backend integration will go here
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50 py-12">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Skills Assessment</h1>
          <p className="text-gray-600">
            Let's understand your current position and career goals
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="jobTitle"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Current Job Title</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. Software Developer" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="yearsOfExperience"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Years of Experience</FormLabel>
                  <FormControl>
                    <Input type="number" min="0" max="50" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="workType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Preferred Work Type</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      value={field.value}
                      className="flex flex-col space-y-1"
                    >
                      {workTypes.map((type) => (
                        <div key={type.value} className="flex items-center space-x-2">
                          <RadioGroupItem value={type.value} id={type.value} />
                          <Label htmlFor={type.value}>{type.label}</Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="careerGoal"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Career Goal</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your primary goal" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {careerGoals.map((goal) => (
                        <SelectItem key={goal.value} value={goal.value}>
                          {goal.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button 
              type="submit" 
              className="w-full bg-[#9b87f5] hover:bg-[#7E69AB]"
              disabled={isLoading}
            >
              {isLoading ? "Processing..." : "Submit Assessment"}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default SkillsAssessment;
