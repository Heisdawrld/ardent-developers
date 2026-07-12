"use client";

import { motion } from "framer-motion";

const projects = [
  {
    name: "The Residences",
    location: "Ikoyi, Lagos",
    type: "Residential",
    units: "24 Units",
    status: "Pre-Construction",
    description:
      "A low-density, design-led waterfront residence built around airflow, light, and landscape.",
  },
  {
    name: "Garden District",
    location: "Lekki, Lagos",
    type: "Mixed-Use",
    units: "48 Units",
    status: "Coming Soon",
    description:
      "Modern urban living with lush garden courtyards and premium amenities in the heart of Lekki.",
  },
  {
    name: "The Orchards",
    location: "Epe, Lagos",
    type: "Residential",
    units: "36 Units",
    status: "Planning",
    description:
      "A community-centric development blending farm-stay living with contemporary architecture.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 lg:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-accent text-sm font-medium tracking-widest uppercase mb-4"
            >
              Our Projects
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl lg:text-5xl font-semibold tracking-tight"
            >
              Developments
            </motion.h2>
          </div>
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            href="#"
            className="mt-6 md:mt-0 text-sm font-medium text-accent hover:text-accent-light transition-colors"
          >
            View All Projects &rarr;
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, i) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-background rounded-2xl overflow-hidden border border-sand hover:border-accent/30 transition-all duration-300"
            >
              {/* Placeholder Image */}
              <div className="aspect-[4/3] bg-gradient-to-br from-sand to-cream flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                      />
                    </svg>
                  </div>
                  <p className="text-xs text-foreground/40 uppercase tracking-wider">
                    Image Coming Soon
                  </p>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2.5 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full">
                    {project.type}
                  </span>
                  <span className="px-2.5 py-1 bg-sand text-foreground/60 text-xs font-medium rounded-full">
                    {project.status}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                <p className="text-sm text-foreground/60 mb-4">
                  {project.description}
                </p>
                <div className="flex items-center justify-between text-xs text-foreground/50">
                  <span>{project.location}</span>
                  <span>{project.units}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
