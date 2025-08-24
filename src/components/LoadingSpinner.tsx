import { useLoading } from "@/hooks/useLoading";

const LoadingSpinner = () => {
  const { isLoading } = useLoading();

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm animate-fade-in">
      <div className="flex flex-col items-center gap-4">
        <div className="relative">
          <img 
            src="/lovable-uploads/f140baa2-b5bd-42f0-90e4-ba9c518a9342.png" 
            alt="Windoz Tech Logo" 
            className="h-16 w-auto animate-spin-slow"
          />
          <div className="absolute inset-0 rounded-full animate-pulse-glow bg-primary/20"></div>
        </div>
        <div className="text-center">
          <h3 className="text-lg font-semibold text-foreground animate-bounce-subtle">Loading...</h3>
          <p className="text-sm text-muted-foreground">Please wait</p>
        </div>
      </div>
    </div>
  );
};

export { LoadingSpinner };