Q.1- What is the difference between Named export, Default export, and * as export?
A.
1. Named export - In named export, the function is exported as:
e.g. - export <name_of_function_or_component>;
       import { <name_of_function_or_component> } from '..';

2. Default export: In default export the function is exported as:
e.g. - export default <name_of_function_or_component>;
       import <name_of_function_or_component> from '<path_of_module>';

3. * as export: It is used to import the whole module as a component and access the components inside the module.
e.g. - export <name_of_function_or_component>;
       import * as allModule from '<path_of_module>';
        Access like - allModule.<name_of_function_or_component>

Q.2- What is the importance of config.js file?
A. It is best standard preatice to use config.js/constant.js for constant values or base url of API.

Q.3- What are React Hooks?
A. It is a normal function behind the scean and it has two property 
1. state variable name, 
2. function to update the state varible
e.g. let [searchTxt,setSearchTxt] = useState('');

Q.4- Why do we need useState Hook?
A. It is used to manage states variable and returns a stateful value and an updater function to update it.
e.g. let [searchTxt,setSearchTxt] = useState('');
