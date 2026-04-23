import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getServiceBySlug, services } from "@/app/services/services-data";

type ServiceDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServiceDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found | StrongHold",
    };
  }

  return {
    title: `${service.title} | StrongHold`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({
  params,
}: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="w-full bg-white font-sans overflow-hidden">
      <section className="bg-[#EBF9FE] py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <span className="inline-block px-4 py-1 rounded-sm border border-gray-300 text-xs font-medium text-gray-600 bg-white mb-6">
            Service Details
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 max-w-4xl">
            {service.title}
          </h1>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 md:px-12 lg:px-24 py-16 md:py-20">
        <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-slate-100 mb-10">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="max-w-3xl">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#002B5B] mb-4">
            {service.id}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            {service.title}
          </h2>
          <p className="text-base md:text-lg leading-8 text-slate-600">
            {service.description}
          </p>
        </div>

        <div className="mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            <ArrowLeft size={18} />
            Back to Services
          </Link>
        </div>
      </section>
    </main>
  );
}
