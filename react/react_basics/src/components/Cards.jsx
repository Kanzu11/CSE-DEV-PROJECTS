function Cards({ active, completed, total }) {
  return (
    <div className="info">
      <div className="infodiv">
        <h2>{active}</h2>
        <h3>Active</h3>
      </div>
      <div className="infodiv">
        <h2>{completed}</h2>
        <h3>Completed</h3>
      </div>
      <div className="infodiv">
        <h2>{total}</h2>
        <h3>Total</h3>
      </div>
    </div>
  )
}

export default Cards;