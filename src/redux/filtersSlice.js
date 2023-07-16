const { createSlice } = require('@reduxjs/toolkit');

const filtersSlice = createSlice({
  name: 'filters', // Создаем slice с именем "filter"
  initialState: '', // Изначальное состояние slice
  reducers: {
    // Описываем reducers - функции, которые изменяют состояние slice
    filteredContact(state, action) {
      return (state = action.payload);
    },
  },
});

// Экспортируем filteredContact функцию, чтобы другие части приложения могли использовать этот action creator
export const { filteredContact } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
