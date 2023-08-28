export interface TagGAUMobile {
  analyticswebview: Analyticswebview
}

interface Analyticswebview {
  event: string,
  event_name: string,
  parameters: Parameters
}

interface Parameters {
  business_channel: string,
  business: string,
  enviroment: string,
  custum_path: string,
  impletentation_team: string
}
