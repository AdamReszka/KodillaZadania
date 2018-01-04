import {connect} from 'react-redux';
import CommentsList from './CommentsList';

const mapStateToProps = state => {
  console.log('state ',state);
  return{
    comments: state.comments
  }

};

export default connect(mapStateToProps)(CommentsList);
