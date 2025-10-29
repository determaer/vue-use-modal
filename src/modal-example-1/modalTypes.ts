export type Attrs = {
  info: number;
};

export type ModalAttrs = {
  modalInfo: string;
};

export type Return = {
  ID?: boolean;
  name?: boolean;
};

export function typeOfReturn(obj: unknown): obj is Return {
  return obj instanceof Object;
}
