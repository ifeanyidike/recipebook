export type RecipeUpdateParams = {
    id?: number;
    title: string;
    description: string;
    imageId?: string;
    imageUrl?: string;
    ingredients: string[];
    instructions: string[];
}

export type Recipe = {
    id?: number;
    title: string;
    description: string;
    imageId?: string;
    imageUrl?: string;
    ingredients: {id: number; ingredient: string}[];
    instructions:{id: number; instruction: string}[];
}