export function log(message: string, options?:{
  type: 'info' | 'warn' | 'error'
}) {
  const messageHeader = `[YouTube Cherry]: `
  var outMessage = messageHeader + message

  switch(options?.type) {
    case "error":
      console.error(outMessage)
      break;
    case "warn":
      console.warn(outMessage)
      break;
    default:
      console.log(outMessage)
  } 
}

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