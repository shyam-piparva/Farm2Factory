
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  CheckCircle2, 
  CreditCard, 
  ChevronRight, 
  Truck, 
  Calendar, 
  Shield 
} from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import { formatIndianRupees } from "@/lib/utils";

export default function Checkout() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { items, getCartTotal, clearCart } = useCart();
  const { user, isAuthenticated } = useAuth();
  const [paymentMethod, setPaymentMethod] = useState("upi");
  const [upiId, setUpiId] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [addressForm, setAddressForm] = useState({
    fullName: user?.name || "",
    company: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    phone: "",
    email: user?.email || "",
  });
  
  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    navigate("/login", { state: { returnTo: "/checkout" } });
    return null;
  }
  
  // Redirect to cart if cart is empty
  if (items.length === 0) {
    navigate("/cart");
    return null;
  }
  
  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAddressForm(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handlePlaceOrder = () => {
    // Validate required fields
    if (!addressForm.fullName || !addressForm.address || !addressForm.city || 
        !addressForm.state || !addressForm.pincode || !addressForm.phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required shipping information.",
        variant: "destructive"
      });
      return;
    }
    
    if (paymentMethod === "upi" && !upiId) {
      toast({
        title: "Missing UPI ID",
        description: "Please enter your UPI ID to complete the payment.",
        variant: "destructive"
      });
      return;
    }
    
    setIsProcessing(true);
    
    // Simulate order processing
    setTimeout(() => {
      clearCart();
      
      toast({
        title: "Order Placed Successfully!",
        description: "Thank you for your order. You will receive a confirmation email shortly.",
      });
      
      setIsProcessing(false);
      navigate("/order-success", { state: { orderNumber: Math.floor(Math.random() * 1000000).toString().padStart(6, '0') } });
    }, 2000);
  };
  
  const subtotal = getCartTotal();
  const shippingEstimate = subtotal > 50000 ? 0 : 2500;
  const taxEstimate = subtotal * 0.18; // 18% GST
  const total = subtotal + shippingEstimate + taxEstimate;
  
  return (
    <PageLayout>
      <div className="py-8">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Shipping Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Truck className="mr-2 h-5 w-5" />
                  Shipping Information
                </CardTitle>
                <CardDescription>
                  Enter your shipping address where you want to receive your order
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="form-control">
                    <Label htmlFor="fullName">Full Name*</Label>
                    <Input 
                      id="fullName" 
                      name="fullName" 
                      placeholder="Your full name" 
                      value={addressForm.fullName}
                      onChange={handleAddressChange}
                      required
                    />
                  </div>
                  
                  <div className="form-control">
                    <Label htmlFor="company">Company (Optional)</Label>
                    <Input 
                      id="company" 
                      name="company" 
                      placeholder="Company or organization name" 
                      value={addressForm.company}
                      onChange={handleAddressChange}
                    />
                  </div>
                  
                  <div className="form-control md:col-span-2">
                    <Label htmlFor="address">Address*</Label>
                    <Input 
                      id="address" 
                      name="address" 
                      placeholder="Street address, building, etc." 
                      value={addressForm.address}
                      onChange={handleAddressChange}
                      required
                    />
                  </div>
                  
                  <div className="form-control">
                    <Label htmlFor="city">City*</Label>
                    <Input 
                      id="city" 
                      name="city" 
                      placeholder="City" 
                      value={addressForm.city}
                      onChange={handleAddressChange}
                      required
                    />
                  </div>
                  
                  <div className="form-control">
                    <Label htmlFor="state">State*</Label>
                    <Select 
                      value={addressForm.state} 
                      onValueChange={(value) => setAddressForm(prev => ({ ...prev, state: value }))}
                    >
                      <SelectTrigger id="state">
                        <SelectValue placeholder="Select state" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Andhra Pradesh">Andhra Pradesh</SelectItem>
                        <SelectItem value="Gujarat">Gujarat</SelectItem>
                        <SelectItem value="Karnataka">Karnataka</SelectItem>
                        <SelectItem value="Kerala">Kerala</SelectItem>
                        <SelectItem value="Maharashtra">Maharashtra</SelectItem>
                        <SelectItem value="Punjab">Punjab</SelectItem>
                        <SelectItem value="Tamil Nadu">Tamil Nadu</SelectItem>
                        <SelectItem value="Uttar Pradesh">Uttar Pradesh</SelectItem>
                        <SelectItem value="West Bengal">West Bengal</SelectItem>
                        {/* Add other Indian states as needed */}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="form-control">
                    <Label htmlFor="pincode">PIN Code*</Label>
                    <Input 
                      id="pincode" 
                      name="pincode" 
                      placeholder="6-digit PIN code" 
                      value={addressForm.pincode}
                      onChange={handleAddressChange}
                      required
                    />
                  </div>
                  
                  <div className="form-control">
                    <Label htmlFor="phone">Phone Number*</Label>
                    <Input 
                      id="phone" 
                      name="phone" 
                      placeholder="10-digit mobile number" 
                      value={addressForm.phone}
                      onChange={handleAddressChange}
                      required
                    />
                  </div>
                  
                  <div className="form-control md:col-span-2">
                    <Label htmlFor="email">Email*</Label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      placeholder="For order updates and receipt" 
                      value={addressForm.email}
                      onChange={handleAddressChange}
                      required
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Payment Method */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CreditCard className="mr-2 h-5 w-5" />
                  Payment Method
                </CardTitle>
                <CardDescription>
                  Choose how you want to pay for your order
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs value={paymentMethod} onValueChange={setPaymentMethod}>
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="upi">UPI Payment</TabsTrigger>
                    <TabsTrigger value="cod">Cash on Delivery</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="upi" className="pt-4">
                    <div className="space-y-4">
                      <div className="form-control">
                        <Label htmlFor="upiId">UPI ID / VPA*</Label>
                        <Input 
                          id="upiId" 
                          placeholder="username@bankname" 
                          value={upiId}
                          onChange={(e) => setUpiId(e.target.value)}
                          required
                        />
                      </div>
                      
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <p className="text-sm text-muted-foreground">
                          You will receive a payment request on your UPI app when you place the order. 
                          Make sure your UPI ID is correct and active.
                        </p>
                      </div>
                      
                      <div className="flex gap-2 items-center text-sm text-muted-foreground">
                        <Shield className="h-4 w-4" />
                        Secure UPI payment processed through our trusted payment gateway
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="cod" className="pt-4">
                    <div className="space-y-4">
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <h3 className="font-medium mb-2">Cash on Delivery Terms:</h3>
                        <ul className="text-sm text-muted-foreground space-y-2">
                          <li>• Available for orders under ₹25,000 only</li>
                          <li>• Payment will be collected by our delivery partner upon delivery</li>
                          <li>• Please keep exact amount ready to ensure smooth delivery</li>
                          <li>• Additional handling fee of ₹100 applies</li>
                        </ul>
                      </div>
                      
                      <div className="flex gap-2 items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        Expected delivery within 5-7 working days
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
          
          {/* Order Summary */}
          <div>
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
                <CardDescription>
                  {items.length} {items.length === 1 ? 'item' : 'items'} in your cart
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Order Items */}
                  <div className="space-y-3">
                    {items.map(item => (
                      <div key={item.product.id} className="flex justify-between items-center text-sm py-1">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-muted rounded-md overflow-hidden">
                            <img 
                              src={item.product.imageUrl} 
                              alt={item.product.name} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <p className="font-medium">{item.product.name}</p>
                            <p className="text-xs text-muted-foreground">{item.quantity} {item.quantity === 1 ? 'ton' : 'tons'}</p>
                          </div>
                        </div>
                        <p className="font-medium">{formatIndianRupees(item.product.price * item.quantity)}</p>
                      </div>
                    ))}
                  </div>
                  
                  <Separator />
                  
                  {/* Cost Breakdown */}
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>{formatIndianRupees(subtotal)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Shipping</span>
                      <span>
                        {shippingEstimate === 0 ? (
                          <span className="text-farm-green">Free</span>
                        ) : (
                          formatIndianRupees(shippingEstimate)
                        )}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Tax (18% GST)</span>
                      <span>{formatIndianRupees(taxEstimate)}</span>
                    </div>
                    
                    {paymentMethod === "cod" && (
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">COD Handling Fee</span>
                        <span>{formatIndianRupees(100)}</span>
                      </div>
                    )}
                  </div>
                  
                  <Separator />
                  
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>
                      {formatIndianRupees(total + (paymentMethod === "cod" ? 100 : 0))}
                    </span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col gap-4">
                <Button 
                  className="w-full" 
                  size="lg" 
                  onClick={handlePlaceOrder}
                  disabled={isProcessing}
                >
                  {isProcessing ? (
                    "Processing..."
                  ) : (
                    <>
                      Place Order
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
                
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-farm-green" />
                  By placing your order, you agree to our Terms of Service and Privacy Policy
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
