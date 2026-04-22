
import { useState, useEffect } from "react";
import { Search, FilterX, SlidersHorizontal } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import { ProductCard } from "@/components/ui/custom/ProductCard";
import { SectionTitle } from "@/components/ui/custom/SectionTitle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { products, categories, states } from "@/lib/data";
import { Product } from "@/context/CartContext";
import { filterProductsBySearchTerm, filterProductsByCategory, filterProductsByState, sortProducts } from "@/lib/utils";
import { AIRecommendationBadge } from "@/components/ui/custom/AIRecommendationBadge";

export default function Marketplace() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedState, setSelectedState] = useState("All States");
  const [sortOption, setSortOption] = useState("default");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [showFilters, setShowFilters] = useState(false);
  
  // Apply filters when any filter changes
  useEffect(() => {
    let result = [...products];
    
    // Apply search filter
    if (searchTerm) {
      result = filterProductsBySearchTerm(result, searchTerm);
    }
    
    // Apply category filter
    result = filterProductsByCategory(result, selectedCategory);
    
    // Apply state filter
    result = filterProductsByState(result, selectedState);
    
    // Apply sorting
    result = sortProducts(result, sortOption);
    
    setFilteredProducts(result);
  }, [searchTerm, selectedCategory, selectedState, sortOption]);
  
  // Reset all filters
  const resetFilters = () => {
    setSearchTerm("");
    setSelectedCategory("All Categories");
    setSelectedState("All States");
    setSortOption("default");
  };
  
  // Check if any filters are active
  const hasActiveFilters = searchTerm !== "" || selectedCategory !== "All Categories" || selectedState !== "All States" || sortOption !== "default";
  
  // Count the number of active filters
  const activeFilterCount = [
    searchTerm !== "",
    selectedCategory !== "All Categories",
    selectedState !== "All States",
    sortOption !== "default"
  ].filter(Boolean).length;
  
  return (
    <PageLayout>
      <SectionTitle 
        title="Marketplace"
        subtitle="Discover sustainable agricultural waste products"
        alignment="left"
        className="mt-8"
      />
      
      {/* Search and Filters Bar */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Input
            type="search"
            placeholder="Search products..."
            className="pr-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute right-3 top-2.5 h-5 w-5 text-muted-foreground pointer-events-none" />
        </div>
        
        <div className="flex gap-2">
          {/* Mobile Filter Button */}
          <Sheet>
            <SheetTrigger asChild>
              <Button 
                variant="outline" 
                className="md:hidden relative"
                onClick={() => setShowFilters(true)}
              >
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                Filters
                {activeFilterCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full w-5 h-5 text-xs flex items-center justify-center">
                    {activeFilterCount}
                  </span>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:max-w-md">
              <SheetHeader>
                <SheetTitle>Filters</SheetTitle>
              </SheetHeader>
              <div className="py-4">
                <Accordion type="single" collapsible defaultValue="category">
                  <AccordionItem value="category">
                    <AccordionTrigger>Category</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        {categories.map((category) => (
                          <div key={category} className="flex items-center">
                            <Button 
                              variant={selectedCategory === category ? "default" : "ghost"}
                              className="w-full justify-start"
                              onClick={() => setSelectedCategory(category)}
                            >
                              {category}
                            </Button>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="location">
                    <AccordionTrigger>Location</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        {states.map((state) => (
                          <div key={state} className="flex items-center">
                            <Button 
                              variant={selectedState === state ? "default" : "ghost"}
                              className="w-full justify-start"
                              onClick={() => setSelectedState(state)}
                            >
                              {state}
                            </Button>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="sort">
                    <AccordionTrigger>Sort By</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        <Button 
                          variant={sortOption === "default" ? "default" : "ghost"}
                          className="w-full justify-start"
                          onClick={() => setSortOption("default")}
                        >
                          Default
                        </Button>
                        <Button 
                          variant={sortOption === "price-low-high" ? "default" : "ghost"}
                          className="w-full justify-start"
                          onClick={() => setSortOption("price-low-high")}
                        >
                          Price: Low to High
                        </Button>
                        <Button 
                          variant={sortOption === "price-high-low" ? "default" : "ghost"}
                          className="w-full justify-start"
                          onClick={() => setSortOption("price-high-low")}
                        >
                          Price: High to Low
                        </Button>
                        <Button 
                          variant={sortOption === "name-a-z" ? "default" : "ghost"}
                          className="w-full justify-start"
                          onClick={() => setSortOption("name-a-z")}
                        >
                          Name: A to Z
                        </Button>
                        <Button 
                          variant={sortOption === "rating-high-low" ? "default" : "ghost"}
                          className="w-full justify-start"
                          onClick={() => setSortOption("rating-high-low")}
                        >
                          Rating: High to Low
                        </Button>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                
                <div className="mt-8">
                  <Button 
                    variant="outline" 
                    className="w-full" 
                    onClick={resetFilters}
                    disabled={!hasActiveFilters}
                  >
                    <FilterX className="h-4 w-4 mr-2" />
                    Reset Filters
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
          
          {/* Desktop Filter Selects */}
          <div className="hidden md:flex gap-2">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            
            <Select value={selectedState} onValueChange={setSelectedState}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {states.map((state) => (
                    <SelectItem key={state} value={state}>
                      {state}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            
            <Select value={sortOption} onValueChange={setSortOption}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort By" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="default">Default</SelectItem>
                  <SelectItem value="price-low-high">Price: Low to High</SelectItem>
                  <SelectItem value="price-high-low">Price: High to Low</SelectItem>
                  <SelectItem value="name-a-z">Name: A to Z</SelectItem>
                  <SelectItem value="rating-high-low">Rating: High to Low</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            
            {hasActiveFilters && (
              <Button 
                variant="outline" 
                onClick={resetFilters}
              >
                <FilterX className="h-4 w-4 mr-2" />
                Reset
              </Button>
            )}
          </div>
        </div>
      </div>
      
      {/* AI Recommendations Banner */}
      <div className="bg-factory-blue/5 border border-factory-blue/20 rounded-lg p-4 mb-8">
        <div className="flex items-center gap-3">
          <AIRecommendationBadge className="bg-white border" type="insight">
            Market Insight
          </AIRecommendationBadge>
          <p className="text-sm font-medium">
            Currently, <span className="text-factory-blue">Rice Husk</span> and <span className="text-factory-blue">Banana Stems</span> are in high demand in the construction and textile industries.
          </p>
        </div>
      </div>
      
      {/* Filter Results Count */}
      <div className="flex justify-between items-center mb-6">
        <p className="text-muted-foreground">
          Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
          {hasActiveFilters && ' with applied filters'}
        </p>
      </div>
      
      {/* Product Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 border rounded-lg">
          <h3 className="text-xl font-bold mb-2">No Products Found</h3>
          <p className="text-muted-foreground mb-6">Try adjusting your search or filter criteria</p>
          <Button onClick={resetFilters}>Reset All Filters</Button>
        </div>
      )}
    </PageLayout>
  );
}
