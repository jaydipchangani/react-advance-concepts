import { Provider, useDispatch, useSelector } from "react-redux";
import { store, toggleTheme } from "./ThemeSlice";

function CurrentTheme() {
  const currentTheme = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => dispatch(toggleTheme())}
        style={{ color: currentTheme === "light" ? "green" : "red" }}
      >
        {currentTheme}
      </button>
    </div>
  );
}

export default function Theme() {
  return (
    <Provider store={store}>
      <CurrentTheme />
    </Provider>
  );
}
