import userSrc from './user-photo.png';

import { CandidateProps } from '../interfaces/vacancy.interface';

export const candidatesMock: CandidateProps[] = [
  {
    id: '1',
    imageSrc: userSrc,
    name: 'John',
    surname: 'Doe',
    kanban_position: '0',
    grade: 'junior',
    updated_at: new Date(),
  },
  {
    id: '2',
    imageSrc: userSrc,
    name: 'Jane',
    surname: 'Smith',
    grade: 'middle',
    kanban_position: '0',
    updated_at: new Date(),
  },
  {
    id: '3',
    imageSrc: userSrc,
    name: 'Alex',
    surname: 'Johnson',
    grade: 'senior',
    kanban_position: '0',
    updated_at: new Date(),
  },
  {
    id: '4',
    imageSrc: userSrc,
    name: 'Emily',
    surname: 'Davis',
    grade: 'junior',
    kanban_position: '0',
    updated_at: new Date(),
  },
  {
    id: '5',
    imageSrc: userSrc,
    name: 'Michael',
    surname: 'Wilson',
    grade: 'middle',
    kanban_position: '0',
    updated_at: new Date(),
  },
  {
    id: '6',
    imageSrc: userSrc,
    name: 'Sophia',
    surname: 'Moore',
    grade: 'junior',
    kanban_position: '0',
    updated_at: new Date(),
  },
];
