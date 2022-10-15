
function SearchBar() {
  const style = {
    marginTop: '30px',
    height:'40px',
    width:'400px',
    marginBottom:'100px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
    return (
      <div style={{margin:'40px'}}>
        <form style={style} class="d-flex mt-3" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
   </div>
    );
  }
  
  export default SearchBar;
  