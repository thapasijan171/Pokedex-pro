import { SiGithub, SiLinkedin, SiX } from "react-icons/si";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { FaCode } from "react-icons/fa6";
import { MovingBorderBtn } from "@/components/ui/moving-border";

const Navbar = ({
  className,
  isFooter,
}: {
  className?: string;
  isFooter: boolean;
}) => {
  const socials = [
    {
      link: "https://www.linkedin.com/in/sijanlamichhanemagar171/",
      label: "Linkedin",
      Icon: SiLinkedin,
    },
    {
      link: "https://github.com/thapasijan171",
      label: "Github",
      Icon: SiGithub,
    },
    {
      link: "https://twitter.com/thapasijan171",
      label: "X",
      Icon: SiX,
    },
  ];
  return (
    <nav
      className={cn(
        "py-8 flex items-center justify-between animate-move-down",
        className
      )}
    >
      <h1 className="text-white text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2">
        Sijan Thapa 👨🏻‍💻 
      </h1>

      {
        !isFooter &&

      <Link href={'/developer'} className="flex flex-col gap-1 items-center justify-center">
        <FaCode className="size-8 text-white" />
        <MovingBorderBtn borderRadius="0.5rem" className="hidden md:block p-3 font-semibold">
            <p>Dev Mode</p>
          </MovingBorderBtn>
      </Link>
      }

      <div className="flex items-center gap-5">
        {socials.map((social, index) => {
          const Icon = social.Icon;
          return (
            <Link href={social.link} aria-label={social.label} key={index}>
              <Icon className="size-5 hover:scale-125 transition-all" />
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
export default Navbar;
