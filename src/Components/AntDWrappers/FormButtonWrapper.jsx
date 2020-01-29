import React, { Component } from "react";
import PropTypes from "prop-types";
import { Form, Button, Popover } from "antd";

/*
 * Button Antd Wrapper - to be used inside form, as it neef formRef
 * @param {label} : Field label
 * @param {type} : Fixed button types
 * @param {buttonName} : Normal Button name
 * @param {hoverButton} : Bool; True for hover-button
 * @param {hoverComponent} : Any component to show on hover panel
 * @param {hoverButtonName} : Hover Button name
 * @param {validator} : Fixed Validators
 * @param {disabled} : Bool, disabled state of button
 * @param {width} : width of button
 */

export default class AntDFormButtonWrapper extends Component {
    static get propTypes() {
        return {
            form: PropTypes.any,
            label: PropTypes.any,
            type: PropTypes.any,
            buttonName: PropTypes.string,
            hoverButton: PropTypes.bool,
            hoverComponent: PropTypes.any,
            hoverButtonName: PropTypes.string,
            disabled: PropTypes.bool,
            width: PropTypes.any
        };
    }

    render() {
        return (
            <Form.Item label={this.props.label}>
                <Button
                    htmlType="submit"
                    type={this.props.type}
                    block={this.props.blockButton}
                    disabled={this.props.disabled}
                    ghost={this.props.ghost}
                    loading={this.props.loading}
                >
                    {this.props.buttonName}
                </Button>
            </Form.Item>
        );
    }
}
