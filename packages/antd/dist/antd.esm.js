// src/index.ts
import { withTheme } from "@rjsf/core";

// src/templates/ArrayFieldItemTemplate/index.tsx
import { Col, Row, Space } from "antd";
import {
  getUiOptions,
  getTemplate
} from "@rjsf/utils";
import { jsx, jsxs } from "react/jsx-runtime";
var BTN_GRP_STYLE = {
  width: "100%",
  justifyContent: "flex-end"
};
var BTN_STYLE = {
  width: "calc(100% / 4)"
};
function ArrayFieldItemTemplate(props) {
  const { children, buttonsProps, displayLabel, hasDescription, hasToolbar, index, registry, uiSchema } = props;
  const uiOptions = getUiOptions(uiSchema);
  const ArrayFieldItemButtonsTemplate = getTemplate(
    "ArrayFieldItemButtonsTemplate",
    registry,
    uiOptions
  );
  const { rowGutter = 24, toolbarAlign = displayLabel ? "middle" : "top" } = registry.formContext;
  const margin = hasDescription ? -8 : 16;
  return /* @__PURE__ */ jsxs(Row, { align: toolbarAlign, gutter: rowGutter, children: [
    /* @__PURE__ */ jsx(Col, { flex: "1", children }),
    hasToolbar && /* @__PURE__ */ jsx(Col, { flex: "120px", style: { marginTop: displayLabel ? `${margin}px` : void 0 }, children: /* @__PURE__ */ jsx(Space.Compact, { style: BTN_GRP_STYLE, children: /* @__PURE__ */ jsx(ArrayFieldItemButtonsTemplate, { ...buttonsProps, style: BTN_STYLE }) }) })
  ] }, `rjsf-array-item-${index}`);
}

// src/templates/ArrayFieldTemplate/index.tsx
import {
  getTemplate as getTemplate2,
  getUiOptions as getUiOptions2,
  buttonId
} from "@rjsf/utils";
import classNames from "classnames";
import { Col as Col2, Row as Row2, ConfigProvider } from "antd";
import { useContext } from "react";
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
function ArrayFieldTemplate(props) {
  const {
    canAdd,
    className,
    disabled,
    fieldPathId,
    items,
    optionalDataControl,
    onAddClick,
    readonly,
    registry,
    required,
    schema,
    title,
    uiSchema
  } = props;
  const uiOptions = getUiOptions2(uiSchema);
  const ArrayFieldTitleTemplate = getTemplate2(
    "ArrayFieldTitleTemplate",
    registry,
    uiOptions
  );
  const showOptionalDataControlInTitle = !readonly && !disabled;
  const { formContext } = registry;
  const {
    ButtonTemplates: { AddButton: AddButton2 }
  } = registry.templates;
  const { labelAlign = "right", rowGutter = 24 } = formContext;
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls("form");
  const labelClsBasic = `${prefixCls}-item-label`;
  const labelColClassName = classNames(
    labelClsBasic,
    labelAlign === "left" && `${labelClsBasic}-left`
    // labelCol.className,
  );
  return /* @__PURE__ */ jsx2("fieldset", { className, id: fieldPathId.$id, children: /* @__PURE__ */ jsxs2(Row2, { gutter: rowGutter, children: [
    (uiOptions.title || title) && /* @__PURE__ */ jsx2(Col2, { className: labelColClassName, span: 24, children: /* @__PURE__ */ jsx2(
      ArrayFieldTitleTemplate,
      {
        fieldPathId,
        required,
        title: uiOptions.title || title,
        schema,
        uiSchema,
        registry,
        optionalDataControl: showOptionalDataControlInTitle ? optionalDataControl : void 0
      }
    ) }),
    /* @__PURE__ */ jsxs2(Col2, { className: "row array-item-list", span: 24, children: [
      !showOptionalDataControlInTitle ? optionalDataControl : void 0,
      items
    ] }),
    canAdd && /* @__PURE__ */ jsx2(Col2, { span: 24, children: /* @__PURE__ */ jsx2(Row2, { gutter: rowGutter, justify: "end", children: /* @__PURE__ */ jsx2(Col2, { flex: "120px", children: /* @__PURE__ */ jsx2(
      AddButton2,
      {
        id: buttonId(fieldPathId, "add"),
        className: "rjsf-array-item-add",
        disabled: disabled || readonly,
        onClick: onAddClick,
        uiSchema,
        registry
      }
    ) }) }) })
  ] }) });
}

