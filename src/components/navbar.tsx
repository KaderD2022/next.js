import React from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import {
  RectangleStackIcon,
  UserCircleIcon,
  CommandLineIcon,
  Squares2X2Icon,
  XMarkIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";

const NAV_MENU = [
  {
    name: "Acceuil",
    icon: RectangleStackIcon,
  },
  {
    name: "A propos",
    icon: UserCircleIcon,
  },
  {
    name: "Blog",
    icon: CommandLineIcon,
  },
  {
    name: "Service",
    icon: Squares2X2Icon,
  },
];

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}

function NavItem({ children, href }: NavItemProps) {
  return (
    <li>
      <Typography
        as="a"
        href={href || "#"}
        target={href ? "_blank" : "_self"}
        variant="paragraph"
        color="gray"
        className="flex items-center gap-2 font-medium text-gray-900"
      >
        {children}
      </Typography>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  return (
    <MTNavbar shadow={false} fullWidth className="border-0 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <Typography color="blue-gray" className="text-lg font-bold">
          KaderDev Portefolio
        </Typography>
        <ul className="ml-10 hidden items-center gap-8 lg:flex">
          {NAV_MENU.map(({ name, icon: Icon, href }) => (
            <NavItem key={name} href={href}>
              <Icon className="h-5 w-5" />
              {name}
            </NavItem>
          ))}
        </ul>

        <IconButton
          variant="text"
          color="gray"
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="container mx-auto mt-3 border-t border-gray-200 px-2 pt-4">
          <ul className="flex flex-col gap-4">
            {NAV_MENU.map(({ name, icon: Icon }) => (
              <NavItem key={name}>
                <Icon className="h-5 w-5" />
                {name}
              </NavItem>
            ))}
          </ul>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;

export function Footer() {
  const CURRENT_YEAR = new Date().getFullYear();

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
          <ul className="flex gap-8 items-center">
            {NAV_MENU.map(({ name }) => (
              <li key={name}>
                <Typography
                  as="a"
                  href="#"
                  variant="small"
                  className="font-normal text-gray-700 hover:text-gray-900 transition-colors"
                >
                  {name}
                </Typography>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

// import React from "react";
// import {
//   Navbar as MTNavbar,
//   Collapse,
//   Button,
//   IconButton,
//   Typography,
// } from "@material-tailwind/react";
// import {
//   RectangleStackIcon,
//   UserCircleIcon,
//   CommandLineIcon,
//   Squares2X2Icon,
//   XMarkIcon,
//   Bars3Icon,
// } from "@heroicons/react/24/solid";

// const NAV_MENU = [
//   {
//     name: "Page",
//     icon: RectangleStackIcon,
//   },
//   {
//     name: "Account",
//     icon: UserCircleIcon,
//   },
//   {
//     name: "Docs",
//     icon: CommandLineIcon,
//     href: "#",
//   },
// ];

// interface NavItemProps {
//   children: React.ReactNode;
//   href?: string;
// }

// function NavItem({ children, href }: NavItemProps) {
//   return (
//     <li>
//       <Typography
//         as="a"
//         href={href || "#"}
//         target={href ? "_blank" : "_self"}
//         variant="paragraph"
//         color="gray"
//         className="flex items-center gap-2 font-medium text-gray-900"
//       >
//         {children}
//       </Typography>
//     </li>
//   );
// }

// export function Navbar() {
//   const [open, setOpen] = React.useState(false);

//   const handleOpen = () => setOpen((cur) => !cur);

//   React.useEffect(() => {
//     window.addEventListener(
//       "resize",
//       () => window.innerWidth >= 960 && setOpen(false)
//     );
//   }, []);

//   return (
//     <MTNavbar shadow={false} fullWidth className="border-0 sticky top-0 z-50">
//       <div className="container mx-auto flex items-center justify-between">
//         <Typography color="blue-gray" className="text-lg font-bold">
//           KaderDev Portefolio
//         </Typography>
//         <ul className="ml-10 hidden items-center gap-8 lg:flex">
//           {NAV_MENU.map(({ name, icon: Icon, href }) => (
//             <NavItem key={name} href={href}>
//               <Icon className="h-5 w-5" />
//               {name}
//             </NavItem>
//           ))}
//         </ul>

//         <IconButton
//           variant="text"
//           color="gray"
//           onClick={handleOpen}
//           className="ml-auto inline-block lg:hidden"
//         >
//           {open ? (
//             <XMarkIcon strokeWidth={2} className="h-6 w-6" />
//           ) : (
//             <Bars3Icon strokeWidth={2} className="h-6 w-6" />
//           )}
//         </IconButton>
//       </div>
//       <Collapse open={open}>
//         <div className="container mx-auto mt-3 border-t border-gray-200 px-2 pt-4">
//           <ul className="flex flex-col gap-4">
//             {NAV_MENU.map(({ name, icon: Icon }) => (
//               <NavItem key={name}>
//                 <Icon className="h-5 w-5" />
//                 {name}
//               </NavItem>
//             ))}
//           </ul>
//           {/* <div className="mt-6 mb-4 flex items-center gap-2">
//             <Button variant="text">Sign In</Button>
//             <a href="#">
//               <Button color="gray">blocks</Button>
//             </a>
//           </div> */}
//         </div>
//       </Collapse>
//     </MTNavbar>
//   );
// }

// export default Navbar;
