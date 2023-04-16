import {ModuleWithProviders, NgModule} from '@angular/core';
import {PhoneFormatPipe} from "./pipes/phone-format.pipe";
import {CommonModule} from "@angular/common";
import {ApiConfig, defaultConfig} from "./models/config.model";
import {API_CONFIG_TOKEN} from "./di";
import {PhoneFormatService} from "./phone-format.service";

@NgModule({
  declarations: [
    PhoneFormatPipe,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    PhoneFormatPipe,
  ]
})

export class AngularPhoneHelperModule {
  static forRoot(config?: ApiConfig | null): ModuleWithProviders<AngularPhoneHelperModule> {
    return {
      ngModule: AngularPhoneHelperModule,
      providers: [
        { provide: API_CONFIG_TOKEN, useValue: config ?? defaultConfig },
        PhoneFormatPipe,
        PhoneFormatService,
      ],
    }
  }
}
