
import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Heart, BarChart3, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useCart } from "@/context/CartContext";
import { Product } from "@/context/CartContext";
import { cn } from "@/lib/utils";
import { AIRecommendationBadge } from "./AIRecommendationBadge";

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className }: ProductCardProps) {
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={cn(
        "product-card group overflow-hidden",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-md aspect-square mb-4">
        <Link to={`/product/${product.id}`}>
          <img 
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
        </Link>
        
        {/* Quick actions */}
        <div 
          className={cn(
            "absolute bottom-0 left-0 right-0 flex justify-center gap-2 p-3 bg-gradient-to-t from-black/70 to-transparent transition-all duration-300",
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          <Button 
            variant="secondary" 
            size="icon" 
            className="h-8 w-8 rounded-full shadow-lg"
            onClick={() => addToCart(product)}
          >
            <ShoppingCart className="h-4 w-4" />
          </Button>
          <Button 
            variant="secondary" 
            size="icon" 
            className="h-8 w-8 rounded-full shadow-lg"
          >
            <Heart className="h-4 w-4" />
          </Button>
        </div>
        
        {/* AI Recommended Badge */}
        {product.isAIRecommended && (
          <div className="absolute top-2 left-2">
            <AIRecommendationBadge 
              type="recommendation" 
              variant="highlight"
              className="shadow-sm"
            >
              AI Recommended
            </AIRecommendationBadge>
          </div>
        )}
      </div>
      
      <div className="flex justify-between items-start">
        <div>
          <Link to={`/product/${product.id}`} className="block">
            <h3 className="font-medium hover:text-primary transition-colors">{product.name}</h3>
          </Link>
          <p className="text-sm text-muted-foreground mt-1">{product.location}</p>
        </div>
        <div className="text-right">
          <p className="font-bold">₹{product.price.toLocaleString('en-IN')}</p>
          <p className="text-xs text-muted-foreground">per ton</p>
        </div>
      </div>
      
      <div className="flex justify-between items-center mt-4">
        <div className="text-sm text-muted-foreground">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="text-sm hover:text-primary hover:underline transition-colors cursor-help">
                {product.farmerName}
              </TooltipTrigger>
              <TooltipContent>
                <p>Farmer from {product.location}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <Button 
          variant="default" 
          size="sm" 
          className="text-xs"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
}
