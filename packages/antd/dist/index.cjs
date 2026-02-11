"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Form: () => Form3,
  Templates: () => templates_default,
  Theme: () => Theme,
  Widgets: () => widgets_default,
  default: () => index_default,
  generateForm: () => generateForm,
  generateTemplates: () => generateTemplates,
  generateTheme: () => generateTheme,
  generateWidgets: () => generateWidgets
});
module.exports = __toCommonJS(index_exports);
var import_core3 = require("@rjsf/core");

// src/templates/ArrayFieldItemTemplate/index.tsx
var import_antd = require("antd");
var import_utils = require("@rjsf/utils");
var import_jsx_runtime = require("react/jsx-runtime");
var BTN_GRP_STYLE = {
  width: "100%",
  justifyContent: "flex-end"
};
var BTN_STYLE = {
  width: "calc(100% / 4)"
};
function ArrayFieldItemTemplate(props) {
  const { children, buttonsProps, displayLabel, hasDescription, hasToolbar, index, registry, uiSchema } = props;
  const uiOptions = (0, import_utils.getUiOptions)(uiSchema);
  const ArrayFieldItemButtonsTemplate = (0, import_utils.getTemplate)(
    "ArrayFieldItemButtonsTemplate",
    registry,
    uiOptions
  );
  const { rowGutter = 24, toolbarAlign = displayLabel ? "middle" : "top" } = registry.formContext;
  const margin = hasDescription ? -8 : 16;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_antd.Row, { align: toolbarAlign, gutter: rowGutter, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_antd.Col, { flex: "1", children }),
    hasToolbar && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_antd.Col, { flex: "120px", style: { marginTop: displayLabel ? `${margin}px` : void 0 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_antd.Space.Compact, { style: BTN_GRP_STYLE, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrayFieldItemButtonsTemplate, { ...buttonsProps, style: BTN_STYLE }) }) })
  ] }, `rjsf-array-item-${index}`);
}

