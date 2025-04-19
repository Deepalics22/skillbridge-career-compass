
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface PowerBIDashboardProps {
  embedUrl: string;
  title: string;
}

const PowerBIDashboard: React.FC<PowerBIDashboardProps> = ({ embedUrl, title }) => {
  return (
    <Card className="w-full h-[600px] overflow-hidden">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-0 h-[calc(100%-4rem)]">
        <iframe
          title="Career Analytics Dashboard"
          width="100%"
          height="100%"
          src={embedUrl}
          frameBorder="0"
          allowFullScreen
        />
      </CardContent>
    </Card>
  );
};

export default PowerBIDashboard;
