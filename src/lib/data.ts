import { Product } from "@/context/CartContext";

export const products: Product[] = [
  {
    id: "1",
    name: "Rice Husk",
    description: "Rice husk is the outermost layer of the paddy grain that is separated from the rice grains during the milling process. It's a versatile agricultural byproduct that can be used for various applications including as a renewable energy source, in construction materials, as organic fertilizer, and more.",
    price: 5500,
    imageUrl: "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?q=80&w=1374&auto=format&fit=crop",
    category: "Grain Byproducts",
    farmerId: "f1",
    farmerName: "Rajesh Kumar",
    location: "Karnataka",
    stock: 500,
    rating: 4.5,
    isAIRecommended: true
  },
  {
    id: "2",
    name: "Coconut Fiber",
    description: "Coconut fiber, also known as coir, is a natural fiber extracted from the outer husk of coconuts. This versatile material is used in various industries including textiles, construction, agriculture, and more. Our coconut fiber is sourced sustainably from coconut farms across Kerala.",
    price: 7800,
    imageUrl: "https://images.unsplash.com/photo-1597916829826-02e5bb4a54e0?q=80&w=1374&auto=format&fit=crop",
    category: "Fruit Byproducts",
    farmerId: "f2",
    farmerName: "Priya Nair",
    location: "Kerala",
    stock: 350,
    rating: 4.8
  },
  {
    id: "3",
    name: "Sugarcane Bagasse",
    description: "Sugarcane bagasse is the fibrous residue that remains after sugarcane stalks are crushed to extract their juice. It's a valuable agricultural byproduct used for paper production, as a biofuel, in construction materials, and as animal feed. Our bagasse is freshly sourced from sugar mills in Maharashtra.",
    price: 4200,
    imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1374&auto=format&fit=crop",
    category: "Sugar Industry Waste",
    farmerId: "f3",
    farmerName: "Amit Patil",
    location: "Maharashtra",
    stock: 800,
    rating: 4.2,
    isAIRecommended: true
  },
  {
    id: "4",
    name: "Groundnut Shells",
    description: "Groundnut shells are the hard outer covering of peanuts that remain after the nuts are removed. These shells can be repurposed for various industrial uses including as fuel briquettes, animal bedding, organic mulch, and in the production of particle boards and other composite materials.",
    price: 3800,
    imageUrl: "https://images.unsplash.com/photo-1589927986089-35812388d1f4?q=80&w=1470&auto=format&fit=crop",
    category: "Nut Byproducts",
    farmerId: "f4",
    farmerName: "Venkatesh Rao",
    location: "Gujarat",
    stock: 600,
    rating: 4.0
  },
  {
    id: "5",
    name: "Cotton Stalks",
    description: "Cotton stalks are the woody stems that remain after cotton harvesting. This agricultural waste can be processed into valuable products such as particle boards, paper pulp, packaging materials, and biofuel. Our cotton stalks are collected from sustainable farms in Gujarat, India's leading cotton-producing state.",
    price: 2900,
    imageUrl: "https://images.unsplash.com/photo-1574926054530-540288c8e678?q=80&w=1374&auto=format&fit=crop",
    category: "Fiber Crop Waste",
    farmerId: "f5",
    farmerName: "Harish Patel",
    location: "Gujarat",
    stock: 450,
    rating: 3.9
  },
  {
    id: "6",
    name: "Coffee Pulp",
    description: "Coffee pulp is the fleshy outer layer of the coffee cherry that is removed during processing. Rich in organic matter, this byproduct can be used as organic compost, in mushroom cultivation, for biogas production, and animal feed supplements. Our coffee pulp comes from sustainable coffee plantations in Karnataka.",
    price: 6500,
    imageUrl: "https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?q=80&w=1470&auto=format&fit=crop",
    category: "Beverage Industry Waste",
    farmerId: "f6",
    farmerName: "Jacob Thomas",
    location: "Karnataka",
    stock: 300,
    rating: 4.7,
    isAIRecommended: true
  },
  {
    id: "7",
    name: "Wheat Straw",
    description: "Wheat straw is the dry stalks left after grain harvesting. This versatile agricultural residue has many applications including as livestock bedding, in paper manufacturing, for mushroom cultivation, as a biofuel, and in construction materials. Our wheat straw is harvested from sustainable farms in Punjab.",
    price: 3200,
    imageUrl: "https://plus.unsplash.com/premium_photo-1661830833689-98b6b5ec9339?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2hlYXQlMjBzdHJhd3xlbnwwfHwwfHx8MA%3D%3D",
    category: "Grain Byproducts",
    farmerId: "f7",
    farmerName: "Gurpreet Singh",
    location: "Punjab",
    stock: 900,
    rating: 4.3
  },
  {
    id: "8",
    name: "Mango Seeds",
    description: "Mango seeds are the large kernels found inside mango fruits. These seeds contain valuable oils that can be extracted for use in cosmetics, pharmaceuticals, and food products. The remaining seed cake can be used as animal feed or organic fertilizer. Our mango seeds are collected from processing units in Andhra Pradesh.",
    price: 8200,
    imageUrl: "https://images.unsplash.com/photo-1591073113125-e46713c829ed?q=80&w=1374&auto=format&fit=crop",
    category: "Fruit Byproducts",
    farmerId: "f8",
    farmerName: "Reddy Naidu",
    location: "Andhra Pradesh",
    stock: 250,
    rating: 4.6
  },
  {
    id: "9",
    name: "Corn Cobs",
    description: "Corn cobs are the central cores of corn ears left after the kernels have been removed. They can be processed into various industrial products including abrasives, animal bedding, charcoal briquettes, and as a substrate for growing mushrooms. Our corn cobs are sourced from maize farms in Karnataka.",
    price: 4100,
    imageUrl: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?q=80&w=1470&auto=format&fit=crop",
    category: "Grain Byproducts",
    farmerId: "f9",
    farmerName: "Manoj Hegde",
    location: "Karnataka",
    stock: 550,
    rating: 4.1
  },
  {
    id: "10",
    name: "Banana Stems",
    description: "Banana stems are the fibrous pseudostems of banana plants that remain after fruit harvesting. These can be processed to extract fiber for textiles, paper, and handicrafts. The remaining biomass can be used as animal feed or organic fertilizer. Our banana stems come from banana plantations in Tamil Nadu.",
    price: 3600,
    imageUrl: "https://images.unsplash.com/photo-1603833665858-e61d17a86224?q=80&w=1374&auto=format&fit=crop",
    category: "Fruit Byproducts",
    farmerId: "f10",
    farmerName: "Senthil Kumar",
    location: "Tamil Nadu",
    stock: 400,
    rating: 4.4,
    isAIRecommended: true
  }
];

