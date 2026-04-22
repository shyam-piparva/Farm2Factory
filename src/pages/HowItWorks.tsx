
import React from "react";
import { ArrowRight, ListChecks, Users, Truck, CreditCard, BarChart3, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/ui/custom/SectionTitle";
import { Separator } from "@/components/ui/separator";
import { AIRecommendationBadge } from "@/components/ui/custom/AIRecommendationBadge";

export default function HowItWorks() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <div className="py-16 text-center">
        <SectionTitle 
          title="How Farm2Factory Works"
          subtitle="A revolutionary platform connecting farmers and industries to create a sustainable agricultural waste ecosystem"
        />
      </div>
      
      {/* Process Steps */}
      <div className="max-w-4xl mx-auto mb-20">
        <div className="grid grid-cols-1 gap-12">
          {/* Step 1 */}
          <div className="flex flex-col md:flex-row gap-8 items-center reveal-animation">
            <div className="w-full md:w-2/5 order-1 md:order-1">
              <div className="bg-farm-green/10 rounded-lg aspect-square flex items-center justify-center p-8">
                <ListChecks className="w-32 h-32 text-farm-green" />
              </div>
            </div>
            <div className="w-full md:w-3/5 order-2 md:order-2">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-farm-green text-white font-bold mb-4">
                1
              </div>
              <h3 className="text-2xl font-bold mb-3">List Agricultural Waste Products</h3>
              <p className="text-muted-foreground mb-4">
                Farmers list their available agricultural waste products on our platform, specifying details such as type, quantity, quality, location, and pricing. Our straightforward listing process makes it easy to showcase what you have to offer.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-farm-green/20 flex items-center justify-center mr-2">
                    <span className="text-farm-green text-xs">✓</span>
                  </div>
                  <span>Simple product listing interface</span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-farm-green/20 flex items-center justify-center mr-2">
                    <span className="text-farm-green text-xs">✓</span>
                  </div>
                  <span>Detailed specifications capture</span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-farm-green/20 flex items-center justify-center mr-2">
                    <span className="text-farm-green text-xs">✓</span>
                  </div>
                  <span>Photo upload capabilities</span>
                </li>
              </ul>
              <Link to="/for-farmers">
                <Button variant="outline">
                  Learn More for Farmers
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="h-12 w-px bg-border"></div>
          </div>
          
          {/* Step 2 */}
          <div className="flex flex-col md:flex-row gap-8 items-center reveal-animation">
            <div className="w-full md:w-3/5 order-2 md:order-1">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-factory-blue text-white font-bold mb-4">
                2
              </div>
              <h3 className="text-2xl font-bold mb-3">AI-Powered Matching</h3>
              <p className="text-muted-foreground mb-4">
                Our advanced AI algorithms analyze product listings and industry requirements to create optimal matches. The system considers factors like product type, quality parameters, location, and historical transaction data to recommend the best agricultural waste products for each industry's specific needs.
              </p>
              <div className="bg-factory-blue/5 border border-factory-blue/20 rounded-lg p-4 mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <AIRecommendationBadge type="insight">
                    AI Matching Engine
                  </AIRecommendationBadge>
                </div>
                <p className="text-sm">
                  Our proprietary AI engine analyzes over 20 variables to create optimal matches between agricultural waste producers and industrial buyers, increasing match efficiency by 78% compared to manual sourcing.
                </p>
              </div>
              <Link to="/marketplace">
                <Button variant="outline">
                  See Marketplace
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="w-full md:w-2/5 order-1 md:order-2">
              <div className="bg-factory-blue/10 rounded-lg aspect-square flex items-center justify-center p-8">
                <BarChart3 className="w-32 h-32 text-factory-blue" />
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="h-12 w-px bg-border"></div>
          </div>
          
          {/* Step 3 */}
          <div className="flex flex-col md:flex-row gap-8 items-center reveal-animation">
            <div className="w-full md:w-2/5 order-1 md:order-1">
              <div className="bg-primary/10 rounded-lg aspect-square flex items-center justify-center p-8">
                <Users className="w-32 h-32 text-primary" />
              </div>
            </div>
            <div className="w-full md:w-3/5 order-2 md:order-2">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold mb-4">
                3
              </div>
              <h3 className="text-2xl font-bold mb-3">Connect and Communicate</h3>
              <p className="text-muted-foreground mb-4">
                Once a potential match is identified, our platform facilitates secure communication between farmers and industries. Discuss specifications, negotiate prices, and clarify any questions before proceeding with the transaction. Our messaging system keeps all communications organized and in one place.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-background rounded-lg border p-3">
                  <h4 className="font-medium mb-1">For Farmers</h4>
                  <p className="text-sm text-muted-foreground">
                    Connect directly with multiple potential buyers to get the best value for your agricultural waste.
                  </p>
                </div>
                <div className="bg-background rounded-lg border p-3">
                  <h4 className="font-medium mb-1">For Industries</h4>
                  <p className="text-sm text-muted-foreground">
                    Communicate with verified suppliers and ensure the material meets your specific requirements.
                  </p>
                </div>
              </div>
              <Link to="/register">
                <Button variant="outline">
                  Create an Account
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="h-12 w-px bg-border"></div>
          </div>
          
          {/* Step 4 */}
          <div className="flex flex-col md:flex-row gap-8 items-center reveal-animation">
            <div className="w-full md:w-3/5 order-2 md:order-1">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-farm-green text-white font-bold mb-4">
                4
              </div>
              <h3 className="text-2xl font-bold mb-3">Secure Transactions</h3>
              <p className="text-muted-foreground mb-4">
                When both parties are satisfied, proceed with the transaction using our secure payment system. We offer multiple payment options including UPI for convenience. Funds are held in escrow until the buyer confirms satisfactory receipt of the goods, ensuring a safe and trustworthy experience for everyone.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-farm-green/20 flex items-center justify-center mr-2">
                    <span className="text-farm-green text-xs">✓</span>
                  </div>
                  <span>Secure payment processing</span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-farm-green/20 flex items-center justify-center mr-2">
                    <span className="text-farm-green text-xs">✓</span>
                  </div>
                  <span>Escrow protection for buyers and sellers</span>
                </li>
                <li className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-farm-green/20 flex items-center justify-center mr-2">
                    <span className="text-farm-green text-xs">✓</span>
                  </div>
                  <span>Transaction history and receipts</span>
                </li>
              </ul>
              <Link to="/marketplace">
                <Button variant="outline">
                  Explore Products
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="w-full md:w-2/5 order-1 md:order-2">
              <div className="bg-farm-green/10 rounded-lg aspect-square flex items-center justify-center p-8">
                <CreditCard className="w-32 h-32 text-farm-green" />
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="h-12 w-px bg-border"></div>
          </div>
          
          {/* Step 5 */}
          <div className="flex flex-col md:flex-row gap-8 items-center reveal-animation">
            <div className="w-full md:w-2/5 order-1 md:order-1">
              <div className="bg-factory-blue/10 rounded-lg aspect-square flex items-center justify-center p-8">
                <Truck className="w-32 h-32 text-factory-blue" />
              </div>
            </div>
            <div className="w-full md:w-3/5 order-2 md:order-2">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-factory-blue text-white font-bold mb-4">
                5
              </div>
              <h3 className="text-2xl font-bold mb-3">Logistics and Delivery</h3>
              <p className="text-muted-foreground mb-4">
                We help coordinate logistics for efficient transportation of agricultural waste products from farms to industrial facilities. For large orders, we can arrange bulk transportation at competitive rates through our logistics partners, ensuring timely delivery while minimizing environmental impact.
              </p>
              <div className="bg-factory-blue/5 border border-factory-blue/20 rounded-lg p-4 mb-6">
                <h4 className="font-medium mb-2">Logistics Features:</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-factory-blue/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-factory-blue text-xs">1</span>
                    </div>
                    <span>Real-time shipment tracking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-factory-blue/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-factory-blue text-xs">2</span>
                    </div>
                    <span>Multiple transportation options based on quantity and distance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-factory-blue/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-factory-blue text-xs">3</span>
                    </div>
                    <span>Optimized routing to reduce carbon footprint</span>
                  </li>
                </ul>
              </div>
              <Link to="/register">
                <Button variant="outline">
                  Start Using Farm2Factory
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Benefits Section */}
      <div className="py-16 bg-secondary">
        <div className="container mx-auto">
          <SectionTitle 
            title="Benefits for Everyone"
            subtitle="Creating sustainable value across the agricultural waste supply chain"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Farmers Benefits */}
            <div className="bg-background border rounded-lg p-6 reveal-animation">
              <div className="w-12 h-12 bg-farm-green/20 rounded-full flex items-center justify-center mb-4">
                <span className="text-farm-green font-bold">F</span>
              </div>
              <h3 className="text-xl font-bold mb-3">For Farmers</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-farm-green/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-farm-green text-xs">✓</span>
                  </div>
                  <span>Transform agricultural waste into valuable income</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-farm-green/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-farm-green text-xs">✓</span>
                  </div>
                  <span>Reduce environmental impact of waste disposal</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-farm-green/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-farm-green text-xs">✓</span>
                  </div>
                  <span>Access larger markets beyond local buyers</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-farm-green/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-farm-green text-xs">✓</span>
                  </div>
                  <span>Transparent pricing and secure payments</span>
                </li>
              </ul>
              <div className="mt-6">
                <Link to="/for-farmers">
                  <Button variant="outline">Learn More</Button>
                </Link>
              </div>
            </div>
            
            {/* Industries Benefits */}
            <div className="bg-background border rounded-lg p-6 reveal-animation stagger-1">
              <div className="w-12 h-12 bg-factory-blue/20 rounded-full flex items-center justify-center mb-4">
                <span className="text-factory-blue font-bold">I</span>
              </div>
              <h3 className="text-xl font-bold mb-3">For Industries</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-factory-blue/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-factory-blue text-xs">✓</span>
                  </div>
                  <span>Source sustainable raw materials efficiently</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-factory-blue/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-factory-blue text-xs">✓</span>
                  </div>
                  <span>Reduce carbon footprint and improve ESG metrics</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-factory-blue/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-factory-blue text-xs">✓</span>
                  </div>
                  <span>AI-powered recommendations for optimal materials</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-factory-blue/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-factory-blue text-xs">✓</span>
                  </div>
                  <span>Consistent quality and reliable supply chain</span>
                </li>
              </ul>
              <div className="mt-6">
                <Link to="/for-industry">
                  <Button variant="outline">Learn More</Button>
                </Link>
              </div>
            </div>
            
            {/* Environment Benefits */}
            <div className="bg-background border rounded-lg p-6 reveal-animation stagger-2">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                <span className="text-primary font-bold">E</span>
              </div>
              <h3 className="text-xl font-bold mb-3">For The Environment</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary text-xs">✓</span>
                  </div>
                  <span>Reduce agricultural waste burning and pollution</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary text-xs">✓</span>
                  </div>
                  <span>Lower greenhouse gas emissions from waste decomposition</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary text-xs">✓</span>
                  </div>
                  <span>Promote circular economy principles</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary text-xs">✓</span>
                  </div>
                  <span>Reduce dependency on virgin raw materials</span>
                </li>
              </ul>
              <div className="mt-6">
                <Link to="/marketplace">
                  <Button variant="outline">Browse Products</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* FAQ Section */}
      <div className="py-16">
        <div className="container mx-auto">
          <SectionTitle 
            title="Frequently Asked Questions"
            subtitle="Answers to common questions about the Farm2Factory platform"
          />
          
          <div className="max-w-3xl mx-auto mt-12 space-y-6">
            <div className="bg-card rounded-lg border p-6 reveal-animation">
              <h3 className="text-lg font-bold mb-2">How do I get started as a farmer?</h3>
              <p className="text-muted-foreground">
                Simply create an account, verify your identity as a farmer, and start listing your agricultural waste products. Our team can assist with your first listings to ensure all important details are captured accurately.
              </p>
            </div>
            
            <div className="bg-card rounded-lg border p-6 reveal-animation stagger-1">
              <h3 className="text-lg font-bold mb-2">What types of agricultural waste can be sold on the platform?</h3>
              <p className="text-muted-foreground">
                We accept a wide range of agricultural waste including crop residues (rice husks, wheat straw, etc.), processing byproducts (sugarcane bagasse, coffee pulp), fruit and vegetable waste, nut shells, and more. If you're unsure if your waste product qualifies, contact our team.
              </p>
            </div>
            
            <div className="bg-card rounded-lg border p-6 reveal-animation stagger-2">
              <h3 className="text-lg font-bold mb-2">How does the payment system work?</h3>
              <p className="text-muted-foreground">
                We offer secure transactions through our platform with multiple payment options including UPI, bank transfers, and more. Funds are held in escrow until the buyer confirms receipt and satisfaction with the product, ensuring security for both parties.
              </p>
            </div>
            
            <div className="bg-card rounded-lg border p-6 reveal-animation stagger-3">
              <h3 className="text-lg font-bold mb-2">Can Farm2Factory help with transportation?</h3>
              <p className="text-muted-foreground">
                Yes, we have partnerships with logistics providers who can help transport your agricultural waste products efficiently. For large orders, we can arrange bulk transportation at competitive rates. Transportation costs are clearly displayed during the checkout process.
              </p>
            </div>
            
            <div className="bg-card rounded-lg border p-6 reveal-animation stagger-4">
              <h3 className="text-lg font-bold mb-2">How does the AI recommendation system work?</h3>
              <p className="text-muted-foreground">
                Our AI system analyzes various factors including product specifications, industry requirements, location data, historical transactions, and market trends to recommend the most suitable products for buyers and potential customers for sellers. The system continuously learns and improves its recommendations over time.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-farm-green/10 to-factory-blue/10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 reveal-animation">Ready to Transform Agricultural Waste?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto reveal-animation stagger-1">
            Join thousands of farmers and industries already creating sustainable value through our platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center reveal-animation stagger-2">
            <Link to="/register">
              <Button size="lg">
                Create an Account
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/marketplace">
              <Button size="lg" variant="outline">
                Browse Marketplace
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
