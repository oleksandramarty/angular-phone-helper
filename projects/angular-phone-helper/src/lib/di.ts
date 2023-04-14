import {ApiConfig} from "./models/config.model";
import {InjectionToken} from "@angular/core";

export const API_CONFIG_TOKEN = new InjectionToken<ApiConfig>('API_CONFIG_TOKEN');
