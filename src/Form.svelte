<!-- Скрипт, в котором мы задаем id, название материала и его цену
+ изменение -->
<script>
  import materialStore from "./material-store.js";
  export let id;
  export let name = "";
  export let price = 5;
  let inputPrice;

  // Условия для смены надписи на кнопках
  $: mode = id ? "edit" : "add";

  // Условие для добавления товара
  $: canSubmit = price >= 0 && name !== "";

  // Выводит в консоль цену и название
  $: console.log(price, name);

  // функция для изменения состояния кнопки добавления
  function submit() {
    if (!canSubmit) {
      return;
    }

    //   Если значение mode соответствует add -
    // добавляем индентификатор, название и цену
    if (mode === "add") {
      materialStore.add(name, price);
    }

    //   Если значение mode соответствует add -
    // изменяем индентификатор, название и цену
    if (mode === "edit") {
      materialStore.edit(id, name, price);
    } 

    name = "";
    price = 5;
    id = undefined;
  }
  
  // Функция для изменения состояния кнопки отмены
  function cancel() {
    price = 5;
    name = "";
    inputPrice.value = price;
    id = undefined;
  }
</script>

<!-- Форма, в которой пользователь вводит материалы -->
<form on:submit|preventDefault={submit}>
  <fieldset>
    <label for="nameField">Material</label>
    <input
      bind:value={name}
      placeholder="Wood, Glue, Etc"
      type="text"
      id="nameField"
    />

    <label for="priceField">Price</label>
    <input
      bind:this={inputPrice}
      bind:value={price}
      min="0"
      step="any"
      placeholder="Price"
      type="number"
      id="priceField"
    />
  </fieldset>

  <!-- Кнопка добавления -->
  <button disabled={!canSubmit} class="float-right" type="submit">
    {mode}
  </button>

  <!-- Конструкция if для активации кнопки отмены -->
  {#if mode === "edit"}
    <!-- Кнопка отмены -->
    <button on:click={cancel} class="float-right" type="button">Cancel</button>
  {/if}
</form>

<!-- Стиль и функционал кнопки -->
<style>
  button {
    margin-left: 20px;
  }
  button:disabled {
    cursor: not-allowed;
  }
</style>
