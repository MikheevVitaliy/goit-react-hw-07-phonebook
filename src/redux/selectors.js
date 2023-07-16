// получаем объект state из хранилища Redux и возвращаем свойство contacts, содержащее массив контактов.
export const getContacts = state => state.contacts;
// получаем объект state из хранилища Redux и возвращаем свойство filter, содержащее значение фильтра для поиска контактов.
export const getFilters = state => state.filters;
