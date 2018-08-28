import { CardImg } from 'reactstrap'

CardImg.propTypes = {
    // Pass in a Component to override default element
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    className: PropTypes.string
  };

  export default CardImg;