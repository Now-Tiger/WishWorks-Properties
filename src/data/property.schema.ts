export interface Property {
  propertyName: string;
  ownerName: string;
  localityId: number;
  locality: string;
  city?: string;
  postalCode?: number;
  published?: boolean;
}
