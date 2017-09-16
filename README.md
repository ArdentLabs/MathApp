# MathApp (For Ardent Bootcamp)

This app is **intentionally left incomplete**. We will be working to finish it
in class!

## Data Specification

All data for this application is declared in `./app/resources/data.js`. The data
is formatted as an array of JavaScript objects, and there are currently two
types of objects:

```
{
  type: 'Mental Math',
  level: <NUMBER>,
  num1: <NUMBER>,
  num2: <NUMBER>,
  operator: <STRING>,
}
```

```
{
  type: 'English',
  level: <NUMBER>,
  question: <STRING>,
  choices: <ARRAY>,
  answer: <STRING>,
}
```

In addition to their types, **all** objects will have a level. Levels range from
one to four.

Here is one example object:

```
{
  type: 'Mental Math',
  level: 1,
  num1: 109,
  num2: 1,
  operator: '+',
}
```

## Dependencies

This project relies on [react-native-simple-radio-button][1] and
[react-navigation][2]. If you have any questions on why things are coded the way
they are, I am happy to explain as long as you have checked the documentation
for any involved components!

[1]: https://github.com/moschan/react-native-simple-radio-button
[2]: https://reactnavigation.org/docs/intro/