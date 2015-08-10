var UIApplicationDelegate = global.UIApplicationDelegate
var UIApplicationMain = global.UIApplicationMain
var UIColor = global.UIColor
var UIPageViewController = global.UIPageViewController
var UIPageViewControllerDataSource = global.UIPageViewControllerDataSource
var UIResponder = global.UIResponder
var UIScreen = global.UIScreen
var UIStoryboard = global.UIStoryboard
var UIViewController = global.UIViewController
var UIWindow = global.UIWindow
var FORWARD = global.UIPageViewControllerNavigationDirectionForward

var AppDelegate = UIResponder.extend({
  applicationWillFinishLaunchingWithOptions: function() {
    this.storyboard = UIStoryboard.storyboardWithNameBundle("pages", null)
    var controller = this.storyboard.instantiateInitialViewController()

    this.window = new UIWindow(UIScreen.mainScreen().bounds)
    this.window.rootViewController = controller
    this.window.makeKeyAndVisible()

    return true
  }
}, {
	protocols: [UIApplicationDelegate]
})

var PagesController = UIPageViewController.extend({
  viewDidLoad: function() {
    UIPageViewController.prototype.viewDidLoad.call(this)
    this.view.backgroundColor = UIColor.whiteColor()
    this.dataSource = this
    this.goto(42)
  },

  pageViewControllerViewControllerBeforeViewController: function(self, page) {
    return this.newPage(page.number - 1)
  },

  pageViewControllerViewControllerAfterViewController: function(self, page) {
    return this.newPage(page.number + 1)
  }
}, {
  name: "PagesController",
  protocols: [UIPageViewControllerDataSource],
})

PagesController.prototype.newPage = function(number) {
  var page = this.storyboard.instantiateViewControllerWithIdentifier("page")
  page.initialize(number)
  page.render()
  return page
}

PagesController.prototype.goto = function(number) {
  this.setViewControllersDirectionAnimatedCompletion(
    [this.newPage(number)],
    FORWARD,
    false, // Animated?
    null
  )
}

var PageController = UIViewController.extend({}, {
  name: "PageController"
})

PageController.prototype.initialize = function(number) {
  this.number = number
}

PageController.prototype.render = function() {
  this.view.viewWithTag(1).text = String(this.number)
}

void UIApplicationMain(0, null, null, AppDelegate.name)
