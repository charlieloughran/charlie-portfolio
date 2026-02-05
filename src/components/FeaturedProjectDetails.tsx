import "../styles/FeaturedProjectDetails.css";
import { useEffect, useRef  } from "react";

import type { ContentBlock } from "../types";

type Props = {
  title: string;
  role: string;
  content: ContentBlock[];
  onBack: () => void;
};


export default function FeaturedProjectDetails({ title, role, content, onBack }: Props) {
  const modalRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const modal = modalRef.current;
    const header = headerRef.current;
    if (!modal || !header) return;

    const onScroll = () => {
      header.classList.toggle("scrolled", modal.scrollTop > 8);
      header.classList.toggle("shrunk", modal.scrollTop > 80);
    };

    modal.addEventListener("scroll", onScroll);
    return () => modal.removeEventListener("scroll", onScroll);
  }, []);

  // Lock background scroll
  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = original; };
  }, []);

  const firstImageIndex = content.findIndex(b => b.type === "image");
  const firstImage = content.find(
    (block): block is { type: "image"; src: string; alt: string } =>
      block.type === "image"
  );
  const remainingContent = content.filter((_, i) => i !== firstImageIndex);

  return (
    <div className="overlay">
      <div className="featured-project-details" ref={modalRef}>


        <div className="details-header" ref={headerRef}>
                  <button className="back-btn" onClick={onBack}>
          &larr; Back
        </button>
          <h1>{title}</h1>
          <p className="role">{role}</p>
        </div>

        {/* Normal flowing content */}
        <div className="details-container">
          {firstImage && <img src={firstImage.src} alt={firstImage.alt} />}

          {remainingContent.map((block, i) => {
            switch (block.type) {
              case "image":
                return <img key={i} src={block.src} alt={block.alt} />;
              case "paragraph":
                return <p key={i}>{block.text}</p>;
              case "list":
                return (
                  <ul key={i}>
                    {block.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                );
            }
          })}
        </div>
      </div>
    </div>
  );
}
