import { FormContextType, RJSFSchema, StrictRJSFSchema, WidgetProps } from '@rjsf/utils';
/** The `SelectWidget` is a widget for rendering dropdowns.
 *  It is typically used with string properties constrained with enum options.
 *
 * @param props - The `WidgetProps` for this component
 */
declare function SelectWidget<T = any, S extends StrictRJSFSchema = RJSFSchema, F extends FormContextType = any>({ autofocus, disabled, registry, id, htmlName, multiple, onBlur, onChange, onFocus, options, placeholder, readonly, value, schema, }: WidgetProps<T, S, F>): import("react/jsx-runtime").JSX.Element;
declare namespace SelectWidget {
    var getPopupContainerCallback: () => (node: any) => any;
}
export default SelectWidget;
