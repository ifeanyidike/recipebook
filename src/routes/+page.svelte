<script>
	
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Recipe Book" />
</svelte:head>

<div class="recipe-container">
	<div class="recipe-info">
		<div class="recipe-image">
			<img src="https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Recipe" />
		</div>
	</div>

	<!-- Right Section: Recipe Details -->
	<div class="recipe-details">
		<div class="recipe-header">
			<h2>Twisted Fruit Russian Salad</h2>
			<button class="serving-button">Serving for 2</button>
			<div class="ratings">
				<span>⭐️⭐️⭐️⭐️⭐️</span>
				<p>2,948 Ratings | 2,042 Reviews | 127 Photos</p>
			</div>
		</div>
		<div class="ingredient-list">
			<h3>Select Ingredients</h3>
			<p>Total 8 Items</p>
			<ul>
				<li>
					<input type="checkbox" id="lemon">
					<label for="lemon">
						<span>Fresh Lemon (3-4 slices) with 2 tablespoons sesame seeds</span>
					</label>
				</li>
				<li>
					<input type="checkbox" id="strawberries">
					<label for="strawberries">
						<span>Strawberries (2-5 pieces) with 1 tablespoon poppy seeds</span>
					</label>
				</li>
				<li>
					<input type="checkbox" id="blueberries">
					<label for="blueberries">
						<span>Blueberries (1 bowl) with ¼ teaspoon Worcestershire sauce</span>
					</label>
				</li>
			</ul>
		</div>
		<button class="add-button">Add Selected to List</button>
	</div>
</div>

<style>
	body {
	    margin: 0;
    	font-family: 'Arial', sans-serif;
	    background-color: #f5f2ec;
	}

	.recipe-container {
    	display: flex;
	    max-width: 1200px;
    	margin: 20px auto;
	    background-color: #fff;
    	border-radius: 20px;
	    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    	overflow: hidden;
	}

	.recipe-info {
    	width: 50%;
	    background-color: #f7f4f0;
    	padding: 30px;
	    display: flex;
    	flex-direction: column;
	    align-items: center;
    	justify-content: center;
    	text-align: center;
	}

	.recipe-image img {
    	width: 100%;
	    border-radius: 20px;
	}

	.recipe-description h1 {
    	font-size: 24px;
    	margin: 15px 0;
	}

	.recipe-description p {
    	color: #7a7a7a;
    	font-size: 16px;	
	}

	.recipe-details {
    	width: 50%;
	    padding: 30px;
    	background-color: #fefefe;
	    display: flex;
    	flex-direction: column;
	}

	.recipe-header {
    	display: flex;
	    flex-direction: column;
    	align-items: flex-start;
	}

	.recipe-header h2 {
    	font-size: 26px;
	    color: #2f3c36;
    	margin: 0;
	}

	.serving-button {
    	background-color: #9e8753;
	    color: #fff;
    	padding: 8px 16px;
    	border: none;
	    border-radius: 20px;
    	cursor: pointer;
	    margin: 10px 0;
	}

	.ratings {
    	display: flex;
	    flex-direction: column;
    	margin: 10px 0;
    	color: #7a7a7a;
	}

	.ingredient-list {
    	margin-top: 20px;
	}

	.ingredient-list h3 {
    	font-size: 20px;
    	color: #2f3c36;
	}

	.ingredient-list ul {
    	list-style: none;
    	padding: 0;
	}

	.ingredient-list li {
    	margin: 10px 0;
	    display: flex;
    	align-items: center;
	}

	.ingredient-list input[type="checkbox"] {
    	margin-right: 10px;
	    width: 18px;
    	height: 18px;
	}

	.add-button {
    	background-color: #005f73;
	    color: #fff;
    	padding: 12px 24px;
	    border: none;
    	border-radius: 10px;
	    cursor: pointer;
    	align-self: flex-start;
    	margin-top: 20px;
	}

</style>
