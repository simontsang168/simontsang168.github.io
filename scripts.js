/*
The simplist React component ever.

It just renders an H1 tag into the body of the page. Since
JSX is basically just HTML, you can use any valid tag you want.
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
            <button className="btn" children="-" onClick={this.minus.bind(this)} />

    <span className="badge badge-primary" children={this.state.count} />
    <button className="btn" children="+1" onClick={this.add.bind(this)} />
    <button className="btn" children="+2" onClick={this.add.bind(this)} data-increment="2" />
            <button className="btn" children="+3" onClick={this.add.bind(this)} data-increment="3" />
            </div>);
    }
}

ReactDOM.render(
<div><Counter /><Counter /></div>,
    document.getElementById('root')
);

