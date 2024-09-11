<!-- src/components/ListInput.svelte -->
<script>
    import { fly, slide } from 'svelte/transition';
    export let label;
    export let placeholder;
    export let items;
    export let addItem;
    export let updateItem;
    export let removeItem;
  </script>
  
  <div class="mb-6">
    <label class="block text-lg font-semibold mb-2">{label}</label>
    <input
      placeholder={placeholder}
      class="p-4 text-xl w-full border border-gray-300 rounded-lg shadow-sm focus:outline-none"
      on:keydown={addItem}
    />
    {#each items as item, index}
      <div class="flex items-center mt-2" in:fly={{ y: 20 }} out:slide>
        <input
          bind:value={item}
          name={`${label.toLowerCase()}-${index}`}
          on:input={() => updateItem(index, item)}
          on:keydown={(e) => {
            if (e.key === 'Enter') e.preventDefault();
          }}
          class="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder={label}
        />
        <button
          type="button"
          on:click={() => removeItem(index)}
          class="ml-2 p-3 rounded bg-red-500 hover:bg-red-700"
        >
          <svg
            class="w-3 h-3"
            fill="none"
            stroke="white"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="3"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>
    {/each}
  </div>
  