// src/templates/ArrayFieldTemplate/index.tsx
var import_utils2 = require("@rjsf/utils");
var import_classnames = __toESM(require("classnames"), 1);
var import_antd2 = require("antd");
var import_react = require("react");
var import_jsx_runtime2 = require("react/jsx-runtime");
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
  const uiOptions = (0, import_utils2.getUiOptions)(uiSchema);
  const ArrayFieldTitleTemplate = (0, import_utils2.getTemplate)(
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
  const { getPrefixCls } = (0, import_react.useContext)(import_antd2.ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls("form");
  const labelClsBasic = `${prefixCls}-item-label`;
  const labelColClassName = (0, import_classnames.default)(
    labelClsBasic,
    labelAlign === "left" && `${labelClsBasic}-left`
    // labelCol.className,
  );
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("fieldset", { className, id: fieldPathId.$id, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_antd2.Row, { gutter: rowGutter, children: [
    (uiOptions.title || title) && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_antd2.Col, { className: labelColClassName, span: 24, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
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
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_antd2.Col, { className: "row array-item-list", span: 24, children: [
      !showOptionalDataControlInTitle ? optionalDataControl : void 0,
      items
    ] }),
    canAdd && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_antd2.Col, { span: 24, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_antd2.Row, { gutter: rowGutter, justify: "end", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_antd2.Col, { flex: "120px", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      AddButton2,
      {
        id: (0, import_utils2.buttonId)(fieldPathId, "add"),
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
var import_react2 = require("react");
var import_antd3 = require("antd");
var import_utils3 = require("@rjsf/utils");
var import_core = require("@rjsf/core");
var import_jsx_runtime3 = require("react/jsx-runtime");
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
  const inputProps = (0, import_utils3.getInputProps)(schema, type, options, false);
  const { readonlyAsDisabled = true } = formContext;
  const { ClearButton: ClearButton2 } = registry.templates.ButtonTemplates;
  const handleNumberChange = (nextValue) => onChange(nextValue);
  const handleTextChange = onChangeOverride ? onChangeOverride : ({ target }) => onChange(target.value === "" ? options.emptyValue : target.value);
  const handleBlur = ({ target }) => onBlur(id, target && target.value);
  const handleFocus = ({ target }) => onFocus(id, target && target.value);
  const handleClear = (0, import_react2.useCallback)(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      onChange(options.emptyValue ?? "");
    },
    [onChange, options.emptyValue]
  );
  const input = inputProps.type === "number" || inputProps.type === "integer" ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    import_antd3.InputNumber,
    {
      disabled: disabled || readonlyAsDisabled && readonly,
      id,
      name: htmlName || id,
      onBlur: !readonly ? handleBlur : void 0,
      onChange: !readonly ? handleNumberChange : void 0,
      onFocus: !readonly ? handleFocus : void 0,
      placeholder,
      style: INPUT_STYLE,
      list: schema.examples ? (0, import_utils3.examplesId)(id) : void 0,
      ...inputProps,
      value,
      "aria-describedby": (0, import_utils3.ariaDescribedByIds)(id, !!schema.examples)
    }
  ) : /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    import_antd3.Input,
    {
      disabled: disabled || readonlyAsDisabled && readonly,
      id,
      name: htmlName || id,
      onBlur: !readonly ? handleBlur : void 0,
      onChange: !readonly ? handleTextChange : void 0,
      onFocus: !readonly ? handleFocus : void 0,
      placeholder,
      style: INPUT_STYLE,
      list: schema.examples ? (0, import_utils3.examplesId)(id) : void 0,
      ...inputProps,
      value,
      "aria-describedby": (0, import_utils3.ariaDescribedByIds)(id, !!schema.examples)
    }
  );
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_jsx_runtime3.Fragment, { children: [
    input,
    options.allowClearTextInputs && !readonly && !disabled && value && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(ClearButton2, { registry, onClick: handleClear }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_core.SchemaExamples, { id, schema })
  ] });
}

// src/templates/FieldDescriptionTemplate/index.tsx
var import_core2 = require("@rjsf/core");
var import_jsx_runtime4 = require("react/jsx-runtime");
function DescriptionField(props) {
  const { id, description, registry, uiSchema } = props;
  if (!description) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { id, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_core2.RichDescription, { description, registry, uiSchema }) });
}

// src/templates/ErrorList/index.tsx
var import_antd4 = require("antd");
var import_icons = require("@ant-design/icons");
var import_utils4 = require("@rjsf/utils");
var import_jsx_runtime5 = require("react/jsx-runtime");
function ErrorList({
  errors,
  registry
}) {
  const { translateString } = registry;
  const renderErrors = () => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_antd4.List, { className: "list-group", size: "small", children: errors.map((error, index) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_antd4.List.Item, { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(import_antd4.Space, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_icons.ExclamationCircleOutlined, {}),
    error.stack
  ] }) }, index)) });
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    import_antd4.Alert,
    {
      className: "panel panel-danger errors",
      description: renderErrors(),
      message: translateString(import_utils4.TranslatableString.ErrorsLabel),
      type: "error"
    }
  );
}

// src/templates/IconButton/index.tsx
var import_antd5 = require("antd");
var import_icons2 = require("@ant-design/icons");
var import_utils5 = require("@rjsf/utils");
var import_jsx_runtime6 = require("react/jsx-runtime");
function IconButton(props) {
  const { iconType = "default", icon, onClick, uiSchema, registry, color, ...otherProps } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    import_antd5.Button,
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
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    IconButton,
    {
      title: translateString(import_utils5.TranslatableString.AddItemButton),
      iconType: "primary",
      block: true,
      ...props,
      icon: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_icons2.PlusCircleOutlined, {})
    }
  );
}
function CopyButton(props) {
  const {
    registry: { translateString }
  } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(IconButton, { title: translateString(import_utils5.TranslatableString.CopyButton), ...props, icon: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_icons2.CopyOutlined, {}) });
}
function MoveDownButton(props) {
  const {
    registry: { translateString }
  } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(IconButton, { title: translateString(import_utils5.TranslatableString.MoveDownButton), ...props, icon: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_icons2.ArrowDownOutlined, {}) });
}
function MoveUpButton(props) {
  const {
    registry: { translateString }
  } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(IconButton, { title: translateString(import_utils5.TranslatableString.MoveUpButton), ...props, icon: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_icons2.ArrowUpOutlined, {}) });
}
function RemoveButton(props) {
  const options = (0, import_utils5.getUiOptions)(props.uiSchema);
  const {
    registry: { translateString }
  } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    IconButton,
    {
      title: translateString(import_utils5.TranslatableString.RemoveButton),
      danger: true,
      block: !!options.block,
      iconType: "primary",
      ...props,
      icon: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_icons2.DeleteOutlined, {})
    }
  );
}
function ClearButton(props) {
  const {
    registry: { translateString }
  } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    IconButton,
    {
      title: translateString(import_utils5.TranslatableString.ClearButton),
      ...props,
      iconType: "link",
      icon: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_icons2.CloseOutlined, {})
    }
  );
}

