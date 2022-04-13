# Application guidline
## I. Code structure of ERP web client (using Regex patterns for file name's template) (TBD)

## II. Naming convention ([Wikipedia](https://en.wikipedia.org/wiki/Naming_convention_(programming)))
##### Naming rule for EPR application
1. **Folders**: 
    * Use hyphen-delimiter, show specific name of the folder
    * Parent folder contains multiple files/folders that have the same meaning will be plural (end by `"s"`/`"es"`)
    * Sub-folder will not reshow type/purpose of parent
    * Example:
        * Correct: `pages`, `pages/not-found` (`not-found` is a sub-folder of `pages`)
        * Incorrect: ~~`page`~~ (missing `"s"`) , ~~`pageNotFound`~~ (invalid naming convention), ~~`pages/not-found-page`~~ (no need to add suffix `-page` because its meaning is clear at parent folder)
2. **Files**:
    * Use PascalCase (UppperCamelCase)
    * Files must show the type/purpose of parent folder and will be singular (the only exception is `Component` - to be consistent with Material UI library)
    * Styling (css) file name must be the same with corresponding Javascript (js) files
    * Default files generated/followed framework like React/Redux (`index.js`, `reportWebVitals.js`, `store.js`, etc.) are accepted to do not apply naming rule
    * Example:
        * Correct: `UserService.js`, `LoginPage.js`, `LoginPage.css`, `MainRoute.js`, `CookieUtil.js`, `ProfileOverview.js` (this is a component), `CounterSlice.js`, etc.
        * Incorrect: ~~`loginPage.js`~~ (invalid naming convention), ~~`login-page.js`~~ (invalid naming convention), ~~`Login.js`~~ (the correct 1 is `LoginPage.js`),  ~~`User.js`~~ (the correct 1 is `UserService.js`)
3. Properties / Variables:
    * Use (lower) camelCase for global properties/variables
    * User SCREAMING_SNAKE_CASE for constants
    * Optional: _underScoreAndCamelCase is good to use as local variables
    * Name consists of `n words (n > 2)` should use abbreviation (3-4 letters) for first `(n-1) word(s)`
    * Example:
        * Properties/Variables: `name`, `country`, `phoneNumber`, `emailAddress`, `userImgUrl`
        * Constants: `URL_PATH`, `FILE_NAME`, `USER_IMG_URL`
4. CSS style name:
    * Use BEM format (block-element-modifier)
    * Blocks use hyphen-delimiter
    * Blocks consist of `n words (n > 1)` should use abbreviation (3-4 letters) for first `(n-1) word(s)`
    * Example: `.login__title`, `.login__container`, `.prof-detail__title`, `.prof-detail__container`, `.prof-overview__container`
5. Images/Icons:
    * Use hyphen-delimiter
    * Example: 
        * Correct: `google-icon.svg`, `avatar.png`, `general-profile-background.jpg`
        * Incorrect: ~~`googleIcon.svg`~~, ~~`newImage.jpeg`~~, ~~`NoName.jpg`~~