import { jsx as _jsx } from "react/jsx-runtime";
import { Form } from 'antd';
import { getTemplate, getUiOptions, } from '@rjsf/utils';
const VERTICAL_LABEL_COL = { span: 24 };
const VERTICAL_WRAPPER_COL = { span: 24 };
/** The `FieldTemplate` component is the template used by `SchemaField` to render any field. It renders the field
 * content, (label, description, children, errors and help) inside of a `WrapIfAdditional` component.
 *
 * @param props - The `FieldTemplateProps` for this component
 */
export default function FieldTemplate(props) {
    const { children, description, displayLabel, errors, help, rawHelp, hidden, id, label, rawErrors, rawDescription, registry, required, schema, uiSchema, } = props;
    const { formContext } = registry;
    const { colon, labelCol = VERTICAL_LABEL_COL, wrapperCol = VERTICAL_WRAPPER_COL, wrapperStyle, descriptionLocation = 'below', } = formContext;
    const uiOptions = getUiOptions(uiSchema);
    const WrapIfAdditionalTemplate = getTemplate('WrapIfAdditionalTemplate', registry, uiOptions);
    if (hidden) {
        return _jsx("div", { className: 'rjsf-field-hidden', children: children });
    }
    // check to see if there is rawDescription(string) before using description(ReactNode)
    // to prevent showing a blank description area
    const descriptionNode = rawDescription ? description : undefined;
    const descriptionProps = {};
    switch (descriptionLocation) {
        case 'tooltip':
            descriptionProps.tooltip = descriptionNode;
            break;
        case 'below':
        default:
            descriptionProps.extra = descriptionNode;
            break;
    }
    const isCheckbox = uiOptions.widget === 'checkbox';
    return (_jsx(WrapIfAdditionalTemplate, { ...props, children: _jsx(Form.Item, { colon: colon, hasFeedback: schema.type !== 'array' && schema.type !== 'object', help: (!!rawHelp && help) || ((rawErrors === null || rawErrors === void 0 ? void 0 : rawErrors.length) ? errors : undefined), htmlFor: id, label: displayLabel && !isCheckbox && label, labelCol: labelCol, required: required, style: wrapperStyle, validateStatus: (rawErrors === null || rawErrors === void 0 ? void 0 : rawErrors.length) ? 'error' : undefined, wrapperCol: wrapperCol, ...descriptionProps, children: children }) }));
}
//# sourceMappingURL=index.js.map