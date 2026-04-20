import type { ReactNode } from "react";
import { useInView } from "../hooks/useInView";
import "../styles/reveal.css";

type Props = {
  children: ReactNode;
  className?: string;
};

const RevealSection = ({ children, className = "" }: Props) => {
  const { ref, isVisible } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`reveal-section ${isVisible ? "visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
};

export default RevealSection;