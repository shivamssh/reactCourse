
import React from "react";
import ReactDom from "react-dom/client";

// A React element
const heading2 = (
          <h1 id="h1" key="h1">
                    Heading 2.1
          </h1>
);

// A React component
const Title = () => (
          <h1 id="h1" key="h1">
                    Namaste React {heading2}
          </h1>
);

// React components
// - functional Component - NEW

const HeaaderComponent = () => {
          return (
                    <div>
                    <Title />{" "}
                    {heading2}
                    {/** component composition --> Title component inside HeaaderComponent component */}
                    {/* Can also be written as { Title() } */}
                    <h1> Namaste React functional component </h1>
                    <h2>This is a h2 tag </h2>
                    </div>
          );
};


const h1 = React.createElement(
          'h1',
          {
                    className: 'h1-header',
                    key:'h1'
          },
          'Day - 3'
);

const h2 = React.createElement('h2',
          {
                    id:'Day3',
                    key:'h2'
          },
          '(Day - 3)'
);

const container = React.createElement('main',
          {
                    id:'main'
          },
          [h1,h2, HeaaderComponent(),  React.createElement('ul',
                              {
                                        key: 'ul'
                              },
                              [
                                        React.createElement('li',
                                                  {
                                                            key:'li1'
                                                  },
                                                  'Chapter-1'
                                        ),
                                        React.createElement('li',
                                                  {
                                                            key:'li2'
                                                  },
                                                  'Chapter-2'
                                        )
                              ]
                    )
          ]
);


const render = ReactDom.createRoot(document.getElementById('root'));
render.render(container);

