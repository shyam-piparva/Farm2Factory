
import { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { ArrowRight, Loader2 } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
import { useAuth, UserRole } from "@/context/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<UserRole>("farmer");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  
  const returnTo = location.state?.returnTo || 
    (role === "farmer" ? "/dashboard/farmer" : "/dashboard/industry");
  
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      setErrorMessage("Please enter both email and password.");
      return;
    }
    
    setIsLoading(true);
    setErrorMessage("");
    
    try {
      const success = await login(email, password, role);
      
      if (success) {
        navigate(returnTo);
      } else {
        setErrorMessage("Invalid credentials. Please try again.");
      }
    } catch (error) {
      setErrorMessage("An error occurred. Please try again.");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <PageLayout>
      <div className="flex justify-center py-16">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">
              Login to Farm2Factory
            </CardTitle>
            <CardDescription className="text-center">
              Enter your email and password to access your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={role} onValueChange={(value) => setRole(value as UserRole)} className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="farmer">Farmer</TabsTrigger>
                <TabsTrigger value="industry">Industry</TabsTrigger>
              </TabsList>
              
              <TabsContent value="farmer">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="farmer-email">Email</Label>
                    <Input
                      id="farmer-email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="farmer-password">Password</Label>
                      <a href="#" className="text-xs text-primary hover:underline">
                        Forgot password?
                      </a>
                    </div>
                    <Input
                      id="farmer-password"
                      type="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  
                  {errorMessage && (
                    <div className="text-sm text-destructive">
                      {errorMessage}
                    </div>
                  )}
                  
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Signing In...
                      </>
                    ) : (
                      "Sign In as Farmer"
                    )}
                  </Button>
                  
                  <div className="text-sm text-muted-foreground text-center">
                    <span>For demonstration, use any email and password.</span>
                  </div>
                </form>
              </TabsContent>
              
              <TabsContent value="industry">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="industry-email">Email</Label>
                    <Input
                      id="industry-email"
                      type="email"
                      placeholder="company@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="industry-password">Password</Label>
                      <a href="#" className="text-xs text-primary hover:underline">
                        Forgot password?
                      </a>
                    </div>
                    <Input
                      id="industry-password"
                      type="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  
                  {errorMessage && (
                    <div className="text-sm text-destructive">
                      {errorMessage}
                    </div>
                  )}
                  
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Signing In...
                      </>
                    ) : (
                      "Sign In as Industry"
                    )}
                  </Button>
                  
                  <div className="text-sm text-muted-foreground text-center">
                    <span>For demonstration, use any email and password.</span>
                  </div>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="flex flex-col gap-4">
            <div className="text-center text-sm">
              Don't have an account? <Link to="/register" className="text-primary hover:underline">Register here</Link>
            </div>
            
            <div className="w-full pt-4 border-t text-center">
              <Link to="/">
                <Button variant="ghost" className="text-xs">
                  Back to Home
                </Button>
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </PageLayout>
  );
}
