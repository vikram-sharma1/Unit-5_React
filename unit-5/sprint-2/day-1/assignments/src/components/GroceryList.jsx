function GroceryList({value}) {

  // console.log({value})

    return (
      <div className="box">
       {value.title} - {value.status ? "Done" : "Not Done"}
       <button>Toggle</button>
       <button>Delete </button>
      </div>
    );
  }
  
  export default GroceryList;
