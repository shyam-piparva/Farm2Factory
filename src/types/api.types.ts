/**
 * API type definitions for the AI Waste Recommendation System
 * Feature: ai-waste-recommendation-system
 */

import { IndustrySector, IndustryProfile, Recommendation } from './waste.types';

// GET /api/recommendations
export interface GetRecommendationsRequest {
  industryId?: string;
  sector: IndustrySector;
  limit?: number;          // default: 10
  minScore?: number;       // default: 70
  includeExplanation?: boolean;  // default: true
}

export interface GetRecommendationsResponse {
  recommendations: Recommendation[];
  metadata: {
    totalMatches: number;
    processingTime: number;  // milliseconds
    cacheHit: boolean;
  };
}

// POST /api/recommendations/generate
export interface GenerateRecommendationsRequest {
  industryProfile: Partial<IndustryProfile>;
  options?: {
    limit?: number;
    minScore?: number;
    includeExplanation?: boolean;
  };
}

// GET /api/recommendations/:id
export interface GetRecommendationDetailResponse {
  recommendation: Recommendation;
  relatedRecommendations: Recommendation[];
  historicalData?: {
    successRate: number;
    averageRating: number;
    transactionCount: number;
  };
}

// POST /api/recommendations/feedback
export interface RecommendationFeedbackRequest {
  recommendationId: string;
  industryId: string;
  action: 'viewed' | 'clicked' | 'purchased' | 'dismissed';
  rating?: number;  // 1-5
  feedback?: string;
}

// Error response format
export interface ErrorResponse {
  error: {
    code: string;           // Machine-readable error code
    message: string;        // Human-readable error message
    details?: any;          // Additional error context
    timestamp: string;      // ISO 8601 timestamp
    requestId: string;      // For tracking and debugging
  };
}
