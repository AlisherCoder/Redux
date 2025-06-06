export interface IBook {
   author: string;
   title: string;
   id: number | null;
}

export interface IRecipe {
   id: number;
   name: string;
   image: string;
   cuisine: string;
}

export interface IPayload {
   limit: number;
   recipes: IRecipe[];
   total: number;
   skip: number;
}

export interface IElectronic {
   name: string;
   price: number;
   count: number;
   id?: number;
   image?: string;
}

export interface IUser {
   id: number;
   fname: string;
   lname: string;
   age: number;
   image: string;
   city: string;
}
