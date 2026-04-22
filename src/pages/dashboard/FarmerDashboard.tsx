
import { useState } from "react";
import { 
  BarChart3, 
  TrendingUp, 
  ShoppingCart, 
  DollarSign, 
  Package, 
  Users,
  Map,
  CalendarDays,
  Plus
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SectionTitle } from "@/components/ui/custom/SectionTitle";
import { AIRecommendationBadge } from "@/components/ui/custom/AIRecommendationBadge";
import { useAuth } from "@/context/AuthContext";
import { formatIndianRupees } from "@/lib/utils";
import { products } from "@/lib/data";

// Limited to the first 3 products for the demo
const farmerProducts = products.slice(0, 3);

export default function FarmerDashboard() {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth();
  const [activeTab, setActiveTab] = useState("overview");
  
  // Redirect to login if not authenticated
  if (!isAuthenticated || user?.role !== "farmer") {
    navigate("/login");
    return null;
  }
  
  // Mock data for dashboard
  const stats = {
    totalRevenue: 124500,
    pendingOrders: 3,
    totalSales: 45,
    totalProducts: farmerProducts.length,
    topSellingProduct: "Rice Husk",
    activeListings: farmerProducts.length,
    aiRecommendations: 2,
  };
  
  return (
    <PageLayout>
      <div className="py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold">Farmer Dashboard</h1>
            <p className="text-muted-foreground">
              Welcome back, {user.name}! Manage your agricultural waste listings and orders.
            </p>
          </div>
          
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add New Listing
          </Button>
        </div>
        
        {/* Dashboard Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList className="mb-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="listings">My Listings</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <Card>
                <CardHeader className="pb-2">
                  <CardDescription>Total Revenue</CardDescription>
                  <CardTitle className="text-2xl">
                    {formatIndianRupees(stats.totalRevenue)}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="text-sm text-muted-foreground flex items-center">
                    <TrendingUp className="mr-1 h-4 w-4 text-farm-green" />
                    <span>12% increase this month</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardDescription>Pending Orders</CardDescription>
                  <CardTitle className="text-2xl">{stats.pendingOrders}</CardTitle>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="text-sm text-muted-foreground">
                    Requires your attention
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardDescription>Total Sales</CardDescription>
                  <CardTitle className="text-2xl">{stats.totalSales}</CardTitle>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="text-sm text-muted-foreground">
                    Across {stats.topSellingProduct}
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardDescription>Active Listings</CardDescription>
                  <CardTitle className="text-2xl">{stats.activeListings}</CardTitle>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="text-sm text-muted-foreground">
                    <span className="text-farm-green font-medium">{stats.aiRecommendations}</span> AI recommended
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* AI Insights */}
            <Card className="mb-8 bg-factory-blue/5 border-factory-blue/20">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <AIRecommendationBadge className="bg-white border" type="insight">
                    AI Insights
                  </AIRecommendationBadge>
                </div>
                <CardTitle>Optimize Your Performance</CardTitle>
                <CardDescription>
                  Personalized recommendations based on your listings and market data
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white border rounded-lg p-4">
                    <h3 className="font-medium mb-2 flex items-center">
                      <TrendingUp className="h-4 w-4 mr-2 text-farm-green" />
                      Price Optimization
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Increasing the price of your Rice Husk by 8% could optimize your profit margins 
                      based on current market demand, without affecting sales volume.
                    </p>
                  </div>
                  
                  <div className="bg-white border rounded-lg p-4">
                    <h3 className="font-medium mb-2 flex items-center">
                      <BarChart3 className="h-4 w-4 mr-2 text-farm-green" />
                      Inventory Management
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Your Rice Husk inventory is projected to sell out within 15 days at current rates. 
                      Consider increasing your available inventory to meet demand.
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">View All Insights</Button>
              </CardFooter>
            </Card>
            
            {/* Recent Orders */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Recent Orders</h2>
                <Button variant="ghost" size="sm">View All</Button>
              </div>
              
              <div className="bg-card rounded-lg border overflow-hidden">
                <div className="grid grid-cols-5 bg-muted/50 p-3 text-sm font-medium">
                  <div>Order ID</div>
                  <div>Product</div>
                  <div>Customer</div>
                  <div>Amount</div>
                  <div>Status</div>
                </div>
                
                <div className="divide-y">
                  <div className="grid grid-cols-5 p-3 hover:bg-muted/20 transition-colors">
                    <div className="text-sm font-medium">#ORD-7891</div>
                    <div className="text-sm">Rice Husk</div>
                    <div className="text-sm">Eastern Textiles</div>
                    <div className="text-sm">{formatIndianRupees(27500)}</div>
                    <div>
                      <span className="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium bg-green-50 text-green-700">
                        Completed
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-5 p-3 hover:bg-muted/20 transition-colors">
                    <div className="text-sm font-medium">#ORD-7890</div>
                    <div className="text-sm">Rice Husk</div>
                    <div className="text-sm">GreenBuild Inc.</div>
                    <div className="text-sm">{formatIndianRupees(16500)}</div>
                    <div>
                      <span className="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium bg-blue-50 text-blue-700">
                        Processing
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-5 p-3 hover:bg-muted/20 transition-colors">
                    <div className="text-sm font-medium">#ORD-7889</div>
                    <div className="text-sm">Sugarcane Bagasse</div>
                    <div className="text-sm">EcoPack Solutions</div>
                    <div className="text-sm">{formatIndianRupees(21000)}</div>
                    <div>
                      <span className="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium bg-yellow-50 text-yellow-700">
                        Pending
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* My Products */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">My Products</h2>
                <Button variant="ghost" size="sm">Manage Products</Button>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {farmerProducts.map((product) => (
                  <Card key={product.id} className="overflow-hidden">
                    <div className="h-40 overflow-hidden">
                      <img
                        src={product.imageUrl}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{product.name}</CardTitle>
                        {product.isAIRecommended && (
                          <AIRecommendationBadge type="recommendation" />
                        )}
                      </div>
                      <CardDescription>
                        {product.stock} tons available
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <div className="flex justify-between items-center">
                        <p className="font-bold">{formatIndianRupees(product.price)}/ton</p>
                        <div className="text-xs text-muted-foreground">10 orders this month</div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">Edit Listing</Button>
                    </CardFooter>
                  </Card>
                ))}
                
                <Card className="flex flex-col items-center justify-center h-full min-h-[300px] border-dashed">
                  <div className="p-6 text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Plus className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-medium mb-2">Add New Product</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      List a new agricultural waste product for sale
                    </p>
                    <Button>Add Product</Button>
                  </div>
                </Card>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="listings">
            <SectionTitle
              title="My Product Listings"
              subtitle="Manage your agricultural waste product listings"
              alignment="left"
            />
            
            <div className="bg-card rounded-lg border overflow-hidden mb-8">
              <div className="grid grid-cols-6 bg-muted/50 p-3 text-sm font-medium">
                <div>Product</div>
                <div>Category</div>
                <div>Price</div>
                <div>Available Quantity</div>
                <div>Status</div>
                <div>Actions</div>
              </div>
              
              <div className="divide-y">
                {farmerProducts.map((product) => (
                  <div key={product.id} className="grid grid-cols-6 p-3 hover:bg-muted/20 transition-colors">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded overflow-hidden">
                        <img
                          src={product.imageUrl}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="text-sm font-medium">{product.name}</div>
                    </div>
                    <div className="text-sm flex items-center">{product.category}</div>
                    <div className="text-sm flex items-center font-medium">{formatIndianRupees(product.price)}/ton</div>
                    <div className="text-sm flex items-center">{product.stock} tons</div>
                    <div className="flex items-center">
                      <span className="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium bg-green-50 text-green-700">
                        Active
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button size="sm" variant="outline">Edit</Button>
                      <Button size="sm" variant="ghost">View</Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add New Listing
            </Button>
          </TabsContent>
          
          <TabsContent value="orders">
            <SectionTitle
              title="Order Management"
              subtitle="Track and manage orders from industries"
              alignment="left"
            />
            
            <Tabs defaultValue="all">
              <TabsList className="mb-6">
                <TabsTrigger value="all">All Orders</TabsTrigger>
                <TabsTrigger value="pending">Pending</TabsTrigger>
                <TabsTrigger value="processing">Processing</TabsTrigger>
                <TabsTrigger value="completed">Completed</TabsTrigger>
              </TabsList>
              
              <div className="bg-card rounded-lg border overflow-hidden mb-8">
                <div className="grid grid-cols-7 bg-muted/50 p-3 text-sm font-medium">
                  <div>Order ID</div>
                  <div>Date</div>
                  <div>Customer</div>
                  <div>Product</div>
                  <div>Amount</div>
                  <div>Status</div>
                  <div>Actions</div>
                </div>
                
                <div className="divide-y">
                  <div className="grid grid-cols-7 p-3 hover:bg-muted/20 transition-colors">
                    <div className="text-sm font-medium">#ORD-7891</div>
                    <div className="text-sm">12 Jun 2023</div>
                    <div className="text-sm">Eastern Textiles</div>
                    <div className="text-sm">Rice Husk</div>
                    <div className="text-sm">{formatIndianRupees(27500)}</div>
                    <div>
                      <span className="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium bg-green-50 text-green-700">
                        Completed
                      </span>
                    </div>
                    <div>
                      <Button size="sm" variant="ghost">View</Button>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-7 p-3 hover:bg-muted/20 transition-colors">
                    <div className="text-sm font-medium">#ORD-7890</div>
                    <div className="text-sm">10 Jun 2023</div>
                    <div className="text-sm">GreenBuild Inc.</div>
                    <div className="text-sm">Rice Husk</div>
                    <div className="text-sm">{formatIndianRupees(16500)}</div>
                    <div>
                      <span className="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium bg-blue-50 text-blue-700">
                        Processing
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button size="sm" variant="outline">Update</Button>
                      <Button size="sm" variant="ghost">View</Button>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-7 p-3 hover:bg-muted/20 transition-colors">
                    <div className="text-sm font-medium">#ORD-7889</div>
                    <div className="text-sm">8 Jun 2023</div>
                    <div className="text-sm">EcoPack Solutions</div>
                    <div className="text-sm">Sugarcane Bagasse</div>
                    <div className="text-sm">{formatIndianRupees(21000)}</div>
                    <div>
                      <span className="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium bg-yellow-50 text-yellow-700">
                        Pending
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button size="sm" variant="outline">Accept</Button>
                      <Button size="sm" variant="ghost">View</Button>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-7 p-3 hover:bg-muted/20 transition-colors">
                    <div className="text-sm font-medium">#ORD-7888</div>
                    <div className="text-sm">5 Jun 2023</div>
                    <div className="text-sm">Biomass Energy Ltd</div>
                    <div className="text-sm">Rice Husk</div>
                    <div className="text-sm">{formatIndianRupees(33000)}</div>
                    <div>
                      <span className="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium bg-green-50 text-green-700">
                        Completed
                      </span>
                    </div>
                    <div>
                      <Button size="sm" variant="ghost">View</Button>
                    </div>
                  </div>
                </div>
              </div>
            </Tabs>
          </TabsContent>
          
          <TabsContent value="analytics">
            <SectionTitle
              title="Analytics & Insights"
              subtitle="Track your performance and get AI-powered recommendations"
              alignment="left"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Sales Overview</CardTitle>
                  <CardDescription>Last 30 days performance</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[240px] flex items-center justify-center">
                    <div className="text-center">
                      <BarChart3 className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                      <p className="text-muted-foreground">
                        Chart visualization would appear here in a real application
                      </p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between border-t pt-4">
                  <div>
                    <p className="text-sm font-medium">Total Sales</p>
                    <p className="text-2xl font-bold">{formatIndianRupees(124500)}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">Growth</p>
                    <p className="text-2xl font-bold text-farm-green">+12%</p>
                  </div>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Top Performing Products</CardTitle>
                  <CardDescription>Based on sales volume</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded overflow-hidden">
                          <img
                            src={farmerProducts[0].imageUrl}
                            alt={farmerProducts[0].name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-medium">{farmerProducts[0].name}</p>
                          <p className="text-xs text-muted-foreground">{farmerProducts[0].category}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{formatIndianRupees(68500)}</p>
                        <p className="text-xs text-farm-green">28 orders</p>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded overflow-hidden">
                          <img
                            src={farmerProducts[2].imageUrl}
                            alt={farmerProducts[2].name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-medium">{farmerProducts[2].name}</p>
                          <p className="text-xs text-muted-foreground">{farmerProducts[2].category}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{formatIndianRupees(42000)}</p>
                        <p className="text-xs text-farm-green">12 orders</p>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded overflow-hidden">
                          <img
                            src={farmerProducts[1].imageUrl}
                            alt={farmerProducts[1].name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-medium">{farmerProducts[1].name}</p>
                          <p className="text-xs text-muted-foreground">{farmerProducts[1].category}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{formatIndianRupees(14000)}</p>
                        <p className="text-xs text-farm-green">5 orders</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">View Complete Report</Button>
                </CardFooter>
              </Card>
            </div>
            
            <Card className="mb-8 bg-factory-blue/5 border-factory-blue/20">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <AIRecommendationBadge className="bg-white border" type="analysis">
                    AI Market Analysis
                  </AIRecommendationBadge>
                </div>
                <CardTitle>Product Price Recommendations</CardTitle>
                <CardDescription>
                  AI-powered price optimization suggestions based on market demand
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-white border rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium mb-1">{farmerProducts[0].name}</h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          Current price: {formatIndianRupees(farmerProducts[0].price)}/ton
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-farm-green">Recommended Price</p>
                        <p className="font-bold">{formatIndianRupees(farmerProducts[0].price * 1.08)}/ton</p>
                      </div>
                    </div>
                    <p className="text-sm">
                      <span className="text-farm-green font-medium">+8% increase recommended.</span> High demand in construction industry could support this price point without affecting sales volume.
                    </p>
                  </div>
                  
                  <div className="bg-white border rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium mb-1">{farmerProducts[2].name}</h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          Current price: {formatIndianRupees(farmerProducts[2].price)}/ton
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-farm-green">Recommended Price</p>
                        <p className="font-bold">{formatIndianRupees(farmerProducts[2].price * 1.05)}/ton</p>
                      </div>
                    </div>
                    <p className="text-sm">
                      <span className="text-farm-green font-medium">+5% increase recommended.</span> Seasonal demand from paper manufacturing sector is creating opportunity for moderate price increase.
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Update Prices</Button>
              </CardFooter>
            </Card>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center">
                    <Users className="h-5 w-5 mr-2 text-muted-foreground" />
                    Customer Demographics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[150px] flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-muted-foreground text-sm">
                        Chart visualization would appear here in a real application
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center">
                    <Map className="h-5 w-5 mr-2 text-muted-foreground" />
                    Geographic Distribution
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[150px] flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-muted-foreground text-sm">
                        Map visualization would appear here in a real application
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center">
                    <CalendarDays className="h-5 w-5 mr-2 text-muted-foreground" />
                    Seasonal Trends
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[150px] flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-muted-foreground text-sm">
                        Chart visualization would appear here in a real application
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </PageLayout>
  );
}
