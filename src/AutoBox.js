import React from 'react';

class AutoBox extends React.Component {
    constructor(props) {
        super();
        this.state = {
            inputVal: "",
            suggestions:[]
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange(event) {
        const text = event.target.value;
        let suggestions = [];
        if (text.length > 0) {
            const reg = new RegExp(`${text}`, 'i');
            suggestions = this.props.suggestions.sort().filter(v => reg.test(v));
        }
        this.setState(() => ({
            inputVal: text,
            suggestions: suggestions
        }));
    }

    renderSuggestions() {
        const {suggestions} = this.state;
        if (suggestions.length === 0) {
            return null;
        }
        return (
            <ul>
                {suggestions.map(item => <li key={item}>{item}</li>)}
            </ul>
        );
    }
    render() {
        return (
            <div>
                <input type="text" value={this.state.inputVal} onChange={this.handleInputChange}/>
                <ul>
                    {this.renderSuggestions()}
                </ul>
            </div>
        );
    }
    
}

export default AutoBox;