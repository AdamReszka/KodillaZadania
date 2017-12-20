import {connect} from 'react-redux';
import Comment from './Comment';
import {thumbUpComment} from './index';
import {thumbDownComment} from './index';

const mapDispatchToProps = dispatch => ({
  thumbUpComment: (id) => dispatch(thumbUpComment(id));
  thumbDownComment: (id) => dispatch(thumbDownComment(id));
});

export default connect(null, mapDispatchToProps)(Comment);
