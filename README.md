[Visit the app](https://gregmarquet-growmster.netlify.com/)

# Growmster (Think Growth Master)
### The app was build in the hope it will help you grow


This app was born from my love for human growth and my addiction to self-help books.

A map is only useful if you know where you are standing. This app will ask you some questions and give you a visual representation of where you are standing in your life compared to where you would like to be.

I then recommend some books on different areas that you might want to improve.

Sometimes, we are focused on improving one area of our life, but to achieve happiness, it is important to not abandon all the other areas.


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This app is pretty simple and build in two part: 
The quiz part and the result part.

#### The Quiz part

On the Quiz part, the Quiz component is a class component who keeps track of all the different input range values in its state.

It import and display the SliderOption component. 
The SliderOption displays a input of type range and a paragraph that display the value of the range.


#### The Result part

On the Result part, the Result component is a class based component because I wanted to use a lifeCycle method (to make sure the page was scrolled to the top when the component was mounted).

The Result component displays the Chart component, and all the different areas book suggestions.

The Chart component is based on 'react-chartjs-2' module. It is a class based component. It receives the values as a props from Quiz state through Result.

The different area of improvement book suggestion component are functional components and do not receive any props. 

I am aware that I have some code repetition and could have created one BookSuggestion component that would have taken urls and title as props, but I though it would be cleaner this way.

#### What I learned

I learned about SVG, but not enough to design my own Chart for the time being. 

I learned that input of type range are hard to style crossed browser.

I learned about Amazon affiliate accounts and links. I could have used regular links to my favorite books, but I wanted to learn something new and I'm sure it would be pretty exciting if someone ever buy through those links.

#### Challenges I faced

I wanted to implement a Radial Bar Chart with a specific design, but was not able to find one that was pleasing me. I would love to design it and use it in a future update.

### If you want to help

If anyone want to help especially for the chart, but also if you have suggestions. Don't hesitate to contact me.