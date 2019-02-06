import { groupType, genderType } from './types';

export interface IContactModel {
  id?: string;
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
}
