const dictionary = {
  'Create Little Joy': 'Erstelle eine kleine Freude',
  'Invitation': 'Einladung',
  'Little Joy - personal digital gift cards': 'Little Joy - persönliche digitale Geschenke',
  'Welcome to Little Joy': 'Willkommen bei Little Joy',
  'Sign up': 'REGISTRIEREN',
  'SIGN UP': 'REGISTRIEREN',
  'Sign in': 'Einloggen',
  'SIGN IN': 'Einloggen',
  'Home': 'Start',
  'Happy Birthday!': 'Alles Gute zum Geburtstag!',
  'Nerd Bag': 'Nerd-Tasche',
  'Some examples...': 'Einige Beispiele...',
  'Register with your e-mail address': 'Registrier Dich mit Deiner Email-Adresse',
  'How does it work?': 'Wie funktioniert es?',
};

const allowedTags = {
'DIV': true, 
'BODY': true, 
'H1': true, 
'H2': true, 
'H3': true, 
'H4': true, 
'H5': true, 
'H6': true, 
'P': true, 
'UL': true, 
'OL': true, 
'LI': true, 
'SPAN': true, 
'TABLE': true,
'IFRAME': true,
'A': true,
'TD': true,
'TH': true,
'TR': true,
'MAIN': true,
'HEADER': true,
'ARTICLE': true,
'LABEL': true,
};

const visit = elem => {
  if (elem.tagName && !allowedTags[elem.tagName]) {
      return;
  }
  
  if (elem.nodeType === Node.TEXT_NODE && elem.nodeValue) {
      if (dictionary[elem.nodeValue]) {
          elem.textContent = dictionary[elem.nodeValue];
      }
      return;
  }
  for (let i=0; i<elem.childNodes.length; i++) {
      visit(elem.childNodes[i]);
  }
};

const callback = mutationList => {
  mutationList.forEach((mutation) => {
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