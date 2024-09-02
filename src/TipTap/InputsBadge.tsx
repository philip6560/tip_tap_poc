import {
  Badge,
  BadgeProps,
  PolymorphicComponentProps,
  Text,
} from '@mantine/core';
import React from 'react';

export const InputsBadge = (
  props: PolymorphicComponentProps<'div', BadgeProps>,
) => {
  return (
    <>
      <Badge
        component={'span'}
        {...props}
        style={{
          ...{
            maxWidth: '80%',
            minWidth: 'fit-content',
            height: '80%',
            background: '#CDD8F3',
            color: '#0000',
            fontSize: 14,
            fontWeight: 600,
            cursor: 'pointer',
            marginBottom: 6,
            border: `1px solid #CDD8F3`,
            marginRight: 10,
            textTransform: 'none',
            '.mantine-Badge-inner:first-letter': {
              textTransform: 'capitalize',
            },
          },
          ...props.style,
        }}>
        <Text
          style={{
            wordWrap: 'break-word',
            textWrap: 'wrap',
          }}>
          {props.children}
        </Text>
      </Badge>
    </>
  );
};
