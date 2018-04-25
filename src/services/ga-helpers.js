import ReactGA from 'react-ga';
import * as Scroll from 'react-scroll';

export const pageView = path => {
  ReactGA.pageview(path);
};

export const handleNavClick = (e, history) => {
  history.push(e.target.name);
  Scroll.animateScroll.scrollToTop();
  ReactGA.event({
    category: 'content interaction',
    action: `clicked button: ${e.target.id}`,
    label: e.target.id
  });
};

export const clicked = id => {
  Scroll.animateScroll.scrollToTop();
  ReactGA.event({
    category: 'content interaction',
    action: `clicked: ${id}`,
    label: id
  });
};
