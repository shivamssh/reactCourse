
import React from "react";
import ReactDom from "react-dom/client";

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
          [h1,h2]
);

const render = ReactDom.createRoot(document.getElementById('root'));
render.render(container);

