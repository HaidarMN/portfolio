import type { RouteLocationRaw } from "#vue-router";

export type SkillType = {
  id: string;
  name: string;
  icon: string;
};

export type CertificateType = {
  id: string;
  name: string;
  issuing_organization: string;
  issue_date: string;
  credential_id: string;
  credential_url: string;
  image: string;
};

export type ExperienceType = {
  id: string;
  position: string;
  type: string;
  company_name: string;
  company_url: string;
  start_date: string;
  end_date: string | null;
  description: string | null;
  skills: string[];
};

export type ProjectType = {
  id: string;
  background: string;
  description: string;
  display: boolean;
  link: RouteLocationRaw | undefined;
  name: string;
  skills: string[];
  start_date: string;
};
