import ReactOnRails from 'react-on-rails';

import Welcome from '../bundles/Welcome/components/Welcome';

// This is how react_on_rails can see the Welcome in the browser.
ReactOnRails.register({
  Welcome,
});
