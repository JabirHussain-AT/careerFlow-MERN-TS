export interface ICustomError extends Error {
    code: number;
    message :string
  }

// export interface IDependencies {
//   useCases : useCases
// }  