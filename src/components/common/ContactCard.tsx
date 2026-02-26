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
      className={`group block p-6 bg-white border border-slate-100 
        rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 
        transition-all duration-300 ${className}`}
    >
      <div className={`w-12 h-12
        rounded-lg flex items-center justify-center mb-4 
        group-hover:text-white transition-colors ${iconClass}`}>
        {icon}
      </div>
      
      <h3 className="font-bold text-slate-800">{title}</h3>
      <p className="text-sm text-slate-500 mt-1">{description}</p>
    </a>
  );
};

export default ContactCard;