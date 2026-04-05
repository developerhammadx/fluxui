import { notFound } from "next/navigation";
import { resources, getResourceBySlug } from "@/lib/data/resources";
import { ResourceDetail } from "@/components/resource-detail";

export function generateStaticParams() {
  return resources.map((resource) => ({
    slug: resource.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const resource = getResourceBySlug(slug);
  
  if (!resource) {
    return {
      title: "Resource Not Found - FluxUI",
    };
  }

  return {
    title: `${resource.title} - FluxUI Resources`,
    description: resource.description,
  };
}

export default async function ResourcePage({ params }: { params: Promise<{ slug: string }> | { slug: string } }) {
  // Handle both async and sync params for compatibility
  const resolvedParams = await Promise.resolve(params);
  const slug = resolvedParams.slug;
  
  const resource = getResourceBySlug(slug);

  if (!resource) {
    notFound();
  }

  return <ResourceDetail resource={resource} />;
}
