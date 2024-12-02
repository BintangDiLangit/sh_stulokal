import { LoginForm } from "./login-form";
import { WelcomeSection } from "./welcome-section";
import { BackgroundShapes } from "./background-shapes";

export function LoginContainer() {
  return (
    <main className="min-h-screen w-full flex items-center justify-center relative bg-[#8B2635] overflow-hidden">
      <BackgroundShapes />
      
      <div className="w-full max-w-[1200px] grid lg:grid-cols-2 gap-8 p-4 z-10">
        <LoginForm />
        <WelcomeSection />
      </div>
    </main>
  );
}