<script lang="ts">
	import type { Recipe } from '../../types';
    export let data: {recipe: Recipe};
   
  </script>

{#if data.recipe}
    <div class="recipe-details container mx-auto px-6 py-12">
        <div class="relative flex justify-center mx-auto overflow-hidden rounded-3xl shadow-xl">
            <img src={data.recipe.imageUrl} alt={data.recipe.title} class="w-full h-[50vh] object-cover brightness-75" />
            <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40"></div>
            <div class="absolute inset-0 flex items-center justify-center text-center">
                <h1 class="text-6xl font-extrabold text-white tracking-wide">
                    {data.recipe.title}
                </h1>
            </div>
        </div>

        <div class=" py-12">
            <div class="bg-white shadow-lg rounded-2xl p-8 mb-12 border-t-8 border-gradient">
                <p class="text-lg text-gray-800 leading-relaxed mb-6">{data.recipe.description}</p>

                <div class="border-t border-gray-300 mt-8 pt-6">
                    <h2 class="text-4xl font-semibold text-gray-900 mb-4">Ingredients</h2>
                    <ul class="space-y-2">
                        {#each data.recipe.ingredients as ingredientData}
                          <li class="flex items-center text-gray-800 leading-relaxed">
                            <svg
                              class="w-5 h-5 mr-3 text-blue-500 flex-shrink-0"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              viewBox="0 0 24 24"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M5 13l4 4L19 7"
                              ></path>
                            </svg>
                            <span class="text-base">{ingredientData.ingredient}</span>
                          </li>
                        {/each}
                      </ul>
                      
                </div>

                <div class="border-t border-gray-300 mt-8 pt-6">
                    <h2 class="text-4xl font-semibold text-gray-900 mb-4">Instructions</h2>
                    <ul>
                        {#each data.recipe.instructions as instructionData}
                        <li class="flex items-center text-gray-700 leading-relaxed">
                            <svg
                              class="w-5 h-5 mr-2 text-blue-500"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              viewBox="0 0 24 24"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M5 13l4 4L19 7"
                              ></path>
                            </svg>
                            <span>{instructionData.instruction}</span>
                          </li>
                        {/each}
                    </ul> 
                </div>
            </div>
        </div>
    </div>
{/if}

<style>
    .border-gradient {
        border-image: linear-gradient(45deg, #f3a683, #f7d794) 1;
    }
</style>
  