export const categories = [
  "All Categories",
  "Grain Byproducts",
  "Fruit Byproducts",
  "Vegetable Waste",
  "Sugar Industry Waste",
  "Nut Byproducts",
  "Fiber Crop Waste",
  "Beverage Industry Waste",
  "Oil Industry Waste",
  "Dairy Industry Waste"
];

export const states = [
  "All States",
  "Andhra Pradesh",
  "Gujarat",
  "Karnataka",
  "Kerala",
  "Maharashtra",
  "Punjab",
  "Tamil Nadu",
  "Uttar Pradesh",
  "West Bengal"
];

export const successStories = [
  {
    id: "1",
    title: "From Waste to Wealth: Rice Husk Revolution",
    summary: "How a farmer cooperative in Karnataka transformed rice husk waste into a profitable business supplying to construction companies.",
    location: "Karnataka",
    imageUrl: "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?q=80&w=1374&auto=format&fit=crop",
    revenue: "₹45 Lakhs",
    farmerCount: 120,
    wasteType: "Rice Husk"
  },
  {
    id: "2",
    title: "Coconut Fiber: Kerala's Sustainable Export",
    summary: "A community of coconut farmers in Kerala created an international export business for coconut fiber products.",
    location: "Kerala",
    imageUrl: "https://images.unsplash.com/photo-1597916829826-02e5bb4a54e0?q=80&w=1374&auto=format&fit=crop",
    revenue: "₹1.2 Crore",
    farmerCount: 200,
    wasteType: "Coconut Fiber"
  },
  {
    id: "3",
    title: "Sugarcane Bagasse: Powering the Paper Industry",
    summary: "Maharashtra sugar mills partnered with paper manufacturers to create a sustainable supply chain for bagasse.",
    location: "Maharashtra",
    imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1374&auto=format&fit=crop",
    revenue: "₹80 Lakhs",
    farmerCount: 150,
    wasteType: "Sugarcane Bagasse"
  }
];

export const aiInsights = [
  {
    id: "1",
    title: "Optimizing Crop Waste Collection",
    content: "AI analysis suggests that coordinating crop waste collection within a 50km radius can reduce transportation costs by 30% and increase farmer profits.",
    category: "Logistics"
  },
  {
    id: "2",
    title: "Market Demand Forecasting",
    content: "Based on historical data, AI predicts a 25% increase in demand for rice husk in the construction industry over the next quarter.",
    category: "Market Trends"
  },
  {
    id: "3",
    title: "Waste Value Optimization",
    content: "Processing coconut husks into fiber before selling can increase value by 45% compared to selling raw husks.",
    category: "Processing"
  },
  {
    id: "4",
    title: "Weather Impact Analysis",
    content: "AI models predict that the upcoming monsoon will increase the moisture content in crop waste by 15%, affecting quality and storage requirements.",
    category: "Climate"
  }
];

export const industryApplications = [
  {
    id: "1",
    wasteType: "Rice Husk",
    applications: [
      "Building materials (cement, bricks, panels)",
      "Biofuel for power generation",
      "Animal bedding and feed",
      "Organic fertilizer",
      "Water filtration media"
    ]
  },
  {
    id: "2",
    wasteType: "Coconut Fiber",
    applications: [
      "Geo-textiles for erosion control",
      "Mattress and upholstery filling",
      "Rope and mat production",
      "Acoustic insulation panels",
      "Soil conditioning agent"
    ]
  },
  {
    id: "3",
    wasteType: "Sugarcane Bagasse",
    applications: [
      "Paper and packaging production",
      "Biodegradable tableware",
      "Thermal insulation",
      "Particle board manufacturing",
      "Biofuel for energy production"
    ]
  },
  {
    id: "4",
    wasteType: "Groundnut Shells",
    applications: [
      "Fuel briquettes",
      "Particle board manufacturing",
      "Absorptive filter media",
      "Animal feed additive",
      "Cosmetic abrasives"
    ]
  },
  {
    id: "5",
    wasteType: "Banana Stems",
    applications: [
      "Textile fiber production",
      "Paper making",
      "Handicrafts and decorative items",
      "Natural composites",
      "Organic fertilizer"
    ]
  }
];
