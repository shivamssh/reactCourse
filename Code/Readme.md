Chapter 4

Q.1 - Is JSX mandatory for React?
A - JSX is an Extension Syntax that allows writing HTML and Javascript together easily in React and is used to create React elements. These elements are then rendered to the React DOM. Each JSX element is just to make use of React easy and for calling React.createElement(component, props, …children) with less work. So, anything that is done with JSX can also be done with just plain JavaScript. So JSX is not mandatory but is used for writing better and clean code instead of writing code using React.CreateElement.

e.g. - const sample = <h2>Greetings</h2>;

Q.2 - Is ES6 mandatory for React?
A - ES6 is not mandatory for React but is highly recommendable. The latest projects created on React rely a lot on ES6. React uses ES6, and you should be familiar with some of the new features like: Classes, Arrow Functions, Variables(let, const). ES6 stands for ECMAScript 6. ECMAScript was created to standardize JavaScript, and ES6 is the 6th version of ECMAScript, it was published in 2015.

Q.3-  {TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX.

Q.4- How can I write comments in JSX?
A - {/*  */} - for single or multiline comments

Q.5- What is <React.Fragment></React.Fragment> and <></>?
A - <React.Fragment></React.Fragment> is a feature in React that allows you to return multiple elements from a React component by allowing you to group a list of children without adding extra nodes to the DOM. <></> is the shorthand tag for React.Fragment. The only difference between them is that the shorthand version does not support the attribute or not able to props in Fragment.

Q.6  What is Virtual DOM?
A - Virtual DOM is a representation of the actual DOM in JavaScript or copy of original DOM.
The virtual DOM is a lightweight JavaScript object, which is a copy of the actual DOM. It is used by JavaScript libraries and frameworks, such as React and Vue.js, to optimize the performance of updating the view (i.e., the web page) when the underlying data changes.
- Once the virtual DOM has determined the most efficient way to update the actual DOM, it makes those changes to the actual DOM. The actual DOM is then re-rendered, and the user sees the updated view.

Using the virtual DOM allows for efficient updates to the view because it reduces the amount of direct manipulation of the actual DOM, which can be slow and resource-intensive. The virtual DOM also ensures that only the necessary changes are made to the view, rather than re-rendering the entire view every time a change occurs.

Overall, Virtual DOM is a powerful feature of libraries like React, which make it easier to build fast, efficient and complex web application. It also helps to improve user experience by re-rendering only the components which are changed, and not the whole page

Q.7 - What is Reconciliation in React?
A - The mechanism to diff one tree with another to determine which parts need to be changed and then update the original DOM with it is called Reconciliation.
Reconciliation is the process through which React updates the Browser DOM and makes React work faster. React use a diffing algorithm so that component updates are predictable and faster. React would first calculate the difference between the real DOM and the copy of DOM (Virtual DOM) when there's an update of components. React stores a copy of Browser DOM which is called Virtual DOM. When we make changes or add data, React creates a new Virtual DOM and compares it with the previous one. Comparison is done by Diffing Algorithm. React compares the Virtual DOM with Real DOM. It finds out the changed nodes and updates only the changed nodes in Real DOM leaving the rest nodes as it is. This process is called Reconciliation.

Q.8 - What is React Fiber?
A - Fiber is the new reconciliation engine in React 16. Its main goal is to enable incremental rendering of the virtual DOM. Read more.

Q.9 - Why do we need keys in React? When do we need keys in React?
A - Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity:
e.g. -
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li key={number.toString()}>    {number}
  </li>
);
Note -  Better to have a unique value or at last use index e.g. 0,1,2,3.. as unique key.

Q.10 - Can we use index as keys in React?
A - Yes ( Frim reactjs doc), we can use the index as keys, but it is not considered as a good practice to use them because if the order of items may change. This can negatively impact performance and may cause issues with component state. Keys are taken from each object which is being rendered. There might be a possibility that if we modify the incoming data react may render them in unusual order.

Q.11- What is props in React? Ways to.
A -  Props are used in React to pass data from one component to another ie.e parent to child component.

Q.12 - What is Config Driven UI?
A - Config driven UI is concept used to built and run app using config provided.
This can be based off location prefrence. country prefrence.
ex. Food ordering app renders their hotel list based of customer's current location this is known as config driven UI.