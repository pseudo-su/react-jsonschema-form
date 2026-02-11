import { jsx as _jsx } from "react/jsx-runtime";
import { Button } from 'antd';
import { ArrowDownOutlined, ArrowUpOutlined, CopyOutlined, DeleteOutlined, PlusCircleOutlined, CloseOutlined, } from '@ant-design/icons';
import { getUiOptions, TranslatableString, } from '@rjsf/utils';
export default function IconButton(props) {
    const { iconType = 'default', icon, onClick, uiSchema, registry, color, ...otherProps } = props;
    return (_jsx(Button, { onClick: onClick, 
        // @ts-expect-error TS2322, Because even casting as `ButtonProps['type']` has issues
        type: iconType, icon: icon, color: color, style: { paddingTop: '4px' /* Center the button */ }, ...otherProps }));
}
export function AddButton(props) {
    const { registry: { translateString }, } = props;
    return (_jsx(IconButton, { title: translateString(TranslatableString.AddItemButton), iconType: 'primary', block: true, ...props, icon: _jsx(PlusCircleOutlined, {}) }));
}
export function CopyButton(props) {
    const { registry: { translateString }, } = props;
    return _jsx(IconButton, { title: translateString(TranslatableString.CopyButton), ...props, icon: _jsx(CopyOutlined, {}) });
}
export function MoveDownButton(props) {
    const { registry: { translateString }, } = props;
    return (_jsx(IconButton, { title: translateString(TranslatableString.MoveDownButton), ...props, icon: _jsx(ArrowDownOutlined, {}) }));
}
export function MoveUpButton(props) {
    const { registry: { translateString }, } = props;
    return _jsx(IconButton, { title: translateString(TranslatableString.MoveUpButton), ...props, icon: _jsx(ArrowUpOutlined, {}) });
}
export function RemoveButton(props) {
    // The `block` prop is not part of the `IconButtonProps` defined in the template, so get it from the uiSchema instead
    const options = getUiOptions(props.uiSchema);
    const { registry: { translateString }, } = props;
    return (_jsx(IconButton, { title: translateString(TranslatableString.RemoveButton), danger: true, block: !!options.block, iconType: 'primary', ...props, icon: _jsx(DeleteOutlined, {}) }));
}
export function ClearButton(props) {
    const { registry: { translateString }, } = props;
    return (_jsx(IconButton, { title: translateString(TranslatableString.ClearButton), ...props, iconType: 'link', icon: _jsx(CloseOutlined, {}) }));
}
//# sourceMappingURL=index.js.map