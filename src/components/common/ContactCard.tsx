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
      bg-white dark:bg-slate-900
      border border-slate-100 dark:border-slate-800
      rounded-2xl shadow-sm 
      hover:shadow-xl hover:-translate-y-1.5 
      hover:border-blue-200 dark:hover:border-blue-500/30
      dark:hover:shadow-blue-500/10
      transition-all duration-300
    ${className}
  `}
    >

      <div
        className={`
      w-12 h-12
      rounded-xl flex items-center justify-center mb-4 
      transition-all duration-300
      bg-blue-50 text-blue-600 
      dark:bg-blue-900/30 dark:text-blue-400
      group-hover:bg-[#0077b5] group-hover:text-white 
      ${iconClass}
    `}
      >
        {icon}
      </div>

      <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-[#0077b5] dark:group-hover:text-blue-400 transition-colors">
        {title}
      </h3>

      <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 font-medium">
        {description}
      </p>
    </a>
  );
};

export default ContactCard;