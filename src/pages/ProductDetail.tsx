
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ChevronLeft, ShoppingCart, Heart, Truck, Shield, BarChart3, MapPin, Star, AlertCircle } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { QuantitySelector } from "@/components/ui/custom/QuantitySelector";
import { SectionTitle } from "@/components/ui/custom/SectionTitle";
import { ProductCard } from "@/components/ui/custom/ProductCard";
import { AIRecommendationBadge } from "@/components/ui/custom/AIRecommendationBadge";
import { useCart } from "@/context/CartContext";
import { cn, formatIndianRupees } from "@/lib/utils";
import { products, industryApplications } from "@/lib/data";
import { Product as ProductType } from "@/context/CartContext";

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();
  const { addToCart } = useCart();
  const [product, setProduct] = useState<ProductType | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [similarProducts, setSimilarProducts] = useState<ProductType[]>([]);
  const [applications, setApplications] = useState<string[]>([]);

  // Simulate product data loading
  useEffect(() => {
    setIsLoading(true);
    // Find the product by ID
    const foundProduct = products.find(p => p.id === id);
    
    if (foundProduct) {
      setProduct(foundProduct);
      
      // Find similar products in the same category
      const similar = products
        .filter(p => p.category === foundProduct.category && p.id !== foundProduct.id)
        .slice(0, 4);
      setSimilarProducts(similar);
      
      // Find applicable uses for this product type
      const applicationData = industryApplications.find(
        app => app.wasteType.toLowerCase() === foundProduct.name.toLowerCase()
      );
      
      if (applicationData) {
        setApplications(applicationData.applications);
      } else {
        // Default applications if not found
        setApplications([
          "Sustainable building materials",
          "Renewable energy production",
          "Organic fertilizers and soil amendments",
          "Animal bedding and feed supplements",
          "Packaging materials"
        ]);
      }
    }
    
    // Simulate network delay
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, [id]);

  const handleIncrement = () => {
    setQuantity(prev => Math.min(prev + 1, 100));
  };

  const handleDecrement = () => {
    setQuantity(prev => Math.max(prev - 1, 1));
  };

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
    }
  };

  if (isLoading) {
    return (
      <PageLayout>
        <div className="flex items-center justify-center h-[60vh]">
          <div className="animate-pulse space-y-8 w-full max-w-4xl">
            <div className="h-8 bg-muted rounded w-2/3"></div>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-full md:w-1/2 aspect-square bg-muted rounded"></div>
              <div className="w-full md:w-1/2 space-y-4">
                <div className="h-8 bg-muted rounded w-3/4"></div>
                <div className="h-4 bg-muted rounded w-1/2"></div>
                <div className="h-24 bg-muted rounded"></div>
                <div className="h-12 bg-muted rounded w-1/3"></div>
                <div className="h-12 bg-muted rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </PageLayout>
    );
  }

  if (!product) {
    return (
      <PageLayout>
        <div className="flex flex-col items-center justify-center h-[60vh] gap-4">
          <AlertCircle className="h-16 w-16 text-muted-foreground" />
          <h1 className="text-2xl font-bold">Product Not Found</h1>
          <p className="text-muted-foreground mb-4">
            The product you're looking for doesn't exist or has been removed.
          </p>
          <Link to="/marketplace">
            <Button>Back to Marketplace</Button>
          </Link>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 mb-8 mt-2 text-sm text-muted-foreground">
        <Link to="/marketplace" className="flex items-center hover:text-foreground transition-colors">
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to Marketplace
        </Link>
        <span>/</span>
        <span>{product.category}</span>
        <span>/</span>
        <span className="text-foreground">{product.name}</span>
      </div>

      {/* Product Detail */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        {/* Product Image */}
        <div className="relative overflow-hidden rounded-lg border aspect-square">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          
          {product.isAIRecommended && (
            <div className="absolute top-4 left-4">
              <AIRecommendationBadge className="shadow-sm" type="recommendation">
                AI Recommended
              </AIRecommendationBadge>
            </div>
          )}
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center gap-1">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      "h-4 w-4",
                      i < Math.floor(product.rating)
                        ? "text-yellow-400 fill-yellow-400"
                        : i < product.rating
                        ? "text-yellow-400 fill-yellow-400 opacity-50"
                        : "text-muted stroke-muted"
                    )}
                  />
                ))}
              </div>
              <span className="text-sm font-medium">{product.rating}</span>
            </div>
            <Separator orientation="vertical" className="h-4" />
            <span className="text-sm text-muted-foreground">
              {product.stock} tons available
            </span>
          </div>
          
          <div className="flex items-baseline gap-2 mb-6">
            <span className="text-3xl font-bold">
              {formatIndianRupees(product.price)}
            </span>
            <span className="text-sm text-muted-foreground">per ton</span>
          </div>
          
          <p className="text-muted-foreground mb-6">
            {product.description}
          </p>
          
          <div className="flex items-center gap-2 text-sm mb-6">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <span>Sourced from {product.location}, India</span>
          </div>
          
          <Separator className="mb-6" />
          
          <div className="flex flex-col gap-4 mb-6">
            <div className="flex items-center justify-between">
              <span className="font-medium">Quantity (tons)</span>
              <QuantitySelector
                quantity={quantity}
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
                min={1}
                max={product.stock}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <span className="font-medium">Total</span>
              <span className="text-xl font-bold">
                {formatIndianRupees(product.price * quantity)}
              </span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <Button size="lg" className="flex-1" onClick={handleAddToCart}>
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart
            </Button>
            <Button size="lg" variant="outline">
              <Heart className="mr-2 h-5 w-5" />
              Save
            </Button>
          </div>
          
          <div className="flex flex-col gap-3 bg-secondary/50 rounded-lg p-4 text-sm">
            <div className="flex items-start gap-3">
              <Truck className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium">Free Delivery Available</p>
                <p className="text-muted-foreground">For orders above 10 tons within 200km</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Shield className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium">Quality Guaranteed</p>
                <p className="text-muted-foreground">All products undergo quality verification</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <Tabs defaultValue="applications" className="mb-16">
        <TabsList className="w-full sm:w-auto grid grid-cols-3 sm:inline-flex h-auto p-0 bg-transparent mb-6">
          <TabsTrigger 
            value="applications" 
            className="flex-1 sm:flex-initial data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none rounded-none data-[state=active]:bg-transparent h-12"
          >
            Industrial Applications
          </TabsTrigger>
          <TabsTrigger 
            value="specifications" 
            className="flex-1 sm:flex-initial data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none rounded-none data-[state=active]:bg-transparent h-12"
          >
            Specifications
          </TabsTrigger>
          <TabsTrigger 
            value="insights" 
            className="flex-1 sm:flex-initial data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none rounded-none data-[state=active]:bg-transparent h-12"
          >
            AI Insights
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="applications">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold mb-4">Key Industrial Applications</h3>
              <ul className="space-y-3">
                {applications.map((app, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary text-sm font-medium">{index + 1}</span>
                    </div>
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Processing Requirements</CardTitle>
                <CardDescription>
                  Recommended handling and processing information
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-1">Moisture Content</h4>
                  <p className="text-sm text-muted-foreground">
                    Optimum: 8-12% for processing, storage, and transportation
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Particle Size</h4>
                  <p className="text-sm text-muted-foreground">
                    Variable based on application, typically 0.5-5mm
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Storage Conditions</h4>
                  <p className="text-sm text-muted-foreground">
                    Cool, dry area with proper ventilation to prevent mold growth
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="specifications">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold mb-4">Product Specifications</h3>
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-2 py-2 border-b">
                  <span className="text-muted-foreground">Origin</span>
                  <span className="font-medium">{product.location}, India</span>
                </div>
                <div className="grid grid-cols-2 gap-2 py-2 border-b">
                  <span className="text-muted-foreground">Category</span>
                  <span className="font-medium">{product.category}</span>
                </div>
                <div className="grid grid-cols-2 gap-2 py-2 border-b">
                  <span className="text-muted-foreground">Available Quantity</span>
                  <span className="font-medium">{product.stock} tons</span>
                </div>
                <div className="grid grid-cols-2 gap-2 py-2 border-b">
                  <span className="text-muted-foreground">Minimum Order</span>
                  <span className="font-medium">1 ton</span>
                </div>
                <div className="grid grid-cols-2 gap-2 py-2 border-b">
                  <span className="text-muted-foreground">Harvest Period</span>
                  <span className="font-medium">Seasonal (varies by region)</span>
                </div>
                <div className="grid grid-cols-2 gap-2 py-2 border-b">
                  <span className="text-muted-foreground">Processing</span>
                  <span className="font-medium">Minimal processing (cleaned/sorted)</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Technical Characteristics</h3>
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-2 py-2 border-b">
                  <span className="text-muted-foreground">Moisture Content</span>
                  <span className="font-medium">10-14%</span>
                </div>
                <div className="grid grid-cols-2 gap-2 py-2 border-b">
                  <span className="text-muted-foreground">Bulk Density</span>
                  <span className="font-medium">90-110 kg/m³</span>
                </div>
                <div className="grid grid-cols-2 gap-2 py-2 border-b">
                  <span className="text-muted-foreground">Ash Content</span>
                  <span className="font-medium">14-18%</span>
                </div>
                <div className="grid grid-cols-2 gap-2 py-2 border-b">
                  <span className="text-muted-foreground">Calorific Value</span>
                  <span className="font-medium">3,200-3,600 kcal/kg</span>
                </div>
                <div className="grid grid-cols-2 gap-2 py-2 border-b">
                  <span className="text-muted-foreground">Silica Content</span>
                  <span className="font-medium">18-22%</span>
                </div>
                <div className="grid grid-cols-2 gap-2 py-2">
                  <span className="text-muted-foreground">Fiber Length</span>
                  <span className="font-medium">0.4-0.8 mm</span>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="insights">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <AIRecommendationBadge type="analysis">
                  AI Market Analysis
                </AIRecommendationBadge>
              </div>
              
              <h3 className="text-xl font-bold mb-4">Market Insights for {product.name}</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium mb-2">Demand Trends</h4>
                  <p className="text-muted-foreground">
                    Based on historical data and industry projections, AI analysis indicates a 
                    {product.isAIRecommended ? 
                      " strong upward trend in demand for " + product.name.toLowerCase() + " over the next 6-12 months. " :
                      " stable demand for " + product.name.toLowerCase() + " with seasonal fluctuations. "
                    }
                    Industries are increasingly seeking sustainable alternatives for raw materials, driving interest in agricultural waste products.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Pricing Analysis</h4>
                  <p className="text-muted-foreground">
                    Current price point of ₹{product.price.toLocaleString('en-IN')}/ton is 
                    {product.isAIRecommended ? 
                      " competitive and expected to rise by 8-12% in the coming quarter due to increasing demand. " :
                      " in line with market averages, with potential for modest growth of 3-5% annually. "
                    }
                    Early procurement is recommended to secure favorable pricing.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Geographical Insights</h4>
                  <p className="text-muted-foreground">
                    {product.location} is a 
                    {product.isAIRecommended ? 
                      " prime production region for high-quality " + product.name.toLowerCase() + ", with optimal growing conditions resulting in superior product characteristics. " :
                      " reliable source for " + product.name.toLowerCase() + " with consistent quality standards. "
                    }
                    The local farming practices and processing techniques contribute to the product's quality profile.
                  </p>
                </div>
              </div>
            </div>
            
            <Card className="bg-factory-blue/5 border-factory-blue/20">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-factory-blue" />
                  AI Recommended Usage
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {product.name === "Rice Husk" && (
                    <>
                      <div>
                        <h4 className="font-medium mb-1">Primary Recommendation</h4>
                        <p className="text-sm">
                          <strong>Building Materials Industry</strong> - Rice husk ash as a cement substitute can reduce carbon footprint by up to 15%
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Secondary Recommendation</h4>
                        <p className="text-sm">
                          <strong>Energy Generation</strong> - Biomass power plants can achieve 20% higher efficiency rates with proper processing
                        </p>
                      </div>
                    </>
                  )}
                  
                  {product.name === "Coconut Fiber" && (
                    <>
                      <div>
                        <h4 className="font-medium mb-1">Primary Recommendation</h4>
                        <p className="text-sm">
                          <strong>Geotextile Manufacturing</strong> - Erosion control applications with 35% better performance than synthetic alternatives
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Secondary Recommendation</h4>
                        <p className="text-sm">
                          <strong>Automotive Industry</strong> - Natural fiber composites for interior components reducing weight by 10-15%
                        </p>
                      </div>
                    </>
                  )}
                  
                  {product.name === "Sugarcane Bagasse" && (
                    <>
                      <div>
                        <h4 className="font-medium mb-1">Primary Recommendation</h4>
                        <p className="text-sm">
                          <strong>Packaging Industry</strong> - Biodegradable food containers with 95% reduced plastic content
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Secondary Recommendation</h4>
                        <p className="text-sm">
                          <strong>Paper Manufacturing</strong> - Specialty paper with enhanced strength properties and 30% less chemical processing
                        </p>
                      </div>
                    </>
                  )}
                  
                  {product.name === "Banana Stems" && (
                    <>
                      <div>
                        <h4 className="font-medium mb-1">Primary Recommendation</h4>
                        <p className="text-sm">
                          <strong>Textile Industry</strong> - Sustainable fiber for blending with cotton, reducing water usage by 25-30%
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Secondary Recommendation</h4>
                        <p className="text-sm">
                          <strong>Home Furnishings</strong> - Natural fiber products with antimicrobial properties and lower environmental impact
                        </p>
                      </div>
                    </>
                  )}
                  
                  {!(["Rice Husk", "Coconut Fiber", "Sugarcane Bagasse", "Banana Stems"].includes(product.name)) && (
                    <>
                      <div>
                        <h4 className="font-medium mb-1">Primary Recommendation</h4>
                        <p className="text-sm">
                          <strong>Sustainable Manufacturing</strong> - Integrate into eco-friendly production processes to reduce carbon footprint
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Secondary Recommendation</h4>
                        <p className="text-sm">
                          <strong>Research & Development</strong> - Explore innovative applications in emerging green technologies
                        </p>
                      </div>
                    </>
                  )}
                  
                  <div>
                    <h4 className="font-medium mb-1">Processing Tip</h4>
                    <p className="text-sm">
                      Pre-processing for moisture content optimization can increase efficiency in most applications by 15-20%
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      {/* Similar Products */}
      {similarProducts.length > 0 && (
        <div className="mb-16">
          <SectionTitle
            title="Similar Products"
            subtitle="You might also be interested in these related agricultural waste products"
            alignment="left"
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {similarProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}
    </PageLayout>
  );
}