// src/templates/BaseInputTemplate/index.tsx
import { useCallback } from "react";
import { Input, InputNumber } from "antd";
import {
  ariaDescribedByIds,
  examplesId,
  getInputProps
} from "@rjsf/utils";
import { SchemaExamples } from "@rjsf/core";
import { Fragment, jsx as jsx3, jsxs as jsxs3 } from "react/jsx-runtime";
var INPUT_STYLE = {
  width: "100%"
};
function BaseInputTemplate(props) {
  const {
    disabled,
    registry,
    id,
    htmlName,
    onBlur,
    onChange,
    onChangeOverride,
    onFocus,
    options,
    placeholder,
    readonly,
    schema,
    value,
    type
  } = props;
  const { formContext } = registry;
  const inputProps = getInputProps(schema, type, options, false);
  const { readonlyAsDisabled = true } = formContext;
  const { ClearButton: ClearButton2 } = registry.templates.ButtonTemplates;
  const handleNumberChange = (nextValue) => onChange(nextValue);
  const handleTextChange = onChangeOverride ? onChangeOverride : ({ target }) => onChange(target.value === "" ? options.emptyValue : target.value);
  const handleBlur = ({ target }) => onBlur(id, target && target.value);
  const handleFocus = ({ target }) => onFocus(id, target && target.value);
  const handleClear = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      onChange(options.emptyValue ?? "");
    },
    [onChange, options.emptyValue]
  );
  const input = inputProps.type === "number" || inputProps.type === "integer" ? /* @__PURE__ */ jsx3(
    InputNumber,
    {
      disabled: disabled || readonlyAsDisabled && readonly,
      id,
      name: htmlName || id,
      onBlur: !readonly ? handleBlur : void 0,
      onChange: !readonly ? handleNumberChange : void 0,
      onFocus: !readonly ? handleFocus : void 0,
      placeholder,
      style: INPUT_STYLE,
      list: schema.examples ? examplesId(id) : void 0,
      ...inputProps,
      value,
      "aria-describedby": ariaDescribedByIds(id, !!schema.examples)
    }
  ) : /* @__PURE__ */ jsx3(
    Input,
    {
      disabled: disabled || readonlyAsDisabled && readonly,
      id,
      name: htmlName || id,
      onBlur: !readonly ? handleBlur : void 0,
      onChange: !readonly ? handleTextChange : void 0,
      onFocus: !readonly ? handleFocus : void 0,
      placeholder,
      style: INPUT_STYLE,
      list: schema.examples ? examplesId(id) : void 0,
      ...inputProps,
      value,
      "aria-describedby": ariaDescribedByIds(id, !!schema.examples)
    }
  );
  return /* @__PURE__ */ jsxs3(Fragment, { children: [
    input,
    options.allowClearTextInputs && !readonly && !disabled && value && /* @__PURE__ */ jsx3(ClearButton2, { registry, onClick: handleClear }),
    /* @__PURE__ */ jsx3(SchemaExamples, { id, schema })
  ] });
}

// src/templates/FieldDescriptionTemplate/index.tsx
import { RichDescription } from "@rjsf/core";
import { jsx as jsx4 } from "react/jsx-runtime";
function DescriptionField(props) {
  const { id, description, registry, uiSchema } = props;
  if (!description) {
    return null;
  }
  return /* @__PURE__ */ jsx4("span", { id, children: /* @__PURE__ */ jsx4(RichDescription, { description, registry, uiSchema }) });
}

// src/templates/ErrorList/index.tsx
import { Alert, List, Space as Space2 } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { TranslatableString } from "@rjsf/utils";
import { jsx as jsx5, jsxs as jsxs4 } from "react/jsx-runtime";
function ErrorList({
  errors,
  registry
}) {
  const { translateString } = registry;
  const renderErrors = () => /* @__PURE__ */ jsx5(List, { className: "list-group", size: "small", children: errors.map((error, index) => /* @__PURE__ */ jsx5(List.Item, { children: /* @__PURE__ */ jsxs4(Space2, { children: [
    /* @__PURE__ */ jsx5(ExclamationCircleOutlined, {}),
    error.stack
  ] }) }, index)) });
  return /* @__PURE__ */ jsx5(
    Alert,
    {
      className: "panel panel-danger errors",
      description: renderErrors(),
      message: translateString(TranslatableString.ErrorsLabel),
      type: "error"
    }
  );
}

// src/templates/IconButton/index.tsx
import { Button } from "antd";
import {
  ArrowDownOutlined,
  ArrowUpOutlined,
  CopyOutlined,
  DeleteOutlined,
  PlusCircleOutlined,
  CloseOutlined
} from "@ant-design/icons";
import {
  getUiOptions as getUiOptions3,
  TranslatableString as TranslatableString2
} from "@rjsf/utils";
import { jsx as jsx6 } from "react/jsx-runtime";
function IconButton(props) {
  const { iconType = "default", icon, onClick, uiSchema, registry, color, ...otherProps } = props;
  return /* @__PURE__ */ jsx6(
    Button,
    {
      onClick,
      type: iconType,
      icon,
      color,
      style: {
        paddingTop: "4px"
        /* Center the button */
      },
      ...otherProps
    }
  );
}
function AddButton(props) {
  const {
    registry: { translateString }
  } = props;
  return /* @__PURE__ */ jsx6(
    IconButton,
    {
      title: translateString(TranslatableString2.AddItemButton),
      iconType: "primary",
      block: true,
      ...props,
      icon: /* @__PURE__ */ jsx6(PlusCircleOutlined, {})
    }
  );
}
function CopyButton(props) {
  const {
    registry: { translateString }
  } = props;
  return /* @__PURE__ */ jsx6(IconButton, { title: translateString(TranslatableString2.CopyButton), ...props, icon: /* @__PURE__ */ jsx6(CopyOutlined, {}) });
}
function MoveDownButton(props) {
  const {
    registry: { translateString }
  } = props;
  return /* @__PURE__ */ jsx6(IconButton, { title: translateString(TranslatableString2.MoveDownButton), ...props, icon: /* @__PURE__ */ jsx6(ArrowDownOutlined, {}) });
}
function MoveUpButton(props) {
  const {
    registry: { translateString }
  } = props;
  return /* @__PURE__ */ jsx6(IconButton, { title: translateString(TranslatableString2.MoveUpButton), ...props, icon: /* @__PURE__ */ jsx6(ArrowUpOutlined, {}) });
}
function RemoveButton(props) {
  const options = getUiOptions3(props.uiSchema);
  const {
    registry: { translateString }
  } = props;
  return /* @__PURE__ */ jsx6(
    IconButton,
    {
      title: translateString(TranslatableString2.RemoveButton),
      danger: true,
      block: !!options.block,
      iconType: "primary",
      ...props,
      icon: /* @__PURE__ */ jsx6(DeleteOutlined, {})
    }
  );
}
function ClearButton(props) {
  const {
    registry: { translateString }
  } = props;
  return /* @__PURE__ */ jsx6(
    IconButton,
    {
      title: translateString(TranslatableString2.ClearButton),
      ...props,
      iconType: "link",
      icon: /* @__PURE__ */ jsx6(CloseOutlined, {})
    }
  );
}

