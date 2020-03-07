import { CitiesEnum } from './cities.enum';

export interface IAdmin {
  name: string;
  surname: string;
  email: string;
  city: CitiesEnum;
}
