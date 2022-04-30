<!-- Импорт классов из дериктории -->
<script>
	import Table from "./Table.svelte";
	import Form from "./Form.svelte";
</script>

<!-- Прписываем стиль мейн контейнеру -->
<style>
	main {
		flex: 1;
		align-content: center;
		justify-content: center;
		width: 80%;
		margin: 0 auto;
	}
</style>

<!-- Сам мейн и его содержимое -->
<main>
	<h1>Project Estimator</h1>

	<!-- Вызываем имортированные классы -->
	<Form />

	<Table />
</main>