interface ActionButtonProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  className?: string;
}

export const ActionButton = ({
  href,
  icon,
  label,
  className = "",
}: ActionButtonProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center justify-center gap-2 py-3 
      px-4 border border-gray-200 hover:bg-gray-100 transition-colors 
      duration-200 cursor-pointer ${className}`}
    >
      {icon}
      <span className="font-medium text-gray-700">{label}</span>
    </a>
  );
};
