<!-- Импорт классов из дериктории -->
<script>
	import Table from "./Table.svelte";
	import Form from "./Form.svelte";

	// Переменные id, name и price для добавления в поля
	let id;
	let name = "";
	let price = 5;

	// Функция edit, которая присваивает event.detail 
	// переменным id, name 
	// и price, при клике на добавленный материал позвлоялет 
	// редактирвоать его название и цену  
	function edit(event) {
		({id, name, price} = event.detail);
	}


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

	<!-- Вызываем имортированные классы 
	+  присваиваем форме переменные id, name и price-->
	<Form bind:price bind:id bind:name />

	<!-- В таблице вызываем функцию edit -->
	<Table on:edit={edit} />

</main>