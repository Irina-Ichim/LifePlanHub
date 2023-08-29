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
		<div class="card">
			<h2>¡Organiza tus tareas diarias!</h2>
			<p>Utiliza nuestra aplicación para llevar un seguimiento de tus tareas diarias y mantener tu vida organizada.</p>
			<a href="#">Empieza ahora</a>
		</div>
	</footer>
</div>

<style>
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

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	.card {
		background-color: #f4f4f4;
		padding: 20px;
		border-radius: 10px;
		box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
		text-align: center;
	}

	.card h2 {
		margin: 0 0 10px;
		font-size: 24px;
	}

	.card p {
		margin: 0 0 20px;
		color: #555;
	}

	.card a {
		display: inline-block;
		padding: 10px 20px;
		background: linear-gradient(45deg, #ff00cc, #3333ff);
		color: white;
		border-radius: 5px;
		text-decoration: none;
		transition: background-color 0.3s ease;
	}

	

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
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

@media (max-width: 768px) {
	.categories {
		grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
	}
}



</style>

	