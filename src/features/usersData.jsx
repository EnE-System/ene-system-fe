import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  data: [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', age: 30 },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', age: 25 },
    {
      id: 3,
      name: 'Alice Johnson',
      email: 'alice.johnson@example.com',
      age: 28,
    },
    { id: 4, name: 'Bob Brown', email: 'bob.brown@example.com', age: 35 },
    { id: 5, name: 'Eve Davis', email: 'eve.davis@example.com', age: 22 },
  ],
};

export const usersSlice = createSlice({
  name: 'users data',
  initialState,
  reducers: {},
});

export default usersSlice.reducer;
