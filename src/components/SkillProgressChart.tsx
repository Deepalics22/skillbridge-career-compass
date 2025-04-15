
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar } from 'recharts';

const SkillProgressChart = () => {
  // Mock data - would come from assessment results
  const data = [
    { subject: 'Technical Skills', A: 85, B: 95, fullMark: 100 },
    { subject: 'Communication', A: 70, B: 85, fullMark: 100 },
    { subject: 'Leadership', A: 60, B: 75, fullMark: 100 },
    { subject: 'Problem Solving', A: 80, B: 80, fullMark: 100 },
    { subject: 'Adaptability', A: 75, B: 90, fullMark: 100 },
    { subject: 'Creativity', A: 65, B: 70, fullMark: 100 },
  ];

  return (
    <div className="w-full h-72">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" tick={{ fill: '#666', fontSize: 12 }} />
          <Radar
            name="Your Skills"
            dataKey="A"
            stroke="#9b87f5"
            fill="#9b87f5"
            fillOpacity={0.4}
          />
          <Radar
            name="Target Skills"
            dataKey="B"
            stroke="#7E69AB"
            fill="#7E69AB"
            fillOpacity={0.2}
          />
        </RadarChart>
      </ResponsiveContainer>
      
      <div className="flex justify-center gap-6 mt-4">
        <div className="flex items-center">
          <div className="w-3 h-3 bg-[#9b87f5] rounded-full mr-2"></div>
          <span className="text-sm text-gray-600">Your Skills</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-[#7E69AB] rounded-full mr-2"></div>
          <span className="text-sm text-gray-600">Target Skills</span>
        </div>
      </div>
    </div>
  );
};

export default SkillProgressChart;
