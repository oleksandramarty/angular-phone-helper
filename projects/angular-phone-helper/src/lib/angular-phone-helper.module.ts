import {ModuleWithProviders, NgModule} from '@angular/core';
import {PhoneFormatPipe} from "./pipes/phone-format.pipe";
import {CommonModule} from "@angular/common";
import {ApiConfig, defaultConfig} from "./models/config.model";
import {API_CONFIG_TOKEN} from "./di";
import {PhoneFormatService} from "./phone-format.service";

@NgModule({
  declarations: [
    PhoneFormatPipe,  // declare the PhoneFormatPipe in this module
  ],
  imports: [
    CommonModule,  // import the CommonModule so we can use its directives
  ],
  exports: [
    PhoneFormatPipe,  // export the PhoneFormatPipe so other modules can use it
  ]
})
export class AngularPhoneHelperModule {

  // Define a static method forRoot that returns a module with providers
  static forRoot(config?: ApiConfig | null): ModuleWithProviders<AngularPhoneHelperModule> {
    return {
      ngModule: AngularPhoneHelperModule,  // the module to which the providers apply
      providers: [
        { provide: API_CONFIG_TOKEN, useValue: config ?? defaultConfig },  // provide the API_CONFIG_TOKEN with a value
        PhoneFormatPipe,  // provide the PhoneFormatPipe as a service
        PhoneFormatService,  // provide the PhoneFormatService as a service
      ],
    }
  }
}
