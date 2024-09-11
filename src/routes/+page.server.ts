import {error, fail} from "@sveltejs/kit"
import Recipe from "$lib/recipe";


export async function load() {
    const recipeDb = new Recipe()
    try {
        const recipes = await recipeDb.getAll()
        return { recipes }; 
    } catch (error: any) {
        return fail(501, error.message)
    }    
}