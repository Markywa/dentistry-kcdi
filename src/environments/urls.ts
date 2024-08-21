import { environment } from "./environments";

export const API_SPECIALISTS = `${environment.baseUrl}api/website/specialists/` as const;
export const API_CAROUSEL_SPECIALISTS = `${environment.baseUrl}api/website/carousel-specialists/` as const;
export const API_NOTIFICATION = `${environment.baseUrl}api/website/notification/` as const;
export const API_PRICES = `${environment.baseUrl}api/website/price/` as const;
export const API_CONTACTS = `${environment.baseUrl}api/website/contacts/` as const;
export const API_TAKE_SERVICE = (id: number) => `${environment.baseUrl}api/website/service/${id}/` as const;
export const API_SERVICES = `${environment.baseUrl}api/website/carousel-service/` as const;
export const API_DISCOUNT = `${environment.baseUrl}api/website/discount/` as const;