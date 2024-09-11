import {error} from "@sveltejs/kit"
import Recipe from "$lib/recipe";


export async function load({ params }: any) {
    const recipeDb = new Recipe()
    const recipe = await recipeDb.getOne(parseInt(params.id))
   console.log("recipe", recipe)
    if (!recipe) {
        return error(404);
    }

    return { recipe, 
        headers: {
            "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
            "Pragma": "no-cache",
            "Expires": "0",
            "Surrogate-Control": "no-store",
          },
     }; 
}