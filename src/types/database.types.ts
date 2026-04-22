/**
 * Database type definitions for the AI Waste Recommendation System
 * Feature: ai-waste-recommendation-system
 */

import { WasteProfile, IndustryProfile, Recommendation, SectorConfiguration } from './waste.types';

// Waste Profiles Collection
export interface WasteProfileDocument extends WasteProfile {
  createdAt: Date;
  updatedAt: Date;
  isActive: boolean;
  searchKeywords: string[];  // for text search optimization
}

// Industry Profiles Collection
export interface IndustryProfileDocument extends IndustryProfile {
  userId: string;
  createdAt: Date;
  updatedAt: Date;
  lastRecommendationRequest: Date;
}

// Historical Transactions Collection
export interface TransactionDocument {
  id: string;
  wasteId: string;
  industryId: string;
  recommendationId?: string;
  quantity: number;
  pricePerTon: number;
  totalAmount: number;
  transactionDate: Date;
  deliveryStatus: 'pending' | 'in-transit' | 'delivered' | 'cancelled';
  rating?: number;
  feedback?: string;
  outcome: 'successful' | 'problematic' | 'cancelled';
}

// Recommendation Cache Collection
export interface RecommendationCacheDocument {
  cacheKey: string;  // hash of request parameters
  recommendations: Recommendation[];
  generatedAt: Date;
  expiresAt: Date;
  hitCount: number;
}

// Sector Configurations Collection
export interface SectorConfigurationDocument extends SectorConfiguration {
  version: number;
  createdAt: Date;
  updatedAt: Date;
  isActive: boolean;
}
