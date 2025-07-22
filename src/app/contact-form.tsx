"use client";

import {
  Typography,
  Card,
  CardBody,
  Radio,
  Input,
  Textarea,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { EnvelopeIcon, PhoneIcon, TicketIcon } from "@heroicons/react/24/solid";
import { FaGithub } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
// Ajout LinkedIn SVG
const LinkedInIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zm13.5 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.88v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z" />
  </svg>
);

export function ContactForm() {
  const form = useRef<HTMLFormElement>(null);
  const [alert, setAlert] = useState<string | null>(null);
  const [sending, setSending] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setAlert(null);

    emailjs
      .sendForm(
        "service_8p7n8oe", // Remplace par ton service ID EmailJS
        "template_rwesu49", // Remplace par ton template ID EmailJS
        form.current!,
        "ZpRbRjbr3a896uFRC" // Remplace par ta clé publique EmailJS
      )
      .then(
        () => {
          setAlert("✅ Votre message a bien été envoyé !");
          setSending(false);
          form.current?.reset();
          // Masquer l'alerte après 4 secondes
          setTimeout(() => setAlert(null), 4000);
        },
        () => {
          setAlert("❌ Une erreur est survenue. Veuillez réessayer.");
          setSending(false);
          setTimeout(() => setAlert(null), 4000);
        }
      );
  };

  return (
    <section className="px-8 py-16">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h1" color="blue-gray" className="mb-4">
          Contactez-moi
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full lg:w-5/12 !text-gray-500"
        >
          Prêt à démarrer ? N&#39;hésitez pas à me contacter via le formulaire de contact,
          et embarquons pour un voyage d&#39;innovation et de succès.
        </Typography>
      </div>
      <div>
        <Card shadow={true} className="container mx-auto border border-gray/50">
          <CardBody className="grid grid-cols-1 lg:grid-cols-7 md:gap-10">
            <div className="w-full col-span-3 rounded-lg h-full py-8 p-5 md:p-16 bg-gray-900">
              <Typography variant="h4" color="white" className="mb-2">
                Information de contact
              </Typography>
              <Typography
                variant="lead"
                className="mx-auto mb-8 text-base !text-gray-500"
              >
                Remplissez le formulaire et je vous contacterais dans les plus brefs delais.
              </Typography>
              <div className="flex gap-5">
                <PhoneIcon className="h-6 w-6 text-white" />
                <Typography variant="h6" color="white" className="mb-2">
                  +225 0768356081 // +225 0502112269
                </Typography>
              </div>
              <div className="flex my-2 gap-5">
                <EnvelopeIcon className="h-6 w-6 text-white" />
                <Typography variant="h6" color="white" className="mb-2">
                  kaderdevpro@gmail.com
                </Typography>
              </div>
              <div className="flex mb-4 gap-5 items-center">
                <FaGithub className="h-6 w-6 text-white" />
                <Typography variant="h6" color="white" className="mb-2">
                  <a
                    href="https://github.com/KaderD2022"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Mon GitHub
                  </a>
                </Typography>
              </div>
              <div className="flex mb-4 gap-5 items-center">
                <LinkedInIcon className="h-6 w-6 text-white" />
                <Typography variant="h6" color="white" className="mb-2">
                  <a
                    href="https://www.linkedin.com/in/abdoul-kader-raïs-diarrassouba-793884215"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Mon LinkedIn
                  </a>
                </Typography>
              </div>
              <div className="flex mb-4 gap-5 items-center">
                <FaFilePdf className="h-6 w-6 text-white" />
                <Typography variant="h6" color="white" className="mb-2">
                  <a
                    href="/cv.pdf"
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Télécharger mon CV (PDF)
                  </a>
                </Typography>
              </div>
            </div>
            <div className="w-full mt-8 md:mt-0 md:px-10 col-span-4 h-full p-5">
              {alert && (
                <div
                  className={`mb-4 p-3 rounded text-white ${
                    alert.includes("erreur") ? "bg-red-500" : "bg-green-500"
                  }`}
                >
                  {alert}
                </div>
              )}
              <form ref={form} onSubmit={sendEmail}>
                <div className="mb-8 grid gap-4 lg:grid-cols-2">
                  <Input
                    color="gray"
                    size="lg"
                    variant="static"
                    label="Nom complet"
                    name="name"
                    placeholder="Votre nom complet"
                    required
                    containerProps={{
                      className: "!min-w-full mb-3 md:mb-0",
                    }}
                  />
                  <Input
                    color="gray"
                    size="lg"
                    variant="static"
                    label="Adresse email"
                    name="email"
                    type="email"
                    placeholder="Votre adresse email"
                    required
                    containerProps={{
                      className: "!min-w-full",
                    }}
                  />
                </div>
                <Typography
                  variant="lead"
                  className="!text-blue-gray-500 text-sm mb-2"
                >
                  Qu&#39;est-ce qui vous intéresse ?
                </Typography>
                <div className="-ml-3 mb-14 ">
                  <Radio color="gray" name="type" label="Design" />
                  <Radio color="gray" name="type" label="Development" />
                  <Radio color="gray" name="type" label="Support" />
                  <Radio color="gray" name="type" label="Other" />
                </div>
                <Textarea
                  color="gray"
                  size="lg"
                  variant="static"
                  label="Votre message"
                  name="message"
                  required
                  containerProps={{
                    className: "!min-w-full mb-8",
                  }}
                />
                <div className="w-full flex justify-end">
                  <Button
                    className="w-full md:w-fit"
                    color="gray"
                    size="md"
                    type="submit"
                    disabled={sending}
                  >
                    {sending ? "Envoi..." : "Envoyer"}
                  </Button>
                </div>
              </form>
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default ContactForm;