// src/templates/FieldErrorTemplate/index.tsx
import { errorId } from "@rjsf/utils";
import { jsx as jsx7 } from "react/jsx-runtime";
function FieldErrorTemplate(props) {
  const { errors = [], fieldPathId } = props;
  if (errors.length === 0) {
    return null;
  }
  const id = errorId(fieldPathId);
  return /* @__PURE__ */ jsx7("div", { id, children: errors.map((error) => /* @__PURE__ */ jsx7("div", { children: error }, `field-${id}-error-${error}`)) });
}

// src/templates/FieldTemplate/index.tsx
import { Form } from "antd";
import {
  getTemplate as getTemplate3,
  getUiOptions as getUiOptions4
} from "@rjsf/utils";
import { jsx as jsx8 } from "react/jsx-runtime";
var VERTICAL_LABEL_COL = { span: 24 };
var VERTICAL_WRAPPER_COL = { span: 24 };
function FieldTemplate(props) {
  const {
    children,
    description,
    displayLabel,
    errors,
    help,
    rawHelp,
    hidden,
    id,
    label,
    rawErrors,
    rawDescription,
    registry,
    required,
    schema,
    uiSchema
  } = props;
  const { formContext } = registry;
  const {
    colon,
    labelCol = VERTICAL_LABEL_COL,
    wrapperCol = VERTICAL_WRAPPER_COL,
    wrapperStyle,
    descriptionLocation = "below"
  } = formContext;
  const uiOptions = getUiOptions4(uiSchema);
  const WrapIfAdditionalTemplate2 = getTemplate3(
    "WrapIfAdditionalTemplate",
    registry,
    uiOptions
  );
  if (hidden) {
    return /* @__PURE__ */ jsx8("div", { className: "rjsf-field-hidden", children });
  }
  const descriptionNode = rawDescription ? description : void 0;
  const descriptionProps = {};
  switch (descriptionLocation) {
    case "tooltip":
      descriptionProps.tooltip = descriptionNode;
      break;
    case "below":
    default:
      descriptionProps.extra = descriptionNode;
      break;
  }
  const isCheckbox = uiOptions.widget === "checkbox";
  return /* @__PURE__ */ jsx8(WrapIfAdditionalTemplate2, { ...props, children: /* @__PURE__ */ jsx8(
    Form.Item,
    {
      colon,
      hasFeedback: schema.type !== "array" && schema.type !== "object",
      help: !!rawHelp && help || (rawErrors?.length ? errors : void 0),
      htmlFor: id,
      label: displayLabel && !isCheckbox && label,
      labelCol,
      required,
      style: wrapperStyle,
      validateStatus: rawErrors?.length ? "error" : void 0,
      wrapperCol,
      ...descriptionProps,
      children
    }
  ) });
}

// src/templates/GridTemplate/index.tsx
import { Col as Col3, Row as Row3 } from "antd";
import { jsx as jsx9 } from "react/jsx-runtime";
function GridTemplate(props) {
  const { children, column, ...rest } = props;
  if (column) {
    return /* @__PURE__ */ jsx9(Col3, { ...rest, children });
  }
  return /* @__PURE__ */ jsx9(Row3, { ...rest, children });
}

// src/templates/MultiSchemaFieldTemplate/index.tsx
import { jsx as jsx10, jsxs as jsxs5 } from "react/jsx-runtime";
function MultiSchemaFieldTemplate(props) {
  const { optionSchemaField, selector } = props;
  return /* @__PURE__ */ jsxs5("div", { children: [
    /* @__PURE__ */ jsx10("div", { children: selector }),
    optionSchemaField
  ] });
}

// src/templates/ObjectFieldTemplate/index.tsx
import classNames2 from "classnames";
import isObject from "lodash/isObject";
import isNumber from "lodash/isNumber";
import isString from "lodash/isString";
import {
  canExpand,
  getTemplate as getTemplate4,
  getUiOptions as getUiOptions5,
  titleId,
  buttonId as buttonId2
} from "@rjsf/utils";
import { Col as Col4, Row as Row4, ConfigProvider as ConfigProvider2 } from "antd";
import { useContext as useContext2 } from "react";
import { jsx as jsx11, jsxs as jsxs6 } from "react/jsx-runtime";
function ObjectFieldTemplate(props) {
  const {
    disabled,
    formData,
    fieldPathId,
    onAddProperty,
    optionalDataControl,
    properties,
    readonly,
    required,
    registry,
    schema,
    title,
    uiSchema
  } = props;
  const uiOptions = getUiOptions5(uiSchema);
  const TitleFieldTemplate = getTemplate4("TitleFieldTemplate", registry, uiOptions);
  const { formContext } = registry;
  const showOptionalDataControlInTitle = !readonly && !disabled;
  const {
    ButtonTemplates: { AddButton: AddButton2 }
  } = registry.templates;
  const { colSpan = 24, labelAlign = "right", rowGutter = 24 } = formContext;
  const findSchema = (element) => element.content.props.schema;
  const findSchemaType = (element) => findSchema(element).type;
  const findUiSchema = (element) => element.content.props.uiSchema;
  const findUiSchemaField = (element) => getUiOptions5(findUiSchema(element)).field;
  const findUiSchemaWidget = (element) => getUiOptions5(findUiSchema(element)).widget;
  const calculateColSpan = (element) => {
    const type = findSchemaType(element);
    const field = findUiSchemaField(element);
    const widget = findUiSchemaWidget(element);
    const defaultColSpan = properties.length < 2 || // Single or no field in object.
    type === "object" || type === "array" || widget === "textarea" ? 24 : 12;
    if (isObject(colSpan)) {
      const colSpanObj = colSpan;
      if (isString(widget)) {
        return colSpanObj[widget];
      }
      if (isString(field)) {
        return colSpanObj[field];
      }
      if (isString(type)) {
        return colSpanObj[type];
      }
    }
    if (isNumber(colSpan)) {
      return colSpan;
    }
    return defaultColSpan;
  };
  const { getPrefixCls } = useContext2(ConfigProvider2.ConfigContext);
  const prefixCls = getPrefixCls("form");
  const labelClsBasic = `${prefixCls}-item-label`;
  const labelColClassName = classNames2(
    labelClsBasic,
    labelAlign === "left" && `${labelClsBasic}-left`
    // labelCol.className,
  );
  return /* @__PURE__ */ jsxs6("fieldset", { id: fieldPathId.$id, children: [
    /* @__PURE__ */ jsxs6(Row4, { gutter: rowGutter, children: [
      title && /* @__PURE__ */ jsx11(Col4, { className: labelColClassName, span: 24, children: /* @__PURE__ */ jsx11(
        TitleFieldTemplate,
        {
          id: titleId(fieldPathId),
          title,
          required,
          schema,
          uiSchema,
          registry,
          optionalDataControl: showOptionalDataControlInTitle ? optionalDataControl : void 0
        }
      ) }),
      !showOptionalDataControlInTitle ? /* @__PURE__ */ jsx11(Col4, { span: 24, children: optionalDataControl }) : void 0,
      properties.filter((e) => !e.hidden).map((element) => /* @__PURE__ */ jsx11(Col4, { span: calculateColSpan(element), children: element.content }, element.name))
    ] }),
    canExpand(schema, uiSchema, formData) && /* @__PURE__ */ jsx11(Col4, { span: 24, children: /* @__PURE__ */ jsx11(Row4, { gutter: rowGutter, justify: "end", children: /* @__PURE__ */ jsx11(Col4, { flex: "120px", children: /* @__PURE__ */ jsx11(
      AddButton2,
      {
        id: buttonId2(fieldPathId, "add"),
        className: "rjsf-object-property-expand",
        disabled: disabled || readonly,
        onClick: onAddProperty,
        uiSchema,
        registry
      }
    ) }) }) })
  ] });
}

