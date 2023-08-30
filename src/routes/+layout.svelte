
<!--<script>
	import Header from './Header.svelte';
	import './styles.css';
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer>
		<div class="categories">
			<div class="category">
				<h3>Tareas Diarias</h3>
				<p>Mantén un registro de tus tareas cotidianas.</p>
			</div>
			<div class="category">
				<h3>Notas Rápidas</h3>
				<p>Guarda notas rápidas y recordatorios.</p>
			</div>
			<div class="category">
				<h3>Recordatorios</h3>
				<p>Programa recordatorios para no olvidar tus actividades.</p>
			</div>
			<div class="category">
				<h3>Metas</h3>
				<p>Establece y sigue tus metas personales y profesionales.</p>
			</div>
			<div class="category">
				<h3>Objetivos</h3>
				<p>Define objetivos específicos y trabaja para alcanzarlos.</p>
			</div>
		
		</div>
	</footer>
</div>

<style>
	/* Estilos previos */

.app {
	display: flex;
	flex-direction: column;
	min-height: 100vh;
}

main {
	flex: 1;
	display: flex;
	flex-direction: column;
	padding: 1rem;
	width: 100%;
	max-width: 64rem;
	margin: 0 auto;
	box-sizing: border-box;
}

.categories {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	grid-gap: 20px;
	justify-items: center;
	margin-top: 40px;
}

.category {
	background-color: #fff;
	padding: 20px;
	border-radius: 10px;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
	text-align: center;
	transition: transform 0.3s ease, background-color 0.3s ease;
	cursor: pointer;
}

.category:hover {
	transform: translateY(-5px);
	background-color: #f4f4f4;
}

.category h3 {
	margin: 0 0 10px;
	font-size: 20px;
	color: var(--color-theme-1);
}

.category p {
	margin: 0;
	color: #555;
}

@media (max-width: 768px) {
	.categories {
		grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
	}
}



</style>-->

<script>
	import Header from './Header.svelte';
	import './styles.css';
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer>
		<div class="categories">
			<div class="category">
				<div class="category-header">
					<span class="category-icon">📝</span>
					<h3>Tareas Diarias</h3>
				</div>
				<p>Mantén un registro de tus tareas cotidianas.</p>
			</div>
			<div class="category">
				<div class="category-header">
					<span class="category-icon">📌</span>
					<h3>Notas Rápidas</h3>
				</div>
				<p>Guarda notas rápidas y recordatorios.</p>
			</div>
			<div class="category">
				<div class="category-header">
					<span class="category-icon">⏰</span>
					<h3>Recordatorios</h3>
				</div>
				<p>Programa recordatorios para no olvidar tus actividades.</p>
			</div>
			<div class="category">
				<div class="category-header">
					<span class="category-icon">🎯</span>
					<h3>Metas</h3>
				</div>
				<p>Establece y sigue tus metas personales y profesionales.</p>
			</div>
			<div class="category">
				<div class="category-header">
					<span class="category-icon">🎉</span>
					<h3>Objetivos</h3>
				</div>
				<p>Define objetivos específicos y trabaja para alcanzarlos.</p>
			</div>
			<!-- Agrega más categorías aquí -->
		</div>
	</footer>
</div>

<style>
	/* Estilos previos */

	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	.categories {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		grid-gap: 20px;
		justify-items: center;
		margin-top: 40px;
	}

	.category {
		background-color: #fff;
		padding: 20px;
		border-radius: 10px;
		box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
		text-align: center;
		transition: transform 0.3s ease, background-color 0.3s ease;
		cursor: pointer;
	}

	.category:hover {
		transform: translateY(-5px);
		background-color: #f4f4f4;
	}

	.category h3 {
		margin: 0 0 10px;
		font-size: 20px;
		color: var(--color-theme-1);
	}

	.category p {
		margin: 0;
		color: #555;
	}

	.category-header {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 15px;
	}

	.category-icon {
		font-size: 24px;
		margin-right: 10px;
	}

	@media (max-width: 768px) {
		.categories {
			grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
		}
	}
</style>



	