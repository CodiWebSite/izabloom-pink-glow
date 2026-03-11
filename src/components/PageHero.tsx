interface PageHeroProps {
  title: string;
  description: string;
  image?: string;
}

const PageHero = ({ title, description, image }: PageHeroProps) => {
  return (
    <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      {/* Background Image or Gradient */}
      {image ? (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-accent/20 to-background" />
      )}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center pt-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground mb-4">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          {description}
        </p>
      </div>
    </section>
  );
};

export default PageHero;