// src/templates/OptionalDataControlsTemplate/index.tsx
import { jsx as jsx12 } from "react/jsx-runtime";
function OptionalDataControlsTemplate(props) {
  const { id, registry, label, onAddClick, onRemoveClick } = props;
  if (onAddClick) {
    return /* @__PURE__ */ jsx12(
      AddButton,
      {
        id,
        registry,
        className: "rjsf-add-optional-data",
        onClick: onAddClick,
        title: label,
        size: "small",
        iconType: "default",
        block: false
      }
    );
  } else if (onRemoveClick) {
    return /* @__PURE__ */ jsx12(
      RemoveButton,
      {
        id,
        registry,
        className: "rjsf-remove-optional-data",
        onClick: onRemoveClick,
        title: label,
        size: "small",
        iconType: "default",
        block: false
      }
    );
  }
  return /* @__PURE__ */ jsx12("em", { id, children: label });
}

// src/templates/SubmitButton/index.tsx
import { Button as Button2 } from "antd";
import { getSubmitButtonOptions } from "@rjsf/utils";
import { jsx as jsx13 } from "react/jsx-runtime";
function SubmitButton({ uiSchema }) {
  const { submitText, norender, props: submitButtonProps } = getSubmitButtonOptions(uiSchema);
  if (norender) {
    return null;
  }
  return /* @__PURE__ */ jsx13(Button2, { type: "submit", ...submitButtonProps, htmlType: "submit", children: submitText });
}

// src/templates/TitleField/index.tsx
import classNames3 from "classnames";
import { Col as Col5, Divider, Row as Row5, ConfigProvider as ConfigProvider3 } from "antd";
import { useContext as useContext3 } from "react";
import { Fragment as Fragment2, jsx as jsx14, jsxs as jsxs7 } from "react/jsx-runtime";
function TitleField({
  id,
  required,
  registry,
  title,
  optionalDataControl
}) {
  const { formContext } = registry;
  const { colon = true } = formContext;
  let labelChildren = title;
  if (colon && typeof title === "string" && title.trim() !== "") {
    labelChildren = title.replace(/[：:]\s*$/, "");
  }
  const handleLabelClick = () => {
    if (!id) {
      return;
    }
    const control = document.querySelector(`[id="${id}"]`);
    if (control && control.focus) {
      control.focus();
    }
  };
  const { getPrefixCls } = useContext3(ConfigProvider3.ConfigContext);
  const prefixCls = getPrefixCls("form");
  const labelClassName = classNames3({
    [`${prefixCls}-item-required`]: required,
    [`${prefixCls}-item-no-colon`]: !colon
  });
  let heading = title ? /* @__PURE__ */ jsx14(
    "label",
    {
      className: labelClassName,
      htmlFor: id,
      onClick: handleLabelClick,
      title: typeof title === "string" ? title : "",
      children: labelChildren
    }
  ) : null;
  if (optionalDataControl) {
    heading = /* @__PURE__ */ jsxs7(Row5, { children: [
      /* @__PURE__ */ jsx14(Col5, { flex: "auto", children: heading }),
      /* @__PURE__ */ jsx14(Col5, { flex: "none", children: optionalDataControl })
    ] });
  }
  return /* @__PURE__ */ jsxs7(Fragment2, { children: [
    heading,
    /* @__PURE__ */ jsx14(Divider, { size: "small", style: {
      marginBlock: "1px"
      /* pull the margin right up against the label */
    } })
  ] });
}

