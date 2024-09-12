import Utility from "./Utility";
import {type RecipeUpdateParams as RecipeType} from "../types";

export default class Recipe extends Utility {
    constructor(){
        super()
    }

    public async create(recipe: RecipeType){
        return this.process(async() => {
            return await this.db.recipe.create({
                data: {
                    ...recipe,
                    instructions: {
                        create: recipe.instructions.map((data: string) => ({
                            instruction: data
                        }))
                    },
                    ingredients: {
                        create: recipe.ingredients.map((data: string) => ({
                            ingredient: data
                        }))
                    }
                }
            })
        })
    }

    public async getAll(){
        return this.process(async() => {
            const data =  await this.db.recipe.findMany({
                orderBy: {
                    createdAt: "desc"
                }
            })
            return data
        })
    }

    public async getOne(id: number){
        return this.process(async() => {
            return await this.db.recipe.findFirst({
                where: { id },
                include: {
                    ingredients: true,
                    instructions: true
                }     
            })
        })
    }
}