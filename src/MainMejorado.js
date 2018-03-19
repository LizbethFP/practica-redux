import {connect} from 'react-redux';

import Main from "./components/Main";

const MainWithRedux = connect(
  function mapStateToProp(state) {
    const { cosita } = state.Reducer;

    return {
      datos: cosita
    };
 })(Main);


export default MainWithRedux;