// src/templates/WrapIfAdditionalTemplate/index.tsx
import { Col as Col6, Row as Row6, Form as Form2, Input as Input2 } from "antd";
import {
  ADDITIONAL_PROPERTY_FLAG,
  UI_OPTIONS_KEY,
  TranslatableString as TranslatableString3,
  buttonId as buttonId3
} from "@rjsf/utils";
import { jsx as jsx15, jsxs as jsxs8 } from "react/jsx-runtime";
var VERTICAL_LABEL_COL2 = { span: 24 };
var VERTICAL_WRAPPER_COL2 = { span: 24 };
var INPUT_STYLE2 = {
  width: "100%"
};
function WrapIfAdditionalTemplate(props) {
  const {
    children,
    classNames: classNames4,
    style,
    disabled,
    displayLabel,
    id,
    label,
    onRemoveProperty,
    onKeyRenameBlur,
    readonly,
    required,
    registry,
    schema,
    uiSchema
  } = props;
  const {
    colon,
    labelCol = VERTICAL_LABEL_COL2,
    readonlyAsDisabled = true,
    rowGutter = 24,
    toolbarAlign = "top",
    wrapperCol = VERTICAL_WRAPPER_COL2,
    wrapperStyle
  } = registry.formContext;
  const { templates, translateString } = registry;
  const { RemoveButton: RemoveButton2 } = templates.ButtonTemplates;
  const keyLabel = translateString(TranslatableString3.KeyLabel, [label]);
  const additional = ADDITIONAL_PROPERTY_FLAG in schema;
  if (!additional) {
    return /* @__PURE__ */ jsx15("div", { className: classNames4, style, children });
  }
  const uiOptions = uiSchema ? uiSchema[UI_OPTIONS_KEY] : {};
  const buttonUiOptions = {
    ...uiSchema,
    [UI_OPTIONS_KEY]: { ...uiOptions, block: true }
  };
  return /* @__PURE__ */ jsx15("div", { className: classNames4, style, children: /* @__PURE__ */ jsxs8(Row6, { align: toolbarAlign, gutter: rowGutter, children: [
    /* @__PURE__ */ jsx15(Col6, { className: "form-additional", flex: "1", children: /* @__PURE__ */ jsx15("div", { className: "form-group", children: /* @__PURE__ */ jsx15(
      Form2.Item,
      {
        colon,
        className: "form-group",
        hasFeedback: true,
        htmlFor: `${id}-key`,
        label: displayLabel ? keyLabel : void 0,
        labelCol,
        required,
        style: wrapperStyle,
        wrapperCol,
        children: /* @__PURE__ */ jsx15(
          Input2,
          {
            className: "form-control",
            defaultValue: label,
            disabled: disabled || readonlyAsDisabled && readonly,
            id: `${id}-key`,
            name: `${id}-key`,
            onBlur: !readonly ? onKeyRenameBlur : void 0,
            style: INPUT_STYLE2,
            type: "text"
          }
        )
      }
    ) }) }),
    /* @__PURE__ */ jsx15(Col6, { className: "form-additional", flex: "1", children }),
    /* @__PURE__ */ jsx15(Col6, { flex: "120px", style: { marginTop: displayLabel ? "40px" : void 0 }, children: /* @__PURE__ */ jsx15(
      RemoveButton2,
      {
        id: buttonId3(id, "remove"),
        className: "rjsf-object-property-remove",
        disabled: disabled || readonly,
        onClick: onRemoveProperty,
        uiSchema: buttonUiOptions,
        registry
      }
    ) })
  ] }) });
}

// src/templates/index.ts
function generateTemplates() {
  return {
    ArrayFieldItemTemplate,
    ArrayFieldTemplate,
    BaseInputTemplate,
    ButtonTemplates: {
      AddButton,
      CopyButton,
      MoveDownButton,
      MoveUpButton,
      RemoveButton,
      SubmitButton,
      ClearButton
    },
    DescriptionFieldTemplate: DescriptionField,
    ErrorListTemplate: ErrorList,
    FieldErrorTemplate,
    FieldTemplate,
    GridTemplate,
    MultiSchemaFieldTemplate,
    ObjectFieldTemplate,
    OptionalDataControlsTemplate,
    TitleFieldTemplate: TitleField,
    WrapIfAdditionalTemplate
  };
}
var templates_default = generateTemplates();

// src/widgets/AltDateTimeWidget/index.tsx
import { jsx as jsx16 } from "react/jsx-runtime";
function AltDateTimeWidget({ time = true, ...props }) {
  const { AltDateWidget: AltDateWidget2 } = props.registry.widgets;
  return /* @__PURE__ */ jsx16(AltDateWidget2, { time, ...props });
}

// src/widgets/AltDateWidget/index.tsx
import { Row as Row7, Col as Col7, Button as Button3 } from "antd";
import {
  DateElement,
  TranslatableString as TranslatableString4,
  useAltDateWidgetProps
} from "@rjsf/utils";
import { jsx as jsx17, jsxs as jsxs9 } from "react/jsx-runtime";
function AltDateWidget({ autofocus = false, disabled = false, options, readonly = false, time = false, ...props }) {
  const { id, name, onBlur, onFocus, registry } = props;
  const { formContext, translateString } = registry;
  const { rowGutter = 24 } = formContext;
  const realOptions = { yearsRange: [1900, (/* @__PURE__ */ new Date()).getFullYear() + 2], ...options };
  const { elements, handleChange, handleClear, handleSetNow } = useAltDateWidgetProps({
    ...props,
    autofocus,
    options: realOptions
  });
  return /* @__PURE__ */ jsxs9(Row7, { gutter: [Math.floor(rowGutter / 2), Math.floor(rowGutter / 2)], children: [
    elements.map((elemProps, i) => {
      const elemId = `${id}_${elemProps.type}`;
      return /* @__PURE__ */ jsx17(Col7, { flex: "88px", children: /* @__PURE__ */ jsx17(
        DateElement,
        {
          rootId: id,
          name,
          select: handleChange,
          ...elemProps,
          disabled,
          readonly,
          registry,
          onBlur,
          onFocus,
          autofocus: autofocus && i === 0
        }
      ) }, elemId);
    }),
    !options.hideNowButton && /* @__PURE__ */ jsx17(Col7, { flex: "88px", children: /* @__PURE__ */ jsx17(Button3, { block: true, className: "btn-now", onClick: handleSetNow, type: "primary", children: translateString(TranslatableString4.NowLabel) }) }),
    !options.hideClearButton && /* @__PURE__ */ jsx17(Col7, { flex: "88px", children: /* @__PURE__ */ jsx17(Button3, { block: true, className: "btn-clear", danger: true, onClick: handleClear, type: "primary", children: translateString(TranslatableString4.ClearLabel) }) })
  ] });
}

