import React from 'react';
import { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import { Drawer, Select } from 'antd';
import SchemaForm from 'antd-schema-form';
import schemaFormDefaultLang from 'antd-schema-form/language/default.json';
import schemaFormZhCNLang from 'antd-schema-form/language/zh-CN.json';
import json from './json/json';
import style from './style.sass';
import { I18NContext } from '../../../components/I18N/I18N';

class EditDrawer extends Component {
  static contextType = I18NContext;
  static propTypes = {
    item: PropTypes.object,
    visible: PropTypes.bool,
    onOk: PropTypes.func,
    onCancel: PropTypes.func
  };

  formRef = createRef();

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.visible === false) {
      return { typeValue: null };
    }

    if (nextProps.item && nextProps.visible === true && nextProps.item !== prevState.item) {
      const id = nextProps.item.id.split('/');

      return {
        typeValue: nextProps.item.type,
        value: {
          $root: {
            ...nextProps.item,
            id: id[id.length - 1]
          }
        },
        item: nextProps.item
      };
    }

    return null;
  }

  // select change事件
  handleTypeSelect = (value, option) => {
    this.setState({
      typeValue: value
    }, () => {
      this.formRef.current.setFieldsValue({
        '$root/properties/type': value
      });
    });
  };

  render() {
    const { visible, onOk, onCancel } = this.props;
    const { typeValue, value } = this.state;
    const { language, languagePack } = this.context;
    const { createForm } = languagePack;
    const json2 = language in json ? json[language] : json.default;

    if (typeValue !== null) {
      json2[typeValue].properties.id.$readOnly = true;
    }

    return (
      <Drawer visible={ visible } width={ 800 } destroyOnClose={ true } maskClosable={ false } onClose={ onCancel }>
        <div className={ style.mb10 }>
          <label className={ style.mr10 }>{ createForm.drawerLabel }</label>
          <Select className={ style.typeSelect } value={ typeValue } onSelect={ this.handleTypeSelect }>
            <Select.Option key="string" value="string">{ createForm.selectOptions[0] }</Select.Option>
            <Select.Option key="number" value="number">{ createForm.selectOptions[1] }</Select.Option>
            <Select.Option key="boolean" value="boolean">{ createForm.selectOptions[2] }</Select.Option>
            <Select.Option key="array" value="array">{ createForm.selectOptions[3] }</Select.Option>
            <Select.Option key="object" value="object">{ createForm.selectOptions[4] }</Select.Option>
          </Select>
        </div>
        {
          typeValue ? (
            <SchemaForm ref={ this.formRef }
              json={ json2[typeValue] }
              value={ value }
              languagePack={ language === 'zh-cn' ? schemaFormZhCNLang : schemaFormDefaultLang }
              onOk={ onOk }
              onCancel={ onCancel }
            />
          ) : null
        }
      </Drawer>
    );
  }
}

export default EditDrawer;