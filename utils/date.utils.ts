import { format, parseISO } from 'date-fns';
import { DATE_FORMAT } from '../constants';

export const formatDate = (date: string) => {
  return format(parseISO(date), DATE_FORMAT);
};
