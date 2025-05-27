import { Link } from "react-router-dom";

interface HeaderLogoProps {
  label: string;
}

export const HeaderLogo = ({ label }: HeaderLogoProps) => {
  return <Link to={"/"}>{label}</Link>;
};
