
# *QUESTIONS :*

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
2. How do you **create and insert a new element into the DOM**?
3. What is **Event Bubbling** and how does it work?
4. What is **Event Delegation** in JavaScript? Why is it useful?
5. What is the difference between **preventDefault() and stopPropagation()** methods?

---
# *ANSWERS :*

## Question 1 : Answer

- ### getElementById
  - Selects only one element with the given id
  - Returns a single element because Id is unique (null if not found)

- ### getElementsByClassName
  - Selects all the elements, matched with the given class name
  - Returns an HTMLCollection (array-like-object)

- ### querySelector
  - Selects the first matching element with the given selector
  - Returns a single element (null if not found)

- ### querySelectorAll
  - Selects all the elements, matched with the given selector
  - Returns NodeList (array-like-object)
### e.g
```bash
document.getElementById("id"); // single element with Id "id"
document.getElementsByClassName("class"); // all the elements with class "class"
document.querySelector(".class"); // the first element with class "class"
document.querySelectorAll(".class"); // all the elements with class "class"
```

---

## Question 2: Answer

- ### Creating a new element
  ```bash
  let newElem = document.createElement("div");
  ```
- ### Adding content to the element
  ```bash
  newElem.innerHTML = ` <h1> Hello! I'm a new element.</h1> `
  ```
- ### Inserting the element into the DOM
  ```bash
  const newElemParent = document.getElementById("new-element-container");
  newElemParent.append(newElem);
  ```
### Some Inserting Methods
   - **appendChild()** -- inserts as last child
   - **prependd()** -- inserts as first child
   - **after()** -- inserts after element
   - **before()** -- inserts before element

---

## Question 3: Answer


- ### Event Bubbling
  - When an event exicutes on an element, it first runs to the target element, then **bubbles up**       to the parent, then parent's parent and so on up to the root (*document*).
  - A default behavior of JavaScript
```bash
      <div id="grandparent">
        <div id="parent">
          <button id="child"></button>
        </div>
      </div>

    <script>
      document.getElementById("child").addEventListener("click", () => {
        return "child is clicked";
      });
      document.getElementById("parent").addEventListener("click", () => {
        return "parent is clicked";
      });
      document.getElementById("grandparent").addEventListener("click", () => {
        return "grandparent is clicked";
      });
    </script>
```
- **While clicking on button** -- *will be returned*
  - child is clicked
  - parent is clicked
  - grandparent is clicked
- **While clicking on parent** -- *will be returned*
  - parent is clicked
  - grandparent is clicked
- **While clicking on grandparent** -- *will be returned*
  - grandparent is clicked


---

## Question 4: Answer

- ## Event Delegation
  - **Actually event delegation is :** Instead of adding event to multiple child element, adding         only a single event listener to the parent and use event bubbling to detect which child was         clicked.
  - **Event delegation is very usefull because :** It improves performance and memory usage by           reducing the number of event listeners, especially for large or dynamic lists of elements.
### **e.g**

```bash
document.querySelector(".cards").addEventListener("click", (e) => {
  const btn = e.target;

  /*heart functionality*/
  if (btn.className.includes("heart")) {
    console.log("heart is clicked");
  }

  /*call button functionality*/
  if (btn.className.includes("calling-service-number")) {
    console.log("call button is clicked");
  }

  /*copy button functionality*/
  if (btn.className.includes("copy-service-number")) {
    console.log("copy button is clicked");
  }
});
```
In the following code only a single event listener is attached to the parent element and there are a lot of
heart, call and copy button in the parent element. But all the heart, call and copy button will be handeled with the single event. **(This is the power of event delegation)**


---

## Question 5: Answer

### Difference beween *preventDefault()* and *stopPropagation()*

- ### preventDefault()
  - Prevents the default behavior of the event (stops browser's default behavior)
  - *e.g :* stops a form from submitting


- ### stopPropagation()
  - Stops the event from bublling to parent element 
  - *e.g :* stops parent listener from being triggered
