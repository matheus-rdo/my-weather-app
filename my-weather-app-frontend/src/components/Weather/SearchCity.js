import React from "react";


const SearchCity = props => (
    <form onSubmit={props.getCity} className="row">

        <div className="col-7">
            <input type="text" name="city" placeholder="Cidade..." className="w-100" />
        </div>
        <div className="col-5">
            <button className="btn btn-outline-light w-100">Pesquisar</button>
        </div>


    </form>
)

export default SearchCity