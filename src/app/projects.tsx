"use client";

import { ProjectCard } from "@/components";
import { Typography } from "@material-tailwind/react";
import { getImagePrefix } from "../../utils/utils";

const PROJECTS = [
  {
    img: `/image/images-daymond.png`,
    title: "Travail pour une societe de dropshipping 'Daymond'", 
    desc: "j'ai travail sur le site web de la societe de dropshipping 'Daymond'. J'ai developpe la partie back-end et la partie front-end. En effet j'ai ameliore , fait de nouvelles api et aussi sur leurs application mobile en flutter et web en angular. Disponible sur playstore et appstore.",
  },
  {
    img: `/image/images-gobabi.png`,
    title: "Travail pour une societe de VTC avorte pour VTC 'GOBABI'",
    desc: "J'ai travail uniquement  sur les api motament pour permettre au client de trouver des chauffeurs pour leurs trajets. Disponible sur playstore et appstore.",
  },
  {
    img: `/image/images-dughu.jpg`,
    title: "Travail pour une societe de reseau social  'DUGHU'",
    desc: "Travail sur la partie front-end et la partie back-end de la societe de reseau social 'DUGHU'. Disponible sur playstore et appstore.",
  },
  
];

export function Projects() {
  return (
    <section className="py-28 px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4">
          Mes Projets
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12"
        >
          Que vous ayez une idée d&#39;application mobile qui doit prendre vie ou un site web
 qui a besoin dune cure de jouvence, je suis là pour transformer vos rêves numériques
 en réalité.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4">
        {PROJECTS.map((props, idx) => (
          <ProjectCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
