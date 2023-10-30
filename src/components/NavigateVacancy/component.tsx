import { CustomNavigateButton } from '../ui';

interface NavigateVacancyProps {
  value: number;
  onChange: (_event: React.SyntheticEvent, newValue: number) => void;
  labels: string[];
}

export function NavigateVacancy(props: NavigateVacancyProps) {
  return (
    <CustomNavigateButton
      value={props.value}
      onChange={props.onChange}
      labels={props.labels}
    />
  );
}
