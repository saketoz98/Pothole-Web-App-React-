import React, { Component } from 'react'
import {Form,Select,Button} from 'antd';
const Option = Select.Option;

export class FormContainer extends Component {
  
  
  render() {
    return (
      <div>
        <Form layout="inline" onSubmit={this.handleSubmit}>
        <Form.Item>
        <Select
          showSearch
          style={{ width: 200 }}
          defaultValue={this.props.status}
          optionFilterProp="children"
          filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
          onChange = {this.props.handleStatusChange}
        >
          <Option value="Submitted">Unattended</Option>
          <Option value="In Process">In Process</Option>
          <Option value="Completed">Completed</Option>
        </Select>

        </Form.Item>
      </Form>

      </div>
    )
  }
}

export default FormContainer;
