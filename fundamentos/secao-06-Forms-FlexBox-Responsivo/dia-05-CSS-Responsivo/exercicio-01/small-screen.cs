/*
 * @see http://www.paulirish.com/2012/box-sizing-border-box-ftw/
 * apply a natural box layout model to all elements, but allowing components to change
 */
html {
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

body {
  font-size: 20px;
  margin: 15px;
}


h1 {
  font-size: 35px;
}

h2 {
  display: flex;
  font-size: 35px;
  justify-content: center;
  margin: 0;
}

img {
  max-width: 100%;
}


figure {
  margin: 5px;
  padding: 5px;
}

figcaption {
  font-size: .8em;
}

@media (min-width:768px) {
  body {
    background-color: pink;
    display: flex;
    flex-wrap: wrap;
    max-width: 100%;
  }
  .box {
    display: flex;
    width: 150%;
    margin: 0;
    flex-wrap: wrap;
  }
}

@media (min-width:992px) {
  body {
    background-color: lightblue;
    max-width: 200%;
    display: flex;
    flex-wrap: wrap;
  }

  .box {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
    margin: 0;
  }
}