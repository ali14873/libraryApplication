export interface IApiCollectionResponse<ModelT extends any = any> {
  data: {
    [key: string]: Array<ModelT>;
  },
  meta: {
    [key: string]: Array<any>;
  }
}

export interface IApiModelResponse<ModelT extends any = any> {
  data: {
    [key: string]: ModelT;
  },
  meta: {
    [key: string]: Array<any>;
  }
}
