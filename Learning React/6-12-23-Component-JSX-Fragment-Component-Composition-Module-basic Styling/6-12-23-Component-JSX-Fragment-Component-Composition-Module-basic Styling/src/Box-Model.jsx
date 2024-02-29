
function BoxModel() {
  return (
    <div>

        <header className="header">Header </header>
        <nav>Navbar</nav>
        <slider>Slider</slider>
        <section className="content">
            <div className="card">
                <img src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D" alt="" height={"50%"} width="100%" />
                <h2>Title</h2>
                <p>SOme info</p>
            </div>
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
        </section>
        <footer>footer</footer>
      
    </div>
  )
}

export default BoxModel
