import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    Form,
    Input,
} from "antd";

/*
 * Password Antd Wrapper
 * @param {label} : Field label
 * @param {decorator} : Field decorator
 * @param {required} : Field required or not
 * @param {message} : Field message
 * @param {validators} : Field level validators
 * @param {placeholder} : Placeholder
 * @param {confirmDirty} : Confirm if password is dirty or not
 * @param {validator} : Fixed Validatoes
 */

export default class AntDPasswordBoxWrapper extends Component {
    static get propTypes() {
        return {
            form: PropTypes.any,
            label: PropTypes.any,
            decorator: PropTypes.any,
            required: PropTypes.any,
            message: PropTypes.any,
            validators: PropTypes.any,
            type: PropTypes.any,
            placeholder: PropTypes.any,
        };
    }

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <Form.Item
                label={this.props.label}
            >
                {getFieldDecorator(this.props.decorator,
                    {
                        initialValue: this.props.editDataAvailable ? this.props.editFormData[this.props.decorator] : null,
                        rules: [
                            {
                                required: this.props.required,
                                message: this.props.message,
                            },
                            // ...this.props.validators
                        ]
                    }
                )
                (<Input.Password
                    placeholder={this.props.placeholder}
                />)
                }
            </Form.Item>
        );
    }
}


