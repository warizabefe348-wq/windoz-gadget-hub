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
            <Card className="overflow-hidden card-elevated cursor-pointer hover:shadow-lg transition-all duration-300">
              <a 
                href="https://youtube.com/shorts/rDNkvC93wDo?si=thCbhSVCTsihA0sX" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <div className="aspect-[9/16] w-full max-h-[600px] relative bg-gradient-to-br from-primary/20 to-secondary/40 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Watch Our Technology Demo</h3>
                    <p className="text-muted-foreground text-sm">Click to watch on YouTube</p>
                  </div>
                </div>
              </a>
            </Card>
            
            <Card className="overflow-hidden card-elevated cursor-pointer hover:shadow-lg transition-all duration-300">
              <a 
                href="https://youtube.com/shorts/-Do9i6yrsVU?si=VQJtf0TBZq2Bm1qg" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <div className="aspect-[9/16] w-full max-h-[600px] relative bg-gradient-to-br from-primary/20 to-secondary/40 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Explore Our Solutions</h3>
                    <p className="text-muted-foreground text-sm">Click to watch on YouTube</p>
                  </div>
                </div>
              </a>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};