// src/templates/FieldErrorTemplate/index.tsx
var import_utils6 = require("@rjsf/utils");
var import_jsx_runtime7 = require("react/jsx-runtime");
function FieldErrorTemplate(props) {
  const { errors = [], fieldPathId } = props;
  if (errors.length === 0) {
    return null;
  }
  const id = (0, import_utils6.errorId)(fieldPathId);
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { id, children: errors.map((error) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { children: error }, `field-${id}-error-${error}`)) });
}

// src/templates/FieldTemplate/index.tsx
var import_antd6 = require("antd");
var import_utils7 = require("@rjsf/utils");
var import_jsx_runtime8 = require("react/jsx-runtime");
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
  const uiOptions = (0, import_utils7.getUiOptions)(uiSchema);
  const WrapIfAdditionalTemplate2 = (0, import_utils7.getTemplate)(
    "WrapIfAdditionalTemplate",
    registry,
    uiOptions
  );
  if (hidden) {
    return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "rjsf-field-hidden", children });
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
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(WrapIfAdditionalTemplate2, { ...props, children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
    import_antd6.Form.Item,
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
var import_antd7 = require("antd");
var import_jsx_runtime9 = require("react/jsx-runtime");
function GridTemplate(props) {
  const { children, column, ...rest } = props;
  if (column) {
    return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_antd7.Col, { ...rest, children });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_antd7.Row, { ...rest, children });
}

// src/templates/MultiSchemaFieldTemplate/index.tsx
var import_jsx_runtime10 = require("react/jsx-runtime");
function MultiSchemaFieldTemplate(props) {
  const { optionSchemaField, selector } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { children: selector }),
    optionSchemaField
  ] });
}

