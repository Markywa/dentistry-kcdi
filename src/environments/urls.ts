import { environment } from "./environments";

export const API_SPECIALISTS = `${environment.baseUrl}api/website/specialists/` as const;
export const API_CAROUSEL_SPECIALISTS = `${environment.baseUrl}api/website/carousel-specialists/` as const;
export const API_NOTIFICATION = `${environment.baseUrl}api/website/notification/` as const;
export const API_PRICES = `${environment.baseUrl}api/website/price/` as const;