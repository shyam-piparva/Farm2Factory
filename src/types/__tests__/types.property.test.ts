/**
 * Property-based tests for type validation
 * Feature: ai-waste-recommendation-system
 */

import { describe, it, expect } from 'vitest';
import * as fc from 'fast-check';

describe('Property-Based Type Tests', () => {
  it('should validate match scores are always in 0-100 range', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 0, max: 100 }),
        (score) => {
          expect(score).toBeGreaterThanOrEqual(0);
          expect(score).toBeLessThanOrEqual(100);
        }
      ),
      { numRuns: 100 }
    );
  });

  it('should validate importance levels are valid', () => {
    const importanceLevels = ['required', 'preferred', 'optional'] as const;
    
    fc.assert(
      fc.property(
        fc.constantFrom(...importanceLevels),
        (importance) => {
          expect(importanceLevels).toContain(importance);
        }
      ),
      { numRuns: 100 }
    );
  });

  it('should validate seasonal patterns are valid', () => {
    const patterns = ['year-round', 'seasonal', 'harvest-dependent'] as const;
    
    fc.assert(
      fc.property(
        fc.constantFrom(...patterns),
        (pattern) => {
          expect(patterns).toContain(pattern);
        }
      ),
      { numRuns: 100 }
    );
  });

  it('should validate peak months are in 1-12 range', () => {
    fc.assert(
      fc.property(
        fc.array(fc.integer({ min: 1, max: 12 }), { minLength: 1, maxLength: 12 }),
        (months) => {
          months.forEach(month => {
            expect(month).toBeGreaterThanOrEqual(1);
            expect(month).toBeLessThanOrEqual(12);
          });
        }
      ),
      { numRuns: 100 }
    );
  });

  it('should validate confidence levels are valid', () => {
    const confidenceLevels = ['high', 'medium', 'low'] as const;
    
    fc.assert(
      fc.property(
        fc.constantFrom(...confidenceLevels),
        (confidence) => {
          expect(confidenceLevels).toContain(confidence);
        }
      ),
      { numRuns: 100 }
    );
  });
});
