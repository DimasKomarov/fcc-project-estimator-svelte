// импортируем svelte/store
import { writable } from "svelte/store";

// создаем константу хранения массива
const materialStore = writable([])

// создаем константу названия массива
const key = "materials"

// Условие при наличии ключа разбирает строку в JSON 
if (localStorage.getItem(key)) {
    materialStore.set(JSON.parse(localStorage.getItem(key)));
}


// функция для добавления названия и цены материала в качестве констант,
// а затем возврат массива материалов
const add = (name, price) => {
    materialStore.update((items) => {
        const item = {
            name,
            price,
            id: new Date().getTime()
        }
        
        return [item,...items];
    })
}

// функция для изменения названия и цены материала в качестве констант,
// а затем возврат массива материалов
const edit = (id, name, price) => {
    materialStore.update((items) => {
       const index = items.findIndex((i) => i.id === id);
        
       items[index].name = name;
       items[index].price = price;

       return items;
    })
}

// Функция удаления элементов
const remove = (id) => {
    materialStore.update((items) => {
        return items.filter((i) => i.id !== id);
    });
}

// метод, который объеиняет массив материалов и их вид (ключ, значение) 
materialStore.subscribe((items) => {
    console.log(items);
    const jsonString = JSON.stringify(items);
    localStorage.setItem(key, jsonString);
})


// дефолтный экспорт
export default {
    subscribe: materialStore.
    subscribe,
    add,
    edit,
    remove,
}