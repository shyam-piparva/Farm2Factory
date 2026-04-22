
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Loader2 } from "lucide-react";
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

export default function Register() {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState<UserRole>("farmer");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  
  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !password || !confirmPassword) {
      setErrorMessage("Please fill in all required fields.");
      return;
    }
    
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }
    
    setIsLoading(true);
    setErrorMessage("");
    
    try {
      const success = await register(name, email, password, role);
      
      if (success) {
        navigate(role === "farmer" ? "/dashboard/farmer" : "/dashboard/industry");
      } else {
        setErrorMessage("Registration failed. Please try again.");
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
              Create an Account
            </CardTitle>
            <CardDescription className="text-center">
              Register to start buying or selling agricultural waste products
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={role} onValueChange={(value) => setRole(value as UserRole)} className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="farmer">Farmer</TabsTrigger>
                <TabsTrigger value="industry">Industry</TabsTrigger>
              </TabsList>
              
              <TabsContent value="farmer">
                <form onSubmit={handleRegister} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="farmer-name">Full Name</Label>
                    <Input
                      id="farmer-name"
                      placeholder="Your full name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
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
                    <Label htmlFor="farmer-password">Password</Label>
                    <Input
                      id="farmer-password"
                      type="password"
                      placeholder="Create a strong password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="farmer-confirm-password">Confirm Password</Label>
                    <Input
                      id="farmer-confirm-password"
                      type="password"
                      placeholder="Confirm your password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
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
                        Creating Account...
                      </>
                    ) : (
                      "Register as Farmer"
                    )}
                  </Button>
                  
                  <div className="text-xs text-muted-foreground">
                    By registering, you agree to our <a href="#" className="text-primary hover:underline">Terms of Service</a> and <a href="#" className="text-primary hover:underline">Privacy Policy</a>.
                  </div>
                </form>
              </TabsContent>
              
              <TabsContent value="industry">
                <form onSubmit={handleRegister} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="industry-name">Company Name</Label>
                    <Input
                      id="industry-name"
                      placeholder="Your company name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="industry-email">Business Email</Label>
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
                    <Label htmlFor="industry-password">Password</Label>
                    <Input
                      id="industry-password"
                      type="password"
                      placeholder="Create a strong password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="industry-confirm-password">Confirm Password</Label>
                    <Input
                      id="industry-confirm-password"
                      type="password"
                      placeholder="Confirm your password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
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
                        Creating Account...
                      </>
                    ) : (
                      "Register as Industry"
                    )}
                  </Button>
                  
                  <div className="text-xs text-muted-foreground">
                    By registering, you agree to our <a href="#" className="text-primary hover:underline">Terms of Service</a> and <a href="#" className="text-primary hover:underline">Privacy Policy</a>.
                  </div>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="flex flex-col gap-4">
            <div className="text-center text-sm">
              Already have an account? <Link to="/login" className="text-primary hover:underline">Sign in</Link>
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
