export const addDarkColorScheme = () => {
  const rootElement = document.querySelector("html.dark");
  if (rootElement) {
    rootElement.style.colorScheme = "dark";
  } else {
    document.querySelector("html").style.colorScheme = "light";
  }
};
