This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Туториал по Material UI

### Установка
[смотри документацию](https://material-ui.com/ru/)



### Кнопка
```javascript
import {Button} from "@material-ui/core"

<Button color="primary" variant="contained">Click</Button>
```
В конце доки [компонент кнопка](https://material-ui.com/ru/components/buttons/) смотреть `API`
Там `props` для [кнопки](https://material-ui.com/ru/api/button/) 

В разделе `кастомизация` видно [дефолтные настройки](https://material-ui.com/ru/customization/default-theme/) 

### Создаю свою тему
[createmuitheme](https://material-ui.com/ru/customization/theming/#createmuitheme-options-args-theme)

Создать отдельный файл `theme.js` и в него скопировать пример из данного раздела
```javascript
import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import {blue} from '@material-ui/core/colors'

const theme = createMuiTheme({
    palette: {
      primary: {
        main: purple[500],
      },
      secondary: {
        main: green[500],
      },
    },
  });
export default theme
```
**Note: не забыть `export default theme` **

Далее в [ThemeProvider](https://material-ui.com/ru/styles/api/#themeprovider)
Вношу изменения в `index.js`
```javascript
mport React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from "./theme"
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
```
В результате кнопка поменяет цвет на `purple`
**Note: каждый цвет имеет оттенки от 50 до 800 что видно в подсказках редактора **

##Типография
```js
<Typography color="primary" variant="h1">Hello, there!</Typography>
```

