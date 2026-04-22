
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingCart, Trash2, ArrowRight, ChevronLeft } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { QuantitySelector } from "@/components/ui/custom/QuantitySelector";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import { formatIndianRupees } from "@/lib/utils";

export default function Cart() {
  const navigate = useNavigate();
  const { items, updateQuantity, removeFromCart, clearCart, getCartTotal } = useCart();
  const { isAuthenticated } = useAuth();
  const [isProcessing, setIsProcessing] = useState(false);
  
  const handleRemoveItem = (productId: string) => {
    removeFromCart(productId);
  };
  
  const handleIncrement = (productId: string, currentQuantity: number) => {
    updateQuantity(productId, currentQuantity + 1);
  };
  
  const handleDecrement = (productId: string, currentQuantity: number) => {
    updateQuantity(productId, currentQuantity - 1);
  };
  
  const handleCheckout = () => {
    if (!isAuthenticated) {
      navigate("/login", { state: { returnTo: "/checkout" } });
      return;
    }
    
    setIsProcessing(true);
    
    // Simulate processing
    setTimeout(() => {
      setIsProcessing(false);
      navigate("/checkout");
    }, 1000);
  };
  
  if (items.length === 0) {
    return (
      <PageLayout>
        <div className="max-w-3xl mx-auto py-12">
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-6">
              <ShoppingCart className="h-8 w-8 text-muted-foreground" />
            </div>
            <h1 className="text-2xl font-bold mb-2">Your Cart is Empty</h1>
            <p className="text-muted-foreground mb-8 max-w-md">
              Looks like you haven't added any agricultural waste products to your cart yet.
            </p>
            <Link to="/marketplace">
              <Button>
                Browse Marketplace
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </PageLayout>
    );
  }
  
  const subtotal = getCartTotal();
  const shippingEstimate = subtotal > 50000 ? 0 : 2500;
  const taxEstimate = subtotal * 0.18; // 18% GST
  const total = subtotal + shippingEstimate + taxEstimate;
  
  return (
    <PageLayout>
      <div className="py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Your Cart</h1>
          <Link to="/marketplace" className="text-muted-foreground hover:text-foreground transition-colors flex items-center">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Continue Shopping
          </Link>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {items.map(item => (
                <div 
                  key={item.product.id} 
                  className="bg-background border rounded-lg p-4 flex flex-col sm:flex-row gap-4"
                >
                  <div className="w-full sm:w-24 h-24 bg-muted rounded-md overflow-hidden flex-shrink-0">
                    <img 
                      src={item.product.imageUrl} 
                      alt={item.product.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-2">
                      <div>
                        <Link to={`/product/${item.product.id}`} className="font-medium hover:text-primary transition-colors">
                          {item.product.name}
                        </Link>
                        <p className="text-sm text-muted-foreground">
                          {item.product.location} • {item.product.category}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="font-bold">
                          {formatIndianRupees(item.product.price * item.quantity)}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {formatIndianRupees(item.product.price)} per ton
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-2">
                      <QuantitySelector
                        quantity={item.quantity}
                        onIncrement={() => handleIncrement(item.product.id, item.quantity)}
                        onDecrement={() => handleDecrement(item.product.id, item.quantity)}
                        max={item.product.stock}
                        size="sm"
                      />
                      
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => handleRemoveItem(item.product.id)}
                        className="text-muted-foreground hover:text-destructive hover:bg-destructive/10"
                      >
                        <Trash2 className="h-4 w-4 mr-1" />
                        Remove
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-4 flex justify-end">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => clearCart()}
              >
                Clear Cart
              </Button>
            </div>
          </div>
          
          {/* Order Summary */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>{formatIndianRupees(subtotal)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping Estimate</span>
                    <span>
                      {shippingEstimate === 0 ? (
                        <span className="text-farm-green">Free</span>
                      ) : (
                        formatIndianRupees(shippingEstimate)
                      )}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tax Estimate (18% GST)</span>
                    <span>{formatIndianRupees(taxEstimate)}</span>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>{formatIndianRupees(total)}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full" 
                  size="lg" 
                  onClick={handleCheckout}
                  disabled={isProcessing}
                >
                  {isProcessing ? "Processing..." : "Proceed to Checkout"}
                </Button>
              </CardFooter>
            </Card>
            
            <div className="mt-6 bg-muted/50 rounded-lg p-4">
              <h3 className="font-medium mb-2">Important Note:</h3>
              <p className="text-sm text-muted-foreground">
                Shipping costs are estimated based on standard delivery to major cities. 
                Orders over ₹50,000 qualify for free shipping. Actual shipping costs will 
                be calculated during checkout based on your location and order weight.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
