
import React from "react";
import { BarChart3, CheckCircle2, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AIRecommendationBadge } from "./AIRecommendationBadge";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

export interface WasteRecommendation {
  wasteType: string;
  industryType: string;
  matchScore: number;
  benefits: string[];
  imageUrl: string;
  id: string;
}

interface IndustryWasteRecommendationProps {
  recommendation: WasteRecommendation;
  className?: string;
  variant?: "compact" | "detailed";
}

export function IndustryWasteRecommendation({
  recommendation,
  className,
  variant = "detailed"
}: IndustryWasteRecommendationProps) {
  const { wasteType, industryType, matchScore, benefits, imageUrl, id } = recommendation;
  
  if (variant === "compact") {
    return (
      <Card className={cn("overflow-hidden hover:shadow-md transition-shadow", className)}>
        <div className="flex items-center p-4">
          <div className="relative h-14 w-14 flex-shrink-0 rounded-md overflow-hidden mr-4">
            <img src={imageUrl} alt={wasteType} className="h-full w-full object-cover" />
            <div className="absolute top-0 right-0 bg-factory-blue text-white text-xs font-bold px-1 rounded-bl">
              {matchScore}%
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <CardTitle className="text-sm truncate">{wasteType}</CardTitle>
            <CardDescription className="text-xs truncate">For {industryType}</CardDescription>
          </div>
          <Link to={`/marketplace?search=${encodeURIComponent(wasteType)}`}>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </Card>
    );
  }
  
  return (
    <Card className={cn("overflow-hidden hover:shadow-md transition-shadow", className)}>
      <div className="flex flex-col md:flex-row">
        <div className="relative h-40 md:h-auto md:w-1/3">
          <img src={imageUrl} alt={wasteType} className="h-full w-full object-cover" />
          <div className="absolute top-2 left-2">
            <AIRecommendationBadge type="recommendation" variant="highlight">
              {matchScore}% Match
            </AIRecommendationBadge>
          </div>
        </div>
        <div className="flex-1 p-6">
          <CardHeader className="p-0 pb-4">
            <div className="flex items-center gap-2 mb-1">
              <BarChart3 className="h-4 w-4 text-factory-blue" />
              <span className="text-sm font-medium text-factory-blue">{industryType}</span>
            </div>
            <CardTitle>{wasteType}</CardTitle>
            <CardDescription>Recommended for {industryType} applications</CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div className="space-y-2 mb-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-factory-blue mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>
            <Link to={`/marketplace?search=${encodeURIComponent(wasteType)}`}>
              <Button variant="outline" className="w-full">
                Find {wasteType}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
        </div>
      </div>
    </Card>
  );
}
