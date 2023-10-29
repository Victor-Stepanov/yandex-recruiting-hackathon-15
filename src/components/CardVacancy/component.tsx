import { CardMedia, Typography, IconButton } from '@mui/material';

import styles from './card.module.css';

import { CustomCard } from '../ui/components/CustomCard/component';
import { PanIcon } from '../ui/icons';

export function CardVacancy(): JSX.Element {
  return (
    <CustomCard>
      <div className={styles.Header}>
        <div className={styles.Company}>
          <CardMedia
            component='img'
            alt='Логотип'
            height='40'
            width='40'
            image='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/BMW_logo_%28gray%29.svg/2048px-BMW_logo_%28gray%29.svg.png'
            className={styles.img}
          />
          <div>
            <Typography variant='body2' className={styles.Name}>
              МТС
            </Typography>
            <Typography variant='body2' className={styles.Sill}>
              Middle
            </Typography>
          </div>
        </div>
        <IconButton color='primary' className={styles.IconButton}>
          <PanIcon />
        </IconButton>
      </div>

      <div className={styles.info}>
        <p className={styles.Post}>Frontend-разработчик</p>
        <p className={styles.PostDate}>Опубликована 15.09.2023</p>
      </div>

      <div className={styles.Tegs}>
        <div className={styles.Teg}>
          <Typography variant='body2' className={styles.TegText}>
            Офис
          </Typography>
        </div>
        <div className={styles.Teg}>
          <Typography variant='body2' className={styles.TegText}>
            Полный день
          </Typography>
        </div>
      </div>

      <div className={styles.Status}>
        <figure className={`${styles.Point} ${styles.Point_active}`} />
        <p className={styles.Text}>активная</p>
      </div>
    </CustomCard>
  );
}
