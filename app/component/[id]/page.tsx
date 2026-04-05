import { ComponentDetail } from "@/components/component-detail";
import { componentsData } from "@/lib/data/componentsData";

// Generate static params for build time dynamically from components
export function generateStaticParams() {
  return componentsData.map((component) => ({
    id: component.id,
  }));
}

export default function ComponentDetailPage() {
  return <ComponentDetail />;
}
