import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`
:root {
  --Color-Primary: #27AE60;
  --Color-Secondary: #EB5757;
  --Color-Grey-600: #333333;
  --Color-Grey-300: #828282;
  --Color-Grey-100: #E0E0E0;
  --Color-Grey-0: #F5F5F5;
  --Color-Negative: #E60000;
  --Color-Warning: #FFCD07;
  --Color-Sucess: #168821;
  --Color-Information: #155BCB;

  --radius-1: 0.5rem;
  --radius-2: 1rem;
  --radius-3: 0.8rem;

  font-size: 62.5%;
}

* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

body, html {
  width: 100vw;
  height: 100vh;
}

body {
  background: var();
  background-attachment: fixed;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
  font-size: 1.6rem;
  font-family: 'Inter', sans-serif;
}

button {
  cursor: pointer;
  border: none;
}
`