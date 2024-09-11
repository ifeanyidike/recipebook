<script lang='ts'>
	import type { Recipe } from '../types';
    export let data: { recipes: Recipe[] };

   
</script>

<div class="recipes-list container mx-auto py-12 px-4">
    <h1 class="text-5xl font-extrabold text-center text-gray-900 mb-12">All Recipes</h1>

    {#if data.recipes.length === 0}
        <p class="text-center text-gray-600 text-lg">No recipes found.</p>
    {/if}

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each data.recipes as recipe}
            <a class="recipe-card no-underline bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:scale-105 p-4 cursor-pointer" href="/{recipe.id}">
                <div class="relative overflow-hidden rounded-2xl">
                    <img src={recipe.imageUrl} alt={recipe.title} class="w-full h-56 object-cover" />
                    <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40"></div>
                </div>
                <div class="p-4">
                    <h2 class="text-2xl font-bold text-gray-900 mb-2">{recipe.title}</h2>
                    <p class="text-gray-700 mb-4">{recipe.description}</p>
                    <button class="text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors">View Recipe</button>
                </div>
            </a>
        {/each}
    </div>
</div>


<style>
    .recipes-list {
        max-width: 1200px;
    }
    a {
        text-decoration: none !important;
    }
</style>