"use client";

import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Typography
} from "@material-tailwind/react";
import Image from "next/image";
import React from "react";

const technologies = [
  {
    name: "HTML",
    level: "Maîtrise avancée. Utilisé dans tous mes projets front-end.",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    level: "Maîtrise avancée. Expérience avec Tailwind, Bootstrap, etc.",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    level:
      "Maîtrise avancée. Utilisé avec React, Angular, et projets divers.",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "Django",
    level: "Très bonne maîtrise. Plusieurs projets professionnels réalisés.",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
  },
  {
    name: "Flask",
    level: "Maîtrise moyenne. Utilisé pour des API et petits projets.",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
  },
  {
    name: "Laravel",
    level: "Maîtrise moyenne. Expérience sur des projets web PHP.",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg",
  },
  {
    name: "MySQL",
    level: "Maîtrise avancée. Administration et requêtes complexes.",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "SQLite",
    level: "Bonne maîtrise. Utilisé pour des projets légers et prototypage.",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
  },
  {
    name: "Angular",
    level: "Bonne maîtrise. Réalisation de plusieurs applications SPA.",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
  },
  {
    name: "React",
    level: "Bonne maîtrise. Utilisé pour des dashboards et sites dynamiques.",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Flutter",
    level: "Bonne maîtrise. Développement d'applications mobiles.",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
  },
  {
    name: "Python",
    level: "Très bonne maîtrise. Utilisé pour le backend, scripts et data.",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "Vercel",
    level: "Bonne maîtrise. Déploiement de projets Next.js.",
    logo: "https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png",
  },
  {
    name: "Render",
    level: "Bonne maîtrise. Déploiement d'API et d'applications web.",
    logo: "https://avatars.githubusercontent.com/u/42880151?s=200&v=4",
  },
  {
    name: "SQL",
    level: "Maîtrise avancée. Requêtes et administration de bases de données.",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "HEBERGEMENT SUR PYTHONANYWHERE",
    level: "Bonne maîtrise. Déploiement et gestion d'applications Python sur PythonAnywhere.",
    logo: "https://avatars.githubusercontent.com/u/5993382?s=200&v=4",
  },
];

export function Testimonial() {
  const [active, setActive] = React.useState(3);
  const [open, setOpen] = React.useState(false);
  const [selectedTech, setSelectedTech] = React.useState<{
    name: string;
    level: string;
    logo: string;
  } | null>(null);

  const handleOpen = (tech: typeof selectedTech) => {
    setSelectedTech(tech);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedTech(null);
  };

  return (
    <section className="py-12 px-8 lg:py-24">
      <div className="container max-w-screen-lg mx-auto">
        <div className="container mx-auto mb-20 text-center">
          <Typography variant="h2" color="blue-gray" className="mb-4">
            Avis des clients
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-8/12"
          >
            Découvrez ce que les clients pensent de leur expérience avec moi. La satisfaction de mes clients est ma plus grande réussite !
          </Typography>
        </div>
        {/* Section compétences interactive */}
        <div className="mb-10 text-center">
          <Typography variant="h4" color="blue-gray" className="mb-4">
            Mes compétences techniques
          </Typography>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech) => (
              <Button
                key={tech.name}
                color="gray"
                variant="outlined"
                onClick={() => handleOpen(tech)}
                className="capitalize flex items-center gap-2"
              >
                <Image
                  src={tech.logo}
                  alt={tech.name + " logo"}
                  width={24}
                  height={24}
                  className="inline-block"
                />
                {tech.name}
              </Button>
            ))}
          </div>
          <Dialog open={open} handler={handleClose}>
            <DialogHeader>
              {selectedTech?.logo && (
                <Image
                  src={selectedTech.logo}
                  alt={selectedTech.name + " logo"}
                  width={32}
                  height={32}
                  className="inline-block mr-2"
                />
              )}
              {selectedTech?.name}
            </DialogHeader>
            <DialogBody>{selectedTech?.level}</DialogBody>
            <DialogFooter>
              <Button color="gray" onClick={handleClose}>
                Fermer
              </Button>
            </DialogFooter>
          </Dialog>
        </div>
        {/* Fin section compétences */}
        {/* <Card color="transparent" shadow={false} className="py-8 lg:flex-row">
          <CardBody className="w-full lg:gap-10 h-full lg:!flex justify-between ">
            <div className="w-full mb-10 lg:mb-0">
              <Typography
                variant="h3"
                color="blue-gray"
                className="mb-4 font-bold lg:max-w-xs"
              >
                Mobile App Development
              </Typography>
              <Typography className="mb-3 w-full lg:w-8/12 font-normal !text-gray-500">
                I had the pleasure of working with Lily on a critical web
                development project, and I can confidently say that their
                expertise and professionalism exceeded my expectations.
              </Typography>
              <Typography variant="h6" color="blue-gray" className="mb-0.5">
                Michael - Technical Manager
              </Typography>
              <Typography
                variant="small"
                className="font-normal mb-5 !text-gray-500"
              >
                Marketing @ APPLE INC.
              </Typography>
              <div className="flex items-center gap-4">
                <Avatar
                  variant="rounded"
                  src={`${getImagePrefix()}image/avatar1.jpg`}
                  alt="spotify"
                  size="sm"
                  className={`cursor-pointer ${
                    active === 1 ? "opacity-100" : "opacity-50"
                  }`}
                  onClick={() => setActive(1)}
                />
                <div className="w-[1px] h-[36px] bg-blue-gray-100 "></div>
                <Avatar
                  variant="rounded"
                  src={`${getImagePrefix()}image/avatar2.jpg`}
                  alt="spotify"
                  size="sm"
                  className={`cursor-pointer ${
                    active === 2 ? "opacity-100" : "opacity-50"
                  }`}
                  onClick={() => setActive(2)}
                />
                <div className="w-[1px] h-[36px] bg-blue-gray-100" />
                <Avatar
                  variant="rounded"
                  src={`${getImagePrefix()}image/avatar3.jpg`}
                  alt="spotify"
                  size="sm"
                  className={`cursor-pointer ${
                    active === 3 ? "opacity-100" : "opacity-50"
                  }`}
                  onClick={() => setActive(3)}
                />
              </div>
            </div>
            <div className="h-[21rem] rounded-lg w-full sm:w-[18rem] shrink-0">
              <Image
                width={768}
                height={768}
                alt="testimonial image"
                src={`/image/avatar${active}.jpg`}
                className="h-full rounded-lg w-full object-cover"
              />
            </div>
          </CardBody>
        </Card> */}
      </div>
    </section>
  );
}

export default Testimonial;
