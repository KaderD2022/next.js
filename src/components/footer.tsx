import { Typography, Button } from "@material-tailwind/react";

const LINKS = ["Acceuil", "A propos", "Blog", "Service"];
const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mt-10 px-8 pt-20">
      <div className="container mx-auto">
        <div className="mt-16 flex flex-wrap items-center justify-center gap-y-4 border-t border-gray-200 py-6 md:justify-between">
          <Typography className="text-center font-normal !text-gray-700">
            &copy; {CURRENT_YEAR} Made with{" "}
            <a href="" target="_blank">
              KaderDev
            </a>{" "}
            by{" "}
            <a href="https://www.creative-tim.com" target="_blank">
              Crée par moi meme 
            </a>
            .
            Distribuer par <a href="https://github.com/KaderD2022/" target="_blank">KaderDev</a>
          </Typography>
          
        </div>
      </div>
    </footer>
  );
}

export default Footer;
