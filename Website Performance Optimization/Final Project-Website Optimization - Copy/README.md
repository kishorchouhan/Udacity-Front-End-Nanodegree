## Website Performance Optimization portfolio project

[Udacity Front-End Web Developer Nanodegree](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001) - Project

The aim of this project is to optimize the critical rendering path and make the index.html page render as quickly as possible by applying the techniques picked up in the [Critical Rendering Path course](https://www.udacity.com/course/ud884).

Also we had to optimize FPS in pizza.html.("Do this after taking Browser Rendering Optimization course("https://www.udacity.com/course/ud860")")

## Links to GitHub Repository (Master Branch)

* GitHub project repository udacity: [https://github.com/udacity/frontend-nanodegree-mobile-portfolio](https://github.com/udacity/frontend-nanodegree-mobile-portfolio "GitHub project repository udacity")

* My GitHub Project Repository(code of "after" website): [https://github.com/kishorchouhan/Website-Optimization-Udacity-Project](https://github.com/kishorchouhan/Website-Optimization-Udacity-Project "My GitHub Project Repository")

* My Project Website Is Hosted Here: [https://kishorchouhan.github.io/Website-Optimization-Udacity-Project/](https://kishorchouhan.github.io/Website-Optimization-Udacity-Project/ "My Hosted Website")

To run the website and take code on local machine:

1. Download the GitHub zip file or clone the repository onto your local workstation:
	* zip file [https://github.com/kishorchouhan/Website-Optimization-Udacity-Project/archive/master.zip](https://github.com/kishorchouhan/Website-Optimization-Udacity-Project/archive/master.zip "download zip file")
	* git clone [https://github.com/kishorchouhan/Website-Optimization-Udacity-Project.git/](https://github.com/kishorchouhan/Website-Optimization-Udacity-Project.git "git clone repository")
2. Open a browser window and navigate to the index.html file in your directory.

## Part 1: Optimize PageSpeed Insights score for index.html

To first start this project, we had to setup the project.

1. Check out the repository
1. To inspect the site on your phone, you can run a local server

  ```bash
  $> cd /path/to/your-project-folder
  $> python -m SimpleHTTPServer 8080
  ```

1. Open a browser and visit localhost:8080
1. Download and install [ngrok](https://ngrok.com/) to the top-level of your project directory to make your local server accessible remotely.

  ``` bash
  $> cd /path/to/your-project-folder
  $> ./ngrok http 8080
  ```

1. Copy the public URL ngrok gives you and try running it through PageSpeed Insights! Optional: [More on integrating ngrok, Grunt and PageSpeed.](http://www.jamescryer.com/2014/06/12/grunt-pagespeed-and-ngrok-locally-testing/)

### Optimizations

The following optimizations were done.

1. Inline `style.css` in the index.html file.
2. Use a `media=print` query on print.css so that it is only rendered when printing.
3. Move google analytics to the end of the `body` tag and made its script load async.
4. Reduce dimensions of `pizerria.jpg` to `pizzeriaSmall.jpg` because width of that image on page is only 100px.

## Part 2: Optimize Frames per Second in pizza.html

In this, we had to modify `views/js/main.js`. FPS Counter/HUD Display useful in Chrome developer tools has been described here: [Chrome Dev Tools tips-and-tricks](https://developer.chrome.com/devtools/docs/tips-and-tricks).

To first test this, start `views/pizza.html` in the browser and open Chrome Dev Tools. Have a look at the Performance or Timeline tab.

### Optimizations

####Optimizing the Scrolling

I made the following changes in order to optimize the scrolling:

1. In main.js, there was a loop that created 200 small moving pizzas in the background, which was an overkill because not all were displayed. I was able to cut that down to 20. The number is now dynamic, based on screen height.
2. The updatePositions function had calculations within a loop that were redundant and could be moved outside of the loop.

####Optimizing the Pizza Resizing

I made the following changes to optimize the pizza resizing:

1. The changePizzaSizes function was using the same thing multiple times so created a new myRandomPizzas variable.
2. The determineDx function has no use so removed this function and embedded the switch object inside changePizzaSizes function.
3. End the redundancy of changing width from px to % in changePizzaSizes function.
4. The changePizzaSizes had a very inefficient for loop. I moved some calculations out of the for loop.


## From project:
## Website Performance Optimization portfolio project

Your challenge, if you wish to accept it (and we sure hope you will), is to optimize this online portfolio for speed! In particular, optimize the critical rendering path and make this page render as quickly as possible by applying the techniques you've picked up in the [Critical Rendering Path course](https://www.udacity.com/course/ud884).

To get started, check out the repository and inspect the code.

### Getting started

#### Part 1: Optimize PageSpeed Insights score for index.html

Some useful tips to help you get started:

1. Check out the repository
1. To inspect the site on your phone, you can run a local server

  ```bash
  $> cd /path/to/your-project-folder
  $> python -m SimpleHTTPServer 8080
  ```

1. Open a browser and visit localhost:8080
1. Download and install [ngrok](https://ngrok.com/) to the top-level of your project directory to make your local server accessible remotely.

  ``` bash
  $> cd /path/to/your-project-folder
  $> ./ngrok http 8080
  ```

1. Copy the public URL ngrok gives you and try running it through PageSpeed Insights! Optional: [More on integrating ngrok, Grunt and PageSpeed.](http://www.jamescryer.com/2014/06/12/grunt-pagespeed-and-ngrok-locally-testing/)

Profile, optimize, measure... and then lather, rinse, and repeat. Good luck!

#### Part 2: Optimize Frames per Second in pizza.html

To optimize views/pizza.html, you will need to modify views/js/main.js until your frames per second rate is 60 fps or higher. You will find instructive comments in main.js. 

You might find the FPS Counter/HUD Display useful in Chrome developer tools described here: [Chrome Dev Tools tips-and-tricks](https://developer.chrome.com/devtools/docs/tips-and-tricks).

### Optimization Tips and Tricks
* [Optimizing Performance](https://developers.google.com/web/fundamentals/performance/ "web performance")
* [Analyzing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/analyzing-crp.html "analyzing crp")
* [Optimizing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/optimizing-critical-rendering-path.html "optimize the crp!")
* [Avoiding Rendering Blocking CSS](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css.html "render blocking css")
* [Optimizing JavaScript](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/adding-interactivity-with-javascript.html "javascript")
* [Measuring with Navigation Timing](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp.html "nav timing api"). We didn't cover the Navigation Timing API in the first two lessons but it's an incredibly useful tool for automated page profiling. I highly recommend reading.
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/eliminate-downloads.html">The fewer the downloads, the better</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer.html">Reduce the size of text</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization.html">Optimize images</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching.html">HTTP caching</a>

### Customization with Bootstrap
The portfolio was built on Twitter's <a href="http://getbootstrap.com/">Bootstrap</a> framework. All custom styles are in `dist/css/portfolio.css` in the portfolio repo.

* <a href="http://getbootstrap.com/css/">Bootstrap's CSS Classes</a>
* <a href="http://getbootstrap.com/components/">Bootstrap's Components</a>
