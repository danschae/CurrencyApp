# Plan for currency app


### Functionality:
- Dispaly updating table of currencies (including crypto);
- Have a currency converter;
- Display financial news (additional feature, not sure if I can do that for free);
- Displaying which currencies they want, depends on user
- Have everyhting be single page;

### Questions from user
- Which currencies can I see? 
- Is it useful? 
- Is it intuitive? 

### Tasks
- [] Find bootstrap template
- [x] Find API for currency
- [x] Find API for news
- [] Design Database
- [] Create a functionality template, write functions in pseudo code, know what the functions should be before coding
- [] Plan out the design with wireframes
- [] Design Database


### API
- For currency = https://exchangerate.host/#/docs
- For news = https://newsapi.org/docs/client-libraries/node-js

### List of components/hooks
#### Global (will get it from material UI):
- Button
- Form
- Modal 

#### News Section:
- news container;
- news list
- news list item

#### Currency
- Currency container
- CurrencyList
- CurrencyListItem

#### Admin
- Login Form
- Register Form
- Account Menu
- Favourites

#### Hooks
- UseFavouritesData
- UseCurrencyData
- UseNewsData
