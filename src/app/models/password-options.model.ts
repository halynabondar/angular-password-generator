export interface PasswordOptionsModel {
  length: number;
  includeNumbers: boolean;
  includeUppercase: boolean;
  includeSymbols: boolean;
  excludeAmbiguous: boolean;
}
