import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Switch, Route} from 'react-router-dom';
import AddBook from "./components/add-book.component";
import DeleteBook from "./components/delete-book.component";
import AddMember from "./components/add-member.component";
import IssueBook from "./components/issue-book.component";
import ReturnBook from "./components/return-book.component";
import SearchBook from "./components/search-book.component";
import Signup from "./components/signup.";
import Home from "./components/home";
import EditBook from "./components/edit-book.component";


function App() {
    return(
        <Switch>
            <Route
                exact
                path="/"
                component={(props) => <Home {...props} />}
            />
            <Route
                exact
                path="/add-book"
                component={(props) => <AddBook {...props} />}
            />
            <Route
                exact
                path="/login"
                component={(props) => <Signup {...props} />}
            />
            <Route
                exact
                path="/delete-book"
                component={(props) => <DeleteBook {...props} />}
            />
            <Route
                exact
                path="/add-member"
                component={(props) => <AddMember {...props} />}
            />
            <Route
                exact
                path="/issue-book"
                component={(props) => <IssueBook {...props} />}
            />
            <Route
                exact
                path="/return-book"
                component={(props) => <ReturnBook {...props} />}
            />
            <Route
                exact
                path="/search-book"
                component={(props) => <SearchBook {...props} />}
            />
            <Route
                exact
                path="/edit-book"
                component={(props) => <EditBook {... props}/>}
            />
        </Switch>
    )
}

export default App