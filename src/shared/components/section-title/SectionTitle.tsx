interface SectionTitleProps {
  label: string;
}

export const SectionTitle = ({ label }: SectionTitleProps) => {
  return <h2 className="text-2xl font-bold">{label}</h2>;
};
