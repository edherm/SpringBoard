# [__SpringBoard__](https://springboard-app.herokuapp.com/#/ "SpringBoard's Splash Page")

![App Preview](https://raw.githubusercontent.com/edherm/SpringBoard/master/app/assets/images/SpringBoardPreview2.png)

SpringBoard collects all of your project's todo lists, notebook, and schedule into one easy to navigate dashboard.

___
### _Table of Contents_
* [How It Works](https://github.com/edherm/SpringBoard#how-it-works "SpringBoard Readme-How It Works")
* [Features of Note](https://github.com/edherm/SpringBoard#features-of-note "SpringBoard Readme-Features of Note")
* [In Development](https://github.com/edherm/SpringBoard#in-development "SpringBoard Readme-In Development")

___
## __How It Works__

### _Frontend_
* React/Redux
* JavaScript
* JBuilder
* HTML/CSS
### _Backend_
* Ruby on Rails
* PostgresSql

___
## __Features of Note__

#### Modular React Components
Headers, footers, and the wrappers for the Todo Lists, Todos, and Messages are among some of the reusable and flexible components that were engineered for SpringBoard.

#### Todo List and Todo In line Additions
Forms to create new lists and todo items are hidden and revealed inline by changing `div classNames`:
```javascript
// Reveal button and div containing the hidden form
<input
    className="new-todo"
    type="submit"
    onClick={this.revealForm}
    value="Add a to-do"
/>
<div className={`expanding-form ${this.state.newTodoForm}`} > /* ... */ </div>

// Reveal function
revealForm() {
    this.setState({ newTodoForm: "revealed" })
}
```

#### NoteBook
Integrating the React-Quill library gives these notes their rich-text styling and the ability to safely re-render user-inputted text, regardless of the content.
```javascript
// Using React-Quill's read-only prop to display a user's message safely
<div className="message-body-wrapper" >
    <ReactQuill
        value={message.body}
        readOnly={true}
        theme={"bubble"}
    />
</div>
```
___
## __In Development:__
* Schedule

______
# ![Logo](https://raw.githubusercontent.com/edherm/SpringBoard/master/app/assets/images/spring_board_small.png) 
