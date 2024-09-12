import {fail} from '@sveltejs/kit'
import {Util} from '$lib/util'
import Recipe from '$lib/recipe';

export const actions = {
    create: async({cookies, request}: any) => {
        const data = await request.formData();
        let title = data.get('title')
        const description = data.get('description')
        const ingredients = []
        const instructions =[]
        const image = data.get('file')
        
        
        for(const [key, value] of data.entries()){
            if(key.includes('instruction')) instructions.push(value)
        }

        for(const [key, value] of data.entries()){
            if(key.includes('ingredient')) ingredients.push(value)
        }

        const util = new Util()
        console.log("instructions", instructions)
        console.log("ingredients", ingredients)
        try {
            const uploadedImage = await util.uploadOrUpdate(image, 'recipes', null )
            const recipeDb = new Recipe()
            await recipeDb.create({
                title,
                description,
                imageUrl: uploadedImage.url,
                imageId: uploadedImage.uploadId,
                ingredients,
                instructions
            })
            const recipes = await recipeDb.getAll();
            console.log("recipes", recipes)
            return {recipes}

        } catch (error: any) {
            console.log("error", error)
            fail(501, error.message)
        }
    }
}