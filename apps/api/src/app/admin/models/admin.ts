import { IAdmin, CitiesEnum, SocialsEnum } from '@paper/api-interfaces';

export class Admin implements IAdmin {
  constructor(
    public name: string,
    public surname: string,
    public email: string,
    public city: CitiesEnum = CitiesEnum.CA,
    public socials: SocialsEnum[] = [SocialsEnum.FB, SocialsEnum.IG]
  ) {}
}
