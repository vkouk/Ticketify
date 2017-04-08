const React = require('react');

const SearchTickets = React.createClass({

    handleSort: function(e) {
        this.props.onReOrder(e.target.id, this.props.orderDir);
    }, //handleSort

    handleOrder: function(e) {
        this.props.onReOrder(this.props.orderBy, e.target.id);
    }, //handleSort

    handleSearch: function(e) {
        this.props.onSearch(e.target.value);
    }, //handleSearch

    render: function() {
        return(
            <div className="row search-tickets">
                <div className="col-sm-offset-3 col-sm-6">
                    <div className="input-group">
                        <input id="SearchTickets" onChange={this.handleSearch} placeholder="Search" type="text" className="form-control" aria-label="Search Tickets" />
                        <div className="input-group-btn">
                            <button type="button" className="btn btn-warning dropdown-toggle"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sort by: <span className="caret"></span></button>
                            <ul className="dropdown-menu dropdown-menu-right">
                                <li><a href="#" id="name" onClick={ this.handleSort }>Name { (this.props.orderBy === 'name') ? <span className="glyphicon glyphicon-ok"></span>: null }</a></li>
                                <li><a href="#" id="price" onClick={this.handleSort}>Price { (this.props.orderBy === 'price') ? <span className="glyphicon glyphicon-ok"></span>: null }</a></li>
                                <li role="separator" className="divider"></li>
                                <li><a href="#" id="asc" onClick={this.handleOrder}>Asc { (this.props.orderDir === 'asc') ? <span className="glyphicon glyphicon-ok"></span>: null }</a></li>
                                <li><a href="#" id="desc" onClick={this.handleOrder}>Desc { (this.props.orderDir === 'desc') ? <span className="glyphicon glyphicon-ok"></span>: null }</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        ) // return
    } // render
}); //SearchTickets

module.exports = SearchTickets;
