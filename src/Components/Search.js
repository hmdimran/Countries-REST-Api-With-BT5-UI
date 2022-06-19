import React, { useEffect, useState } from 'react'

export default function Search(props) {

  const [searchText,setSearchText] = useState("");

  const searchHandle = (e) => {
    setSearchText(e.target.value);
  }

  useEffect(()=>{
    props.onSearch(searchText);
  },[searchText]);

  console.log(searchText);
  return (
    <div className="row pt-4 pb-5">
        <div className="col-md-12">   
            <div className="input-group input-group-lg">
                <input type="text"  className='form-control' placeholder='Search Your Country' onChange={searchHandle} value={searchText}/>
            </div>
        </div>
    </div>
  )
}
