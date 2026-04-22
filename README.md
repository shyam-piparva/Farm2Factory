# 🌾 Farm2Factory - AI-Powered Agricultural Waste Marketplace

[![CI](https://github.com/shyam-piparva/Farm2Factory/workflows/CI/badge.svg)](https://github.com/shyam-piparva/Farm2Factory/actions)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.3-61dafb.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646cff.svg)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/shyam-piparva/Farm2Factory)](https://github.com/shyam-piparva/Farm2Factory/stargazers)

> Transforming agricultural waste into valuable industrial resources through intelligent AI-powered recommendations

## 🚀 Overview

Farm2Factory is an innovative e-commerce platform that connects farmers with industries, enabling the efficient utilization of agricultural waste. The platform features an **AI Waste Recommendation System** that intelligently matches waste types to industry needs based on material properties, sustainability goals, and historical data.

### Key Features

- 🤖 **AI-Powered Recommendations**: Smart matching algorithm that analyzes waste characteristics and industry requirements
- 🌱 **Sustainability Focus**: Track carbon reduction and waste diversion metrics
- 📊 **Multi-Industry Support**: Serves 8+ industry sectors (construction, packaging, textiles, energy, fertilizers, etc.)
- 🔍 **Transparent Matching**: Detailed explanations for every recommendation
- 📈 **Historical Learning**: System improves over time based on transaction outcomes
- 🎯 **Property-Based Testing**: Rigorous testing with 100+ iterations per property

## 🏗️ Architecture

### Tech Stack

**Frontend:**
- React 18.3 with TypeScript
- Vite for blazing-fast builds
- TailwindCSS + shadcn/ui for beautiful UI components
- React Router for navigation
- React Query for data fetching

**Backend (In Development):**
- Node.js with TypeScript
- REST API architecture
- Property-based testing with fast-check
- Strict type safety with TypeScript

### Project Structure

```
farm2factory-commerce-05-main/
├── src/
│   ├── components/          # React UI components
│   │   ├── dashboard/       # Dashboard components
│   │   ├── layout/          # Layout components
│   │   └── ui/              # Reusable UI components (shadcn/ui)
│   ├── pages/               # Page components
│   ├── services/            # API services
│   │   └── recommendation/  # AI recommendation service
│   ├── types/               # TypeScript type definitions
│   │   ├── waste.types.ts   # Core domain types
│   │   ├── api.types.ts     # API types
│   │   └── database.types.ts # Database types
│   ├── context/             # React context providers
│   ├── hooks/               # Custom React hooks
│   └── lib/                 # Utility functions
├── .kiro/
│   └── specs/               # Feature specifications
│       └── ai-waste-recommendation-system/
│           ├── requirements.md  # System requirements
│           ├── design.md        # Design document
│           └── tasks.md         # Implementation tasks
└── public/                  # Static assets
```

## 🎯 AI Recommendation System

The core innovation of Farm2Factory is its intelligent recommendation engine that:

1. **Analyzes Waste Profiles**: Extracts composition, physical properties, and availability data
2. **Matches Industry Needs**: Compares waste characteristics against industry requirements
3. **Calculates Match Scores**: Uses weighted scoring across 5 factors:
   - Property Match (40%)
   - Category Affinity (25%)
   - Historical Success (20%)
   - Availability (10%)
   - Sustainability Alignment (5%)
4. **Generates Benefits**: Creates sector-specific benefit descriptions
5. **Provides Explanations**: Transparent reasoning for every recommendation

### Supported Industries

- 🏗️ Construction
- 📦 Packaging
- 👕 Textiles
- ⚡ Energy
- 🌿 Fertilizers
- 📄 Paper
- 🧪 Chemicals
- 🔧 Composites

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun
- npm, yarn, or bun package manager

### Installation

```bash
# Clone the repository
git clone git@github.com:shyam-piparva/Farm2Factory.git
cd Farm2Factory

# Install dependencies
npm install
# or
bun install

# Start development server
npm run dev
# or
bun dev
```

The application will be available at `http://localhost:5173`

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with UI
npm run test:ui

# Generate coverage report
npm run test:coverage
```

### Building for Production

```bash
# Build the application
npm run build

# Preview production build
npm run preview
```

## 🧪 Testing Strategy

The project uses a dual testing approach:

- **Unit Tests**: Verify specific examples and edge cases
- **Property-Based Tests**: Verify universal properties across 100+ random inputs using fast-check

Example property test:
```typescript
// Validates that recommendations are always sorted by match score
fc.assert(
  fc.property(
    fc.array(arbitraryRecommendation()),
    (recommendations) => {
      const sorted = rankRecommendations(recommendations);
      for (let i = 0; i < sorted.length - 1; i++) {
        expect(sorted[i].matchScore).toBeGreaterThanOrEqual(
          sorted[i + 1].matchScore
        );
      }
    }
  ),
  { numRuns: 100 }
);
```

## 📋 Development Roadmap

### ✅ Phase 1: Foundation (Completed)
- [x] Project structure and core types
- [x] Testing framework setup
- [x] Type definitions for all entities

### 🚧 Phase 2: Core Engine (In Progress)
- [ ] Data validation and normalization
- [ ] Sector configuration system
- [ ] Matching algorithm implementation
- [ ] Historical data integration

### 📅 Phase 3: API & Integration (Planned)
- [ ] REST API endpoints
- [ ] Caching layer
- [ ] Frontend integration
- [ ] Database integration

### 🔮 Phase 4: Advanced Features (Future)
- [ ] Machine learning model integration
- [ ] Real-time price optimization
- [ ] Multi-language support
- [ ] Mobile app

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow TypeScript strict mode
- Write tests for new features (unit + property-based)
- Maintain test coverage above 80%
- Use conventional commits
- Update documentation

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


