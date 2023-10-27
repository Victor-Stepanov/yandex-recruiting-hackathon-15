import { CardContent } from '@mui/material';

import { CardContentWrapper, Text } from '../../../ui';
import { BulletList } from '../../../ui/components/BulletList/component';

const skills: string[] = [
  'Опыт работы в качестве веб-дизайнера - будет вашим преимуществом',
  'Глубокое понимание трендов веб-дизайна',
  'Опыт работы с инструментами дизайна, такими как: 3D max, Photoshop, Illustrator, Figma, Power Point',
  'Знание HTML и CSS - будет сильным преимуществом',
  'Креативность и способность генерировать новые идеи',
  'Внимание к деталям и желание улучшать свои навыки',
];

const workOptions: string[] = [
  'Официальное трудоустройство в аккредитованной IT компании',
  'Гибкий подход к началу рабочего дня с 8 до 10:00 по графику 5/2',
  'На выбор: полностью удаленная работа, гибрид или работа из офиса в Москве, Липецке, Воронеже или Ростове-на-Дону',
];

export function VacancyCardBody() {
  return (
    <CardContent
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '20px',
        padding: 0,
        transition: 'height 0.3s',
      }}
    >
      <CardContentWrapper title='Опыт работы'>
        <Text>1-3 года</Text>
      </CardContentWrapper>
      <CardContentWrapper title='Требования'>
        <BulletList items={skills} />
      </CardContentWrapper>
      <CardContentWrapper title='Условия'>
        <BulletList items={workOptions} />
      </CardContentWrapper>
      <CardContentWrapper title='О компании'>
        <Text>
          Компания СДЭК работает на рынке логистики с 2000 года и на данный
          момент является одним из крупнейших логистических операторов в РФ.СДЭК
          предоставляет целый спектр услуг логистики и курьерской доставки. Мы
          постоянно совершенствуемся и повышаем уровень СДЭК Тепло — это клуб
          неравнодушных сотрудников, где коллеги собираются и делом регулярно
          помогают приютам для животных, фондам, детским домам и домам
          пенсионеров. Разработка в CDEK построена на основе Спотифай модели.
          Это позволяет нам легко масштабироваться, развиваться в одном
          направлении, собирать команды под продукты и быстро запускать их.
        </Text>
      </CardContentWrapper>
      <CardContentWrapper title='Ключевые навыки'>
        <ul>
          <li>Проектирование пользовательских сценариев</li>
        </ul>
      </CardContentWrapper>
    </CardContent>
  );
}
