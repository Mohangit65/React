import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { login, logout } from "./authSlice";

export default function Auth() {
  const dispatch = useAppDispatch();
  const { user, isLoggedIn } = useAppSelector(state => state.auth);

  return (
    <div>
      {isLoggedIn ? (
        <>
          <h2>Welcome, {user.name}</h2>
          <button onClick={() => dispatch(logout())}>Logout</button>
        </>
      ) : (
        <>
          <h2>Please Login</h2>
          <button onClick={() => dispatch(login({ name: "John Doe" }))}>Login</button>
        </>
      )}
    </div>
  );
}
