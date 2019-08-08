import * as React from 'react';
import { useContext, PropsWithChildren } from 'react';
import * as PropTypes from 'prop-types';
import { Form, Tooltip } from 'antd';
import AntdSchemaFormContext from '../../context';
import styleName from '../../utils/styleName';
import createElement from '../../utils/createElement';
import { ContextValue, BooleanItem } from '../../types';

/**
 * 当类型为boolean时的组件渲染
 * json schema的属性包括：id, type, title, description
 *
 * 扩展属性前必须加上"$"
 * 扩展属性包括：componentType
 */
interface FormBooleanProps {
  root: BooleanItem;
  required: boolean;
}

function FormBoolean(props: PropsWithChildren<FormBooleanProps>): React.ReactElement | null {
  const context: ContextValue | {} = useContext(AntdSchemaFormContext);

  if (!('form' in context)) return null; // 类型判断

  const { form, customComponent }: ContextValue = context;
  const { root, required }: FormBooleanProps = props;
  const { id, title, description, $componentType, $hidden }: BooleanItem = root;
  let element: React.ReactNode = null;

  if (customComponent) {
    element = ($componentType && $componentType in customComponent)
      ? customComponent[$componentType](root, form, required)
      : createElement(customComponent.defaultBoolean, [root, form, required]);
  }

  return (
    <Form.Item className={ $hidden ? styleName('hidden') : undefined }
      valuePropName="checked"
      name={ id }
      label={ title }
    >
      <Tooltip title={ description } placement="topRight">
        { element }
      </Tooltip>
    </Form.Item>
  );
}

FormBoolean.propTypes = {
  root: PropTypes.object
};

export default FormBoolean;