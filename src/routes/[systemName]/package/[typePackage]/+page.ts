import type { PageLoad } from "./$types";



export const load :PageLoad =  ({params}) =>{ 

  const {typePackage } = params ;

  if (typePackage) {
    return {
      typePackage,
    }
  }


}
