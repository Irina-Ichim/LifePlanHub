

<!--<script>
	import Counter from './Counter.svelte';
</script>

<svelte:head>
	<title>Inicio</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>
		<span class="welcome">
			<span class="letter">B</span>
			<span class="letter">I</span>
			<span class="letter">E</span>
			<span class="letter">N</span>
			<span class="letter">V</span>
			<span class="letter">E</span>
			<span class="letter">N</span>
			<span class="letter">I</span>
			<span class="letter">D</span>
			<span class="letter">A</span>
		</span>
		<br />
		<span class="subtitle">A tu</span><br />
		<span class="main-title">Plan de vida</span>
	</h1>

	<Counter />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
		background-color: #f7f7f7;
	}

	h1 {
		width: 100%;
		text-align: center;
		margin: 0;
		padding: 40px 0;
		font-family: 'Helvetica Neue', sans-serif;
	}

	.welcome {
		font-size: 48px;
		display: block;
		color: #ff00cc;
		margin-bottom: 20px;
	}

	.letter {
		display: inline-block;
		transform: translateY(-100%);
		animation: slideInTop 0.5s ease-in-out forwards;
		opacity: 0;
		color: #ff00cc;
		font-size: 48px;
	}

	.subtitle {
		font-size: 24px;
		color: #666;
		margin-bottom: 5px;
		opacity: 0;
		animation: fadeIn 1s ease-in-out forwards;
	}

	.main-title {
		font-size: 36px;
		color: #333;
		opacity: 0;
		animation: fadeIn 1s ease-in-out forwards;
	}

	@keyframes slideInTop {
		to {
			transform: translateY(0);
			opacity: 1;
		}
	}

	@keyframes fadeIn {
		to {
			opacity: 1;
		}
	}
</style>-->

<!--<script>
	import Counter from './Counter.svelte';
</script>

