const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="max-w-6xl mx-auto">
          <header className="text-center mb-12 md:mb-20 animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight mb-4 text-black">
              Gallery
            </h1>
            <p className="text-sm md:text-base text-neutral-600 font-light tracking-widest uppercase">
              Minimalist Photography
            </p>
          </header>

          <main className="animate-scale-in" style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}>
            <div className="relative group cursor-pointer">
              <div className="overflow-hidden bg-neutral-100">
                <img
                  src="https://cdn.poehali.dev/files/3e54759e-e091-42aa-bb5f-9d9aba3182ba.jpg"
                  alt="Art Gallery Portrait"
                  className="w-full h-auto transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="mt-8 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-xs md:text-sm text-neutral-500 font-light tracking-wider uppercase">
                  Museum of Modern Art
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 md:gap-8 mt-16 md:mt-24">
              <div className="text-center">
                <div className="text-2xl md:text-4xl font-light mb-2 text-black">2025</div>
                <div className="text-xs md:text-sm text-neutral-500 font-light tracking-wider uppercase">Year</div>
              </div>
              <div className="text-center border-x border-neutral-200">
                <div className="text-2xl md:text-4xl font-light mb-2 text-black">B&W</div>
                <div className="text-xs md:text-sm text-neutral-500 font-light tracking-wider uppercase">Style</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-4xl font-light mb-2 text-black">Film</div>
                <div className="text-xs md:text-sm text-neutral-500 font-light tracking-wider uppercase">Medium</div>
              </div>
            </div>
          </main>

          <footer className="mt-20 md:mt-32 text-center animate-fade-in" style={{ animationDelay: '0.4s', opacity: 0, animationFillMode: 'forwards' }}>
            <div className="h-px w-24 bg-neutral-300 mx-auto mb-8"></div>
            <p className="text-xs md:text-sm text-neutral-400 font-light tracking-widest uppercase">
              Timeless moments
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Index;
