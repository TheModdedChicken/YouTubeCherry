export function monitorElement(rootNode: Node, targetNode: string, callback: (element: Element) => void) {
  var observer = new MutationObserver(function (mutations, me) {
    var element = document.getElementById(targetNode);
    if (element) {
      callback(element);
      me.disconnect();
      return;
    }
  });
  
  observer.observe(rootNode, {
    childList: true,
    subtree: true
  });
}