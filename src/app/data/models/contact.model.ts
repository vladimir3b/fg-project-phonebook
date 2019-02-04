import { groupType, genderType } from './types';

export interface IContactMpdel {
  firstName: string;
  lastName: string;
  alias?: string;
  birthday?: string;
  gender: genderType;
  group: groupType;
  phones: Array<string>;
  emails?: Array<string>;
  addresses?: Array<string>;
  notes?: string;
};
