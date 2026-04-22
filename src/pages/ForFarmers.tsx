
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, BarChart3, DollarSign, Sprout, PiggyBank, BarChart2, Share2, MapPin, Users } from "lucide-react";
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
import { successStories } from "@/lib/data";

export default function ForFarmers() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <div className="py-16 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-4">
              <span className="farm-badge">For Farmers</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 reveal-animation">
              Turn Agricultural Waste Into <span className="text-farm-green">Valuable Income</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 reveal-animation stagger-1">
              Stop burning or discarding agricultural waste. Farm2Factory connects you directly with industries that need your crop residues and processing byproducts, creating a new revenue stream for your farm.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 reveal-animation stagger-2">
              <Link to="/register">
                <Button size="lg">
                  Start Selling Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/how-it-works">
                <Button size="lg" variant="outline">
                  Learn How It Works
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative reveal-animation">
            <div className="aspect-square rounded-2xl overflow-hidden border-8 border-white shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=1470&auto=format&fit=crop" 
                alt="Farmer holding agricultural waste" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 w-48">
              <div className="text-sm font-medium text-muted-foreground mb-1">
                Average Extra Income
              </div>
              <div className="text-2xl font-bold text-farm-green">
                ₹45,000 <span className="text-sm font-normal text-muted-foreground">/ season</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Benefits Section */}
      <div className="py-16 bg-secondary">
        <div className="container mx-auto">
          <SectionTitle 
            title="Benefits for Farmers"
            subtitle="How Farm2Factory helps you maximize the value of agricultural waste"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <Card className="reveal-animation">
              <CardHeader>
                <div className="w-12 h-12 bg-farm-green/20 rounded-full flex items-center justify-center mb-2">
                  <DollarSign className="h-6 w-6 text-farm-green" />
                </div>
                <CardTitle>Additional Income</CardTitle>
                <CardDescription>
                  Convert waste into a valuable income stream
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Transform what was once considered waste into a significant additional revenue stream. Our farmers report earning between ₹25,000 to ₹60,000 extra per season by selling agricultural byproducts that would otherwise be discarded or burned.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-farm-green mr-2">•</span>
                    <span>Rice husk sales average ₹5,000 per ton</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-farm-green mr-2">•</span>
                    <span>Sugarcane bagasse fetches ₹3,000-4,000 per ton</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-farm-green mr-2">•</span>
                    <span>Coconut shells and fibers valued at ₹8,000+ per ton</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="reveal-animation stagger-1">
              <CardHeader>
                <div className="w-12 h-12 bg-farm-green/20 rounded-full flex items-center justify-center mb-2">
                  <BarChart3 className="h-6 w-6 text-farm-green" />
                </div>
                <CardTitle>Market Access</CardTitle>
                <CardDescription>
                  Connect with industries across India
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Gain access to a nationwide marketplace of industries searching for agricultural waste products. Expand beyond local buyers and connect with companies willing to pay premium prices for quality agricultural byproducts.
                </p>
                <div className="mt-4 bg-muted/30 rounded-lg p-3">
                  <h4 className="font-medium text-sm mb-2">Top Industries Purchasing Agricultural Waste:</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Biomass Energy Generation</li>
                    <li>• Sustainable Packaging</li>
                    <li>• Construction Materials</li>
                    <li>• Organic Fertilizers</li>
                    <li>• Textile Manufacturing</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            
            <Card className="reveal-animation stagger-2">
              <CardHeader>
                <div className="w-12 h-12 bg-farm-green/20 rounded-full flex items-center justify-center mb-2">
                  <Sprout className="h-6 w-6 text-farm-green" />
                </div>
                <CardTitle>Sustainable Farming</CardTitle>
                <CardDescription>
                  Reduce environmental impact
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Be part of the sustainable agriculture movement by finding productive uses for agricultural waste instead of burning it. Reduce air pollution, improve soil health, and contribute to a circular economy while enhancing your farm's environmental credentials.
                </p>
                <div className="mt-4 bg-farm-green/10 rounded-lg p-3">
                  <h4 className="font-medium text-farm-green text-sm mb-1">Environmental Impact:</h4>
                  <p className="text-sm text-muted-foreground">Every ton of agricultural waste reused instead of burned prevents approximately 1.4 tons of CO₂ emissions, helping combat climate change and reducing harmful air pollutants.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      {/* How It Works for Farmers */}
      <div className="py-16">
        <div className="container mx-auto">
          <SectionTitle 
            title="How It Works for Farmers"
            subtitle="A simple process to turn your agricultural waste into profit"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
            <div className="bg-card border rounded-lg p-6 reveal-animation">
              <div className="w-10 h-10 rounded-full bg-farm-green text-white flex items-center justify-center text-xl font-bold mb-4">
                1
              </div>
              <h3 className="text-lg font-bold mb-2">Sign Up</h3>
              <p className="text-muted-foreground">
                Create your farmer account with basic information about your farm location and types of crops you produce.
              </p>
              <div className="mt-4 pt-4 border-t border-border/50">
                <h4 className="text-sm font-medium mb-2">What You'll Need:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Valid mobile number</li>
                  <li>• Farm location details</li>
                  <li>• Basic crop information</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-card border rounded-lg p-6 reveal-animation stagger-1">
              <div className="w-10 h-10 rounded-full bg-farm-green text-white flex items-center justify-center text-xl font-bold mb-4">
                2
              </div>
              <h3 className="text-lg font-bold mb-2">List Products</h3>
              <p className="text-muted-foreground">
                Add details about your available agricultural waste, including type, quantity, quality parameters, and your asking price.
              </p>
              <div className="mt-4 pt-4 border-t border-border/50">
                <h4 className="text-sm font-medium mb-2">Our AI Helps You:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Optimize pricing</li>
                  <li>• Add product descriptions</li>
                  <li>• Match with potential buyers</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-card border rounded-lg p-6 reveal-animation stagger-2">
              <div className="w-10 h-10 rounded-full bg-farm-green text-white flex items-center justify-center text-xl font-bold mb-4">
                3
              </div>
              <h3 className="text-lg font-bold mb-2">Connect & Sell</h3>
              <p className="text-muted-foreground">
                Receive inquiries from interested buyers, negotiate terms, and confirm sales through our secure platform.
              </p>
              <div className="mt-4 pt-4 border-t border-border/50">
                <h4 className="text-sm font-medium mb-2">Built-in Features:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• In-app messaging</li>
                  <li>• Negotiation tools</li>
                  <li>• Digital contract generation</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-card border rounded-lg p-6 reveal-animation stagger-3">
              <div className="w-10 h-10 rounded-full bg-farm-green text-white flex items-center justify-center text-xl font-bold mb-4">
                4
              </div>
              <h3 className="text-lg font-bold mb-2">Get Paid</h3>
              <p className="text-muted-foreground">
                Arrange delivery and receive secure payments directly to your bank account or via UPI once the buyer confirms receipt.
              </p>
              <div className="mt-4 pt-4 border-t border-border/50">
                <h4 className="text-sm font-medium mb-2">Payment Options:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Direct bank transfer</li>
                  <li>• UPI payments</li>
                  <li>• Secure escrow system</li>
                </ul>
              </div>
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
      
      {/* AI Insights Section */}
      <div className="py-16 bg-factory-blue/5">
        <div className="container mx-auto">
          <SectionTitle 
            title="AI-Powered Market Insights"
            subtitle="Make data-driven decisions to maximize your profits"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-background border rounded-lg p-6 reveal-animation">
              <div className="flex items-center gap-2 mb-4">
                <AIRecommendationBadge type="insight">
                  Pricing Insights
                </AIRecommendationBadge>
              </div>
              <h3 className="text-xl font-bold mb-3">Optimal Pricing Recommendations</h3>
              <p className="text-muted-foreground mb-4">
                Our AI analyzes market trends, supply-demand dynamics, and historical transaction data to recommend the optimal price points for your agricultural waste products, helping you maximize revenue without pricing yourself out of the market.
              </p>
              <div className="bg-muted/50 rounded-lg p-4">
                <div className="flex justify-between items-baseline mb-2">
                  <span className="font-medium">Rice Husk</span>
                  <span className="text-farm-green font-medium">₹5,000 - ₹5,500 / ton</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2 mb-1">
                  <div className="bg-farm-green h-2 rounded-full" style={{ width: '70%' }}></div>
                </div>
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Current market range</span>
                  <span>70% confidence</span>
                </div>
              </div>
              
              <div className="mt-4 space-y-3">
                <div className="bg-muted/50 rounded-lg p-4">
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="font-medium">Wheat Straw</span>
                    <span className="text-farm-green font-medium">₹3,800 - ₹4,200 / ton</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2 mb-1">
                    <div className="bg-farm-green h-2 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Current market range</span>
                    <span>65% confidence</span>
                  </div>
                </div>
                
                <div className="bg-muted/50 rounded-lg p-4">
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="font-medium">Coconut Fiber</span>
                    <span className="text-farm-green font-medium">₹8,000 - ₹8,800 / ton</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2 mb-1">
                    <div className="bg-farm-green h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Current market range</span>
                    <span>85% confidence</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-background border rounded-lg p-6 reveal-animation stagger-1">
              <div className="flex items-center gap-2 mb-4">
                <AIRecommendationBadge type="analysis">
                  Demand Forecast
                </AIRecommendationBadge>
              </div>
              <h3 className="text-xl font-bold mb-3">Industry Demand Predictions</h3>
              <p className="text-muted-foreground mb-4">
                Get ahead of market trends with AI-powered forecasts of industry demand for different types of agricultural waste. Plan your waste collection and storage strategy based on upcoming demand peaks to maximize your selling opportunities.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-farm-green/10 rounded-full flex items-center justify-center">
                    <BarChart2 className="h-5 w-5 text-farm-green" />
                  </div>
                  <div>
                    <div className="font-medium">Sugarcane Bagasse</div>
                    <div className="text-xs text-farm-green">+15% projected demand increase in next quarter</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-farm-green/10 rounded-full flex items-center justify-center">
                    <Share2 className="h-5 w-5 text-farm-green" />
                  </div>
                  <div>
                    <div className="font-medium">Coconut Fiber</div>
                    <div className="text-xs text-farm-green">High demand from textile industries in Q3</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 bg-farm-green/5 border border-farm-green/20 rounded-lg p-4">
                <h4 className="font-medium mb-3 flex items-center">
                  <span className="mr-2 text-farm-green">⭐</span>
                  Regional Demand Hotspots
                </h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-farm-green mt-0.5" />
                    <div>
                      <h5 className="font-medium">Maharashtra & Gujarat</h5>
                      <p className="text-sm text-muted-foreground">High demand for rice husks and cotton stalks from biofuel producers and packaging industries</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-farm-green mt-0.5" />
                    <div>
                      <h5 className="font-medium">Karnataka & Tamil Nadu</h5>
                      <p className="text-sm text-muted-foreground">Growing demand for coconut waste and sugarcane bagasse from eco-friendly furniture and textile manufacturers</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-farm-green mt-0.5" />
                    <div>
                      <h5 className="font-medium">Punjab, Haryana & UP</h5>
                      <p className="text-sm text-muted-foreground">Strong market for wheat straw and rice straw for paper production and biomass power plants</p>
                    </div>
                  </div>
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
            title="Farmer Success Stories"
            subtitle="Real farmers creating real value from agricultural waste"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {successStories.map((story, index) => (
              <div 
                key={story.id} 
                className="bg-card border rounded-lg overflow-hidden reveal-animation"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="h-48 relative">
                  <img 
                    src={story.imageUrl} 
                    alt={story.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                    <div className="flex items-center gap-2 text-white mb-1">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{story.location}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white">{story.title}</h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-muted-foreground mb-4">
                    {story.summary}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-muted/30 rounded-lg p-3">
                      <div className="text-muted-foreground mb-1">Annual Revenue</div>
                      <div className="font-bold text-farm-green">{story.revenue}</div>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-3">
                      <div className="text-muted-foreground mb-1">Farmers Involved</div>
                      <div className="font-bold">{story.farmerCount}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* FAQ Section */}
      <div className="py-16 bg-secondary">
        <div className="container mx-auto">
          <SectionTitle 
            title="Frequently Asked Questions"
            subtitle="Common questions from farmers about using Farm2Factory"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-card rounded-lg border p-6 reveal-animation">
              <h3 className="text-lg font-bold mb-2">What types of agricultural waste can I sell?</h3>
              <p className="text-muted-foreground">
                You can sell virtually any type of agricultural waste that has potential industrial uses, including crop residues (rice husks, wheat straw, corn cobs), fruit and vegetable processing waste, coffee and tea processing byproducts, coconut shells and fibers, sugarcane bagasse, and more.
              </p>
            </div>
            
            <div className="bg-card rounded-lg border p-6 reveal-animation stagger-1">
              <h3 className="text-lg font-bold mb-2">How much can I earn from selling agricultural waste?</h3>
              <p className="text-muted-foreground">
                Earnings vary based on the type, quality, and quantity of waste, as well as current market demand. Most farmers on our platform earn between ₹25,000 to ₹60,000 per season from waste that would otherwise generate no income. Some cooperative farming groups report earnings of over ₹1 lakh per season.
              </p>
            </div>
            
            <div className="bg-card rounded-lg border p-6 reveal-animation stagger-2">
              <h3 className="text-lg font-bold mb-2">Do I need to process the waste before selling?</h3>
              <p className="text-muted-foreground">
                Basic processing such as drying and collection is usually required, but extensive processing is typically not necessary. Our platform allows you to specify the condition of your waste, and buyers will choose based on their requirements. We also provide guidelines for basic processing to increase the value of your waste.
              </p>
            </div>
            
            <div className="bg-card rounded-lg border p-6 reveal-animation stagger-3">
              <h3 className="text-lg font-bold mb-2">How do payments work?</h3>
              <p className="text-muted-foreground">
                We offer secure payment processing through our platform. When a sale is confirmed, the buyer's payment is held in escrow. Once the buyer confirms receipt and satisfaction with the product, the funds are released to your account. You can receive payments via bank transfer or UPI.
              </p>
            </div>
            
            <div className="bg-card rounded-lg border p-6 reveal-animation stagger-4">
              <h3 className="text-lg font-bold mb-2">How is transportation handled?</h3>
              <p className="text-muted-foreground">
                Transportation arrangements are flexible. For small quantities, buyers may arrange pickup. For larger quantities, we can help coordinate with logistics partners. Transportation costs and arrangements are agreed upon during the sale negotiation process and clearly indicated in the final agreement.
              </p>
            </div>
            
            <div className="bg-card rounded-lg border p-6 reveal-animation stagger-5">
              <h3 className="text-lg font-bold mb-2">Can I sell waste from multiple crops?</h3>
              <p className="text-muted-foreground">
                Absolutely! You can list as many different types of agricultural waste as your farm produces. Many of our most successful farmers list multiple waste products, creating diverse revenue streams throughout the year based on their crop rotation and harvesting schedule.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-farm-green/20 to-farm-green/5">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 reveal-animation">Ready to Turn Your Agricultural Waste Into Profit?</h2>
            <p className="text-xl text-muted-foreground mb-8 reveal-animation stagger-1">
              Join thousands of farmers across India already earning additional income through Farm2Factory
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center reveal-animation stagger-2">
              <Link to="/register">
                <Button size="lg" className="px-8">
                  Register as a Farmer
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/how-it-works">
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </Link>
            </div>
            
            <div className="mt-12 flex items-center justify-center gap-8 text-muted-foreground reveal-animation stagger-3">
              <div className="flex flex-col items-center">
                <PiggyBank className="h-8 w-8 mb-2 text-farm-green" />
                <div className="text-2xl font-bold text-foreground">₹45,000+</div>
                <div className="text-sm">Avg. seasonal income</div>
              </div>
              <div className="h-12 w-px bg-border"></div>
              <div className="flex flex-col items-center">
                <Users className="h-8 w-8 mb-2 text-farm-green" />
                <div className="text-2xl font-bold text-foreground">5,000+</div>
                <div className="text-sm">Farmers on platform</div>
              </div>
              <div className="h-12 w-px bg-border"></div>
              <div className="flex flex-col items-center">
                <MapPin className="h-8 w-8 mb-2 text-farm-green" />
                <div className="text-2xl font-bold text-foreground">12+</div>
                <div className="text-sm">States across India</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