// src/widgets/CheckboxesWidget/index.tsx
import { Checkbox } from "antd";
import {
  ariaDescribedByIds as ariaDescribedByIds2,
  enumOptionsIndexForValue,
  enumOptionsValueForIndex,
  optionId
} from "@rjsf/utils";
import { Fragment as Fragment3, jsx as jsx18, jsxs as jsxs10 } from "react/jsx-runtime";
function CheckboxesWidget({
  autofocus,
  disabled,
  registry,
  id,
  htmlName,
  onBlur,
  onChange,
  onFocus,
  options,
  readonly,
  value
}) {
  const { formContext } = registry;
  const { readonlyAsDisabled = true } = formContext;
  const { enumOptions, enumDisabled, inline, emptyValue } = options;
  const handleChange = (nextValue) => onChange(enumOptionsValueForIndex(nextValue, enumOptions, emptyValue));
  const handleBlur = ({ target }) => onBlur(id, enumOptionsValueForIndex(target.value, enumOptions, emptyValue));
  const handleFocus = ({ target }) => onFocus(id, enumOptionsValueForIndex(target.value, enumOptions, emptyValue));
  const extraProps = {
    id,
    onBlur: !readonly ? handleBlur : void 0,
    onFocus: !readonly ? handleFocus : void 0
  };
  const selectedIndexes = enumOptionsIndexForValue(value, enumOptions, true);
  return Array.isArray(enumOptions) && enumOptions.length > 0 ? /* @__PURE__ */ jsx18(Fragment3, { children: /* @__PURE__ */ jsx18(
    Checkbox.Group,
    {
      disabled: disabled || readonlyAsDisabled && readonly,
      name: htmlName || id,
      onChange: !readonly ? handleChange : void 0,
      value: selectedIndexes,
      ...extraProps,
      "aria-describedby": ariaDescribedByIds2(id),
      children: Array.isArray(enumOptions) && enumOptions.map((option, i) => /* @__PURE__ */ jsxs10("span", { children: [
        /* @__PURE__ */ jsx18(
          Checkbox,
          {
            id: optionId(id, i),
            name: htmlName || id,
            autoFocus: i === 0 ? autofocus : false,
            disabled: Array.isArray(enumDisabled) && enumDisabled.indexOf(option.value) !== -1,
            value: String(i),
            children: option.label
          }
        ),
        !inline && /* @__PURE__ */ jsx18("br", {})
      ] }, i))
    }
  ) }) : null;
}

// src/widgets/CheckboxWidget/index.tsx
import { Checkbox as Checkbox2 } from "antd";
import {
  ariaDescribedByIds as ariaDescribedByIds3,
  labelValue
} from "@rjsf/utils";
import { jsx as jsx19 } from "react/jsx-runtime";
function CheckboxWidget(props) {
  const { autofocus, disabled, registry, id, htmlName, label, hideLabel, onBlur, onChange, onFocus, readonly, value } = props;
  const { formContext } = registry;
  const { readonlyAsDisabled = true } = formContext;
  const handleChange = ({ target }) => onChange(target.checked);
  const handleBlur = ({ target }) => onBlur(id, target && target.checked);
  const handleFocus = ({ target }) => onFocus(id, target && target.checked);
  const extraProps = {
    onBlur: !readonly ? handleBlur : void 0,
    onFocus: !readonly ? handleFocus : void 0
  };
  return /* @__PURE__ */ jsx19(
    Checkbox2,
    {
      autoFocus: autofocus,
      checked: typeof value === "undefined" ? false : value,
      disabled: disabled || readonlyAsDisabled && readonly,
      id,
      name: htmlName || id,
      onChange: !readonly ? handleChange : void 0,
      ...extraProps,
      "aria-describedby": ariaDescribedByIds3(id),
      children: labelValue(label, hideLabel, "")
    }
  );
}

// src/widgets/DateTimeWidget/index.tsx
import dayjs from "dayjs";
import {
  ariaDescribedByIds as ariaDescribedByIds4
} from "@rjsf/utils";
import { DatePicker } from "antd";
import { jsx as jsx20 } from "react/jsx-runtime";
var DATE_PICKER_STYLE = {
  width: "100%"
};
function DateTimeWidget(props) {
  const { disabled, registry, id, onBlur, onChange, onFocus, placeholder, readonly, value } = props;
  const { formContext } = registry;
  const { readonlyAsDisabled = true } = formContext;
  const handleChange = (nextValue) => onChange(nextValue && nextValue.toISOString());
  const handleBlur = () => onBlur(id, value);
  const handleFocus = () => onFocus(id, value);
  const getPopupContainer = (node) => node.parentNode;
  return /* @__PURE__ */ jsx20(
    DatePicker,
    {
      disabled: disabled || readonlyAsDisabled && readonly,
      getPopupContainer,
      id,
      name: id,
      onBlur: !readonly ? handleBlur : void 0,
      onChange: !readonly ? handleChange : void 0,
      onFocus: !readonly ? handleFocus : void 0,
      placeholder,
      showTime: true,
      style: DATE_PICKER_STYLE,
      value: value && dayjs(value),
      "aria-describedby": ariaDescribedByIds4(id)
    }
  );
}

