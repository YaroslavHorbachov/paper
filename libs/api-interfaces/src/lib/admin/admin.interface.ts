import { CitiesEnum } from './cities.enum';
import { SocialsEnum } from './socials.enum';

export interface IAdmin {
  name: string;
  surname: string;
  email: string;
  city: CitiesEnum;
  socials: SocialsEnum[];
}
