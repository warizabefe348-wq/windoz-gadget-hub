import { Card } from "@/components/ui/card";

export const VideoSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            See Our Technology in Action
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Watch how we bring cutting-edge technology solutions to life
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="overflow-hidden card-elevated">
              <div className="aspect-[9/16] w-full max-h-[600px]">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/rDNkvC93wDo"
                  title="Windoz Tech Global Gadgets - Technology Solutions"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </Card>
            
            <Card className="overflow-hidden card-elevated">
              <div className="aspect-[9/16] w-full max-h-[600px]">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube-nocookie.com/embed/-Do9i6yrsVU?autoplay=0&mute=0&controls=1&loop=0"
                  title="Windoz Tech Global Gadgets - Technology Solutions"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};