<svelte:head>
	<title>Inicio</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>
		<span class="welcome">
			<span class="letter">B</span>
			<span class="letter">I</span>
			<span class="letter">E</span>
			<span class="letter">N</span>
			<span class="letter">V</span>
			<span class="letter">E</span>
			<span class="letter">N</span>
			<span class="letter">I</span>
			<span class="letter">D</span>
			<span class="letter">A</span>
		</span>
		<br />
		<span class="subtitle">A tu</span><br />
		<span class="main-title">Plan de vida</span>
	</h1>

	<Counter />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
		background-color: #1e1e1e;
	}

	h1 {
		width: 100%;
		text-align: center;
		margin: 0;
		padding: 40px 0;
		font-family: 'Helvetica Neue', sans-serif;
	}

	.welcome {
		font-size: 48px;
		display: block;
		background-image: linear-gradient(45deg, #ff00cc, #3333ff);
		-webkit-background-clip: text;
		color: transparent;
		margin-bottom: 20px;
		animation: gradientFade 2s infinite alternate;
	}

	.letter {
		display: inline-block;
	}

	.subtitle {
		font-size: 24px;
		color: #999;
		margin-bottom: 5px;
		opacity: 0.8;
	}

	.main-title {
		font-size: 36px;
		color: #fff;
	}

	@keyframes gradientFade {
		from {
			-webkit-background-clip: text;
			color: transparent;
		}
		to {
			-webkit-background-clip: unset;
			color: inherit;
		}
	}
</style>-->


<!--<script>
	import Counter from './Counter.svelte';
</script>

<svelte:head>
	<title>Inicio</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>
		<span class="welcome">
			<span class="letter">B</span>
			<span class="letter">I</span>
			<span class="letter">E</span>
			<span class="letter">N</span>
			<span class="letter">V</span>
			<span class="letter">E</span>
			<span class="letter">N</span>
			<span class="letter">I</span>
			<span class="letter">D</span>
			<span class="letter">A</span>
		</span>
		<br />
		<span class="subtitle">A tu</span><br />
		<span class="main-title">Plan de vida</span>
	</h1>

	<Counter />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
		background-color: #000;
	}

	h1 {
		width: 100%;
		text-align: center;
		margin: 0;
		padding: 40px 0;
		font-family: 'Helvetica Neue', sans-serif;
	}

	.welcome {
		font-size: 48px;
		display: block;
		background-image: linear-gradient(45deg, #f06, #0cf);
		-webkit-background-clip: text;
		color: transparent;
		animation: gradientFlow 2s infinite alternate;
		text-shadow: 0 3px 6px rgba(0, 0, 0, 0.5);
	}

	.letter {
		display: inline-block;
	}

	.subtitle {
		font-size: 24px;
		color: #888;
		margin-bottom: 5px;
	}

	.main-title {
		font-size: 36px;
		color: #fff;
	}

	@keyframes gradientFlow {
		from {
			background-position: 100% 0;
		}
		to {
			background-position: 0 100%;
		}
	}
</style>-->
<script>
	import Counter from './Counter.svelte';
</script>

<svelte:head>
	<title>Inicio</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="main-section">
	<h1>
		<span class="typing-title">¡Bienvenida a tu Plan de Vida!</span>
		<br />
		<span class="subtitle">Organiza y sigue tus metas diarias</span>
	</h1>

	<Counter />
</section>

<style>
	.main-section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.1;
		background: linear-gradient(45deg, #ff00cc, #3333ff);
		height: 100vh;

	}

	h1 {
		width: 100%;
		text-align: center;
		margin: 0;
		padding: 40px 0;
		font-family: 'Helvetica Neue', sans-serif;
		color: #fff;
		background: linear-gradient(45deg, #ff00cc, #3333ff);
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
		font-size: 24px;
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
</style>


<!--<script>
	import Counter from './Counter.svelte';
</script>

<svelte:head>
	<title>Inicio</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>
		<span class="typing-title">¡Bienvenido a tu Plan de Vida!</span>
		<br />
		<span class="subtitle typing-subtitle">Organiza y sigue tus metas diarias</span>
	</h1>

	<Counter />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
		background-color: #000;
		height: 100vh;
	}

	h1 {
		width: 100%;
		text-align: center;
		margin: 0;
		padding: 40px 0;
		font-family: 'Helvetica Neue', sans-serif;
		color: #fff;
	}

	.typing-title,
	.typing-subtitle {
		display: inline-block;
		overflow: hidden;
		white-space: nowrap;
		border-right: 2px solid #fff;
		letter-spacing: 2px;
		animation: typing 3s steps(40, end), blink-caret 0.75s step-end infinite;
	}

	.typing-subtitle {
		animation: typing 3s steps(40, end), blink-caret 0.75s step-end infinite, delay 3s ease-out;
	}

	@keyframes typing {
		from {
			width: 0;
		}
		to {
			width: 100%;
		}
	}

	@keyframes blink-caret {
		from,
		to {
			border-color: transparent;
		}
		50% {
			border-color: #fff;
		}
	}

	@keyframes delay {
		from {
			visibility: visible;
		}
		to {
			visibility: hidden;
		}
	}
</style>-->

<!--<script>
	import Counter from './Counter.svelte';
</script>

<svelte:head>
	<title>Inicio</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>
		<span class="title">¡Bienvenido a tu</span>
		<br />
		<span class="title highlight">Plan de Vida!</span>
	</h1>

	<Counter />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
		background-color: #000;
		height: 100vh;
	}

	h1 {
		width: 100%;
		text-align: center;
		margin: 0;
		padding: 40px 0;
		font-family: 'Helvetica Neue', sans-serif;
		color: #fff;
	}

	.title {
		font-size: 36px;
		animation: move 2s infinite, changeColor 4s infinite;
	}

	.title.highlight {
		font-size: 48px;
		animation: move 2s infinite reverse, changeColor 4s infinite reverse;
	}

	@keyframes move {
		0%, 100% {
			transform: translateY(0);
		}
		25% {
			transform: translateY(-10px);
		}
		50% {
			transform: translateY(0);
		}
		75% {
			transform: translateY(10px);
		}
	}

	@keyframes changeColor {
		0% {
			color: #ff00cc;
		}
		25% {
			color: #3333ff;
		}
		50% {
			color: #00ff00;
		}
		75% {
			color: #ff0000;
		}
		100% {
			color: #ff00cc;
		}
	}
</style>-->

<!--<script>
	import Counter from './Counter.svelte';
</script>

<svelte:head>
	<title>Inicio</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1 class="title">
		<span class="word">Bienvenido</span>
		<br />
		<span class="word">a tu</span>
		<br />
		<span class="word">Plan de Vida</span>
	</h1>

	<Counter />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
		background-color: #f0f0f0;
		height: 100vh;
		overflow: hidden;
	}

	.title {
		text-align: center;
		margin: 0;
		padding: 40px 0;
		font-family: 'Helvetica Neue', sans-serif;
		font-size: 24px;
		color: #333;
	}

	.word {
		display: block;
		opacity: 0;
		transform: scale(0.8) rotate(-45deg);
		animation: rotateIn 1s ease-in-out, fadeInUp 1.5s ease-in-out;
		animation-fill-mode: forwards;
	}

	.word:nth-child(2) {
		animation-delay: 0.5s;
	}

	.word:nth-child(3) {
		animation-delay: 1s;
	}

	@keyframes rotateIn {
		0% {
			opacity: 0;
			transform: scale(0.8) rotate(-45deg);
		}
		100% {
			opacity: 1;
			transform: scale(1) rotate(0);
		}
	}

	@keyframes fadeInUp {
		0% {
			opacity: 0;
			transform: translateY(30px);
		}
		100% {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>-->













