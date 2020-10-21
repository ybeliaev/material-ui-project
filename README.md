This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Туториал по Material UI

### Установка
[смотри документацию](https://material-ui.com/ru/)



### Кнопка
```javascript
import {Button} from "@material-ui/core"

<Button color="secondary" variant="contained">Click</Button>
```
В конце доки [компонент кнопка](https://material-ui.com/ru/components/buttons/) смотреть `API`
Там `props` для [кнопки](https://material-ui.com/ru/api/button/) 

В разделе `кастомизация` видно [дефолтные настройки](https://material-ui.com/ru/customization/default-theme/) 

### Создаю свою тему
[createmuitheme](https://material-ui.com/ru/customization/theming/#createmuitheme-options-args-theme)

Создать отдельный файл `theme.js` и в него скопировать пример из данного раздела
```javascript
const theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[500], // можно и поменять на rgb или #
    },
    secondary: {
      main: green[500],
    },
  },
});
```
**Note: не забыть `export default theme` **

Далее в [ThemeProvider](https://material-ui.com/ru/styles/api/#themeprovider)
Вношу изменения в `index.js`
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ThemeProvider } from '@material-ui/core/styles';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
```