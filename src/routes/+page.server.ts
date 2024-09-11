import {error, fail} from "@sveltejs/kit"
import Recipe from "$lib/recipe";


export async function load() {
    const recipeDb = new Recipe()
    
    try {
        const recipes = await recipeDb.getAll()
        console.log("recipes", recipes)
        return { recipes, 
            headers: {
                "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
                "Pragma": "no-cache",
                "Expires": "0",
                "Surrogate-Control": "no-store",
              },
        }; 
    } catch (error: any) {
        return fail(501, error.message)
    }    
}