// src/templates/ObjectFieldTemplate/index.tsx
var import_classnames2 = __toESM(require("classnames"), 1);
var import_isObject = __toESM(require("lodash/isObject"), 1);
var import_isNumber = __toESM(require("lodash/isNumber"), 1);
var import_isString = __toESM(require("lodash/isString"), 1);
var import_utils8 = require("@rjsf/utils");
var import_antd8 = require("antd");
var import_react3 = require("react");
var import_jsx_runtime11 = require("react/jsx-runtime");
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
  const uiOptions = (0, import_utils8.getUiOptions)(uiSchema);
  const TitleFieldTemplate = (0, import_utils8.getTemplate)("TitleFieldTemplate", registry, uiOptions);
  const { formContext } = registry;
  const showOptionalDataControlInTitle = !readonly && !disabled;
  const {
    ButtonTemplates: { AddButton: AddButton2 }
  } = registry.templates;
  const { colSpan = 24, labelAlign = "right", rowGutter = 24 } = formContext;
  const findSchema = (element) => element.content.props.schema;
  const findSchemaType = (element) => findSchema(element).type;
  const findUiSchema = (element) => element.content.props.uiSchema;
  const findUiSchemaField = (element) => (0, import_utils8.getUiOptions)(findUiSchema(element)).field;
  const findUiSchemaWidget = (element) => (0, import_utils8.getUiOptions)(findUiSchema(element)).widget;
  const calculateColSpan = (element) => {
    const type = findSchemaType(element);
    const field = findUiSchemaField(element);
    const widget = findUiSchemaWidget(element);
    const defaultColSpan = properties.length < 2 || // Single or no field in object.
    type === "object" || type === "array" || widget === "textarea" ? 24 : 12;
    if ((0, import_isObject.default)(colSpan)) {
      const colSpanObj = colSpan;
      if ((0, import_isString.default)(widget)) {
        return colSpanObj[widget];
      }
      if ((0, import_isString.default)(field)) {
        return colSpanObj[field];
      }
      if ((0, import_isString.default)(type)) {
        return colSpanObj[type];
      }
    }
    if ((0, import_isNumber.default)(colSpan)) {
      return colSpan;
    }
    return defaultColSpan;
  };
  const { getPrefixCls } = (0, import_react3.useContext)(import_antd8.ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls("form");
  const labelClsBasic = `${prefixCls}-item-label`;
  const labelColClassName = (0, import_classnames2.default)(
    labelClsBasic,
    labelAlign === "left" && `${labelClsBasic}-left`
    // labelCol.className,
  );
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("fieldset", { id: fieldPathId.$id, children: [
    /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(import_antd8.Row, { gutter: rowGutter, children: [
      title && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_antd8.Col, { className: labelColClassName, span: 24, children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
        TitleFieldTemplate,
        {
          id: (0, import_utils8.titleId)(fieldPathId),
          title,
          required,
          schema,
          uiSchema,
          registry,
          optionalDataControl: showOptionalDataControlInTitle ? optionalDataControl : void 0
        }
      ) }),
      !showOptionalDataControlInTitle ? /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_antd8.Col, { span: 24, children: optionalDataControl }) : void 0,
      properties.filter((e) => !e.hidden).map((element) => /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_antd8.Col, { span: calculateColSpan(element), children: element.content }, element.name))
    ] }),
    (0, import_utils8.canExpand)(schema, uiSchema, formData) && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_antd8.Col, { span: 24, children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_antd8.Row, { gutter: rowGutter, justify: "end", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_antd8.Col, { flex: "120px", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
      AddButton2,
      {
        id: (0, import_utils8.buttonId)(fieldPathId, "add"),
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
var import_jsx_runtime12 = require("react/jsx-runtime");
function OptionalDataControlsTemplate(props) {
  const { id, registry, label, onAddClick, onRemoveClick } = props;
  if (onAddClick) {
    return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
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
    return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("em", { id, children: label });
}

// src/templates/SubmitButton/index.tsx
var import_antd9 = require("antd");
var import_utils9 = require("@rjsf/utils");
var import_jsx_runtime13 = require("react/jsx-runtime");
function SubmitButton({ uiSchema }) {
  const { submitText, norender, props: submitButtonProps } = (0, import_utils9.getSubmitButtonOptions)(uiSchema);
  if (norender) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_antd9.Button, { type: "submit", ...submitButtonProps, htmlType: "submit", children: submitText });
}

// src/templates/TitleField/index.tsx
var import_classnames3 = __toESM(require("classnames"), 1);
var import_antd10 = require("antd");
var import_react4 = require("react");
var import_jsx_runtime14 = require("react/jsx-runtime");
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
  const { getPrefixCls } = (0, import_react4.useContext)(import_antd10.ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls("form");
  const labelClassName = (0, import_classnames3.default)({
    [`${prefixCls}-item-required`]: required,
    [`${prefixCls}-item-no-colon`]: !colon
  });
  let heading = title ? /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
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
    heading = /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(import_antd10.Row, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_antd10.Col, { flex: "auto", children: heading }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_antd10.Col, { flex: "none", children: optionalDataControl })
    ] });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(import_jsx_runtime14.Fragment, { children: [
    heading,
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_antd10.Divider, { size: "small", style: {
      marginBlock: "1px"
      /* pull the margin right up against the label */
    } })
  ] });
}

