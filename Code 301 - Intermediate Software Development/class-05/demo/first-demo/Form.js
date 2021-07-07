import React from 'react';

class Form extends React.Component {
  return (<div>foo</div>)
}

return (
  <>
  <form>
    <input
    onChange={this.handleChangeAge}
    name="age"
    type="number"
    placeholder="Enter Your Age..."
    />
    <hr />
    <select onChange={this.handleChangePerson} name="person"
      <option value="">Select One</option>
      <option value="John">John</option>
      <option value="Cathy">Cathy</option>
      <option value="Zach">Zach</option>
      <option value="Allie">Allie</option>
    </select>
  </form>
</>
)
)

export default Form