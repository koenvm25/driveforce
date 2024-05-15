import {DateTime} from 'luxon';

export interface Driver {
  id: string;
  permanentNumber: string;
  code: string;
  url: string;
  givenName: string;
  familyName: string;
  dateOfBirth: DateTime;
  nationality: string;
}
