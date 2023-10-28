export interface VacancyProps {
  id: number;
  location: Array<Record<string, string>>;
  grade: Array<Record<string, string>>;
  work_schedule: Array<Record<string, string>>;
  work_format: Array<Record<string, string>>;
  course_list: Array<Record<string, string>>;
  hard_skill: Array<Record<string, string>>;
  work_experience: string;
  education: string;
  office_format: string;
  specialty: string;
  image: string;
  title: string;
  description: string;
  salary_from: number;
  salary_to: number;
  company: string;
  is_active: boolean;
  is_published: boolean;
  created_at: string;
  updated_at: string;
  author: number;
}

export interface CandidateProps {
  id: string;
  imageSrc: string;
  name: string;
  surname: string;
  grade: string;
  kanban_position: string;
  updated_at: Date;
}
