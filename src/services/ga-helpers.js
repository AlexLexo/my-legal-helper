import ReactGA from 'react-ga';

export const pageView = path => {
  ReactGA.pageview(path);
};

export const handleNavClick = (e, history) => {
  history.push(e.target.name);
  ReactGA.event({
    category: 'content interaction',
    action: `clicked button: ${e.target.id}`,
    label: e.target.id
  });
};

export const clicked = id => {
  ReactGA.event({
    category: 'content interaction',
    action: `clicked: ${id}`,
    label: id
  });
};