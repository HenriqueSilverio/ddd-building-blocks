import JSONBigIntLib from 'json-bigint'

const JSONBigInt = JSONBigIntLib({ useNativeBigInt: true })

export default class Serializer {
  public static stringify(input: unknown): string {
    return JSONBigInt.stringify(input)
  }
}
