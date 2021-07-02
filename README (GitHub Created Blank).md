# React_Router

***INITIAL SET-UP After Installation of the React App***

#1 Create the REACT APP with the installation line "npx create-react-app react_router". The last part of the installation line is actually the name of the folder that will be created where the React Install files will be.

#2 Delete the un-necessary files installed by the React Installation: App.test.js; logo.svg and setupTests.js. Remove the 'import logo' from App.js

#3 Remove all the default-css from App.css file. Also include code at the top of index.css to remove all the preset margins from default installation

***MAIN PART of the Tutorial***

#4 Create various components in a component folder

#5 Install 'npm i react-router-dom' in the main folder

#6 For some of the components, you can clean up the code by using <> instead of <div>.

#7 Wrap the entire high-level-App in <BrowserRouter> and make sure to import it from 'react-router-dom'

#8 Implement the <Route> to route to the different sub-components. If using 'exact' after a component, it will ensure the application does not "stack" and show the main page and anything after the '/' routes.

#9 Make links to the different pages using the <a> attribute. These links are in the main Header-component

#10 There is performance problem with these links though; whenever the user clicks on a new link to go to a different page, it forces the entire app to re-render. This is not necessarily desireable.

#11 To prevent the re-render ... switch from <a>-href to <Link>-to and make sure you import the 'Link' from react-router-dom

#12 Adding 'basename="/something"' on the top line of the <BrowserRouter> makes it so your default page is no '/' ... it becomes the '/something' and every page/route afterwards getts added on