interface BadgeProps {
  label: string;
  color?: string;
  labelColor?: "black" | "white";
}

export const Badge = ({ label, color, labelColor }: BadgeProps) => {
  const textColor = labelColor === "white" ? "text-white" : "text-black";

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${color} ${textColor}`}
    >
      {label}
    </span>
  );
};
