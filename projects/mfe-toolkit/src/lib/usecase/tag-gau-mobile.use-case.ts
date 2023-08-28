import { Injectable } from '@angular/core';
import { InputData } from '../models/input-data.model';


@Injectable()
export class TagGAUMobileUseCase {
  execute(input: InputData): any {
    if (!input.pageName || !input.tipo_tag || !input.dispositivo) {
      return 'Por favor, preencha todos os campos obrigatórios.';
    }

    const pageName = normalizePageName(input.pageName);
    const tag = normalizeTag(input.tipo_tag, 'pascal');
    const device = normalizeTag(input.dispositivo, 'kebab');

    const tagGAUMobileOutput: TagGAUMobile = {
      // Construa a saída conforme necessário usando as variáveis acima
    };

    return tagGAUMobileOutput;
  }
}