// src/widgets/DateWidget/index.tsx
import dayjs2 from "dayjs";
import {
  ariaDescribedByIds as ariaDescribedByIds5
} from "@rjsf/utils";
import { DatePicker as DatePicker2 } from "antd";
import { jsx as jsx21 } from "react/jsx-runtime";
var DATE_PICKER_STYLE2 = {
  width: "100%"
};
function DateWidget(props) {
  const { disabled, registry, id, onBlur, onChange, onFocus, placeholder, readonly, value } = props;
  const { formContext } = registry;
  const { readonlyAsDisabled = true } = formContext;
  const handleChange = (nextValue) => onChange(nextValue && nextValue.format("YYYY-MM-DD"));
  const handleBlur = () => onBlur(id, value);
  const handleFocus = () => onFocus(id, value);
  const getPopupContainer = (node) => node.parentNode;
  return /* @__PURE__ */ jsx21(
    DatePicker2,
    {
      disabled: disabled || readonlyAsDisabled && readonly,
      getPopupContainer,
      id,
      name: id,
      onBlur: !readonly ? handleBlur : void 0,
      onChange: !readonly ? handleChange : void 0,
      onFocus: !readonly ? handleFocus : void 0,
      placeholder,
      showTime: false,
      style: DATE_PICKER_STYLE2,
      value: value && dayjs2(value),
      "aria-describedby": ariaDescribedByIds5(id)
    }
  );
}

// src/widgets/PasswordWidget/index.tsx
import { Input as Input3 } from "antd";
import {
  ariaDescribedByIds as ariaDescribedByIds6
} from "@rjsf/utils";
import { jsx as jsx22 } from "react/jsx-runtime";
function PasswordWidget(props) {
  const { disabled, registry, id, onBlur, onChange, onFocus, options, placeholder, readonly, value } = props;
  const { formContext } = registry;
  const { readonlyAsDisabled = true } = formContext;
  const emptyValue = options.emptyValue || "";
  const handleChange = ({ target }) => onChange(target.value === "" ? emptyValue : target.value);
  const handleBlur = ({ target }) => onBlur(id, target.value);
  const handleFocus = ({ target }) => onFocus(id, target.value);
  return /* @__PURE__ */ jsx22(
    Input3.Password,
    {
      disabled: disabled || readonlyAsDisabled && readonly,
      id,
      name: id,
      onBlur: !readonly ? handleBlur : void 0,
      onChange: !readonly ? handleChange : void 0,
      onFocus: !readonly ? handleFocus : void 0,
      placeholder,
      value: value || "",
      "aria-describedby": ariaDescribedByIds6(id)
    }
  );
}

// src/widgets/RadioWidget/index.tsx
import { Radio } from "antd";
import {
  ariaDescribedByIds as ariaDescribedByIds7,
  enumOptionsIndexForValue as enumOptionsIndexForValue2,
  enumOptionsValueForIndex as enumOptionsValueForIndex2,
  optionId as optionId2
} from "@rjsf/utils";
import { jsx as jsx23 } from "react/jsx-runtime";
function RadioWidget({
  autofocus,
  disabled,
  registry,
  id,
  htmlName,
  onBlur,
  onChange,
  onFocus,
  options,
  readonly,
  value
}) {
  const { formContext } = registry;
  const { readonlyAsDisabled = true } = formContext;
  const { enumOptions, enumDisabled, emptyValue } = options;
  const handleChange = ({ target: { value: nextValue } }) => onChange(enumOptionsValueForIndex2(nextValue, enumOptions, emptyValue));
  const handleBlur = ({ target }) => onBlur(id, enumOptionsValueForIndex2(target && target.value, enumOptions, emptyValue));
  const handleFocus = ({ target }) => onFocus(id, enumOptionsValueForIndex2(target && target.value, enumOptions, emptyValue));
  const selectedIndexes = enumOptionsIndexForValue2(value, enumOptions);
  return /* @__PURE__ */ jsx23(
    Radio.Group,
    {
      disabled: disabled || readonlyAsDisabled && readonly,
      id,
      name: htmlName || id,
      onChange: !readonly ? handleChange : void 0,
      onBlur: !readonly ? handleBlur : void 0,
      onFocus: !readonly ? handleFocus : void 0,
      value: selectedIndexes,
      "aria-describedby": ariaDescribedByIds7(id),
      children: Array.isArray(enumOptions) && enumOptions.map((option, i) => /* @__PURE__ */ jsx23(
        Radio,
        {
          id: optionId2(id, i),
          name: htmlName || id,
          autoFocus: i === 0 ? autofocus : false,
          disabled: disabled || Array.isArray(enumDisabled) && enumDisabled.indexOf(option.value) !== -1,
          value: String(i),
          children: option.label
        },
        i
      ))
    }
  );
}

// src/widgets/RangeWidget/index.tsx
import { Slider } from "antd";
import {
  ariaDescribedByIds as ariaDescribedByIds8,
  rangeSpec
} from "@rjsf/utils";
import { jsx as jsx24 } from "react/jsx-runtime";
function RangeWidget(props) {
  const {
    autofocus,
    disabled,
    registry,
    id,
    onBlur,
    onChange,
    onFocus,
    options,
    placeholder,
    readonly,
    schema,
    value
  } = props;
  const { formContext } = registry;
  const { readonlyAsDisabled = true } = formContext;
  const { min, max, step } = rangeSpec(schema);
  const emptyValue = options.emptyValue || "";
  const handleChange = (nextValue) => onChange(nextValue === "" ? emptyValue : nextValue);
  const handleBlur = () => onBlur(id, value);
  const handleFocus = () => onFocus(id, value);
  const extraProps = {
    placeholder,
    onBlur: !readonly ? handleBlur : void 0,
    onFocus: !readonly ? handleFocus : void 0
  };
  return /* @__PURE__ */ jsx24(
    Slider,
    {
      autoFocus: autofocus,
      disabled: disabled || readonlyAsDisabled && readonly,
      id,
      max,
      min,
      onChange: !readonly ? handleChange : void 0,
      range: false,
      step,
      value,
      ...extraProps,
      "aria-describedby": ariaDescribedByIds8(id)
    }
  );
}

