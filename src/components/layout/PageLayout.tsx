
import { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { cn } from "@/lib/utils";

interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
  withoutPadding?: boolean;
}

export default function PageLayout({ 
  children, 
  className,
  fullWidth = false,
  withoutPadding = false
}: PageLayoutProps) {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Activate reveal animations on scroll
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.reveal-animation');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className={cn(
        "flex-1",
        !withoutPadding && "pt-16",
        className
      )}>
        {fullWidth ? (
          children
        ) : (
          <div className="container mx-auto px-4">
            {children}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