// src/templates/WrapIfAdditionalTemplate/index.tsx
var import_antd11 = require("antd");
var import_utils10 = require("@rjsf/utils");
var import_jsx_runtime15 = require("react/jsx-runtime");
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
  const keyLabel = translateString(import_utils10.TranslatableString.KeyLabel, [label]);
  const additional = import_utils10.ADDITIONAL_PROPERTY_FLAG in schema;
  if (!additional) {
    return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: classNames4, style, children });
  }
  const uiOptions = uiSchema ? uiSchema[import_utils10.UI_OPTIONS_KEY] : {};
  const buttonUiOptions = {
    ...uiSchema,
    [import_utils10.UI_OPTIONS_KEY]: { ...uiOptions, block: true }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: classNames4, style, children: /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(import_antd11.Row, { align: toolbarAlign, gutter: rowGutter, children: [
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_antd11.Col, { className: "form-additional", flex: "1", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "form-group", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
      import_antd11.Form.Item,
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
        children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
          import_antd11.Input,
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
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_antd11.Col, { className: "form-additional", flex: "1", children }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_antd11.Col, { flex: "120px", style: { marginTop: displayLabel ? "40px" : void 0 }, children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
      RemoveButton2,
      {
        id: (0, import_utils10.buttonId)(id, "remove"),
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
var import_jsx_runtime16 = require("react/jsx-runtime");
function AltDateTimeWidget({ time = true, ...props }) {
  const { AltDateWidget: AltDateWidget2 } = props.registry.widgets;
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(AltDateWidget2, { time, ...props });
}

// src/widgets/AltDateWidget/index.tsx
var import_antd12 = require("antd");
var import_utils11 = require("@rjsf/utils");
var import_jsx_runtime17 = require("react/jsx-runtime");
function AltDateWidget({ autofocus = false, disabled = false, options, readonly = false, time = false, ...props }) {
  const { id, name, onBlur, onFocus, registry } = props;
  const { formContext, translateString } = registry;
  const { rowGutter = 24 } = formContext;
  const realOptions = { yearsRange: [1900, (/* @__PURE__ */ new Date()).getFullYear() + 2], ...options };
  const { elements, handleChange, handleClear, handleSetNow } = (0, import_utils11.useAltDateWidgetProps)({
    ...props,
    autofocus,
    options: realOptions
  });
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(import_antd12.Row, { gutter: [Math.floor(rowGutter / 2), Math.floor(rowGutter / 2)], children: [
    elements.map((elemProps, i) => {
      const elemId = `${id}_${elemProps.type}`;
      return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_antd12.Col, { flex: "88px", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
        import_utils11.DateElement,
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
    !options.hideNowButton && /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_antd12.Col, { flex: "88px", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_antd12.Button, { block: true, className: "btn-now", onClick: handleSetNow, type: "primary", children: translateString(import_utils11.TranslatableString.NowLabel) }) }),
    !options.hideClearButton && /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_antd12.Col, { flex: "88px", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_antd12.Button, { block: true, className: "btn-clear", danger: true, onClick: handleClear, type: "primary", children: translateString(import_utils11.TranslatableString.ClearLabel) }) })
  ] });
}

// src/widgets/CheckboxesWidget/index.tsx
var import_antd13 = require("antd");
var import_utils12 = require("@rjsf/utils");
var import_jsx_runtime18 = require("react/jsx-runtime");
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
  const handleChange = (nextValue) => onChange((0, import_utils12.enumOptionsValueForIndex)(nextValue, enumOptions, emptyValue));
  const handleBlur = ({ target }) => onBlur(id, (0, import_utils12.enumOptionsValueForIndex)(target.value, enumOptions, emptyValue));
  const handleFocus = ({ target }) => onFocus(id, (0, import_utils12.enumOptionsValueForIndex)(target.value, enumOptions, emptyValue));
  const extraProps = {
    id,
    onBlur: !readonly ? handleBlur : void 0,
    onFocus: !readonly ? handleFocus : void 0
  };
  const selectedIndexes = (0, import_utils12.enumOptionsIndexForValue)(value, enumOptions, true);
  return Array.isArray(enumOptions) && enumOptions.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_jsx_runtime18.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
    import_antd13.Checkbox.Group,
    {
      disabled: disabled || readonlyAsDisabled && readonly,
      name: htmlName || id,
      onChange: !readonly ? handleChange : void 0,
      value: selectedIndexes,
      ...extraProps,
      "aria-describedby": (0, import_utils12.ariaDescribedByIds)(id),
      children: Array.isArray(enumOptions) && enumOptions.map((option, i) => /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("span", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
          import_antd13.Checkbox,
          {
            id: (0, import_utils12.optionId)(id, i),
            name: htmlName || id,
            autoFocus: i === 0 ? autofocus : false,
            disabled: Array.isArray(enumDisabled) && enumDisabled.indexOf(option.value) !== -1,
            value: String(i),
            children: option.label
          }
        ),
        !inline && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("br", {})
      ] }, i))
    }
  ) }) : null;
}

