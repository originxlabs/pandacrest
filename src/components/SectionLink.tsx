import { Link } from "react-router-dom";
import { routeToSection } from "@/lib/sectionRoutes";

interface SectionLinkProps {
  to: string;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const SectionLink = ({ to, className, children, onClick }: SectionLinkProps) => {
  const handleClick = () => {
    onClick?.();

    const sectionId = routeToSection[to];
    if (typeof window === "undefined" || !sectionId) return;

    window.requestAnimationFrame(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  return (
    <Link to={to} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
};

export default SectionLink;
