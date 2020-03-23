import { visit } from './visit';

const callback = mutationList => {
  mutationList.forEach(mutation => {
      if (mutation.addedNodes) {
          for (let i=0; i<mutation.addedNodes.length; i++) {
              visit(mutation.addedNodes[i]);
          }
      }
  });
};

const onDomLoaded = () => {
  console.info('Locolizard intialized');
  var observer = new MutationObserver(callback);
  var observerOptions = {
      childList: true,
      // characterData: true,
      // attributes: true,
      subtree: true
  };
  observer.observe(document.body, observerOptions);
  visit(document.body);
};

document.addEventListener('DOMContentLoaded', onDomLoaded);