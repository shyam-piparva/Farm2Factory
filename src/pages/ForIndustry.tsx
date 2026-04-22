
import React from "react";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Truck, 
  Leaf, 
  LineChart, 
  BarChart3, 
  CheckCircle2, 
  Factory, 
  Recycle, 
  PackageCheck,
  Search
} from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/ui/custom/SectionTitle";
import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardHeader, 
  CardTitle, 
  CardDescription 
} from "@/components/ui/card";
import { AIRecommendationBadge } from "@/components/ui/custom/AIRecommendationBadge";
import { Separator } from "@/components/ui/separator";
import { industryApplications } from "@/lib/data";

export default function ForIndustry() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <div className="py-16 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-4">
              <span className="factory-badge">For Industry</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 reveal-animation">
              Sustainable Materials for <span className="text-factory-blue">Modern Industry</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 reveal-animation stagger-1">
              Access a reliable supply of agricultural waste materials for your manufacturing and production needs. Farm2Factory connects you directly with farmers to source sustainable raw materials while reducing your environmental footprint.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 reveal-animation stagger-2">
              <Link to="/marketplace">
                <Button size="lg">
                  Browse Materials
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/register">
                <Button size="lg" variant="outline">
                  Create Industry Account
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative reveal-animation">
            <div className="aspect-square rounded-2xl overflow-hidden border-8 border-white shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1581092921461-6484661fe3ed?q=80&w=1470&auto=format&fit=crop" 
                alt="Modern sustainable factory" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 w-48">
              <div className="text-sm font-medium text-muted-foreground mb-1">
                Cost Savings
              </div>
              <div className="text-2xl font-bold text-factory-blue">
                15-25% <span className="text-sm font-normal text-muted-foreground">on average</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Benefits Section */}
      <div className="py-16 bg-secondary">
        <div className="container mx-auto">
          <SectionTitle 
            title="Benefits for Industries"
            subtitle="How Farm2Factory helps your business source sustainable materials efficiently"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <Card className="reveal-animation">
              <CardHeader>
                <div className="w-12 h-12 bg-factory-blue/20 rounded-full flex items-center justify-center mb-2">
                  <LineChart className="h-6 w-6 text-factory-blue" />
                </div>
                <CardTitle>Cost Efficiency</CardTitle>
                <CardDescription>
                  Reduce raw material costs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Agricultural waste materials typically cost 15-25% less than traditional raw materials, helping you reduce production costs while maintaining quality. Direct sourcing from farmers eliminates intermediaries, further increasing your cost savings.
                </p>
              </CardContent>
            </Card>
            
            <Card className="reveal-animation stagger-1">
              <CardHeader>
                <div className="w-12 h-12 bg-factory-blue/20 rounded-full flex items-center justify-center mb-2">
                  <Leaf className="h-6 w-6 text-factory-blue" />
                </div>
                <CardTitle>Sustainability</CardTitle>
                <CardDescription>
                  Enhance your ESG credentials
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Improve your environmental, social, and governance (ESG) metrics by sourcing sustainable materials. Using agricultural waste reduces your carbon footprint, prevents waste burning, and supports rural farming communities, boosting your company's sustainability profile.
                </p>
              </CardContent>
            </Card>
            
            <Card className="reveal-animation stagger-2">
              <CardHeader>
                <div className="w-12 h-12 bg-factory-blue/20 rounded-full flex items-center justify-center mb-2">
                  <Truck className="h-6 w-6 text-factory-blue" />
                </div>
                <CardTitle>Supply Chain Resilience</CardTitle>
                <CardDescription>
                  Diversify your raw material sources
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Build a more resilient supply chain by diversifying your raw material sources. By working directly with a network of farmers across India, you reduce dependency on single suppliers and mitigate risks from supply chain disruptions and price volatility.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      {/* How It Works for Industry */}
      <div className="py-16">
        <div className="container mx-auto">
          <SectionTitle 
            title="How It Works for Industries"
            subtitle="A streamlined process to source agricultural waste materials"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
            <div className="bg-card border rounded-lg p-6 reveal-animation">
              <div className="w-10 h-10 rounded-full bg-factory-blue text-white flex items-center justify-center text-xl font-bold mb-4">
                1
              </div>
              <h3 className="text-lg font-bold mb-2">Register</h3>
              <p className="text-muted-foreground">
                Create your industry account with details about your business, material requirements, and processing capabilities.
              </p>
            </div>
            
            <div className="bg-card border rounded-lg p-6 reveal-animation stagger-1">
              <div className="w-10 h-10 rounded-full bg-factory-blue text-white flex items-center justify-center text-xl font-bold mb-4">
                2
              </div>
              <h3 className="text-lg font-bold mb-2">Browse & Buy</h3>
              <p className="text-muted-foreground">
                Search our marketplace for agricultural waste materials that meet your specifications, aided by AI-powered recommendations.
              </p>
            </div>
            
            <div className="bg-card border rounded-lg p-6 reveal-animation stagger-2">
              <div className="w-10 h-10 rounded-full bg-factory-blue text-white flex items-center justify-center text-xl font-bold mb-4">
                3
              </div>
              <h3 className="text-lg font-bold mb-2">Verify & Pay</h3>
              <p className="text-muted-foreground">
                Review material specifications, negotiate terms if needed, and complete your purchase through our secure payment system.
              </p>
            </div>
            
            <div className="bg-card border rounded-lg p-6 reveal-animation stagger-3">
              <div className="w-10 h-10 rounded-full bg-factory-blue text-white flex items-center justify-center text-xl font-bold mb-4">
                4
              </div>
              <h3 className="text-lg font-bold mb-2">Receive Materials</h3>
              <p className="text-muted-foreground">
                Coordinate delivery with the seller or use our logistics partners, verify quality upon receipt, and release payment.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12 reveal-animation">
            <Link to="/how-it-works">
              <Button>
                View Detailed Process
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Industry Applications */}
      <div className="py-16 bg-muted/30">
        <div className="container mx-auto">
          <SectionTitle 
            title="Industry Applications"
            subtitle="Discover how agricultural waste can be used in your industry"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {industryApplications.map((item, index) => (
              <Card 
                key={item.id} 
                className="reveal-animation"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <CardTitle>{item.wasteType}</CardTitle>
                  <CardDescription>
                    Industrial applications and use cases
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {item.applications.map((application, appIndex) => (
                      <li key={appIndex} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-factory-blue flex-shrink-0 mt-0.5" />
                        <span>{application}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link to={`/marketplace?search=${encodeURIComponent(item.wasteType)}`}>
                    <Button variant="outline" className="w-full">
                      Find {item.wasteType}
                      <Search className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
      
      {/* AI Insights Section */}
      <div className="py-16 bg-factory-blue/5">
        <div className="container mx-auto">
          <SectionTitle 
            title="AI-Powered Material Recommendations"
            subtitle="Smart sourcing decisions based on your industry needs"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-background border rounded-lg p-6 reveal-animation">
              <div className="flex items-center gap-2 mb-4">
                <AIRecommendationBadge type="recommendation">
                  Material Matching
                </AIRecommendationBadge>
              </div>
              <h3 className="text-xl font-bold mb-3">Tailored Material Recommendations</h3>
              <p className="text-muted-foreground mb-4">
                Our AI engine analyzes your industry type, production requirements, and historical purchases to recommend the most suitable agricultural waste materials. This ensures you get materials that precisely match your technical specifications and processing capabilities.
              </p>
              <div className="bg-factory-blue/5 border border-factory-blue/20 rounded-lg p-4">
                <h4 className="font-medium mb-2">Example AI Recommendation:</h4>
                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <BarChart3 className="h-5 w-5 text-factory-blue" />
                  </div>
                  <div>
                    <p className="text-sm">
                      Based on your packaging manufacturing needs, <span className="text-factory-blue font-medium">Sugarcane Bagasse</span> from Maharashtra would be an ideal material, offering 18% higher strength properties than your current materials at a 22% lower cost.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-background border rounded-lg p-6 reveal-animation stagger-1">
              <div className="flex items-center gap-2 mb-4">
                <AIRecommendationBadge type="analysis">
                  Supply Chain Intelligence
                </AIRecommendationBadge>
              </div>
              <h3 className="text-xl font-bold mb-3">Optimized Procurement Strategy</h3>
              <p className="text-muted-foreground mb-4">
                Get intelligent insights into material availability, pricing trends, and optimal procurement timing. Our AI analyzes seasonal variations, regional availability, and transportation costs to help you develop a cost-effective and reliable procurement strategy.
              </p>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-factory-blue/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Recycle className="h-4 w-4 text-factory-blue" />
                    </div>
                    <span className="font-medium">Seasonal Availability</span>
                  </div>
                  <span className="text-sm">Peak Jul-Sep for rice husk</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-factory-blue/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Truck className="h-4 w-4 text-factory-blue" />
                    </div>
                    <span className="font-medium">Logistics Optimization</span>
                  </div>
                  <span className="text-sm">12% cost reduction potential</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Success Stories */}
      <div className="py-16">
        <div className="container mx-auto">
          <SectionTitle 
            title="Industry Success Stories"
            subtitle="How businesses are transforming with agricultural waste materials"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-background border rounded-lg overflow-hidden reveal-animation">
              <div className="h-48">
                <img 
                  src="https://images.unsplash.com/photo-1581093458791-9f2c2171e00d?q=80&w=1470&auto=format&fit=crop" 
                  alt="Construction company" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Factory className="h-4 w-4 text-factory-blue" />
                  <span className="text-sm font-medium text-factory-blue">Building Materials</span>
                </div>
                <h3 className="text-xl font-bold mb-2">EcoBuilt Construction</h3>
                <p className="text-muted-foreground mb-4">
                  Reduced material costs by 18% by incorporating rice husk ash in their cement formulations. The resulting product not only saved costs but also improved thermal insulation properties by 15%, creating a superior product at a lower price point.
                </p>
                <Separator className="mb-4" />
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Annual savings:</span>
                  <span className="font-bold">₹32 Lakhs</span>
                </div>
              </div>
            </div>
            
            <div className="bg-background border rounded-lg overflow-hidden reveal-animation stagger-1">
              <div className="h-48">
                <img 
                  src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1470&auto=format&fit=crop" 
                  alt="Paper mill" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Factory className="h-4 w-4 text-factory-blue" />
                  <span className="text-sm font-medium text-factory-blue">Packaging Industry</span>
                </div>
                <h3 className="text-xl font-bold mb-2">GreenPack Solutions</h3>
                <p className="text-muted-foreground mb-4">
                  Transitioned 60% of their packaging products to sugarcane bagasse-based materials, reducing plastic usage by 75 tons annually. This shift not only reduced raw material costs but also helped secure contracts with eco-conscious brands.
                </p>
                <Separator className="mb-4" />
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Plastic reduction:</span>
                  <span className="font-bold">75 tons/year</span>
                </div>
              </div>
            </div>
            
            <div className="bg-background border rounded-lg overflow-hidden reveal-animation stagger-2">
              <div className="h-48">
                <img 
                  src="https://images.unsplash.com/photo-1518623001395-125242310d0c?q=80&w=1470&auto=format&fit=crop" 
                  alt="Textile factory" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Factory className="h-4 w-4 text-factory-blue" />
                  <span className="text-sm font-medium text-factory-blue">Textile Industry</span>
                </div>
                <h3 className="text-xl font-bold mb-2">EcoTextile Innovations</h3>
                <p className="text-muted-foreground mb-4">
                  Developed a new line of textiles incorporating banana fiber, creating products with unique properties and marketing advantage. Their eco-textile line now accounts for 35% of total sales with 28% higher profit margins than conventional products.
                </p>
                <Separator className="mb-4" />
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Revenue increase:</span>
                  <span className="font-bold">35%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* FAQ Section */}
      <div className="py-16 bg-secondary">
        <div className="container mx-auto">
          <SectionTitle 
            title="Frequently Asked Questions"
            subtitle="Common questions from industries about using Farm2Factory"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-card rounded-lg border p-6 reveal-animation">
              <h3 className="text-lg font-bold mb-2">How is quality control ensured?</h3>
              <p className="text-muted-foreground">
                Our platform includes detailed product specifications and quality parameters for all listed materials. Sellers are required to accurately represent their products, and buyers can review the material upon delivery. Our escrow payment system ensures you only pay when satisfied with the received materials.
              </p>
            </div>
            
            <div className="bg-card rounded-lg border p-6 reveal-animation stagger-1">
              <h3 className="text-lg font-bold mb-2">Can I source in bulk quantities?</h3>
              <p className="text-muted-foreground">
                Absolutely! Our platform is designed to handle both small and large volume orders. For bulk requirements, you can either aggregate purchases from multiple sellers or work with farmer cooperatives that offer larger quantities. We also provide custom sourcing assistance for very large industrial requirements.
              </p>
            </div>
            
            <div className="bg-card rounded-lg border p-6 reveal-animation stagger-2">
              <h3 className="text-lg font-bold mb-2">How consistent is the supply?</h3>
              <p className="text-muted-foreground">
                Agricultural waste is seasonal by nature, but our platform connects you with farmers across different regions of India with varying harvest cycles. This helps ensure year-round availability of most materials. Our AI system can also help you forecast availability and suggest optimal purchasing timelines.
              </p>
            </div>
            
            <div className="bg-card rounded-lg border p-6 reveal-animation stagger-3">
              <h3 className="text-lg font-bold mb-2">Is there technical support for implementation?</h3>
              <p className="text-muted-foreground">
                Yes, we offer technical consulting services to help industries effectively integrate agricultural waste materials into their processes. Our team includes material scientists and engineers who can provide guidance on processing requirements, material properties, and best practices for various applications.
              </p>
            </div>
            
            <div className="bg-card rounded-lg border p-6 reveal-animation stagger-4">
              <h3 className="text-lg font-bold mb-2">How are logistics and transportation handled?</h3>
              <p className="text-muted-foreground">
                You have flexible options for logistics. You can arrange your own transportation, the seller may offer delivery services, or you can use our network of logistics partners. Transportation arrangements and costs are clearly specified during the transaction process, ensuring transparency.
              </p>
            </div>
            
            <div className="bg-card rounded-lg border p-6 reveal-animation stagger-5">
              <h3 className="text-lg font-bold mb-2">Can I get sustainability metrics for my purchases?</h3>
              <p className="text-muted-foreground">
                Yes, we provide detailed sustainability metrics for all transactions, including carbon emission reduction, waste diversion, and other environmental impact data. These metrics can be incorporated into your company's ESG reporting and sustainability initiatives.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-factory-blue/20 to-factory-blue/5">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 reveal-animation">Ready to Transform Your Supply Chain?</h2>
            <p className="text-xl text-muted-foreground mb-8 reveal-animation stagger-1">
              Join leading industries already sourcing sustainable materials through Farm2Factory
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center reveal-animation stagger-2">
              <Link to="/register">
                <Button size="lg" className="px-8">
                  Create Industry Account
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/marketplace">
                <Button size="lg" variant="outline">
                  Browse Materials
                </Button>
              </Link>
            </div>
            
            <div className="mt-12 flex items-center justify-center gap-8 text-muted-foreground reveal-animation stagger-3">
              <div className="flex flex-col items-center">
                <PackageCheck className="h-8 w-8 mb-2 text-factory-blue" />
                <div className="text-2xl font-bold text-foreground">10+</div>
                <div className="text-sm">Material categories</div>
              </div>
              <div className="h-12 w-px bg-border"></div>
              <div className="flex flex-col items-center">
                <Factory className="h-8 w-8 mb-2 text-factory-blue" />
                <div className="text-2xl font-bold text-foreground">250+</div>
                <div className="text-sm">Industries served</div>
              </div>
              <div className="h-12 w-px bg-border"></div>
              <div className="flex flex-col items-center">
                <Leaf className="h-8 w-8 mb-2 text-factory-blue" />
                <div className="text-2xl font-bold text-foreground">15-25%</div>
                <div className="text-sm">Average cost savings</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
