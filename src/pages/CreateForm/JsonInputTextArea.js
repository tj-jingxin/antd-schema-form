import { Fragment, useState, useEffect, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Input, message, Space } from 'antd';
import { CopyOutlined as IconCopyOutlined, RedoOutlined as IconRedoOutlined } from '@ant-design/icons';
import copy from 'copy-to-clipboard';
import { setSchemaJson } from './reducers/reducers';
import { schemaJsonState } from './reducers/selectors';
import commonStyle from './commonStyle.sass';
import { I18NContext } from '../../components/I18N/I18N';

function JsonInputTextArea(props) {
  const { schemaJson } = useSelector(schemaJsonState);
  const dispatch = useDispatch();
  const context = useContext(I18NContext);
  const [textAreaValue, setTextAreaValue] = useState(JSON.stringify(schemaJson, null, 2));

  const { languagePack } = context;
  const { createForm } = languagePack;
  const langMessage = languagePack.message;

  // 复制
  function handleCopyClick(event) {
    copy(textAreaValue);
    message.info(langMessage.copyMessage);
  }

  // 表单的change事件
  function handleInputTextAreaChange(event) {
    setTextAreaValue(event.target.value);
  }

  // 刷新表单并同步到store
  function handleRedoJsonSchema(event) {
    let value = null;

    try {
      value = JSON.parse(textAreaValue);
      value |> setSchemaJson |> dispatch;
    } catch (err) {
      message.error(langMessage.jsonFormatError);
    }
  }

  useEffect(function() {
    setTextAreaValue(JSON.stringify(schemaJson, null, 2));
  }, [schemaJson]);

  return (
    <Fragment>
      <Space className={ commonStyle.mb8 }>
        <Button icon={ <IconCopyOutlined /> } onClick={ handleCopyClick }>{ createForm.copy }</Button>
        <Button icon={ <IconRedoOutlined /> } onClick={ handleRedoJsonSchema }>
          { createForm.refreshFormConfiguration }
        </Button>
      </Space>
      <Input.TextArea id="jsonSchemaTextArea"
        rows={ 20 }
        value={ textAreaValue }
        onChange={ handleInputTextAreaChange }
      />
    </Fragment>
  );
}

export default JsonInputTextArea;