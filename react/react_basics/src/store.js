import { configureStore, createSlice } from '@reduxjs/toolkit';

const loadTasksFromStorage = () => {
  try {
    const savedTasks = localStorage.getItem('todo-tasks-react');
    return savedTasks ? JSON.parse(savedTasks) : [];
  } catch {
    return [];
  }
};

const saveTasksToStorage = (tasks) => {
  try {
    localStorage.setItem('todo-tasks-react', JSON.stringify(tasks));
  } catch {
    // ignore
  }
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    items: loadTasksFromStorage(),
    editingId: null,
    editText: '',
  },
  reducers: {
    setInputValue(state, action) {
      state.inputValue = action.payload;
    },
    addTask(state, action) {
      const text = action.payload.trim();
      if (!text) return;
      state.items.push({
        id: 'task-' + Date.now(),
        text,
        completed: false,
      });
      saveTasksToStorage(state.items);
    },
    toggleTask(state, action) {
      const id = action.payload;
      state.items = state.items.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      );
      saveTasksToStorage(state.items);
    },
    deleteTask(state, action) {
      const id = action.payload;
      state.items = state.items.filter((task) => task.id !== id);
      saveTasksToStorage(state.items);
    },
    startEdit(state, action) {
      const id = action.payload;
      const taskToEdit = state.items.find((task) => task.id === id);
      state.editingId = id;
      state.editText = taskToEdit ? taskToEdit.text : '';
    },
    setEditText(state, action) {
      state.editText = action.payload;
    },
    saveEdit(state) {
      const text = state.editText.trim();
      if (text && state.editingId) {
        state.items = state.items.map((task) =>
          task.id === state.editingId ? { ...task, text } : task
        );
      }
      state.editingId = null;
      state.editText = '';
      saveTasksToStorage(state.items);
    },
    cancelEdit(state) {
      state.editingId = null;
      state.editText = '';
    },
  },
});

const baseInitialTheme =
  (typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches)
    ? 'dark'
    : 'light';

const loadThemeFromStorage = () => {
  try {
    const saved = localStorage.getItem('todo-theme');
    if (saved === 'light' || saved === 'dark') {
      return saved;
    }
  } catch {
    // ignore
  }
  return baseInitialTheme;
};

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    mode: loadThemeFromStorage(),
  },
  reducers: {
    toggleTheme(state) {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
      try {
        localStorage.setItem('todo-theme', state.mode);
      } catch {
        // ignore
      }
    },
    setTheme(state, action) {
      state.mode = action.payload;
      try {
        localStorage.setItem('todo-theme', state.mode);
      } catch {
        // ignore
      }
    },
  },
});

export const {
  addTask,
  toggleTask,
  deleteTask,
  startEdit,
  setEditText,
  saveEdit,
  cancelEdit,
} = tasksSlice.actions;

export const { toggleTheme, setTheme } = themeSlice.actions;

export const store = configureStore({
  reducer: {
    tasks: tasksSlice.reducer,
    theme: themeSlice.reducer,
  },
});

