<script>
</script>

<svelte:head>
	<title>Inicio</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="main-section">
	<div class="gradient-header">
		<h1>
			<span class="typing-title">¡Bienvenida a tu Plan de Vida!</span>
			<br />
			<span class="subtitle">Organiza y sigue tus metas diarias</span>
		</h1>
	</div>

	<div class="mood-section">
		<h2>¿Cómo te sientes hoy?</h2>
		<div class="mood-options">
			<div class="mood-option">
				<p>😄</p>
				<span class="mood-label">Feliz</span>
			</div>
			<div class="mood-option">
				<p>😢</p>
				<span class="mood-label">Triste</span>
			</div>
			<div class="mood-option">
				<p>😃</p>
				<span class="mood-label">Emocionado</span>
			</div>
			<div class="mood-option">
				<p>😫</p>
				<span class="mood-label">Estresado</span>
			</div>
			<div class="mood-option">
				<p>😎</p>
				<span class="mood-label">Relajado</span>
			</div>
			<div class="mood-option">
				<p>😊</p>
				<span class="mood-label">Contento</span>
			</div>
			<div class="mood-option">
				<p>😒</p>
				<span class="mood-label">Aburrido</span>
			</div>
			<div class="mood-option">
				<p>😇</p>
				<span class="mood-label">Tranquilo</span>
			</div>
		</div>
	</div>
</section>
<footer>
	<div class="categories">
		<div class="category">
			<a href="/tareas-diarias">
			<div class="category-header">
				<span class="category-icon">📝</span>
				<h3>Tareas Diarias</h3>
			</div>
			<p>Mantén un registro de tus tareas cotidianas.</p></a>
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
	</div>
</footer>

<style>
	.main-section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.1;
	}

	.gradient-header {
		background: linear-gradient(45deg, #ff00cc, #3333ff);
		text-align: center;
		padding: 30px 0;
		height: 150px; 
		width: 100%;
	}

	h1 {
		margin: 0;
		font-family: 'Helvetica Neue', sans-serif;
		color: #fff;
		background-clip: text;
		-webkit-background-clip: text;
	}

	.typing-title {
		font-size: 36px;
		display: inline-block;
		border-right: 3px solid #fff;
		padding-right: 5px;
		animation: typingAnimation 4s steps(30) forwards, blinkCursor 0.75s step-end infinite;
	}

	.subtitle {
		font-size: 22px;
		color: lightgray;
		margin-top: 15px;
	}

	@keyframes typingAnimation {
		from {
			width: 0;
		}
		to {
			width: 100%;
		}
	}

	@keyframes blinkCursor {
		to {
			border-color: transparent;
		}
	}

	.mood-section {
		margin-top: 50px;
		text-align: center;
	}

	.mood-section h2 {
		font-size: 24px;
		color: #333;
		margin-bottom: 17px;
	}

	.mood-options {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
	}

	.mood-option {
		margin: 10px;
		width: 70px;
		height: 70px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		border-radius: 50%;
		cursor: pointer;
		transition: transform 0.2s ease-in-out, background-color 0.2s ease-in-out;
	}

	.mood-option p {
		font-size: 24px;
		margin: 0;
		transition: opacity 0.2s ease-in-out;
	}

	.mood-label {
		font-size: 12px;
		color: #4075a6;
		opacity: 0.8;
	}

	.mood-option:hover {
		transform: scale(1.1);
	}

	.mood-option:hover p {
		opacity: 1;
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
