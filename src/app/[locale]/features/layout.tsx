import { ReactNode } from 'react';

interface FeaturesLayoutProps {
  children: ReactNode;
}

export default function FeaturesLayout({ children }: FeaturesLayoutProps) {
  return (
    <div className="min-h-screen bg-void-deep">
      {children}
    </div>
  );
}
