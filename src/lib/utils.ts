
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Format currency in Indian Rupees
export function formatIndianRupees(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
}

// Format number with Indian number system (lakhs, crores)
export function formatIndianNumber(num: number): string {
  const formatted = new Intl.NumberFormat('en-IN').format(num);
  return formatted;
}

// Calculate discount percentage
export function calculateDiscountPercentage(originalPrice: number, salePrice: number): number {
  if (originalPrice <= 0 || salePrice <= 0) return 0;
  return Math.round(((originalPrice - salePrice) / originalPrice) * 100);
}

// Truncate text with ellipsis
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
}

// Generate a random ID
export function generateId(): string {
  return Math.random().toString(36).substring(2, 9);
}

// Filter products by search term
export function filterProductsBySearchTerm(products: any[], searchTerm: string): any[] {
  if (!searchTerm.trim()) return products;
  
  const term = searchTerm.toLowerCase().trim();
  return products.filter(product => 
    product.name.toLowerCase().includes(term) ||
    product.description.toLowerCase().includes(term) ||
    product.category.toLowerCase().includes(term) ||
    product.location.toLowerCase().includes(term) ||
    product.farmerName.toLowerCase().includes(term)
  );
}

// Filter products by category
export function filterProductsByCategory(products: any[], category: string): any[] {
  if (!category || category === 'All Categories') return products;
  
  return products.filter(product => product.category === category);
}

// Filter products by state (location)
export function filterProductsByState(products: any[], state: string): any[] {
  if (!state || state === 'All States') return products;
  
  return products.filter(product => product.location === state);
}

// Sort products by various criteria
export function sortProducts(products: any[], sortBy: string): any[] {
  const productsCopy = [...products];
  
  switch (sortBy) {
    case 'price-low-high':
      return productsCopy.sort((a, b) => a.price - b.price);
    case 'price-high-low':
      return productsCopy.sort((a, b) => b.price - a.price);
    case 'name-a-z':
      return productsCopy.sort((a, b) => a.name.localeCompare(b.name));
    case 'name-z-a':
      return productsCopy.sort((a, b) => b.name.localeCompare(a.name));
    case 'rating-high-low':
      return productsCopy.sort((a, b) => b.rating - a.rating);
    default:
      return productsCopy;
  }
}
