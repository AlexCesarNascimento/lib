import { Injectable } from '@angular/core';
import { InputData } from '../models/input-data.model';
import { TagGAUMobile } from "../models/tag-gau-mobile.model";

@Injectable()
export class TagGAUMobileUseCase {

  execute(input: InputData): TagGAUMobile  {
    const tagGAUMobileOutput: TagGAUMobile = {
      analyticswebview: {
        event: 'your_event_name',
        event_name: 'Your Event Name',
        parameters: {
          business_channel: 'your_business_channel',
          business: 'your_business',
          enviroment: 'your_environment',
          custum_path: 'your_custom_path',
          impletentation_team: 'your_implementation_team'
        }
      }
    };
    return tagGAUMobileOutput;
  }
}
