export interface InputData {
  tipo_tag?: 'GAU' | 'GA4';
  dispositivo?: 'mobile' | 'bankline';
  agencia?: string,
  conta?: string | number,
  dac?: string | number,
  segmento?: string,
  fluxo?: string,
  mfe_jornada?: string,
  mfe_fluxo?: string,
  negocio?: string,
  plataforma?: string,
  aplicacao?: string,
  ambiente?: string,
  squad?: string,
}
