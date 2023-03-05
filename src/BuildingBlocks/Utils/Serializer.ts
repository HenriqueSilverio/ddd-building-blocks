import JSONBigIntLib from 'json-bigint'

const JSONBitInt = JSONBigIntLib({ useNativeBigInt: true })

export default class Serializer {
  public static stringify(input: unknown): string {
    return JSONBitInt.stringify(input)
  }
}
