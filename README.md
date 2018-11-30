This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

This is a refactoring of a [previous project](https://github.com/cifarquhar/currency_converter) built using the [fixer.io](https://fixer.io/) API. This README will be updated as work progresses.

To use the app an API key for fixer.io is required. Create a file .env in the root directory and store the key as follows:

```
REACT_APP_API_KEY = "your_key_here"
```

where your_key_here is your API key.

Currencies can be selected from the two drop-down menus and the amount to convert can be entered into the empty field. Calculations happen dynamically: when a value is entered into one field the other is updated. Likewise when the selected currency is changed the corresponding input field is updated. 

Long-form currency names are updated when the drop-down changes. If available, the appropriate currency symbol is displayed in front of the input field. If the unicode symbol is not available it is replaced with the standard default symbol denoting currency (work to add more symbols is ongoing).

Styling (as with many of my projects) is pretty basic. As always, it's at the bottom of the "to-do" list.
