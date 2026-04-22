/**
 * Type validation tests for AI Waste Recommendation System
 * Feature: ai-waste-recommendation-system
 */

import { describe, it, expect } from 'vitest';
import type { 
  WasteProfile, 
  IndustryProfile, 
  Recommendation, 
  SectorConfiguration,
  IndustrySector 
} from '../waste.types';

describe('Type Definitions', () => {
  describe('WasteProfile', () => {
    it('should accept valid waste profile', () => {
      const wasteProfile: WasteProfile = {
        id: 'waste-1',
        name: 'Rice Husk',
        category: 'grain-byproducts',
        composition: {
          cellulose: 35,
          lignin: 20,
          silica: 15,
        },
        physicalProperties: {
          density: 120,
          calorificValue: 3500,
        },
        availability: {
          quantity: 100,
          location: 'Punjab',
          seasonalPattern: 'harvest-dependent',
          peakMonths: [10, 11],
        },
        farmerId: 'farmer-1',
        farmerName: 'John Doe',
        pricePerTon: 5000,
      };

      expect(wasteProfile.id).toBe('waste-1');
      expect(wasteProfile.composition.cellulose).toBe(35);
    });
  });

  describe('IndustryProfile', () => {
    it('should accept valid industry profile', () => {
      const industryProfile: IndustryProfile = {
        id: 'industry-1',
        name: 'Green Construction Co',
        sector: 'construction',
        materialRequirements: {
          preferredCategories: ['grain-byproducts', 'fiber-crop-waste'],
          requiredProperties: [
            {
              property: 'silica',
              minValue: 10,
              importance: 'required',
            },
          ],
          volumeNeeds: {
            min: 50,
            max: 200,
          },
        },
        processingCapabilities: {
          canProcessMoisture: true,
          maxMoistureContent: 15,
          canProcessFiber: true,
          canProcessOrganic: false,
        },
        sustainabilityGoals: {
          carbonReductionTarget: 30,
          wasteUtilizationTarget: 80,
        },
        location: 'Delhi',
      };

      expect(industryProfile.sector).toBe('construction');
      expect(industryProfile.materialRequirements.volumeNeeds.min).toBe(50);
    });
  });

  describe('IndustrySector', () => {
    it('should accept valid sector values', () => {
      const sectors: IndustrySector[] = [
        'construction',
        'packaging',
        'textiles',
        'energy',
        'fertilizers',
        'paper',
        'chemicals',
        'composites',
      ];

      expect(sectors).toHaveLength(8);
      expect(sectors).toContain('construction');
    });
  });

  describe('Recommendation', () => {
    it('should accept valid recommendation', () => {
      const recommendation: Recommendation = {
        id: 'rec-1',
        wasteType: 'Rice Husk',
        wasteId: 'waste-1',
        industryType: 'Green Construction Co',
        industrySector: 'construction',
        matchScore: 85,
        benefits: [
          'High silica content ideal for construction',
          'Locally available reducing transport costs',
          'Sustainable alternative to traditional materials',
        ],
        explanation: {
          matchingFactors: [
            {
              factor: 'Property Match',
              score: 90,
              weight: 0.4,
              description: 'Silica content meets requirements',
            },
          ],
        },
        wasteProfile: {
          id: 'waste-1',
          name: 'Rice Husk',
          category: 'grain-byproducts',
          composition: { silica: 15 },
          physicalProperties: {},
          availability: {
            quantity: 100,
            location: 'Punjab',
            seasonalPattern: 'year-round',
          },
          farmerId: 'farmer-1',
          farmerName: 'John Doe',
          pricePerTon: 5000,
        },
        confidence: 'high',
      };

      expect(recommendation.matchScore).toBe(85);
      expect(recommendation.benefits).toHaveLength(3);
    });
  });

  describe('SectorConfiguration', () => {
    it('should accept valid sector configuration', () => {
      const config: SectorConfiguration = {
        sector: 'construction',
        matchingCriteria: {
          propertyWeights: {
            silica: 0.8,
            density: 0.6,
          },
          categoryPreferences: {
            'grain-byproducts': 0.9,
            'fiber-crop-waste': 0.7,
          },
          minimumMatchScore: 70,
        },
        benefitTemplates: {
          propertyBased: [
            {
              property: 'silica',
              condition: '> 10',
              benefit: 'High silica content suitable for construction materials',
            },
          ],
          categoryBased: [
            {
              category: 'grain-byproducts',
              benefits: ['Sustainable building material', 'Cost-effective alternative'],
            },
          ],
        },
      };

      expect(config.sector).toBe('construction');
      expect(config.matchingCriteria.minimumMatchScore).toBe(70);
    });
  });
});
