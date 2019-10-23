import React, { Component } from "react";
import "./App.css";
import ReactTable from "react-table";
import "react-table/react-table.css";
// import Add from "./Add";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json
        });
      });
  }
  render() {
    // var { isLoaded, items } = this.state;
    // if (!isLoaded) {
    //   return <div>Loading...</div>;
    // } else {
    //   return (
    //     <div className="App">
    //       <th>User id</th>
    //       <th>Id</th>
    //       <th>Title</th>
    //       <th>Body</th>
    //       {items.map(item => (
    //         <table key={item.id}>
    //           <tr>
    //             <td>{item.userId}</td>
    //             <td>{item.id}</td>
    //             <td>{item.title}</td>
    //             <td>{item.body}</td>
    //             <td>More details>>></td>
    //           </tr>
    //         </table>
    //       ))}
    //       ;
    //     </div>
    //   );
    // }

    const columns = [
      {
        Header: "User ID",
        accessor: "userId",
        width: 100,
        maxWidth: 100,
        minWidth: 100
      },
      {
        Header: "ID",
        accessor: "id",
        width: 100,
        maxWidth: 100,
        minWidth: 100
      },
      {
        Header: "Title",
        accessor: "title"
      },
      {
        Header: "Body",
        accessor: "body"
      },
      {
        Header: "Action",
        Cell: props => {
          return <button className="">More details</button>;
        }
      }
    ];

    return (
      <div>
        <ReactTable
          columns={columns}
          data={this.state.items}
          defaultPageSize={10}
        />
        {/* <Add /> */}
      </div>
    );
  }
}

export default App;
