import React from "react";
import { SectionTitle } from "@/components/ui/custom/SectionTitle";
import { IndustryWasteRecommendation, WasteRecommendation } from "@/components/ui/custom/IndustryWasteRecommendation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Sample data for industry waste recommendations
const recommendations: Record<string, WasteRecommendation[]> = {
  "construction": [
    {
      id: "rec1",
      wasteType: "Rice Husk",
      industryType: "Construction Materials",
      matchScore: 95,
      benefits: [
        "High silica content (90-95%) ideal for cement replacement",
        "Reduces carbon footprint by up to 15% in concrete production",
        "Improves concrete strength and durability against chemical attacks",
        "Decreases thermal conductivity in building materials"
      ],
      imageUrl: "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?q=80&w=1374&auto=format&fit=crop"
    },
    {
      id: "rec2",
      wasteType: "Coconut Fiber",
      industryType: "Construction Materials",
      matchScore: 87,
      benefits: [
        "Excellent for erosion control in landscaping applications",
        "Natural reinforcement in eco-friendly roofing materials",
        "Sound insulation properties for walls and ceiling panels",
        "Resistant to moisture and fungal degradation"
      ],
      imageUrl: "https://images.unsplash.com/photo-1597916829826-02e5bb4a54e0?q=80&w=1374&auto=format&fit=crop"
    }
  ],
  "packaging": [
    {
      id: "rec3",
      wasteType: "Sugarcane Bagasse",
      industryType: "Packaging Industry",
      matchScore: 98,
      benefits: [
        "Biodegradable alternative to styrofoam and plastic containers",
        "Maintains structural integrity when in contact with hot, cold or oily foods",
        "Naturally white color reduces need for bleaching agents",
        "Compostable within 90 days in commercial facilities"
      ],
      imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1374&auto=format&fit=crop"
    },
    {
      id: "rec4",
      wasteType: "Wheat Straw",
      industryType: "Packaging Industry",
      matchScore: 85,
      benefits: [
        "Strong fiber structure for durable packaging materials",
        "Low moisture absorption rate extends shelf life of products",
        "Excellent cushioning properties for fragile item protection",
        "Easily molded into custom shapes and containers"
      ],
      imageUrl: "https://plus.unsplash.com/premium_photo-1661830833689-98b6b5ec9339?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2hlYXQlMjBzdHJhd3xlbnwwfHwwfHx8MA%3D%3D"
    }
  ],
  "textiles": [
    {
      id: "rec5",
      wasteType: "Banana Stems",
      industryType: "Textile Industry",
      matchScore: 92,
      benefits: [
        "High tensile strength fibers ideal for durable fabrics",
        "Naturally soft texture with silk-like appearance",
        "Excellent moisture absorption properties for comfort",
        "Biodegradable alternative to synthetic fibers"
      ],
      imageUrl: "https://images.unsplash.com/photo-1603833665858-e61d17a86224?q=80&w=1374&auto=format&fit=crop"
    },
    {
      id: "rec6",
      wasteType: "Cotton Stalks",
      industryType: "Textile Industry",
      matchScore: 82,
      benefits: [
        "Can be processed into pulp for specialized paper products",
        "Provides natural fibers for composite textiles",
        "Reduces reliance on virgin cotton for some applications",
        "Creates circular economy in cotton-growing regions"
      ],
      imageUrl: "https://images.unsplash.com/photo-1574926054530-540288c8e678?q=80&w=1374&auto=format&fit=crop"
    }
  ],
  "energy": [
    {
      id: "rec7",
      wasteType: "Rice Straw",
      industryType: "Energy Generation",
      matchScore: 94,
      benefits: [
        "High calorific value (3500-4000 kcal/kg) for efficient combustion",
        "Low sulfur and nitrogen content reduces harmful emissions",
        "Abundant seasonal availability ensures steady supply",
        "Prevents air pollution from field burning of rice straw"
      ],
      imageUrl: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1632&auto=format&fit=crop"
    },
    {
      id: "rec8",
      wasteType: "Groundnut Shells",
      industryType: "Energy Generation",
      matchScore: 89,
      benefits: [
        "Dense biomass with high energy content per volume",
        "Low moisture content requires minimal pre-processing",
        "Produces less ash compared to other agricultural residues",
        "Can be pelletized for efficient transportation and storage"
      ],
      imageUrl: "https://images.unsplash.com/photo-1589927986089-35812388d1f4?q=80&w=1470&auto=format&fit=crop"
    }
  ],
  "fertilizers": [
    {
      id: "rec9",
      wasteType: "Coffee Grounds",
      industryType: "Organic Fertilizers",
      matchScore: 96,
      benefits: [
        "Rich in nitrogen, phosphorus and potassium (NPK) nutrients",
        "Improves soil structure and water retention capacity",
        "Contains natural fungicidal and antibiotic properties",
        "Slow release of nutrients provides long-term soil benefits"
      ],
      imageUrl: "https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?q=80&w=1470&auto=format&fit=crop"
    },
    {
      id: "rec10",
      wasteType: "Mustard Cake",
      industryType: "Organic Fertilizers",
      matchScore: 90,
      benefits: [
        "Acts as natural soil nematicide and pest repellent",
        "High macronutrient content improves plant growth",
        "Enhances soil microbial activity and biodiversity",
        "Increases crop yield while reducing chemical inputs"
      ],
      imageUrl: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=1470&auto=format&fit=crop"
    }
  ]
};

interface IndustryWasteRecommendationsProps {
  className?: string;
  industryType?: keyof typeof recommendations;
}

export function IndustryWasteRecommendations({ 
  className,
  industryType 
}: IndustryWasteRecommendationsProps) {
  return (
    <div className={className}>
      <SectionTitle 
        title="AI Waste Recommendations" 
        subtitle="Smart material suggestions for your specific industry needs"
        alignment="left"
        size="small"
      />
      
      <Tabs defaultValue={industryType || "construction"} className="mt-6">
        <TabsList className="w-full flex flex-wrap h-auto mb-6">
          <TabsTrigger value="construction" className="flex-1">Construction</TabsTrigger>
          <TabsTrigger value="packaging" className="flex-1">Packaging</TabsTrigger>
          <TabsTrigger value="textiles" className="flex-1">Textiles</TabsTrigger>
          <TabsTrigger value="energy" className="flex-1">Energy</TabsTrigger>
          <TabsTrigger value="fertilizers" className="flex-1">Fertilizers</TabsTrigger>
        </TabsList>
        
        {Object.entries(recommendations).map(([industry, recs]) => (
          <TabsContent key={industry} value={industry} className="mt-0">
            <div className="space-y-4">
              {recs.map(rec => (
                <IndustryWasteRecommendation 
                  key={rec.id} 
                  recommendation={rec} 
                />
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}

export function TopRecommendations() {
  // Get top recommendations across all industries
  const topRecs = Object.values(recommendations)
    .flat()
    .sort((a, b) => b.matchScore - a.matchScore)
    .slice(0, 4);
    
  return (
    <div>
      <SectionTitle 
        title="Top AI Recommendations" 
        subtitle="Highest matching materials across industries"
        alignment="left"
        size="small"
      />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
        {topRecs.map(rec => (
          <IndustryWasteRecommendation 
            key={rec.id} 
            recommendation={rec} 
            variant="compact"
          />
        ))}
      </div>
    </div>
  );
}
