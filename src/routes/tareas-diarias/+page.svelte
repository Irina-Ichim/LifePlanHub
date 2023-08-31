<script>
  	import { time } from './stores.js';

const formatter = new Intl.DateTimeFormat('en', {
  hour12: true,
  hour: 'numeric',
  minute: '2-digit',
  second: '2-digit'
});
	let todos = [
		{ done: false, text: 'finish Svelte tutorial' },
		{ done: false, text: 'build an app' },
		{ done: false, text: 'world domination' }
	];

	function add() {
		todos = todos.concat({ done: false, text: '' });
	}

	function clear() {
		todos = todos.filter((t) => !t.done);
	}

	$: remaining = todos.filter((t) => !t.done).length;
</script>

<h1>Tareas Diarias</h1>
<h2>Hora: {formatter.format($time)}</h2>

{#each todos as todo}
	<div>
		<input type="checkbox" bind:checked={todo.done} />

		<input placeholder="What needs to be done?" bind:value={todo.text} disabled={todo.done} />
	</div>
{/each}

<p>{remaining} restantes</p>

<button on:click={add}> Agrega Nueva Tarea </button>

<button on:click={clear}> Elimina Tarea </button>









