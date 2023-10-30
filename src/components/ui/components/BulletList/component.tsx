import { List, ListItem } from '@mui/material';

interface BulletListProps {
  items: string[];
  withLabel?: boolean;
}

export function BulletList({ items }: BulletListProps) {
  return (
    <List
      sx={{
        padding: '0px',
      }}
    >
      {items.map((item, index) => (
        <ListItem
          key={index}
          sx={{
            fontSize: '16px',
            fontStyle: 'normal',
            lineHeight: '20px',
            padding: '0px',
            '&:before': {
              content: "'\\2022'",
              marginRight: '0.5em',
            },
          }}
        >
          {item}
        </ListItem>
      ))}
    </List>
  );
}
