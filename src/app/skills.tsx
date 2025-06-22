"use client";

import { Typography } from "@material-tailwind/react";
import {
  RectangleGroupIcon,
  FingerPrintIcon,
  SwatchIcon,
  HashtagIcon,
  EyeIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";
import { SkillCard } from "@/components";

const SKILLS = [
  {
    icon: RectangleGroupIcon,
    title: "Developpeur Front-End",
    children:
      "Créer des expériences web belles et fonctionnelles est ma specialit . En utilisant les derni res technologies et les meilleures pratiques, je con ce et je developpes des sites web qui captivent et impliquent les utilisateurs.",
  },
  {
    icon: FingerPrintIcon,
    title: "Developpeur Mobile",
    children:
      " Je suis spécialisé dans la création d'applications mobiles réactives et intuitives qui fonctionnent de manière transparente sur les appareils iOS et Android. De la conception au déploiement, je m'occupe de chaque étape du processus de développement.",
  },
  {
    icon: SwatchIcon,
    title: "Pile technologique",
    children:
      "Je connais bien les technologies frontales les plus populaires du secteur, notamment HTML5, CSS3, JavaScript et des frameworks comme React et React Native et flutter pour les applications mobiles. Je suis aussi familier avec les outils de gestion de version comme Git et les outils de compilation comme Webpack.",
  },
  {
    icon: HashtagIcon,
    title: "Optimisation des sites web",
    children:
      "La performance est importante. J'optimise les sites web et les applications pour qu'ils soient plus rapides, ce qui permet à vos utilisateurs de profiter d'une expérience rapide et adaptée à leurs besoins, et donc d'améliorer leur satisfaction et leur classement dans les moteurs de recherche.",
  },
  {
    icon: EyeIcon,
    title: "Une conception centrée sur l'utilisateur",
    children:
      "Mon développement va de pair avec un œil pour le design. Je crée des interfaces utilisateur qui ne sont pas seulement fonctionnelles mais aussi esthétiques, offrant un parcours fluide et agréable à l'utilisateur.",
  },
  {
    icon: DocumentTextIcon,
    title: "Tests et assurance de la qualité",
    children:
      "Je teste et débogue rigoureusement les applications afin de garantir aux utilisateurs un environnement sûr et sans bogues. Votre tranquillité d'esprit est aussi importante pour moi que la fonctionnalité de votre projet.",
  },
];

export function Skills() {
  return (
    <section className="px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography color="blue-gray" className="mb-2 font-bold uppercase">
          mes competences
        </Typography>
        <Typography variant="h1" color="blue-gray" className="mb-4">
          Ce que je fais
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full !text-gray-500 lg:w-10/12"
        >
          Je ne suis pas seulement un développeur; je suis un tisserand de rêves numériques.
          Créer des expériences en ligne immersives n&#39;est pas seulement un travail mais ma vocation.
          Découvrez ci-dessous comment je peux vous aider.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((props, idx) => (
          <SkillCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
