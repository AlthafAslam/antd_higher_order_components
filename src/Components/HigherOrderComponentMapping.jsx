import ComponentWrapper from "./HigherOrderComponents/FormHOC";
import AntDFormWrapper from "./AntDWrappers/FormWrapper";
import AntDTextBoxWrapper from "./AntDWrappers/TextBoxWrapper";
import AntDFormButtonWrapper from "./AntDWrappers/FormButtonWrapper";
import AntDPasswordBoxWrapper from "./AntDWrappers/PasswordBoxWrapper";
import AntDDatePicker from "./AntDWrappers/DatePickerWrapper";

export const FormComponent = ComponentWrapper(AntDFormWrapper);
export const TextBoxComponent = ComponentWrapper(AntDTextBoxWrapper);
export const PasswordBoxComponent = ComponentWrapper(AntDPasswordBoxWrapper);
export const FormButtonComponent = ComponentWrapper(AntDFormButtonWrapper);
export const DatePickerComponent = ComponentWrapper(AntDDatePicker);
