<script>
  import { onMount } from 'svelte';

  let entities = [];

  onMount(async () => {
    entities = [
      {id: 1, name: "An item"},
      {id: 2, name: "A second item"},
      {id: 3, name: "And a third item"}
    ]
	});
</script>

<div class="container">
  <div class="row my-3"><h3>Entities</h3></div>
  <div class="row">
    <div class="input-group mb-3">
      <input type="text" class="form-control" placeholder="Search" aria-label="Search" aria-describedby="button-search">
      <button class="btn btn-outline-secondary" type="button" id="button-search">
        <i class="bi-search p-2" role="img" aria-label="Search"></i>
      </button>
    </div>
  </div>
  <div class="row mb-4">
    <ul class="list-group list-group-flush">
      {#each entities as entity}
        <li class="list-group-item"><a href="/entities/{entity.id}">{entity.name}</a></li>
      {/each}
    </ul>
    <hr style="width:99%"/>
  </div>
  <div class="d-flex flex-row-reverse">
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item">
          <a class="page-link" href="/entities" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li class="page-item active"><a class="page-link" href="/entities/1">1</a></li>
        <li class="page-item"><a class="page-link" href="/entities/2">2</a></li>
        <li class="page-item"><a class="page-link" href="/entities/3">3</a></li>
        <li class="page-item">
          <a class="page-link" href="/entities" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</div>