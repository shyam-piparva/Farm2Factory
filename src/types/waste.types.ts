/**
 * Core type definitions for the AI Waste Recommendation System
 * Feature: ai-waste-recommendation-system
 */

export interface WasteProfile {
  id: string;
  name: string;
  category: string;
  composition: {
    cellulose?: number;      // percentage
    lignin?: number;         // percentage
    silica?: number;         // percentage
    nitrogen?: number;       // percentage
    phosphorus?: number;     // percentage
    potassium?: number;      // percentage
    moisture?: number;       // percentage
    [key: string]: number | undefined;
  };
  physicalProperties: {
    density?: number;        // kg/m³
    calorificValue?: number; // kcal/kg
    tensileStrength?: number; // MPa
    thermalConductivity?: number; // W/mK
    [key: string]: number | undefined;
  };
  availability: {
    quantity: number;        // tons
    location: string;
    seasonalPattern: 'year-round' | 'seasonal' | 'harvest-dependent';
    peakMonths?: number[];   // 1-12
  };
  farmerId: string;
  farmerName: string;
  pricePerTon: number;
  imageUrl?: string;
}

export type IndustrySector = 
  | 'construction'
  | 'packaging'
  | 'textiles'
  | 'energy'
  | 'fertilizers'
  | 'paper'
  | 'chemicals'
  | 'composites';

export interface IndustryProfile {
  id: string;
  name: string;
  sector: IndustrySector;
  materialRequirements: {
    preferredCategories: string[];
    requiredProperties: {
      property: string;
      minValue?: number;
      maxValue?: number;
      importance: 'required' | 'preferred' | 'optional';
    }[];
    volumeNeeds: {
      min: number;           // tons per month
      max: number;
    };
  };
  processingCapabilities: {
    canProcessMoisture: boolean;
    maxMoistureContent?: number;
    canProcessFiber: boolean;
    canProcessOrganic: boolean;
  };
  sustainabilityGoals: {
    carbonReductionTarget?: number;  // percentage
    wasteUtilizationTarget?: number; // percentage
    renewableContentTarget?: number; // percentage
  };
  location: string;
  historicalPurchases?: string[];  // waste IDs
}

export interface Recommendation {
  id: string;
  wasteType: string;
  wasteId: string;
  industryType: string;
  industrySector: IndustrySector;
  matchScore: number;      // 0-100
  benefits: string[];      // minimum 3 benefits
  explanation: {
    matchingFactors: {
      factor: string;
      score: number;       // 0-100
      weight: number;      // 0-1
      description: string;
    }[];
    sustainabilityImpact?: {
      carbonReduction?: string;
      wasteUtilization?: string;
      renewableContent?: string;
    };
    historicalContext?: string;
  };
  wasteProfile: WasteProfile;
  imageUrl?: string;
  confidence: 'high' | 'medium' | 'low';
}

export interface SectorConfiguration {
  sector: IndustrySector;
  matchingCriteria: {
    propertyWeights: {
      [propertyName: string]: number;  // 0-1
    };
    categoryPreferences: {
      [category: string]: number;      // 0-1
    };
    minimumMatchScore: number;         // 0-100
  };
  benefitTemplates: {
    propertyBased: {
      property: string;
      condition: string;  // e.g., "> 90", "< 15"
      benefit: string;
    }[];
    categoryBased: {
      category: string;
      benefits: string[];
    }[];
  };
}
