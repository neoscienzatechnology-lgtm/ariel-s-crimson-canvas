import brandingImage1 from "@/assets/portfolio-branding-1.jpg";
import socialMediaImage from "@/assets/portfolio-social-media.jpg";
import editorialImage from "@/assets/portfolio-editorial.jpg";
import campaignImage from "@/assets/portfolio-campaign.jpg";
import packagingImage from "@/assets/portfolio-packaging.jpg";
import brandingImage2 from "@/assets/portfolio-branding-2.jpg";

const portfolioItems = [
  {
    id: 1,
    title: "Identidade Visual Moderna",
    category: "Branding",
    color: "wine-intense",
    image: brandingImage1,
  },
  {
    id: 2,
    title: "Social Media Estratégico",
    category: "Social Media",
    color: "orange-burnt",
    image: socialMediaImage,
  },
  {
    id: 3,
    title: "Design Editorial",
    category: "Editorial",
    color: "wine-dark",
    image: editorialImage,
  },
  {
    id: 4,
    title: "Campanha Visual",
    category: "Campanha",
    color: "cream",
    image: campaignImage,
  },
  {
    id: 5,
    title: "Packaging Design",
    category: "Produto",
    color: "wine-intense",
    image: packagingImage,
  },
  {
    id: 6,
    title: "Branding Completo",
    category: "Branding",
    color: "orange-burnt",
    image: brandingImage2,
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">
            Portfólio
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Projetos que transformam marcas e conectam com pessoas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative aspect-square rounded-lg overflow-hidden cursor-pointer hover-lift fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-sm font-medium mb-2 text-white/90">
                  {item.category}
                </p>
                <h3 className="text-2xl font-display font-bold text-white">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
