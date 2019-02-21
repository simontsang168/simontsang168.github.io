// import { debug } from "util";  

class Bookmarks extends React.Component {
  constructor(props){
      super(props);

      this.state = {
          bookmarks: null
      };

      this.loadBookmarkData()
  }

  loadBookmarkData(){
    fetch('http://localhost:3001/data/bookmarks.json')
    .then(function(response) {
      return response.json();
    })
    .then(bookmarks => {
      // debugger
      this.setState({
        bookmarks: bookmarks
      })
    });
  }

  render(){
    let {bookmarks} = this.state

    return <div>
      {bookmarks && bookmarks.map((item, key) => {
        return <div className="card-body" key={key}>
          <h5 className="card-title"><a href={item.url}>{item.name}</a></h5>
          {item.description && <p className="card-text">{item.description}</p>}
          <a href={item.url} className="btn btn-primary">Link</a>
        </div>
      })}

    </div>;
  }
}

ReactDOM.render(<Bookmarks />, document.getElementById('bookmarks'));

