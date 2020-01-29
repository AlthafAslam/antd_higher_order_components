import React, { Component } from "react";
import PropTypes from "prop-types";
import { Form } from "antd";

/*
 * AntD Form Wrapper
 * @param {layout} : Layout of Form Itemsl
 * @param {hideRequiredMark} : Bool, Hide mandatoru field mark
 * @param {onSubmit} : function will be called if form data validation is successful.
 * */

class AntDFormWrapper extends React.Component {
    static get propTypes() {
        return {
            hideRequiredMark: PropTypes.bool,
            formLayout: PropTypes.oneOf(["horizontal", "vertical", "inline"]),
            onSubmit: PropTypes.func,
            wrappedComponentRef: PropTypes.any
        };
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log("Received values of form: ", values);
                this.props.onSubmit(values);
            }
        });
    };

    render() {
        const { children } = this.props;

        return (
            <div className="col-12">
                <Form
                    onSubmit={this.handleSubmit}
                    {...this.props.formLayout}
                    hideRequiredMark={this.props.hideRequiredMark}
                >
                    {children({ ...this.props })}
                </Form>
            </div>
        );
    }
}

export default Form.create({ name: "AntdForm" })(AntDFormWrapper);
