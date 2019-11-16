// import React, { Component } from "react";
// // import { loadItemsAsync } from "../../actions";
// // import { connect } from "react-redux";
// import { Link } from "react-router-dom";

// class Searchbar extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       query: ""
//     };
//   }

//   handleInputChange = () => {
//     this.setState({
//       query: this.search.value
//     });

//     const toLower = this.state.query.toLowerCase();

//     this.props.items.map(item => {
//       console.log(item.name.includes(toLower));
//       if (item.name.includes(toLower)) {
//         return item.id;
//       }
//     });
//   };

//   render() {
//     return (
//       <form>
//         <input
//           type="text"
//           placeholder="Search by item name..."
//           ref={input => (this.search = input)}
//           onChange={this.handleInputChange}
//         />
//         <button>
//           <Link
//             to={location => ({
//               ...location,
//               pathname: `/item/${this.props.items.id}`
//             })}
//           >
//             Search
//           </Link>
//         </button>
//       </form>
//     );
//   }
// }

// // export default connect(mapStateToProps)(Searchbar);
// export default Searchbar;
