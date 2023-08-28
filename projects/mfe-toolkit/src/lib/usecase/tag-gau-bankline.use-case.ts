import { Injectable } from '@angular/core';
import { InputData } from '../models/input-data.model';
import { TagGAUBankline } from "../models/tag-gau-bankline.model";

@Injectable()
export class TagGAUBanklineUseCase {
  execute(input: InputData): TagGAUBankline  {
    const tagGAUBanklineOutput: TagGAUBankline = {
      site: {
        nome: 'your_site_name',
        ambiente: 'your_environment',
        negocio: 'your_business',
        tipoDeCanal: 'WEB'
      },
      page: {
        nome: 'your_page_name',
        secao: 'your_section',
        url: 'your_url',
        ambiente: 'your_environment'
      },
      visitor: {
        custurmerid: 'your_customer_id',
        custumersegment: 'your_customer_segment'
      },
      custom: {
        squadresponsaveltag: 'your_squad_responsible_tag'
      },
      rule: 'pageLoad'
    };

    return tagGAUBanklineOutput;
  }
}
