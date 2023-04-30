import {ApiConfig} from "./models/config.model";
import {InjectionToken} from "@angular/core";


  /**
   * This line of code defines an InjectionToken named API_CONFIG_TOKEN with a generic type of ApiConfig.
   * An InjectionToken is a token that can be used for dependency injection in Angular.
   * It is typically used to provide dependencies that are not classes, such as configuration values or constants.
   * In this case, API_CONFIG_TOKEN is used to provide an ApiConfig object to the PhoneFormatPipe and
   * PhoneFormatService classes via dependency injection.
   */
  export const API_CONFIG_TOKEN = new InjectionToken<ApiConfig>('API_CONFIG_TOKEN');
