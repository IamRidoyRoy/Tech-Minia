import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

interface IUserState {
  user: {
    email: string | null;
  };
  isLoading: boolean;
  isError: boolean;
  error: string | null;
}

interface IAuth {
  email: string;
  password: string;
}
const initialState: IUserState = {
  user: {
    email: null,
  },
  isLoading: false,
  isError: false,
  error: null,
};

const createUser = createAsyncThunk(
  'user/createuser',
  async ({ email, password }: IAuth) => {
    // const auth = getAuth(app);
    const data = await createUserWithEmailAndPassword(auth, email, password);

    return data.user.email;
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createUser.fulfilled, (state) => {})
      .addCase(createUser.rejected, (state) => {});
  },
});

export default userSlice.reducer;
