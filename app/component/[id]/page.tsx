import { ComponentDetail } from "@/components/component-detail";
import { resources } from "@/lib/data/resources";

// Generate static params for build time dynamically from resources
export function generateStaticParams() {
  return resources.map((resource) => ({
    id: resource.id,
  }));
}

export default function ComponentDetailPage() {
  return <ComponentDetail />;
}