// src/widgets/CheckboxWidget/index.tsx
var import_antd14 = require("antd");
var import_utils13 = require("@rjsf/utils");
var import_jsx_runtime19 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
    import_antd14.Checkbox,
    {
      autoFocus: autofocus,
      checked: typeof value === "undefined" ? false : value,
      disabled: disabled || readonlyAsDisabled && readonly,
      id,
      name: htmlName || id,
      onChange: !readonly ? handleChange : void 0,
      ...extraProps,
      "aria-describedby": (0, import_utils13.ariaDescribedByIds)(id),
      children: (0, import_utils13.labelValue)(label, hideLabel, "")
    }
  );
}

// src/widgets/DateTimeWidget/index.tsx
var import_dayjs = __toESM(require("dayjs"), 1);
var import_utils14 = require("@rjsf/utils");
var import_antd15 = require("antd");
var import_jsx_runtime20 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
    import_antd15.DatePicker,
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
      value: value && (0, import_dayjs.default)(value),
      "aria-describedby": (0, import_utils14.ariaDescribedByIds)(id)
    }
  );
}

// src/widgets/DateWidget/index.tsx
var import_dayjs2 = __toESM(require("dayjs"), 1);
var import_utils15 = require("@rjsf/utils");
var import_antd16 = require("antd");
var import_jsx_runtime21 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
    import_antd16.DatePicker,
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
      value: value && (0, import_dayjs2.default)(value),
      "aria-describedby": (0, import_utils15.ariaDescribedByIds)(id)
    }
  );
}

// src/widgets/PasswordWidget/index.tsx
var import_antd17 = require("antd");
var import_utils16 = require("@rjsf/utils");
var import_jsx_runtime22 = require("react/jsx-runtime");
function PasswordWidget(props) {
  const { disabled, registry, id, onBlur, onChange, onFocus, options, placeholder, readonly, value } = props;
  const { formContext } = registry;
  const { readonlyAsDisabled = true } = formContext;
  const emptyValue = options.emptyValue || "";
  const handleChange = ({ target }) => onChange(target.value === "" ? emptyValue : target.value);
  const handleBlur = ({ target }) => onBlur(id, target.value);
  const handleFocus = ({ target }) => onFocus(id, target.value);
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
    import_antd17.Input.Password,
    {
      disabled: disabled || readonlyAsDisabled && readonly,
      id,
      name: id,
      onBlur: !readonly ? handleBlur : void 0,
      onChange: !readonly ? handleChange : void 0,
      onFocus: !readonly ? handleFocus : void 0,
      placeholder,
      value: value || "",
      "aria-describedby": (0, import_utils16.ariaDescribedByIds)(id)
    }
  );
}

