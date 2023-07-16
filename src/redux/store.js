import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { contactsReducer } from './contactsSlice';
import { filtersReducer } from './filtersSlice';

// Конфигурация Redux Persist
const persistConfig = {
  key: 'contacts', // Ключ для доступа к сохраненному состоянию
  storage, // Хранилище для сохранения состояния
  whitelist: ['contacts'],
};

// Комбинирование нескольких редьюсеров в один
const rootReducer = combineReducers({
  contacts: contactsReducer, // Редьюсер контактов
  filters: filtersReducer, // Редьюсер фильтра
});

// Создаем персистентный редьюсер для сохранения состояния между сессиями
const persistedContactsReducer = persistReducer(persistConfig, rootReducer);

// Создаем магазин Redux с помощью настроенного персистентного редьюсера
export const store = configureStore({
  reducer: persistedContactsReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Создаем персистор для сохранения состояния между сессиями
export const persistor = persistStore(store);
