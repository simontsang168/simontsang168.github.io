/**
 * Counter
 */
class Counter extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            count: 0
        };
    }

    add(e){
        var increment = 1;
        if(e.target.getAttribute('data-increment') !== null){
            increment = parseInt(e.target.getAttribute('data-increment'), 10);
        }

        this.setState({
            count: this.state.count + increment
        });
    }

    minus(){
        this.setState({
            count: this.state.count - 1
        });
    }

    render(){
        return (<div>
            <button className="btn btn-lg" children="-" onClick={this.minus.bind(this)} />
            <button className="btn btn-lg" children={this.state.count} disabled={true} />
            <button className="btn btn-lg" children="+1" onClick={this.add.bind(this)} />
            <button className="btn btn-lg" children="+2" onClick={this.add.bind(this)} data-increment="2" />
            <button className="btn btn-lg" children="+3" onClick={this.add.bind(this)} data-increment="3" />
            </div>);
    }
}

ReactDOM.render(
<div><Counter /><Counter /></div>,
    document.getElementById('root')
);

