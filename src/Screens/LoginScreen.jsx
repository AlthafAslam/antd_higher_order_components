import React, {Component} from 'react';
import {
    FormComponent,
    TextBoxComponent,
    FormButtonComponent,
    PasswordBoxComponent
} from "../Components/HigherOrderComponentMapping"

export default class LoginScreen extends Component {

    saveFormRef = formRef => {
        this.formRef = formRef;
    };

    handleSubmitLogin(val) {
        console.log("val of Form", val)
    }

    render() {
        return (
            <div className="col align-self-center">
                <div className="container">
                    <FormComponent
                        wrappedComponentRef={this.saveFormRef}
                        onSubmit={val => this.handleSubmitLogin(val)}
                        hideRequiredMark={true}
                    >
                        {props => (
                            <>
                                <TextBoxComponent
                                    placeholder={"User Id"}
                                    decorator={"username"}
                                    required={true}
                                    message={"Please enter your username"}
                                    {...props}
                                />
                                <PasswordBoxComponent
                                    placeholder={"Password"}
                                    decorator={"password"}
                                    required={true}
                                    message={"Please enter your password"}
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
