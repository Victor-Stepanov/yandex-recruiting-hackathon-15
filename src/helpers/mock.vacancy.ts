import img from './cdek.jpeg';

import { VacancyProps } from '../interfaces/vacancy.interface';
export const vacancyMock: VacancyProps = {
  id: 0,
  location: [
    {
      city: 'Москва',
      country: 'Россия',
    },
  ],
  grade: [
    {
      level: 'Стажер',
    },
  ],
  work_schedule: [
    {
      name: 'Полный рабочий день',
    },
  ],
  work_format: [
    {
      name: 'Удаленная работа',
    },
  ],
  course_list: [
    {
      name: 'Курс 1',
    },
    {
      name: 'Курс 2',
    },
  ],
  hard_skill: [
    {
      name: 'JavaScript',
    },
    {
      name: 'React',
    },
  ],
  work_experience: '1 год',
  education: 'Высшее',
  office_format: 'Офис в офисном здании',
  specialty: 'Frontend-разработчик',
  image: img,
  title: 'Frontend-разработчик',
  description:
    'Компания СДЭК работает на рынке логистики с 2000 года и на данный момент является одним из крупнейших логистических операторов в РФ.СДЭК предоставляет целый спектр услуг логистики и курьерской доставки.',
  salary_from: 50000,
  salary_to: 80000,
  company: 'CDEK',
  is_active: true,
  is_published: true,
  created_at: '2019-08-24T14:15:22Z',
  updated_at: '2019-08-24T14:15:22Z',
  author: 1,
};
