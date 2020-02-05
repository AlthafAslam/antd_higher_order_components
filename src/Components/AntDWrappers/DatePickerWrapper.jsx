import React, {Component} from "react";
import PropTypes from "prop-types";
import {Form, DatePicker} from "antd";
import moment from 'moment';

export default class AntDDatePicker extends Component {
    static get propTypes() {
        return {
            label: PropTypes.string,
            required: PropTypes.bool,
            message: PropTypes.string,
            onChange: PropTypes.func,
            decorator: PropTypes.any,
            format: PropTypes.string,
            width: PropTypes.any
        };
    }

    render() {
        const {getFieldDecorator} = this.props.form;

        return (
            <Form.Item label={this.props.label}>
                {getFieldDecorator(this.props.decorator, {
                    initialValue: this.props.defaultValue && moment(this.props.defaultValue),
                    rules: [
                        {
                            required: this.props.required,
                            message: this.props.message
                        },
                        // {...this.props.validator}
                    ]
                })(
                    <DatePicker
                        defaultValue={moment(this.props.defaultValue)}
                        onChange={this.props.onChange}
                        format={this.props.format}
                        disabled={this.props.disabled}
                        style={{width: this.props.width}}
                    />
                )}
            </Form.Item>
        );
    }
}
