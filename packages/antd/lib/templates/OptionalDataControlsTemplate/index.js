import { jsx as _jsx } from "react/jsx-runtime";
import { AddButton, RemoveButton } from '../IconButton/index.js';
/** The OptionalDataControlsTemplate renders one of three different states. If
 * there is an `onAddClick()` function, it renders the "Add" button. If there is
 * an `onRemoveClick()` function, it renders the "Remove" button. Otherwise it
 * renders the "No data found" section. All of them use the `label` as either
 * the `title` of buttons or simply outputting it.
 *
 * @param props - The `OptionalDataControlsTemplateProps` for the template
 */
export default function OptionalDataControlsTemplate(props) {
    const { id, registry, label, onAddClick, onRemoveClick } = props;
    if (onAddClick) {
        return (_jsx(AddButton, { id: id, registry: registry, className: 'rjsf-add-optional-data', onClick: onAddClick, title: label, size: 'small', iconType: 'default', block: false }));
    }
    else if (onRemoveClick) {
        return (_jsx(RemoveButton, { id: id, registry: registry, className: 'rjsf-remove-optional-data', onClick: onRemoveClick, title: label, size: 'small', iconType: 'default', block: false }));
    }
    return _jsx("em", { id: id, children: label });
}
//# sourceMappingURL=index.js.map