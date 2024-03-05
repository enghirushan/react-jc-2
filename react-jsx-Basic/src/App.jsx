
function App() {
  
  const getFullName = (f,m,s) =>{ /*arrow function*/ 
      return `${f} ${m} ${s}`; /* Template literals */

  }


  return (
    <>
      <div className="cout">
      <h1>Employee Details</h1>
      <p>Full Name function :{getFullName(" Haritha" ,"Hirushan","ilangasinghe")}</p>
      </div>


    </>
  )
}

export default App
