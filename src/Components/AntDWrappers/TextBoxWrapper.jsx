import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    Form,
    Input,
} from "antd";


/*
     * Text Box Antd Wrapper
     * @param {label} : Field label
     * @param {decorator} : Field decorator
     * @param {required} : Field required or not
     * @param {message} : Field message
     * @param {validators} : Field level validators
     * @param {placeholder} : Placeholder
     * @param {editFormData} : Edit form data
     * @param {editDataAvailable} :Edit Data Available or not
     * @param {disabled} : Disabled field or not
     * @param {defaultValue} : Default value
     * @param {width} : Width of input box. Style parameter
*/


export default class AntDTextBoxWrapper extends Component {
    static get propTypes() {
        return {
            editFormData: PropTypes.any,
            editDataAvailable: PropTypes.any,
            form: PropTypes.any,
            label: PropTypes.any,
            decorator: PropTypes.any,
            required: PropTypes.any,
            message: PropTypes.any,
            validators: PropTypes.array,
            placeholder: PropTypes.any,
            disabled: PropTypes.bool,
            defaultValue:PropTypes.string,
            width: PropTypes.number,
        };
    }

    render() {
        const {form}=this.props;
        const {getFieldDecorator} = form;
        return (
            <Form.Item
                label={this.props.label}
            >
                {getFieldDecorator(this.props.decorator,
                    {
                        initialValue: this.props.value,
                        rules: [
                            {
                                required: this.props.required,
                                message: this.props.message,
                            },
                            {...this.props.validators}
                        ]
                    }
                )
                (<Input
                    placeholder={this.props.placeholder}
                    disabled={this.props.disabled}
                    style={{width:this.props.width}}
                />)
                }
            </Form.Item>
        );
    }
}


