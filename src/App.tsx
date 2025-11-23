import React from 'react';
import { cn } from '@/lib/utils';
import { ThemeProvider } from "@/components/theme-provider";

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="min-h-screen bg-background font-sans antialiased">
        <div className="container mx-auto p-4">
          {children}
        </div>
      </div>
    </ThemeProvider>
  );
};

export default RootLayout;