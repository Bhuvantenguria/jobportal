import { formatMoney } from "@/lib/utils";
import { job } from "@prisma/client";
import { Banknote, Briefcase, Globe2, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Markdown from "./Markdown";
import companyLogoPlaceholder from "@/assets/company-logo.jpg";

interface JobPageProps {
  job: job;
}

export default function JobPage({ job }: JobPageProps) {
  const {
    title,
    description,
    companyName,
    applicationUrl,
    type,
    locationType,
    location,
    salary,
    companyLogoUrl,
  } = job;

  return (
    <section className="w-full grow space-y-5">
      <div className="flex items-center gap-3">
        <Image
          src={companyLogoUrl || companyLogoPlaceholder}
          alt="Company logo"
          width={100}
          height={100}
          className="rounded-xl"
        />
        <div>
          <h1 className="text-xl font-bold">{title}</h1>
          <p className="font-semibold">
            {applicationUrl ? (
              <Link href={new URL(applicationUrl).origin} className="hover:underline">
                {companyName}
              </Link>
            ) : (
              <span>{companyName}</span>
            )}
          </p>
        </div>
      </div>
      <div className="text-muted-foreground">
        <p className="flex items-center gap-1.5">
          <Briefcase size={16} className="shrink-0" />
          {type}
        </p>
        <p className="flex items-center gap-1.5">
          <MapPin size={16} className="shrink-0" />
          {locationType}
        </p>
        <p className="flex items-center gap-1.5">
          <Globe2 size={16} className="shrink-0" />
          {location || "Worldwide"}
        </p>
        <p className="flex items-center gap-1.5">
          <Banknote size={16} className="shrink-0" />
          {formatMoney(salary)}
        </p>
      </div>
      <div>{description && <Markdown>{description}</Markdown>}</div>
    </section>
  );
}
