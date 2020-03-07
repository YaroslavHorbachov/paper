import { IAdmin, CitiesEnum } from '@paper/api-interfaces';

export class Admin implements IAdmin {
  constructor(
    public name: string,
    public surname: string,
    public email: string,
    public city: CitiesEnum = CitiesEnum.CA
  ) {}
}
