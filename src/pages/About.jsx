import { Badge } from "@/components/base/badges/badges";
import PageHeader from "../components/PageHeader";

const team = [
  { name: "Sami Zorkot", initials: "SZ" },
  { name: "Issa Hammad", initials: "IH" },
];

function About() {
  return (
    <div>
      <PageHeader
        label="About us"
        title="Why we made MovieNest"
        text="Choosing a movie usually takes longer than watching it. We wanted a small website where you can look at a few good movies and save the ones you like, without signing up for anything."
      />

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-xl bg-secondary p-6">
          <h2 className="text-xl font-semibold text-primary">The project</h2>
          <p className="mt-3 text-tertiary">
            MovieNest is our project for CSCI426 Advanced Web Programming. It is built with React, React Router and
            Tailwind CSS, and uses some components from Untitled UI. Favourites are saved as JSON in the browser's
            localStorage.
          </p>
        </div>

        <div className="rounded-xl bg-secondary p-6">
          <h2 className="text-xl font-semibold text-primary">The team</h2>
          <div className="mt-4 flex flex-col gap-4">
            {team.map((person) => (
              <div key={person.name} className="flex items-center gap-3">
                <span className="flex size-12 items-center justify-center rounded-full bg-brand-solid font-semibold text-white">
                  {person.initials}
                </span>
                <div>
                  <p className="font-semibold text-primary">{person.name}</p>
                  <Badge color="gray" size="sm">Developer</Badge>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
