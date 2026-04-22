# AI Waste Recommendation System

## Overview

This directory contains the backend service implementation for the AI Waste Recommendation System, which intelligently matches agricultural waste types to industry needs.

## Directory Structure

```
src/
├── types/                          # Type definitions
│   ├── waste.types.ts             # Core domain types
│   ├── api.types.ts               # API request/response types
│   ├── database.types.ts          # Database document types
│   └── __tests__/                 # Type validation tests
├── services/
│   └── recommendation/            # Recommendation service (this directory)
│       └── (to be implemented)
└── utils/                         # Utility functions
    └── (to be implemented)
```

## Core Types

### WasteProfile
Represents agricultural waste with composition, physical properties, and availability data.

### IndustryProfile
Represents industry requirements including sector, material needs, and processing capabilities.

### Recommendation
Represents a matched waste-industry pairing with score, benefits, and explanation.

### SectorConfiguration
Defines sector-specific matching criteria and benefit templates.

## Testing

The system uses a dual testing approach:

- **Unit Tests**: Verify specific examples and edge cases
- **Property-Based Tests**: Verify universal properties across all inputs using fast-check

### Running Tests

```bash
npm test              # Run all tests once
npm run test:watch    # Run tests in watch mode
npm run test:ui       # Run tests with UI
npm run test:coverage # Run tests with coverage report
```

## Type Checking

The recommendation system uses strict TypeScript configuration for enhanced type safety:

```bash
npx tsc --project tsconfig.recommendation.json --noEmit
```

## Next Steps

Subsequent tasks will implement:
1. Data validation and normalization
2. Sector configuration system
3. Matching algorithm core
4. Historical data integration
5. Recommendation generation and ranking
6. API endpoints
7. Frontend integration
