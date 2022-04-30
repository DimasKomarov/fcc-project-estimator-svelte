<!-- Скрипт, в котором мы задаем id, название материала и его цену -->
<script>
    export let id;
    export let name="";
    export let price;

    $: mode = id ? "edit" : "add"


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
<form>
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
   class="float-right"
   type="submit">Add</button>
   
<!-- Кнопка отмены -->
   <button
   class="float-right"
   type="button">Cancel</button>

</form>