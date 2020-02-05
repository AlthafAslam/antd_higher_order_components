import React, {Component} from 'react';
import {
    FormComponent,
    TextBoxComponent,
    FormButtonComponent,
    PasswordBoxComponent,
    DatePickerComponent
} from "../Components/HigherOrderComponentMapping"
import {antDComponentsDateFormat, formItemLayout} from "../Components/ComponentConfigs/ComponentConfigs";

export default class LoginScreen extends Component {

    saveFormRef = formRef => {
        this.formRef = formRef;
    };

    handleSubmitLogin(val) {
        console.log("val of Form", val)
    }

    render() {
        return (
            <div className="center">
                <div className="container">
                    <FormComponent
                        wrappedComponentRef={this.saveFormRef}
                        onSubmit={val => this.handleSubmitLogin(val)}
                        hideRequiredMark={true}
                        formLayout={formItemLayout}
                    >
                        {props => (
                            <>
                                <TextBoxComponent
                                    label={"Enter your user id"}
                                    placeholder={"User Id"}
                                    decorator={"username"}
                                    required={true}
                                    message={"Please enter your username"}
                                    {...props}
                                />
                                <PasswordBoxComponent
                                    label={"Enter your password"}
                                    placeholder={"Password"}
                                    decorator={"password"}
                                    required={true}
                                    message={"Please enter your password"}
                                    {...props}
                                />
                                <DatePickerComponent
                                    label={"Select date of birth"}
                                    decorator={"dob"}
                                    defaultValue={""}
                                    required={false}
                                    onChange={(date) => {
                                        //onChangeFunction
                                    }}
                                    format={antDComponentsDateFormat.DateMonthYear}
                                    {...props}
                                />
                                <div className="login-form-button">
                                    <FormButtonComponent
                                        buttonName={"Login"}
                                        width={"100%"}
                                        // loading={this.state.loading}
                                        {...props}
                                    />
                                </div>
                            </>
                        )}
                    </FormComponent>
                </div>
            </div>
        );
    }


}
