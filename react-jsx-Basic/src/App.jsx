
function App() {
  
  const firstName="Haritha";
  const MiddleName = "Hirushan";
  const  LastName = "ilangasinghe";

  const getFullName = (f,m,s) =>{ /*arrow function*/ 
      return `${f} ${m} ${s}`; /* Template literals */

  }
  
  const arr = ["apple" , "Graph" , "Oranges"];
   
  return (
    <>
      <div className="cout">
      <h1>Employee Details</h1>
      <p>Full Name function :{getFullName(" Haritha" ,"Hirushan","ilangasinghe")}</p>

      <p>{firstName} likes to eat {arr[0]}</p>
      </div>

        <p>hhh</p>
    </>
  )
}

export default App
