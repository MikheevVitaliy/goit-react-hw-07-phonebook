import { createSlice, nanoid } from '@reduxjs/toolkit';

// Создание Redux slice (части состояния) с именем "contactsSlice"
const contactsSlice = createSlice({
  name: 'contacts', // Уникальное имя slice
  initialState: [],
  reducers: {
    // Обработчик (reducer) для добавления нового контакта в состояние store.
    addContact: {
      reducer(state, action) {
        const duplicateName = state.find(
          ({ name }) => name.toLowerCase() === action.payload.name.toLowerCase()
        );

        return duplicateName
          ? alert(`${action.payload.name} is already in contacts.`)
          : [...state, action.payload];
      },
      // Функция для подготовки данных перед вызовом reducer.
      // Генерирует уникальный идентификатор с помощью nanoid() 4 числа, и возвращает объект с id, name и number, который станет частью payload для addContact.
      prepare({ name, number }) {
        return {
          payload: {
            id: nanoid(4),
            name,
            number,
          },
        };
      },
    },
    // Обработчик (reducer) для удаления контакта из состояния store.
    deleteContact(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

// Экспортируем действия (actions), которые могут быть вызваны в других частях приложения, для добавления и удаления контактов. Действия генерируются автоматически на основе reducers, указанных в createSlice().
export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
