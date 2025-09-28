export interface HashService {
  hash(plainText: string): Promise<string>;
  compare(plainText: string, hashedValue: string): Promise<boolean>;
}
