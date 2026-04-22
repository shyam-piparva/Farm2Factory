
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Truck, Users, ShieldCheck, TrendingUp, Lightbulb, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import { ProductCard } from "@/components/ui/custom/ProductCard";
import { SectionTitle } from "@/components/ui/custom/SectionTitle";
import { products, successStories, aiInsights } from "@/lib/data";

export default function Home() {
  // Filter AI recommended products for the hero section
  const recommendedProducts = products.filter(product => product.isAIRecommended).slice(0, 4);
  
  return (
    <PageLayout fullWidth withoutPadding>
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/50" />
          <img 
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1632&auto=format&fit=crop" 
            alt="Farm fields" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="hero-text mb-6 reveal-animation">
              Transforming Agricultural Waste into <span className="text-primary">Sustainable Value</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 reveal-animation stagger-1">
              Connect farmers with industries to create a sustainable ecosystem where agricultural waste becomes valuable resources. Building a greener future, together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 reveal-animation stagger-2">
              <Link to="/marketplace">
                <Button size="lg">
                  Explore Marketplace
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/how-it-works">
                <Button size="lg" variant="outline">
                  How It Works
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Key Benefits Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Creating Value Across the Supply Chain"
            subtitle="Farm2Factory bridges the gap between agricultural waste and industrial needs"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background rounded-lg p-6 shadow-soft reveal-animation">
              <div className="w-12 h-12 bg-farm-lightGreen/20 rounded-full flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-farm-green" />
              </div>
              <h3 className="text-xl font-bold mb-2">For Farmers</h3>
              <p className="text-muted-foreground mb-4">
                Turn agricultural waste into income streams. Access new markets and get fair prices for farm byproducts.
              </p>
              <Link to="/for-farmers" className="text-primary font-medium hover:underline inline-flex items-center">
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            
            <div className="bg-background rounded-lg p-6 shadow-soft reveal-animation stagger-1">
              <div className="w-12 h-12 bg-factory-lightBlue/20 rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-factory-blue" />
              </div>
              <h3 className="text-xl font-bold mb-2">For Industry</h3>
              <p className="text-muted-foreground mb-4">
                Source sustainable materials at competitive prices. Reduce environmental impact and improve supply chain resilience.
              </p>
              <Link to="/for-industry" className="text-primary font-medium hover:underline inline-flex items-center">
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            
            <div className="bg-background rounded-lg p-6 shadow-soft reveal-animation stagger-2">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                <ShieldCheck className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">For The Planet</h3>
              <p className="text-muted-foreground mb-4">
                Reduce agricultural waste burning. Lower carbon emissions and create a circular economy that benefits everyone.
              </p>
              <Link to="/how-it-works" className="text-primary font-medium hover:underline inline-flex items-center">
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Products Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="AI Recommended Products"
            subtitle="Discover agricultural waste products with the highest industry demand"
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {recommendedProducts.map(product => (
              <ProductCard key={product.id} product={product} className="reveal-animation" />
            ))}
          </div>
          
          <div className="mt-12 text-center reveal-animation">
            <Link to="/marketplace">
              <Button size="lg">
                View All Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="How Farm2Factory Works"
            subtitle="A simple process to connect farmers and industries"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center reveal-animation">
              <div className="w-16 h-16 rounded-full bg-farm-green text-white flex items-center justify-center text-2xl font-bold mb-6">
                1
              </div>
              <h3 className="text-xl font-bold mb-3">List Your Agricultural Waste</h3>
              <p className="text-muted-foreground">
                Farmers can easily list their agricultural waste products on our platform, specifying quantity, quality, and pricing.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center reveal-animation stagger-1">
              <div className="w-16 h-16 rounded-full bg-farm-green text-white flex items-center justify-center text-2xl font-bold mb-6">
                2
              </div>
              <h3 className="text-xl font-bold mb-3">Connect with Buyers</h3>
              <p className="text-muted-foreground">
                Industries browse through available products, aided by AI recommendations to find the perfect match for their needs.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center reveal-animation stagger-2">
              <div className="w-16 h-16 rounded-full bg-farm-green text-white flex items-center justify-center text-2xl font-bold mb-6">
                3
              </div>
              <h3 className="text-xl font-bold mb-3">Seamless Transactions</h3>
              <p className="text-muted-foreground">
                Secure payments, logistics support, and quality assurance make transactions smooth and reliable for both parties.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center reveal-animation">
            <Link to="/how-it-works">
              <Button variant="outline" size="lg">
                Learn More About Our Process
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Success Stories Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Success Stories"
            subtitle="Real impact stories from our community"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div 
                key={story.id} 
                className="bg-background border rounded-lg overflow-hidden shadow-soft reveal-animation"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48">
                  <img 
                    src={story.imageUrl} 
                    alt={story.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                    <p className="text-white font-medium">{story.location}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{story.title}</h3>
                  <p className="text-muted-foreground mb-4">{story.summary}</p>
                  
                  <div className="flex justify-between items-center text-sm">
                    <span className="farm-badge">{story.wasteType}</span>
                    <span className="font-medium">{story.revenue} Annual Revenue</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* AI Insights Section */}
      <section className="py-20 bg-factory-blue/5">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="AI-Powered Market Insights"
            subtitle="Data-driven recommendations to maximize value"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {aiInsights.map((insight, index) => (
              <div 
                key={insight.id} 
                className="bg-background border rounded-lg p-6 flex items-start gap-4 reveal-animation"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mt-1">
                  {insight.category === "Logistics" && <Truck className="h-5 w-5 text-factory-blue" />}
                  {insight.category === "Market Trends" && <TrendingUp className="h-5 w-5 text-factory-blue" />}
                  {insight.category === "Processing" && <Lightbulb className="h-5 w-5 text-factory-blue" />}
                  {insight.category === "Climate" && <BarChart3 className="h-5 w-5 text-factory-blue" />}
                </div>
                
                <div>
                  <h3 className="text-lg font-bold mb-1">{insight.title}</h3>
                  <p className="text-muted-foreground mb-2">{insight.content}</p>
                  <span className="text-xs text-factory-blue font-medium">{insight.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-farm-green to-factory-blue opacity-10 z-0" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title mb-6 reveal-animation">Ready to Join the Sustainable Revolution?</h2>
            <p className="text-lg text-muted-foreground mb-8 reveal-animation stagger-1">
              Whether you're a farmer looking to monetize agricultural waste or an industry seeking sustainable materials, Farm2Factory connects you to opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center reveal-animation stagger-2">
              <Link to="/register">
                <Button size="lg" className="w-full sm:w-auto">
                  Register Now
                </Button>
              </Link>
              <Link to="/marketplace">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Explore Marketplace
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
