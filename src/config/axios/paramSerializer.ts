import qs from 'qs';

export type Params = {
  [key: string]:
    | string
    | number
    | boolean
    | string[]
    | number[]
    | boolean[]
    | Params;
};

export default function paramsSerializer<T extends Params>(params: T) {
  return qs.stringify(params, {
    arrayFormat: 'repeat',
    skipNulls: true,
    encode: true,
    format: 'RFC3986',
    allowDots: true
  });
}