// src/widgets/RadioWidget/index.tsx
var import_antd18 = require("antd");
var import_utils17 = require("@rjsf/utils");
var import_jsx_runtime23 = require("react/jsx-runtime");
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
  const handleChange = ({ target: { value: nextValue } }) => onChange((0, import_utils17.enumOptionsValueForIndex)(nextValue, enumOptions, emptyValue));
  const handleBlur = ({ target }) => onBlur(id, (0, import_utils17.enumOptionsValueForIndex)(target && target.value, enumOptions, emptyValue));
  const handleFocus = ({ target }) => onFocus(id, (0, import_utils17.enumOptionsValueForIndex)(target && target.value, enumOptions, emptyValue));
  const selectedIndexes = (0, import_utils17.enumOptionsIndexForValue)(value, enumOptions);
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
    import_antd18.Radio.Group,
    {
      disabled: disabled || readonlyAsDisabled && readonly,
      id,
      name: htmlName || id,
      onChange: !readonly ? handleChange : void 0,
      onBlur: !readonly ? handleBlur : void 0,
      onFocus: !readonly ? handleFocus : void 0,
      value: selectedIndexes,
      "aria-describedby": (0, import_utils17.ariaDescribedByIds)(id),
      children: Array.isArray(enumOptions) && enumOptions.map((option, i) => /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
        import_antd18.Radio,
        {
          id: (0, import_utils17.optionId)(id, i),
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
var import_antd19 = require("antd");
var import_utils18 = require("@rjsf/utils");
var import_jsx_runtime24 = require("react/jsx-runtime");
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
  const { min, max, step } = (0, import_utils18.rangeSpec)(schema);
  const emptyValue = options.emptyValue || "";
  const handleChange = (nextValue) => onChange(nextValue === "" ? emptyValue : nextValue);
  const handleBlur = () => onBlur(id, value);
  const handleFocus = () => onFocus(id, value);
  const extraProps = {
    placeholder,
    onBlur: !readonly ? handleBlur : void 0,
    onFocus: !readonly ? handleFocus : void 0
  };
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
    import_antd19.Slider,
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
      "aria-describedby": (0, import_utils18.ariaDescribedByIds)(id)
    }
  );
}

// src/widgets/SelectWidget/index.tsx
var import_react5 = require("react");
var import_antd20 = require("antd");
var import_utils19 = require("@rjsf/utils");
var import_isString2 = __toESM(require("lodash/isString"), 1);
var import_jsx_runtime25 = require("react/jsx-runtime");
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
  const [open, setOpen] = (0, import_react5.useState)(false);
  const { formContext } = registry;
  const { readonlyAsDisabled = true } = formContext;
  const { enumOptions, enumDisabled, emptyValue } = options;
  const handleChange = (nextValue) => onChange((0, import_utils19.enumOptionsValueForIndex)(nextValue, enumOptions, emptyValue));
  const handleBlur = () => onBlur(id, (0, import_utils19.enumOptionsValueForIndex)(value, enumOptions, emptyValue));
  const handleFocus = () => onFocus(id, (0, import_utils19.enumOptionsValueForIndex)(value, enumOptions, emptyValue));
  const filterOption = (input, option) => {
    if (option && (0, import_isString2.default)(option.label)) {
      return option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    }
    return false;
  };
  const getPopupContainer = SelectWidget.getPopupContainerCallback();
  const selectedIndexes = (0, import_utils19.enumOptionsIndexForValue)(value, enumOptions, multiple);
  const extraProps = {
    name: htmlName || id
  };
  const showPlaceholderOption = !multiple && schema.default === void 0;
  const selectOptions = (0, import_react5.useMemo)(() => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
    import_antd20.Select,
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
      "aria-describedby": (0, import_utils19.ariaDescribedByIds)(id),
      options: selectOptions
    }
  );
}
SelectWidget.getPopupContainerCallback = () => (node) => node.parentElement;

// src/widgets/TextareaWidget/index.tsx
var import_antd21 = require("antd");
var import_utils20 = require("@rjsf/utils");
var import_jsx_runtime26 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
    import_antd21.Input.TextArea,
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
      "aria-describedby": (0, import_utils20.ariaDescribedByIds)(id)
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
  return (0, import_core3.withTheme)(generateTheme());
}
var Form3 = generateForm();
var index_default = Form3;
//# sourceMappingURL=index.cjs.map
