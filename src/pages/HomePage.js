import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <div className="container">
      <h1 className="title">Social Media Admin Panel</h1>

      <div className="div_button">
        <Link to="/posts"><button className="manage_button" type="button">
            Manage Posts
        </button></Link>
        <Link to="/comments"><button className="manage_button" type="button">
              Manage Comments
        </button></Link>
      </div>

      </div>
      
    </div>
  )
}

export default HomePage