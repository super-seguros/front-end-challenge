How to run:

1. With Node/NPM installed, run:

```
npm install
npm start
```

2: Go to http://localhost:3000/

---

Hi Stephen,

Here's some technical decisions I made for this project:
- Used a mix of styled-components for CSS and tailwind, custom UI components are inside `src/ui` and we override some styles, mainly around spacing between elements using tailwind
- The UI components created here are basic versions of how some of these components should look/behave, I think with more time we can allocate more effort into making sure everything has the proper accessibility and HTML tags required to give everyone the best experience
- Created a very dumb/small PoC for switching coverage types when you click "Tradicional" or "Con devolución"
- Wasn't sure what to do with the desktop version, maybe growing it to a 2 or 3 column layout could work but I didn't want to deviate from the original design too much, we can do it if we want to
- Used CSS properties to store some variables around spacing, brand colors, and typeface
- Thought of this as a simple app that could query the info from a REST API, which is why some there are things in code such as
```
const regularInsurance = [
  {
    coverageAmount: 120000,
    montlyPrice: 96.68,
    detailUrl: "",
    recommended: false,
  },
```
	the idea behind this is what a JSON response could look like from an API, and how do we show this data in our UI 
- Used font awesome icons directly from the CDN, we assume users won't need to download it again if they already visited an app or website that uses the same icons
- In a similar way, we load the Outfit typeface from Google Fonts from Google instead of our server

Sorry for the delay on the response, I got an annoying flu this weekend. I went to get tested for covid and it looks like it's just regular flu, so no need to worry too much about it.


