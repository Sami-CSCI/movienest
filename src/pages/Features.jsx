import PageHeader from "../components/PageHeader";

const features = [
  {
    icon: "🎬",
    title: "Browse movies",
    text: "See a list of well known movies with their genre, year and rating.",
  },
  {
    icon: "🔍",
    title: "Search and filter",
    text: "Type a title or choose a genre to quickly find what you want to watch.",
  },
  {
    icon: "📄",
    title: "Movie details",
    text: "Every movie has its own page with a short summary, the director and the duration.",
  },
  {
    icon: "❤️",
    title: "Favourites list",
    text: "Save movies to your favourites. The list stays there even after you refresh the page.",
  },
  {
    icon: "📱",
    title: "Works on any screen",
    text: "The layout changes to fit phones, tablets and laptops.",
  },
  {
    icon: "✉️",
    title: "Contact us",
    text: "Have an idea or found a problem? Send us a message from the contact page.",
  },
];

function Features() {
  return (
    <div>
      <PageHeader
        label="Features"
        title="What you can do on MovieNest"
        text="We kept things simple. Here is everything the website offers."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <div key={feature.title} className="rounded-xl border border-secondary bg-primary p-6 shadow-xs">
            <div className="flex size-12 items-center justify-center rounded-lg bg-brand-secondary text-2xl">
              {feature.icon}
            </div>
            <h3 className="mt-5 text-lg font-semibold text-primary">{feature.title}</h3>
            <p className="mt-2 text-tertiary">{feature.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;
