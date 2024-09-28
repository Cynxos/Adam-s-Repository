import './Exercise.css';

class Exercise extends Component {
  render() {
    return (
      <div>
        <h1 style={style_header}>Hello World</h1>
        <p className="para">This is a paragraph.</p>
        <a href="https://www.example.com">This is a link</a>
        <form>
          <input type="text" placeholder="Enter text" />
          <button type="submit">Submit</button>
        </form>
        <img src="https://via.placeholder.com/150" alt="Placeholder" />
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </div>
    );
  }
}

export default Exercise;