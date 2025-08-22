

import { error } from "@sveltejs/kit";
import type { PageLoad } from './$types';

export const load : PageLoad =({params})=>{
  const {systemName} = params;
  if (systemName){
    return {
      systemName,
    }

  }else{
    error(401,"not found")
  }
}


