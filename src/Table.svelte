
<!-- Импортируем materialStore -->
<script>
    import materialStore from "./material-store.js"

    // создаем массив, который хранит материалы
    let materials = [];
    
    // метод, который присваивает items в materials
    materialStore.subscribe(items => {
        materials = items;
    });

    // Метод расчета итоговой суммы за товары
    $: total = materials.reduce((prev, next) => {
        prev += next.price;
        return prev;
    }, 0);
    
    const formatter = new Intl.NumberFormat
    ("en-US", {
        style: "currency",
        currency: "USD"
    });

</script>

<!-- Стили таблицы -->
<style>
    table {
        width: 100%;
    }
</style>

<!-- Таблица -->
<table class="primary">
    <thead>
        <tr>
            <th>Material</th>
            <th>Price</th>
            <th />
        </tr>
    </thead>
    <!-- Тело таблицы где указаны материалы и цена -->
    <tbody>
        
        <!-- ??? -->
        {#each materials as material (material.id)}
         <tr>
             <td>{material.name}</td>
             <td>{formatter.format(material.price)}</td>
             <td>
                 <i class="far fa-trash-alt" />
             </td>
         </tr>   
        {/each}
        <tr>
            <td>Total</td>
            <td colspan="2">{formatter.format(total)}</td>
        </tr>
    </tbody>
</table>