
import { useState } from "react";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { 
  Download, 
  FileText, 
  Plus, 
  Trash2,
  CheckCircle
} from "lucide-react";

const ResumeGenerator = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [isResumeGenerated, setIsResumeGenerated] = useState(false);
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    summary: "",
    skills: ["", "", ""],
    experiences: [
      { title: "", company: "", period: "", description: "" }
    ],
    education: [
      { degree: "", institution: "", year: "" }
    ]
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSkillChange = (index: number, value: string) => {
    const newSkills = [...formData.skills];
    newSkills[index] = value;
    setFormData(prev => ({ ...prev, skills: newSkills }));
  };

  const handleExperienceChange = (index: number, field: string, value: string) => {
    const newExperiences = [...formData.experiences];
    newExperiences[index] = { ...newExperiences[index], [field]: value };
    setFormData(prev => ({ ...prev, experiences: newExperiences }));
  };

  const handleEducationChange = (index: number, field: string, value: string) => {
    const newEducation = [...formData.education];
    newEducation[index] = { ...newEducation[index], [field]: value };
    setFormData(prev => ({ ...prev, education: newEducation }));
  };

  const addExperience = () => {
    setFormData(prev => ({
      ...prev,
      experiences: [...prev.experiences, { title: "", company: "", period: "", description: "" }]
    }));
  };

  const removeExperience = (index: number) => {
    const newExperiences = [...formData.experiences];
    newExperiences.splice(index, 1);
    setFormData(prev => ({ ...prev, experiences: newExperiences }));
  };

  const addEducation = () => {
    setFormData(prev => ({
      ...prev,
      education: [...prev.education, { degree: "", institution: "", year: "" }]
    }));
  };

  const removeEducation = (index: number) => {
    const newEducation = [...formData.education];
    newEducation.splice(index, 1);
    setFormData(prev => ({ ...prev, education: newEducation }));
  };

  const handleAddSkill = () => {
    setFormData(prev => ({ ...prev, skills: [...prev.skills, ""] }));
  };

  const handleRemoveSkill = (index: number) => {
    const newSkills = [...formData.skills];
    newSkills.splice(index, 1);
    setFormData(prev => ({ ...prev, skills: newSkills }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);
    
    try {
      // Simulate API call or processing delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setIsResumeGenerated(true);
      toast({
        title: "Resume Generated",
        description: "Your AI-optimized resume is ready to download.",
      });
    } catch (error) {
      toast({
        title: "Generation failed",
        description: "There was an error generating your resume. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const handleDownload = () => {
    // In a real implementation, you would generate and download a PDF
    toast({
      title: "Resume Downloaded",
      description: "Your resume has been downloaded successfully.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Resume Generator</h1>
          <p className="text-gray-600 mt-2">
            Create an AI-optimized resume to highlight your transferable skills
          </p>
        </div>

        {!isResumeGenerated ? (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="h-5 w-5 text-[#9b87f5] mr-2" />
                Resume Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Personal Information</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Professional Summary */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Professional Summary</h3>
                  <div>
                    <Textarea
                      id="summary"
                      name="summary"
                      placeholder="Brief overview of your professional background and career goals..."
                      value={formData.summary}
                      onChange={handleChange}
                      required
                      className="min-h-[100px]"
                    />
                  </div>
                </div>

                {/* Skills */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium">Skills</h3>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={handleAddSkill}
                    >
                      <Plus className="h-4 w-4 mr-1" /> Add Skill
                    </Button>
                  </div>
                  <div className="space-y-2">
                    {formData.skills.map((skill, index) => (
                      <div key={index} className="flex gap-2">
                        <Input
                          value={skill}
                          onChange={(e) => handleSkillChange(index, e.target.value)}
                          placeholder={`Skill ${index + 1}`}
                          className="flex-grow"
                        />
                        {formData.skills.length > 1 && (
                          <Button
                            type="button"
                            variant="outline"
                            size="icon"
                            onClick={() => handleRemoveSkill(index)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Work Experience */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium">Work Experience</h3>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={addExperience}
                    >
                      <Plus className="h-4 w-4 mr-1" /> Add Experience
                    </Button>
                  </div>
                  
                  {formData.experiences.map((exp, index) => (
                    <Card key={index}>
                      <CardContent className="pt-6">
                        <div className="grid gap-4">
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                Job Title
                              </label>
                              <Input
                                value={exp.title}
                                onChange={(e) => handleExperienceChange(index, 'title', e.target.value)}
                                placeholder="e.g., Marketing Manager"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                Company
                              </label>
                              <Input
                                value={exp.company}
                                onChange={(e) => handleExperienceChange(index, 'company', e.target.value)}
                                placeholder="e.g., Acme Corp"
                              />
                            </div>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Period
                            </label>
                            <Input
                              value={exp.period}
                              onChange={(e) => handleExperienceChange(index, 'period', e.target.value)}
                              placeholder="e.g., Jan 2020 - Present"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Description
                            </label>
                            <Textarea
                              value={exp.description}
                              onChange={(e) => handleExperienceChange(index, 'description', e.target.value)}
                              placeholder="Describe your responsibilities and achievements..."
                              className="min-h-[80px]"
                            />
                          </div>
                        </div>
                        
                        {formData.experiences.length > 1 && (
                          <div className="mt-4 flex justify-end">
                            <Button
                              type="button"
                              variant="outline"
                              size="sm"
                              onClick={() => removeExperience(index)}
                              className="text-red-500"
                            >
                              <Trash2 className="h-4 w-4 mr-1" /> Remove
                            </Button>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Education */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium">Education</h3>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={addEducation}
                    >
                      <Plus className="h-4 w-4 mr-1" /> Add Education
                    </Button>
                  </div>
                  
                  {formData.education.map((edu, index) => (
                    <Card key={index}>
                      <CardContent className="pt-6">
                        <div className="grid gap-4">
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                Degree
                              </label>
                              <Input
                                value={edu.degree}
                                onChange={(e) => handleEducationChange(index, 'degree', e.target.value)}
                                placeholder="e.g., Bachelor of Science"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                Institution
                              </label>
                              <Input
                                value={edu.institution}
                                onChange={(e) => handleEducationChange(index, 'institution', e.target.value)}
                                placeholder="e.g., University of Example"
                              />
                            </div>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Year
                            </label>
                            <Input
                              value={edu.year}
                              onChange={(e) => handleEducationChange(index, 'year', e.target.value)}
                              placeholder="e.g., 2015 - 2019"
                            />
                          </div>
                        </div>
                        
                        {formData.education.length > 1 && (
                          <div className="mt-4 flex justify-end">
                            <Button
                              type="button"
                              variant="outline"
                              size="sm"
                              onClick={() => removeEducation(index)}
                              className="text-red-500"
                            >
                              <Trash2 className="h-4 w-4 mr-1" /> Remove
                            </Button>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="flex justify-center pt-4">
                  <Button 
                    type="submit" 
                    className="bg-[#9b87f5] hover:bg-[#7E69AB] min-w-[200px]"
                    disabled={isGenerating}
                  >
                    {isGenerating ? "Generating..." : "Generate Resume"}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        ) : (
          <div className="animate-fade-in">
            <Card className="mb-8">
              <CardHeader className="bg-green-50">
                <CardTitle className="flex items-center text-green-700">
                  <CheckCircle className="h-6 w-6 mr-2 text-green-600" />
                  Resume Generated Successfully
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="text-center mb-6">
                  <FileText className="h-16 w-16 mx-auto text-[#9b87f5] mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Your AI-optimized resume is ready!</h3>
                  <p className="text-gray-600 mb-6">
                    We've created a resume that highlights your transferable skills and positions you for AI-safe career paths.
                  </p>
                  
                  <div className="flex justify-center gap-4">
                    <Button 
                      onClick={handleDownload}
                      className="bg-[#9b87f5] hover:bg-[#7E69AB]"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download PDF
                    </Button>
                    <Button 
                      variant="outline"
                      onClick={() => setIsResumeGenerated(false)}
                    >
                      Edit Information
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Resume Preview - Would be an actual resume in a real implementation */}
            <Card>
              <CardHeader>
                <CardTitle>Resume Preview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="border rounded p-6 bg-white">
                  <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold">{formData.name}</h2>
                    <div className="text-gray-600">{formData.email} | {formData.phone}</div>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold border-b pb-2 mb-3">Professional Summary</h3>
                    <p className="text-gray-700">{formData.summary}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold border-b pb-2 mb-3">Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      {formData.skills.filter(s => s.trim()).map((skill, idx) => (
                        <span key={idx} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold border-b pb-2 mb-3">Work Experience</h3>
                    {formData.experiences.map((exp, idx) => (
                      <div key={idx} className="mb-4">
                        <div className="flex justify-between">
                          <h4 className="font-medium">{exp.title}</h4>
                          <span className="text-gray-600">{exp.period}</span>
                        </div>
                        <div className="text-gray-700">{exp.company}</div>
                        <p className="mt-2 text-gray-600">{exp.description}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold border-b pb-2 mb-3">Education</h3>
                    {formData.education.map((edu, idx) => (
                      <div key={idx} className="mb-2">
                        <div className="flex justify-between">
                          <h4 className="font-medium">{edu.degree}</h4>
                          <span className="text-gray-600">{edu.year}</span>
                        </div>
                        <div className="text-gray-700">{edu.institution}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumeGenerator;
