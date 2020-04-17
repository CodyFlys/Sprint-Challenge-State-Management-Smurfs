1. What problem does the context API help solve?
It helps solved prop drilling

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

actions - are like payloads of information that go to the store from the application and are the only way to get information into the store.

reducers - use the actions in them to change the state of the application

store - is like the global storage for the state of all components connected to it. allowing other apps to connect and access those states as well.

I believe it's a single source of truth because we must change the actions to modify the state in the reducer? but not the store?. The store stays true. (The Same)

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

application state is global and component state is local


1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

redux thunk is a middleware that lets us call action creators that return a function instead of just an action, it's like its name, a middleware.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

I like context API stuff because it came more natural and easier to understand personally. But I do find redux to still be valuable.
