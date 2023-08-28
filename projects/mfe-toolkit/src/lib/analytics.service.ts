import { Injectable } from '@angular/core';
import { InputData } from "./models/input-data.model";
import { TagGAUMobileUseCase } from "./usecase/tag-gau-mobile.use-case";
import { TagGAUBanklineUseCase } from "./usecase/tag-gau-bankline.use-case";
import { validateInputData } from "./core/validators/input-validator";


@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {
  constructor(
    private tagGAUMobileUseCase: TagGAUMobileUseCase,
    private tagGAUBanklineUseCase: TagGAUBanklineUseCase,
    // private tagGA4MobileUseCase: TagGA4MobileUseCase,
    // private tagGA4BanklineUseCase: TagGA4BanklineUseCase
  ) {}

  data: InputData = {
    tipo_tag: 'GA4',
    dispositivo: 'bankline',
    agencia: '0000',
    conta: '0000',
    dac: '0',
    segmento: 'varejo',
    fluxo: 'seguros',
    mfe_jornada: '',
    mfe_fluxo: '',
    negocio: '',
    plataforma: '',
    aplicacao: 'string',
    ambiente: 'string',
    squad: ''
  }

  setData(input: InputData): void {
    const requiredFields = ['page_name', 'tipo_tag', 'dispositivo'];
    const validationError = validateInputData(input, requiredFields);

    if (validationError) {
      console.error('Error')
      return;
    }
    this.data = input;
  }

  trackLoadPage(page_name: string, tag_type?: string) {
    let processingResult: any = ''
    if (this.data.tipo_tag === 'GAU' && this.data.dispositivo === 'mobile') {
      processingResult = this.tagGAUMobileUseCase.execute(this.data);
      console.log('[GAU MBL Load]', processingResult)
    } else if (this.data.tipo_tag  === 'GAU' && this.data.dispositivo === 'bankline') {
      processingResult = this.tagGAUBanklineUseCase.execute(this.data);
      console.log('[GAU BKL Load]', processingResult)
    } else if (this.data.tipo_tag  === 'GA4' && this.data.dispositivo === 'mobile') {
      // processingResult = this.tagGA4MobileUseCase.execute(this.data);
      console.log('[GA4 MBL Load]', processingResult)
    } else if (this.data.tipo_tag  === 'GA4' && this.data.dispositivo === 'bankline') {
      // processingResult = this.tagGA4BanklineUseCase.execute(this.data);
      console.log('[GA4 BKL Load]', processingResult)
    } else {
      processingResult = 'Combinação de tag e dispositivo não suportada.';
    }
  }
}


