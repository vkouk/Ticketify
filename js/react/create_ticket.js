var React = require('react');

var CreateTicket = React.createClass({
    getInitialState : function () {
        return {
            categories: [],
            selectedCategoryId: -1,
            name: "",
            description: "",
            price : "",
            created : null
        }
    }, //getInitialState

    componentDidMount: function() {
        this.serverRequest = $.get('./server/display_ticket_category.php', function(categories) {
            this.setState({
                categories: JSON.parse(categories)
            }); //setState
        }.bind(this));
    }, //componentDidMount

    componentWillUnmount: function () {
        this.serverRequest.abort();
    }, //componentWillUnmount

    onCategoryChange: function (e) {
        this.setState({
            selectedCategoryId: e.target.value
        })
    }, //onCategoryChange

    onNameChange: function (e) {
        this.setState({
            name: e.target.value
        })
    }, //onNameChange

    onDescriptionChange: function (e) {
        this.setState({
            description: e.target.value
        })
    }, //onDescriptionChange

    onPriceChange: function (e) {
        this.setState({
            price: e.target.value
        })
    }, //onPriceChange

    onSave: function(e){
        $.post("./server/create_ticket.php", {
                name: this.state.name,
                description: this.state.description,
                price: this.state.price,
                category_id: this.state.selectedCategoryId
            },
            function(res) {
                this.setState({created: res});
                this.setState({name: ""});
                this.setState({description: ""});
                this.setState({price: ""});
                this.setState({selectedCategoryId: -1});
            }.bind(this)
        );
        e.preventDefault();
    }, //onSave

    toggleTicketDisplay: function () {
        this.props.handleToggle();
    }, //toggleTicketDisplay

    render: function() {

        var ticketsOptions = this.state.categories.map(function(category){
            return (
                <option key={category.category_id} value={category.category_id}>{category.cat_name}</option>
            );
        });

        var displayCreateTicketBody = {
            display: this.props.bodyVisible ? 'block' : 'none'
        };

        return (
            <div>
                <div onClick={this.toggleTicketDisplay}><span className="glyphicon glyphicon-plus"></span> Add Ticket</div>

                {

                    this.state.created == "true" ?
                        <div className='alert alert-success'>
                            Ticket was saved.
                        </div>
                        : null
                }

                {

                    this.state.created == "false" ?
                        <div className='alert alert-danger'>
                            Unable to save ticket. Please try again.
                        </div>
                        : null
                }

                <form style={displayCreateTicketBody} onSubmit={this.onSave}>
                    <table className='table table-bordered table-hover'>
                        <tbody>
                        <tr>
                            <td>Name</td>
                            <td>
                                <input
                                    type='text'
                                    className='form-control'
                                    value={this.state.name}
                                    required
                                    onChange={this.onNameChange} />
                            </td>
                        </tr>

                        <tr>
                            <td>Description</td>
                            <td>
                        <textarea
                            type='text'
                            className='form-control'
                            required
                            value={this.state.description}
                            onChange={this.onDescriptionChange}>
                        </textarea>
                            </td>
                        </tr>

                        <tr>
                            <td>Price (€)</td>
                            <td>
                                <input
                                    type='number'
                                    step="0.01"
                                    className='form-control'
                                    value={this.state.price}
                                    required
                                    onChange={this.onPriceChange}/>
                            </td>
                        </tr>

                        <tr>
                            <td>Category</td>
                            <td>
                                <select
                                    onChange={this.onCategoryChange}
                                    className='form-control'
                                    value={this.state.selectedCategoryId}>
                                    <option value="-1">Select category...</option>
                                    {ticketsOptions}
                                </select>
                            </td>
                        </tr>

                        <tr>
                            <td></td>
                            <td>
                                <button
                                    className='btn btn-primary'
                                    onClick={this.onSave}>Save</button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        );
    } //render
});

module.exports = CreateTicket;
