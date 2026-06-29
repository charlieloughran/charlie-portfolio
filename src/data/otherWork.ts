export interface OtherWorkItem {
  title: string;
  subtitle: string;
  image: string;
  tag: string;
  discipline: string;
  year: string;
  videoId?: string;
}

export const otherWork: OtherWorkItem[] = [
  {
    title: "Jack Grealish: Title Sequence",
    subtitle: "Motion graphics concept — title screens, kit graphics, and club badge artwork.",
    image: "/images/other-jack-grealish.png",
    tag: "Motion",
    discipline: "Motion",
    year: "2022",
    videoId: "9II_J0RWuLw",
  },
  {
    title: "Hope Mill Theatre: 3D Renders",
    subtitle: "Blender renders of the auditorium modelled from floor plans and reference photos.",
    image: "/images/other-hope-mill.png",
    tag: "3D",
    discipline: "3D",
    year: "2021",
    videoId: "GGLPGDNgIKg",
  },
  {
    title: "Modern Bedroom: 3D & VR",
    subtitle: "Interior modelled for a VR walkthrough with coded lighting and real-time rendering.",
    image: "/images/other-modern-bedroom.png",
    tag: "3D · VR",
    discipline: "3D",
    year: "2022",
    videoId: "0jgMdtN8cKA",
  },
  {
    title: "CSI: Brand & Campaign Graphics",
    subtitle: "Campaign carousels, sub-brand identities, and programme graphics for the Centre for Sustainable Innovation.",
    image: "/images/csi-carousel.png",
    tag: "Brand",
    discipline: "Brand",
    year: "2023",
  },
];
