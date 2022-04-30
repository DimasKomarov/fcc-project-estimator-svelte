<!-- Скрипт, в котором мы задаем id, название материала и его цену 
    + изменение  -->
<script>
    import materialStore from "./material-store.js"
    export let id;
    export let name="";
    export let price = 5;


    // Условия для смены надписи на кнопках
    $: mode = id ? "edit" : "add";
    $: console.log(price);
    $: canSumbit = price >=0 && name !== "";

    // функция для изменения состояния кнопки добавления
    function submit() {
       if (!canSumbit) {
           return;
       }

    // Если значение mode === add - 
    // добавляем название и цену в функцию materialStore  
       if (mode === "add") {
        materialStore.add(name,price);
       }

       price="";
       name="";
       id = indefined;
    }


    // функция для изменения состояния кнопки отмены
    function cancel() {
        price=5;
        name="";
        id=indefined;
    }
</script>



<!-- Стиль и функционал кнопки -->
<style>
    button {
        margin-left: 20px;
    }
    button:disabled {
        cursor: not-allowed;
    }
</style>



<!-- Форма, в которой пользователь вводит материалы -->
<form on:submit|preventDefault={submit}>
   <fieldset>
        <label for="nameField">Material</label>
        <input bind:value={name} 
        placeholder="Wood, Glue, Etc"
        type="text" 
        id="nameField">

        <label for="priceField">Price</label>
        <input bind:value={price} 
        min="0"
        step="any"
        placeholder="Price"
        type="number" 
        id="priceField">
   </fieldset>
   
 <!--Кнопка добавления  -->
   <button 
   disabled={!canSumbit}
   class="float-right"
   type="submit">{mode}</button>
   

   <!-- Конструкция if для активации кнопки отмены -->
   {#if mode === "edit"}
   
   <!-- Кнопка отмены -->
   <button on:click={cancel}
   class="float-right"
   type="button">Cancel</button>
   {/if}
</form>