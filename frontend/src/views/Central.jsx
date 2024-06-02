import { Link } from "react-router-dom"


function Central() {
  return (
    <div>
      <nav>
      <Link to={'/'}>ManagePlayers</Link>
      <Link to={'/player-status'} style={{marginLeft:"20px"}}>Manage Player Status</Link>
      </nav>
    </div>
  )
}

export default Central
