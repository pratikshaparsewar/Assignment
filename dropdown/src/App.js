import React from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

const divStyle = {
  maxWidth: '200px',
  margin: '30px auto'
};

class App extends React.Component {
  state = {
    selectedOption: '',
  }
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Selected: ${selectedOption.label}`);
  }
  render() {
    const { selectedOption } = this.state;
    const value = selectedOption && selectedOption.value;

    return (
      <div className="select-style" style={divStyle}>
      <Select
        className="select-style"
        name="form-field-name"
        value={value}
        onChange={this.handleChange}
        options={[
          { value: 'one', label: 'One' },
          { value: 'two', label: 'Two' },
          { value: 'three', label: 'three' },
          { value:'four', label: 'four'},
          { value: 'Five', label: 'Five' },
          { value: 'Six', label: 'Six' },
          { value: 'Seven', label: 'Seven' },
          { value: 'Eight', label: 'Eight' }
        ]}
      />
      </div>
    );
  }
}

export default App; 