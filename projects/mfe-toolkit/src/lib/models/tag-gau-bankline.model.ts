export interface TagGAUBankline {
  site: Site,
  page: Page,
  visitor: Visitor
  custom: Custom
  rule: 'pageLoad'
}

interface Site {
  nome: string,
  ambiente: string,
  negocio: string,
  tipoDeCanal: 'WEB'
}

interface Page {
  nome: string,
  secao: string,
  url: string,
  ambiente: string
}

interface Visitor {
  custurmerid: string,
  custumersegment: string
}

interface Custom {
  squadresponsaveltag: string
}
