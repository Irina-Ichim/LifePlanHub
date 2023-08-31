<script>
  import { time } from './stores.js';

  const formatter = new Intl.DateTimeFormat('en', {
    hour12: true,
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit'
  });

  let todos = [
    { done: false, text: 'Finish Svelte tutorial' },
    { done: false, text: 'Build an app' },
    { done: false, text: 'World domination' }
  ];

  function add() {
    todos = todos.concat({ done: false, text: '' });
  }

  function clear() {
    todos = todos.filter((t) => !t.done);
  }

  $: remaining = todos.filter((t) => !t.done).length;
</script>



<div class="container">
  <h1>Tareas Diarias</h1>
  <h2>Hora: {formatter.format($time)}</h2>

  {#each todos as todo, index}
    <div class="task">
      <input type="checkbox" bind:checked={todo.done} />

      <input
        type="text"
        placeholder="¿Qué se necesita hacer?"
        bind:value={todo.text}
        disabled={todo.done}
      />
    </div>
  {/each}

  <p class="remaining">{remaining} tareas restantes</p>

  <button class="button" on:click={add}>Agregar nueva tarea</button>
  <button class="button" on:click={clear}>Limpiar completadas</button>
</div>


<style>
 

  .container {
    max-width: 400px;
    margin: 0 auto;
    padding: 2rem;
    border-radius: 5px;
    background-color: white;
   box-shadow: 0px 0px 10px 5px rgba(255, 255, 255, 0.8);
    border: 1px solid #888;
  }

  h1 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  h2 {
    font-size: 1.2rem;
    margin-top: 0;
  }

  /* Estilos para la lista de tareas */
  .task {
    display: flex;
    align-items: center;
    margin: 0.5rem 0;
    padding: 0.5rem;
    background-color: white;
    box-shadow: 0px 0px 20px 10px rgba(255, 255, 255, 0.8);
    border: 1px solid #888;
  }

  /* Estilos para la casilla de verificación */
  .task input[type="checkbox"] {
    margin-right: 0.5rem;
  }

  .task input[type="text"] {
    flex: 1;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  .task input[type="checkbox"] {
    margin-right: 0.5rem;
  }

  /* Estilos para los botones */


  .button:hover {
    background-color: #0056b3;
  }

  /* Estilos para el contador de tareas restantes */
  .remaining {
    margin-top: 1rem;
  }
</style>










