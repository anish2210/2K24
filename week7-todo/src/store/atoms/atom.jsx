import { atom, selector } from "recoil";

export const todoListState = atom({
    key:'todoListState',
    default: []
});

export const filterState = atom({
    key:'filterState',
    default:''
});

export const filteredTodoListState = selector({
    key: 'filterTodoListState',
    get: ({get}) =>{
        const filter = get(filterState);
        const list = get(todoListState);

        return list.filter(todo=>todo.title.toLowerCase().include(filter.toLowerCase()));
    }
})
