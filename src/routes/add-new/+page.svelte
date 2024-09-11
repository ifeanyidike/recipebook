<script lang='ts'>
	import { enhance } from '$app/forms';
	import ListInput from '../../components/ListInput.svelte';
    let title: string = '';
    let description: string = '';
    let ingredients: string[] = [];
    let instructions: string[] = [];
    let imageFile: File | null = null;
    let imagePreview = ''

    let uploadStatus: 'uploading' | 'completed' | 'none' = 'none';


    function updateIngredient(index: number, newIngredient: string){
        ingredients[index] = newIngredient;
    }

    function removeIngredient(index: number){
        ingredients = ingredients.filter((ingredient, idx) => idx !== index)
    }

    function updateInstruction(index: number, newInstruction: string){
        instructions[index] = newInstruction;
    }
   

    function addItem<T>(list: T[], e: KeyboardEvent & {currentTarget: EventTarget & HTMLInputElement}): T[]{
        if(e.key !== 'Enter') return list;
        e.preventDefault();
        const newList = [...list, e.currentTarget.value as T]
        e.currentTarget.value = '';
        return newList
    }
    
    function addIngredient(e: KeyboardEvent & {currentTarget: EventTarget & HTMLInputElement}) {
		ingredients = addItem(ingredients, e);
    }

    function removeInstruction(index: number){
        instructions = instructions.filter((instruction, idx) => idx !== index)
    }

    function addInstructions(e: KeyboardEvent & {currentTarget: EventTarget & HTMLInputElement}) {
		instructions = addItem(instructions, e);
    }


    function handleImageUpload(event: Event) {
        const input = event.target as HTMLInputElement;
        if (input.files && input.files[0]) {
            imageFile = input.files[0];
            const reader = new FileReader();
            reader.onload = () => {
                imagePreview = reader.result as string;
            };
            reader.readAsDataURL(imageFile);
        }
    }

    function handleDragOver(event: DragEvent) {
        event.preventDefault();
        event.stopPropagation();
    }

    function handleDrop(event: DragEvent) {
        event.preventDefault();
        event.stopPropagation();
        const dataTransfer = event.dataTransfer;
        if (dataTransfer && dataTransfer.files.length) {
            imageFile = dataTransfer.files[0];
            const reader = new FileReader();
            reader.onload = () => {
                imagePreview = reader.result as string;
            };
            reader.readAsDataURL(imageFile);
        }
    }
</script>

<form method="POST" enctype="multipart/form-data" action="?/create" class="upload-form max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg" use:enhance={() => {
    uploadStatus = 'uploading';

    return async ({ update }) => {
        await update();
        ingredients = []
        instructions = []
        imagePreview = ""
        uploadStatus = 'completed';
    };
}}>

    {#if uploadStatus === 'completed'}
        <p class="text-red-400 flex items-center justify-center">Successfully uploaded! Visit the homepage to view the recipe list</p>
    {/if}
    {#if uploadStatus === 'uploading'}
        <div class="flex items-center justify-center w-full h-full fixed top-0 left-0 z-[9999] bg-black/30">
            <div class="animate-rotate-loader-1 h-[50px] w-[50px] before:animate-loader-1-ball-1 after:animate-loader-1-ball-2 before:bg-[#cb2025] before:shadow-[30px_0_0_#f8b334] before:mb-2  before:h-[20px] before:w-[20px] before:rounded-full after:rounded-full before:block after:block after:w-[20px] after:h-[20px] after:bg-[#00a096] after:shadow-[30px_0_0_#97bf0d]"></div>
        </div>
    {/if}
    <h2 class="text-3xl font-bold mb-6">Add a New Recipe</h2>

    <label class="block text-lg font-semibold" for="title" >Recipe name</label>
    <input bind:value={title} name="title" placeholder="Recipe name" class="w-full p-4 mb-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none" required />

    <label class="block text-lg font-semibold" for="description" >Describe the recipe</label>
    <textarea bind:value={description} name="description" placeholder="Description" class="w-full p-4 mb-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>

    <ListInput
        label="Ingredients"
        placeholder="Enter an ingredient and hit enter"
        items={ingredients}
        addItem={addIngredient}
        updateItem={updateIngredient}
        removeItem={removeIngredient}
    />
    

    <ListInput
      label="Instructions"
      placeholder="Enter an instruction and hit enter"
      items={instructions}
      addItem={addInstructions}
      updateItem={updateInstruction}
      removeItem={removeInstruction}
    />

    <div class="mb-6">
        <label class="block text-lg font-semibold mb-2" for="file">Image Upload</label>
        <div role="region" 
            aria-label="Drag and drop area for image upload" 
            class="relative w-full h-64 border border-dashed border-gray-300 rounded-lg bg-gray-50 flex items-center justify-center overflow-hidden" on:dragover|preventDefault={handleDragOver} on:drop={handleDrop}>
            {#if imagePreview}
                <img src={imagePreview} alt="Preview" class="absolute inset-0 w-full h-full object-cover" />
            {/if}
            <input type="file" id="file" name="file" accept="image/*" on:change={handleImageUpload} class="absolute inset-0 opacity-0 cursor-pointer" />
            <div class="text-gray-500">Drag & drop an image here or click to upload</div>
        </div>
    </div>

    <button type="submit" class="w-full bg-blue-500 text-white p-4 rounded-lg shadow-lg hover:bg-blue-600 transition-colors">
        Upload Recipe
    </button>
</form>

<style>
    .upload-form {
      margin: 2rem auto;
      padding: 2rem;
      background: #fff;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  
    .upload-form h1 {
      text-align: center;
      margin-bottom: 1rem;
      font-size: 1.5rem;
      color: #333;
    }
  
    .upload-form input[type='text'],
    .upload-form textarea,
    .upload-form input[type='file'] {
      width: 100%;
      padding: 0.75rem;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-size: 1rem;
    }
  
    .upload-form button {
      padding: 0.75rem;
      color: #fff;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    .upload-form textarea {
        box-sizing: border-box;
        display: flex;
        resize: none;
        height: 120px;
    }
  
  </style>
  