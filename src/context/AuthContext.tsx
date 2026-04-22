
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useToast } from "@/components/ui/use-toast";

export type UserRole = 'farmer' | 'industry' | null;

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  location?: string;
  profileImage?: string;
  joinedDate?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string, role: UserRole) => Promise<boolean>;
  register: (name: string, email: string, password: string, role: UserRole) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { toast } = useToast();
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  // Load user from localStorage on initial render
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      try {
        const parsedUser = JSON.parse(savedUser);
        setUser(parsedUser);
        setIsAuthenticated(true);
      } catch (error) {
        console.error('Failed to parse user from localStorage:', error);
      }
    }
  }, []);

  // Mock login function - in a real app, this would call an API
  const login = async (email: string, password: string, role: UserRole): Promise<boolean> => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock validation - in a real app, this would be done on the server
      if (email && password && role) {
        const mockUser: User = {
          id: Math.random().toString(36).substring(2, 9),
          name: email.split('@')[0], // Just use part of email as name for mock
          email,
          role,
          location: role === 'farmer' ? 'Karnataka, India' : 'Mumbai, India',
          profileImage: '/placeholder.svg',
          joinedDate: new Date().toISOString(),
        };
        
        setUser(mockUser);
        setIsAuthenticated(true);
        localStorage.setItem('user', JSON.stringify(mockUser));
        
        toast({
          title: "Login successful",
          description: `Welcome back, ${mockUser.name}!`,
        });
        
        return true;
      }
      
      toast({
        title: "Login failed",
        description: "Invalid credentials. Please try again.",
        variant: "destructive",
      });
      
      return false;
    } catch (error) {
      console.error('Login error:', error);
      
      toast({
        title: "Login failed",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
      
      return false;
    }
  };

  // Mock register function
  const register = async (name: string, email: string, password: string, role: UserRole): Promise<boolean> => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (name && email && password && role) {
        const mockUser: User = {
          id: Math.random().toString(36).substring(2, 9),
          name,
          email,
          role,
          location: '',
          profileImage: '/placeholder.svg',
          joinedDate: new Date().toISOString(),
        };
        
        setUser(mockUser);
        setIsAuthenticated(true);
        localStorage.setItem('user', JSON.stringify(mockUser));
        
        toast({
          title: "Registration successful",
          description: `Welcome to Farm2Factory, ${name}!`,
        });
        
        return true;
      }
      
      toast({
        title: "Registration failed",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      
      return false;
    } catch (error) {
      console.error('Registration error:', error);
      
      toast({
        title: "Registration failed",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
      
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('user');
    
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
