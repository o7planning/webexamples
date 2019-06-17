// Private Function
// @axis: 'X', 'Y', 'x', 'y'
function __isScrollbarShowing__(domNode, axis, computedStyles) {
    axis = axis.toUpperCase();
    var type;

    if(axis === 'Y') {
         type = 'Height';
    } else {
         type = 'Width';
    }

    var scrollType = 'scroll' + type;
    var clientType = 'client' + type;
    var overflowAxis = 'overflow' + axis;

    var hasScroll = domNode[scrollType] > domNode[clientType];

    // Check the overflow and overflowY properties for "auto" and "visible" values
    var cStyle = computedStyles || window.getComputedStyle(domNode)
    return hasScroll && (cStyle[overflowAxis] == "visible"
                         || cStyle[overflowAxis] == "auto"
                         )
          || cStyle[overflowAxis] == "scroll";
}

// @domNode: Optional.
function isScrollbarXShowing(domNode)  {
    if(!domNode) {
       domNode = document.documentElement;
    }
    return __isScrollbarShowing__(domNode, 'x');
}

// @domNode: Optional.
function isScrollbarYShowing(domNode)  {
    if(!domNode) {
       domNode = document.documentElement;
    }
    return __isScrollbarShowing__(domNode, 'y');
}

// Scrollbar X or Scrollbar Y is showing?
// @domNode: Optional.
function isScrollbarShowing(domNode)  {
    return isScrollbarXShowing(domNode) || isScrollbarYShowing(domNode);
}
