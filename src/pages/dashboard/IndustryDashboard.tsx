
import React from "react";
import { Link } from "react-router-dom";
import { BarChart, ShoppingCart, Truck, Calendar, ArrowDown, ArrowUp, Package, Factory, ArrowRight } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { IndustryWasteRecommendations, TopRecommendations } from "@/components/dashboard/IndustryWasteRecommendations";

export default function IndustryDashboard() {
  return (
    <PageLayout>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-1">Industry Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, EcoBuilt Solutions</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 mt-4 md:mt-0">
          <Link to="/marketplace">
            <Button>
              Browse Marketplace
              <ShoppingCart className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
      
      {/* Quick Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
            <ShoppingCart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">142</div>
            <p className="text-xs text-muted-foreground flex items-center mt-1">
              <ArrowUp className="h-3 w-3 text-green-500 mr-1" />
              <span className="text-green-500 font-medium">8%</span> from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Spending</CardTitle>
            <BarChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹24.5L</div>
            <p className="text-xs text-muted-foreground flex items-center mt-1">
              <ArrowDown className="h-3 w-3 text-green-500 mr-1" />
              <span className="text-green-500 font-medium">12%</span> cost reduction
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Materials</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">856 tons</div>
            <p className="text-xs text-muted-foreground flex items-center mt-1">
              <ArrowUp className="h-3 w-3 text-green-500 mr-1" />
              <span className="text-green-500 font-medium">18%</span> sustainability increase
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">In Transit</CardTitle>
            <Truck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">56 tons</div>
            <p className="text-xs text-muted-foreground mt-1">
              Arriving in 2-5 days
            </p>
          </CardContent>
        </Card>
      </div>
      
      {/* Main Dashboard Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - AI Recommendations */}
        <div className="lg:col-span-2">
          <Tabs defaultValue="overview">
            <TabsList className="mb-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="orders">Orders</TabsTrigger>
              <TabsTrigger value="insights">Insights</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-8">
              {/* AI Waste Recommendations */}
              <Card>
                <CardHeader>
                  <CardTitle>AI Material Recommendations</CardTitle>
                  <CardDescription>
                    Waste materials that match your industry needs based on AI analysis
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <IndustryWasteRecommendations industryType="construction" />
                </CardContent>
              </Card>
              
              {/* Upcoming Deliveries */}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>Upcoming Deliveries</CardTitle>
                    <CardDescription>Your materials that are in transit</CardDescription>
                  </div>
                  <Link to="/orders">
                    <Button variant="outline" size="sm">View All</Button>
                  </Link>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 border-b pb-4">
                      <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center flex-shrink-0">
                        <Truck className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium truncate">Rice Husk (25 tons)</h4>
                        <p className="text-sm text-muted-foreground">From Punjab Farmers Cooperative</p>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">Apr 28, 2023</div>
                        <div className="text-xs text-green-600">In transit (3 days)</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 border-b pb-4">
                      <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center flex-shrink-0">
                        <Truck className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium truncate">Sugarcane Bagasse (18 tons)</h4>
                        <p className="text-sm text-muted-foreground">From Maharashtra Sugar Mills</p>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">May 2, 2023</div>
                        <div className="text-xs text-amber-600">Processing (5 days)</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center flex-shrink-0">
                        <Truck className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium truncate">Coconut Fiber (13 tons)</h4>
                        <p className="text-sm text-muted-foreground">From Kerala Agro Industries</p>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">May 10, 2023</div>
                        <div className="text-xs text-blue-600">Preparing shipment</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="orders">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Orders</CardTitle>
                  <CardDescription>Your recent material purchases</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 border-b pb-4">
                      <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center flex-shrink-0">
                        <Package className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium truncate">Order #F2F-4872</h4>
                        <p className="text-sm text-muted-foreground">Rice Husk (25 tons)</p>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">₹1,25,000</div>
                        <div className="text-xs text-green-600">Paid on Apr 25, 2023</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 border-b pb-4">
                      <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center flex-shrink-0">
                        <Package className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium truncate">Order #F2F-4856</h4>
                        <p className="text-sm text-muted-foreground">Sugarcane Bagasse (18 tons)</p>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">₹58,500</div>
                        <div className="text-xs text-green-600">Paid on Apr 28, 2023</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 border-b pb-4">
                      <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center flex-shrink-0">
                        <Package className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium truncate">Order #F2F-4902</h4>
                        <p className="text-sm text-muted-foreground">Coconut Fiber (13 tons)</p>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">₹1,04,000</div>
                        <div className="text-xs text-green-600">Paid on May 5, 2023</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center flex-shrink-0">
                        <Package className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium truncate">Order #F2F-4921</h4>
                        <p className="text-sm text-muted-foreground">Wheat Straw (20 tons)</p>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">₹76,000</div>
                        <div className="text-xs text-green-600">Paid on May 8, 2023</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="insights">
              <Card>
                <CardHeader>
                  <CardTitle>Utilization Insights</CardTitle>
                  <CardDescription>AI analysis of your material usage patterns</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="bg-muted p-4 rounded-lg">
                      <h3 className="font-medium mb-2">Material Efficiency</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Based on your purchasing patterns, AI suggests the following optimizations:
                      </p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <ArrowUp className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>Pre-processing rice husk can improve your cement mixture efficiency by 12%</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ArrowUp className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>Storing coconut fiber in humidity-controlled environment extends usable life by 40%</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ArrowDown className="h-4 w-4 text-red-500 mt-0.5" />
                          <span>Current wheat straw usage shows 15% wastage - consider processing in smaller batches</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-muted p-4 rounded-lg">
                      <h3 className="font-medium mb-2">Seasonal Recommendations</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Optimize your procurement schedule based on seasonal availability:
                      </p>
                      <div className="space-y-3">
                        <div className="flex items-start gap-2">
                          <Calendar className="h-4 w-4 text-factory-blue mt-0.5" />
                          <div>
                            <div className="font-medium text-sm">May-June</div>
                            <p className="text-xs text-muted-foreground">Stock up on wheat straw before monsoon season begins</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <Calendar className="h-4 w-4 text-factory-blue mt-0.5" />
                          <div>
                            <div className="font-medium text-sm">August-October</div>
                            <p className="text-xs text-muted-foreground">Optimal time to purchase rice husk at lower prices</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <Calendar className="h-4 w-4 text-factory-blue mt-0.5" />
                          <div>
                            <div className="font-medium text-sm">November-January</div>
                            <p className="text-xs text-muted-foreground">Sugarcane bagasse availability peaks with lower pricing</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
        
        {/* Right Column - Top Recommendations & Upcoming */}
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Top Material Matches</CardTitle>
              <CardDescription>Highest-scoring materials for your industry</CardDescription>
            </CardHeader>
            <CardContent>
              <TopRecommendations />
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Industry Sustainability Profile</CardTitle>
              <CardDescription>Your environmental impact metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1 text-sm">
                    <span>Carbon Footprint Reduction</span>
                    <span className="font-medium">74%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2.5">
                    <div className="bg-green-500 h-2.5 rounded-full" style={{ width: "74%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1 text-sm">
                    <span>Waste Diversion Rate</span>
                    <span className="font-medium">86%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2.5">
                    <div className="bg-green-500 h-2.5 rounded-full" style={{ width: "86%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1 text-sm">
                    <span>Renewable Material Usage</span>
                    <span className="font-medium">62%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2.5">
                    <div className="bg-green-500 h-2.5 rounded-full" style={{ width: "62%" }}></div>
                  </div>
                </div>
                
                <div className="pt-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">CO₂ Emissions Avoided</span>
                    <span className="font-medium">123 tonnes</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Agricultural Waste Utilized</span>
                    <span className="font-medium">856 tonnes</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <Link to="/sustainability-report">
                  <Button variant="outline" className="w-full">
                    View Full Sustainability Report
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
              <CardDescription>Industry conferences and training</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3 border-b pb-3">
                  <div className="w-10 h-10 bg-factory-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Calendar className="h-5 w-5 text-factory-blue" />
                  </div>
                  <div>
                    <h4 className="font-medium">Green Building Expo</h4>
                    <p className="text-xs text-muted-foreground">May 18-20, 2023 • New Delhi</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 border-b pb-3">
                  <div className="w-10 h-10 bg-factory-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Factory className="h-5 w-5 text-factory-blue" />
                  </div>
                  <div>
                    <h4 className="font-medium">Agro-Waste Processing Workshop</h4>
                    <p className="text-xs text-muted-foreground">June 5, 2023 • Online</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-factory-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Calendar className="h-5 w-5 text-factory-blue" />
                  </div>
                  <div>
                    <h4 className="font-medium">Sustainable Industry Summit</h4>
                    <p className="text-xs text-muted-foreground">June 15-16, 2023 • Mumbai</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageLayout>
  );
}
