import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { XPToast } from "./gamification/XPToast";
import { DemoBanner } from "./DemoBanner";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <DemoBanner />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <XPToast />
    </div>
  );
}
