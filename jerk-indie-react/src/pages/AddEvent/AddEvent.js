import React, { Component } from "react";
import { Form, Input, Button, Radio, DatePicker, TimePicker, Select } from 'antd';
import 'bulma/css/bulma.css';
import './AddEvent.css';
import WrappedDynamicFieldSet from "../../components/AddField";

const FormItem = Form.Item;

const { TextArea } = Input;

let id = 0;

function onChange(date, dateString) {
  console.log(date, dateString);
}

function onChange(time, timeString) {
  console.log(time, timeString);
}

const Option = Select.Option;


function handleChange(value) {
  console.log(`selected ${value}`);
}

class AddEvent extends Component {
  // Setting our component's initial state
  constructor() {
    super();
    this.state = {
      formLayout: 'vertical',
    };
  }






  render() {

    const { formLayout } = this.state;


    return (
      <div className="AddEvent">
        <div className="container main-container">
          <div className="columns">
            <div className="column">
              <Form layout={formLayout}>

                <FormItem label="Date">
                  <DatePicker onChange={onChange} />
                </FormItem>

                <FormItem label="Time">
                  <TimePicker use12Hours format="h:mm a" onChange={onChange} />
                </FormItem>

                <FormItem label="Bands" className="bands-input">
                  <WrappedDynamicFieldSet />
                </FormItem>

                <FormItem label="Location">
                  <Input placeholder="input placeholder" />
                </FormItem>

                <FormItem label="Information">
                  <TextArea placeholder="Autosize height based on content lines" autosize={{ minRows: 2, maxRows: 6 }} />
                </FormItem>

                <FormItem label="Genres">
                  <Select
                    mode="multiple"
                    style={{ width: '100%' }}
                    placeholder="Please select"

                    onChange={handleChange}
                  >
                    <Option key='rock'>Rock</Option>
                    <Option key='pop'>Pop</Option>
                    <Option key='indie'>Indie</Option>
                    <Option key='hip-hop'>Hip-Hop</Option>
                    <Option key='punk'>Punk</Option>
                    <Option key='metal'>Metal</Option>
                  </Select>
                </FormItem>


                <FormItem >
                  <Button type="primary">Submit</Button>
                </FormItem>
              </Form>
            </div>
            <div className="column">

            </div>
          </div>



        </div>
      </div>
    );
  }
}

export default AddEvent;
