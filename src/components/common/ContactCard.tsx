import React, { type ReactNode } from 'react';

interface ContactCardProps {
  href: string;
  icon: ReactNode;
  title: string;
  description: string;
  isExternal?: boolean;
  iconClass: string;
  className?: string;
}

const ContactCard: React.FC<ContactCardProps> = ({
  href,
  icon,
  title,
  description,
  isExternal = false,
  iconClass = "",
  className = ""
}) => {
  // Logic xử lý target
  const target = isExternal ? "_blank" : "_self";
  const rel = isExternal ? "noopener noreferrer" : undefined;

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={`
    group block p-6 
    bg-white dark:bg-slate-800
    border border-slate-100 dark:border-slate-700
    rounded-2xl shadow-sm 
    hover:shadow-xl hover:-translate-y-2 
    dark:hover:shadow-black/30
    transition-all duration-300 
    ${className}
  `}
    >

      <div
        className={`
      w-12 h-12
      rounded-lg flex items-center justify-center mb-4 
      text-slate-600 dark:text-slate-500
      group-hover:text-white 
      transition-colors 
      ${iconClass}
    `}
      >
        {icon}
      </div>

      <h3 className="heading-3 font-bold text-slate-900 dark:text-white">
        {title}
      </h3>

      <p className="body-text text-slate-600 dark:text-slate-300 mt-1">
        {description}
      </p>
    </a>
  );
};

export default ContactCard;