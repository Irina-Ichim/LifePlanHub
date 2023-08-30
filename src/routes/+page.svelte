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
			<!-- Agrega más opciones de estado de ánimo -->
		</div>
	</div>
</section>

<style>
	/* Estilos previos */
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
		margin-top: 20px;
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
		color: #fff;
		opacity: 0.8;
	}

	.mood-option:hover {
		transform: scale(1.1);
	}

	.mood-option:hover p {
		opacity: 1;
	}
</style>
