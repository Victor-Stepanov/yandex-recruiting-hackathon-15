import { CustomNavigateButton } from '../ui';

interface NavigateVacancyProps {
  labels: string[];
}

export function NavigateVacancy({ labels }: NavigateVacancyProps) {
  return <CustomNavigateButton labels={labels} />;
}
