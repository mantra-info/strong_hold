export type Service = {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
};

export const services: Service[] = [
  {
    id: "01.",
    slug: "architectural-planning-engineering-support",
    title: "Architectural Planning & Engineering Support",
    description:
      "We enhance every project from the outset with thoughtful architectural planning with the help of strong engineering insight. Our team ensures that design concepts are practical, efficient, and aligned with on-site realities, enabling smoother execution and better coordination. By integrating advanced solutions such as post-tensioning where required, we optimize structural performance, flexibility, and long-term durability.",
    image: "/services1.png",
  },
  {
    id: "02.",
    slug: "structural-designing-boq",
    title: "Structural Designing & Bill of Quantity (BOQ)",
    description:
      "We provide accurate structural designs along with a detailed Bill of Quantity (BOQ) to ensure complete clarity from planning to execution by incorporating advanced techniques such as post-tensioning where required. Our approach focuses on safety, efficiency, and cost optimization, to the unique needs of each project. Through precise material estimation and budgeting, we help reduce wastage and keep projects on track.",
    image: "/services2.png",
  },
  {
    id: "03.",
    slug: "post-tensioning-prefabricated-steel-design",
    title: "Post-Tensioning & Prefabricated Steel Design",
    description:
      "We provide specialized design and engineering support for post-tensioned concrete systems and prefabricated steel structures, to project-specific load and span requirements. Our team develops detailed tendon layouts, stressing sequences, and coordination drawings to ensure accurate on-site execution and structural efficiency. For prefabricated steel, we deliver precise design, detailing, and connection planning to enable faster fabrication and erection with minimal errors.",
    image: "/services3.png",
  },
  {
    id: "04.",
    slug: "civil-construction-post-tensioning",
    title: "Civil Construction & Post - Tensioning (PT)",
    description:
      "We deliver civil construction services integrated with specialized post-tensioning (PT) solutions for enhanced structural performance. Our team manages everything from groundwork to final execution, ensuring quality, safety, and adherence to project timelines. With expertise in PT systems, we enable longer spans, reduced material usage, and improved load efficiency. By combining conventional construction practices with advanced post-tensioning techniques, we ensure durable, cost-effective, and high-performance structures.",
    image: "/services4.jpg",
  },
  {
    id: "05.",
    slug: "prefabricated-steel-buildings",
    title: "Prefabricated Steel Buildings (Prefab)",
    description:
      "We support prefab steel building projects with precise design coordination, detailing, and engineering input to ensure smooth fabrication and installation. By aligning structural design with manufacturing requirements, we help minimize errors, reduce lead time, and improve overall project efficiency. Our involvement ensures that connections, load considerations, and erection sequences are clearly defined, leading to faster execution and reliable structural performance.",
    image: "/services5.png",
  },
  {
    id: "06.",
    slug: "structural-strengthening-retrofitting",
    title: "Structural Strengthening & Retrofitting",
    description:
      "We provide solutions for structural strengthening and rehabilitation, extending the service life and performance of existing buildings. Our team assesses structural conditions and develops retrofit strategies that address deficiencies, increased load demands, or design changes. By incorporating post-tensioning methods, we enhance load capacity, stability, and overall durability. Our approach ensures minimal disruption while delivering safe, efficient, and long-lasting structural improvements.",
    image: "/services6.png",
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
