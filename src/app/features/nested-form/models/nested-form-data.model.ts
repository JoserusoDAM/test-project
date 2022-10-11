export interface NestedFormData {
  name: string;
  lastName: string;
  bankDetails: {
    bankName: string;
    iban: string;
  };
  address: AddressNestedFormData[];
}

export interface AddressNestedFormData {
  street: string;
  number: string;
  zip: string;
}
