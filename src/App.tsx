import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

import CategoryItem from './components/CategoryItem';
import Image from './components/Image';
import SearchForm from './components/SearchForm';

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* other styles */
  *, *::after, *::before {
    box-sizing: border-box;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <div>
        <h1>SnapShot</h1>
        <SearchForm />
        <div>
          <CategoryItem />
        </div>
        <h2>Mountain Pictures</h2>
        <div>
          <Image />
        </div>
      </div>
    </>
  );
}

export default App;