// src/widgets/SelectWidget/index.tsx
import { useMemo, useState } from "react";
import { Select } from "antd";
import {
  ariaDescribedByIds as ariaDescribedByIds9,
  enumOptionsIndexForValue as enumOptionsIndexForValue3,
  enumOptionsValueForIndex as enumOptionsValueForIndex3
} from "@rjsf/utils";
import isString2 from "lodash/isString";
import { jsx as jsx25 } from "react/jsx-runtime";
var SELECT_STYLE = {
  width: "100%"
};
function SelectWidget({
  autofocus,
  disabled,
  registry,
  id,
  htmlName,
  multiple,
  onBlur,
  onChange,
  onFocus,
  options,
  placeholder,
  readonly,
  value,
  schema
}) {
  const [open, setOpen] = useState(false);
  const { formContext } = registry;
  const { readonlyAsDisabled = true } = formContext;
  const { enumOptions, enumDisabled, emptyValue } = options;
  const handleChange = (nextValue) => onChange(enumOptionsValueForIndex3(nextValue, enumOptions, emptyValue));
  const handleBlur = () => onBlur(id, enumOptionsValueForIndex3(value, enumOptions, emptyValue));
  const handleFocus = () => onFocus(id, enumOptionsValueForIndex3(value, enumOptions, emptyValue));
  const filterOption = (input, option) => {
    if (option && isString2(option.label)) {
      return option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    }
    return false;
  };
  const getPopupContainer = SelectWidget.getPopupContainerCallback();
  const selectedIndexes = enumOptionsIndexForValue3(value, enumOptions, multiple);
  const extraProps = {
    name: htmlName || id
  };
  const showPlaceholderOption = !multiple && schema.default === void 0;
  const selectOptions = useMemo(() => {
    if (Array.isArray(enumOptions)) {
      const options2 = enumOptions.map(({ value: optionValue, label: optionLabel }, index) => ({
        disabled: Array.isArray(enumDisabled) && enumDisabled.indexOf(optionValue) !== -1,
        key: String(index),
        value: String(index),
        label: optionLabel
      }));
      if (showPlaceholderOption) {
        options2.unshift({ value: "", label: placeholder || "" });
      }
      return options2;
    }
    return void 0;
  }, [enumDisabled, enumOptions, placeholder, showPlaceholderOption]);
  return /* @__PURE__ */ jsx25(
    Select,
    {
      open,
      autoFocus: autofocus,
      disabled: disabled || readonlyAsDisabled && readonly,
      getPopupContainer,
      id,
      mode: multiple ? "multiple" : void 0,
      onBlur: !readonly ? handleBlur : void 0,
      onChange: !readonly ? handleChange : void 0,
      onFocus: !readonly ? handleFocus : void 0,
      placeholder,
      style: SELECT_STYLE,
      value: selectedIndexes,
      ...extraProps,
      onOpenChange: setOpen,
      filterOption,
      "aria-describedby": ariaDescribedByIds9(id),
      options: selectOptions
    }
  );
}
SelectWidget.getPopupContainerCallback = () => (node) => node.parentElement;

// src/widgets/TextareaWidget/index.tsx
import { Input as Input4 } from "antd";
import {
  ariaDescribedByIds as ariaDescribedByIds10
} from "@rjsf/utils";
import { jsx as jsx26 } from "react/jsx-runtime";
var INPUT_STYLE3 = {
  width: "100%"
};
function TextareaWidget({
  disabled,
  registry,
  id,
  htmlName,
  onBlur,
  onChange,
  onFocus,
  options,
  placeholder,
  readonly,
  value
}) {
  const { formContext } = registry;
  const { readonlyAsDisabled = true } = formContext;
  const handleChange = ({ target }) => onChange(target.value === "" ? options.emptyValue : target.value);
  const handleBlur = ({ target }) => onBlur(id, target && target.value);
  const handleFocus = ({ target }) => onFocus(id, target && target.value);
  const extraProps = {
    type: "textarea"
  };
  return /* @__PURE__ */ jsx26(
    Input4.TextArea,
    {
      disabled: disabled || readonlyAsDisabled && readonly,
      id,
      name: htmlName || id,
      onBlur: !readonly ? handleBlur : void 0,
      onChange: !readonly ? handleChange : void 0,
      onFocus: !readonly ? handleFocus : void 0,
      placeholder,
      rows: options.rows || 4,
      style: INPUT_STYLE3,
      value,
      ...extraProps,
      "aria-describedby": ariaDescribedByIds10(id)
    }
  );
}

// src/widgets/index.ts
function generateWidgets() {
  return {
    AltDateTimeWidget,
    AltDateWidget,
    CheckboxesWidget,
    CheckboxWidget,
    DateTimeWidget,
    DateWidget,
    PasswordWidget,
    RadioWidget,
    RangeWidget,
    SelectWidget,
    TextareaWidget
  };
}
var widgets_default = generateWidgets();

// src/index.ts
function generateTheme() {
  return {
    templates: generateTemplates(),
    widgets: generateWidgets()
  };
}
var Theme = generateTheme();
function generateForm() {
  return withTheme(generateTheme());
}
var Form3 = generateForm();
var index_default = Form3;
export {
  Form3 as Form,
  templates_default as Templates,
  Theme,
  widgets_default as Widgets,
  index_default as default,
  generateForm,
  generateTemplates,
  generateTheme,
  generateWidgets
};
//# sourceMappingURL=antd.esm.js.map
