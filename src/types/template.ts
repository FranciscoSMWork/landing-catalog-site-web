export type TemplateCategory = "profissionais" | "empresas" | "campanhas";

export interface Template {
  id: string;
  slug: string;
  name: string;
  description: string;
  category: TemplateCategory;
  image: string;
  demoUrl: string;
  features: string[];
}
