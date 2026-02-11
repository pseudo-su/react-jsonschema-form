import { jsx as _jsx } from "react/jsx-runtime";
import { RichDescription } from '@rjsf/core';
/** The `DescriptionField` is the template to use to render the description of a field
 *
 * @param props - The `DescriptionFieldProps` for this component
 */
export default function DescriptionField(props) {
    const { id, description, registry, uiSchema } = props;
    if (!description) {
        return null;
    }
    return (_jsx("span", { id: id, children: _jsx(RichDescription, { description: description, registry: registry, uiSchema: uiSchema }) }));
}
//# sourceMappingURL=index.js.map