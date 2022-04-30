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
}