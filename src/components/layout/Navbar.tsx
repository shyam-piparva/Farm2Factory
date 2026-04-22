
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  AlignRight, 
  X, 
  ShoppingCart, 
  Search, 
  User,
  LogOut
} from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import { cn } from "@/lib/utils";

import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";

export default function Navbar() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { getItemCount } = useCart();
  const { user, isAuthenticated, logout } = useAuth();
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Close mobile menu when changing routes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);
  
  const cartItemCount = getItemCount();
  
  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-sm",
        isScrolled ? "bg-background/80 shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="font-display font-bold text-xl flex items-center gap-1"
        >
          <span className="text-farm-green">Farm</span>
          <span>2</span>
          <span className="text-factory-blue">Factory</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          <Link 
            to="/marketplace" 
            className={cn(
              "nav-link", 
              location.pathname === "/marketplace" && "nav-link-active"
            )}
          >
            Marketplace
          </Link>
          <Link 
            to="/how-it-works" 
            className={cn(
              "nav-link", 
              location.pathname === "/how-it-works" && "nav-link-active"
            )}
          >
            How It Works
          </Link>
          <Link 
            to="/for-farmers" 
            className={cn(
              "nav-link", 
              location.pathname === "/for-farmers" && "nav-link-active"
            )}
          >
            For Farmers
          </Link>
          <Link 
            to="/for-industry" 
            className={cn(
              "nav-link", 
              location.pathname === "/for-industry" && "nav-link-active"
            )}
          >
            For Industry
          </Link>
        </nav>
        
        {/* Desktop Right Actions */}
        <div className="hidden md:flex items-center gap-2">
          <Dialog open={searchOpen} onOpenChange={setSearchOpen}>
            <DialogTrigger asChild>
              <Button variant="ghost" size="icon">
                <Search className="h-5 w-5" />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Search Products</DialogTitle>
                <DialogDescription>
                  Search for agricultural waste products
                </DialogDescription>
              </DialogHeader>
              <div className="flex gap-2 mt-4">
                <Input 
                  placeholder="Rice husk, coconut fiber, sugarcane bagasse..." 
                  className="flex-1" 
                  autoFocus
                />
                <Button>Search</Button>
              </div>
            </DialogContent>
          </Dialog>
          
          <Link to="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground rounded-full w-5 h-5 text-xs flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Button>
          </Link>
          
          {isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>
                  <div className="flex flex-col">
                    <span>{user?.name}</span>
                    <span className="text-xs text-muted-foreground">{user?.email}</span>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link 
                    to={user?.role === 'farmer' ? '/dashboard/farmer' : '/dashboard/industry'}
                    className="cursor-pointer w-full"
                  >
                    Dashboard
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={logout} className="text-destructive cursor-pointer">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Logout</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link to="/login">
              <Button>Log In</Button>
            </Link>
          )}
        </div>
        
        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-4">
          <Link to="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground rounded-full w-5 h-5 text-xs flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Button>
          </Link>
          
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <AlignRight className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={cn(
          "fixed inset-0 bg-background z-40 pt-16 px-4 md:hidden transition-transform duration-300 ease-in-out",
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <nav className="flex flex-col gap-4 py-6">
          <Link 
            to="/marketplace" 
            className="text-lg font-medium py-2 border-b border-border"
          >
            Marketplace
          </Link>
          <Link 
            to="/how-it-works" 
            className="text-lg font-medium py-2 border-b border-border"
          >
            How It Works
          </Link>
          <Link 
            to="/for-farmers" 
            className="text-lg font-medium py-2 border-b border-border"
          >
            For Farmers
          </Link>
          <Link 
            to="/for-industry" 
            className="text-lg font-medium py-2 border-b border-border"
          >
            For Industry
          </Link>
          
          <div className="py-2">
            <div className="relative">
              <Input
                type="search"
                placeholder="Search products..."
                className="pr-10"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-muted-foreground pointer-events-none" />
            </div>
          </div>
          
          {isAuthenticated ? (
            <div className="mt-4 flex flex-col gap-2">
              <div className="flex items-center gap-3 p-3 border rounded-md">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                  <User className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium">{user?.name}</p>
                  <p className="text-sm text-muted-foreground">{user?.role}</p>
                </div>
              </div>
              
              <Link 
                to={user?.role === 'farmer' ? '/dashboard/farmer' : '/dashboard/industry'}
                className="btn-primary text-center"
              >
                Dashboard
              </Link>
              
              <Button 
                variant="outline" 
                className="w-full" 
                onClick={logout}
              >
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </Button>
            </div>
          ) : (
            <div className="mt-4 space-y-2">
              <Link to="/login" className="block">
                <Button className="w-full">Log In</Button>
              </Link>
              <Link to="/register" className="block">
                <Button variant="outline" className="w-full">Register</Button>
              </Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
