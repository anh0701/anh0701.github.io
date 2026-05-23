import { FiGithub, FiLinkedin, FiMail, FiDownload } from "react-icons/fi";
import type { IconType } from "react-icons/lib";

export type ContactItem = {
  title: string;
  value: string;
  href: string;
  icon: IconType;
  external?: boolean;
};

export const contacts: ContactItem[] = [
  {
    title: "Email",
    value: "quynhanhphamthi01@gmail.com",
    href: "mailto:quynhanhphamthi01@gmail.com",
    icon: FiMail,
    external: false,
  },
  {
    title: "Github",
    value: "github.com/anh0701",
    href: "https://github.com/anh0701",
    icon: FiGithub,
    external: true,
  },
  {
    title: "LinkedIn",
    value: "linkedin.com/in/anh0701",
    href: "https://linkedin.com/anh0701",
    icon: FiLinkedin,
    external: true,
  },
  // {
  //   title: "Resume",
  //   value: "Download CV",
  //   href: "#",
  //   icon: FiDownload,
  //   external: true,
  // },
];
