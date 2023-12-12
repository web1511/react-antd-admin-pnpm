import { Switch } from 'antd';
import { GButton, GForm, GFormField, registerField } from 'gbeata';
import React, { useState } from 'react';
import CharaSelect from './CharaSelect';

// 注册自定义类型表单项
// 注册一个角色选择
// 这段代码放在 /src/multiway/index 下面
registerField('chara-select', {
  type: 'chara-select',
  defaultValue: '',
  render: ({ field, readonly }: any) => (
    <CharaSelect readonly={readonly} {...field.props} />
  ),
});

const fields: Array<GFormField> = [
  {
    title: '姓名',
    key: 'input',
  },
  {
    title: '选择人物',
    // 自定义 FormType，具体实现，请切换到 config.tsx 查看
    type: 'chara-select',
    key: 'chara',
    required: true,
  },
];

export default function RegisterFieldDemo() {
  const [readonly, setReadonly] = useState<boolean>(false);
  const handleConfirm = (form: any) => {
    console.log(form);
    alert(JSON.stringify(form));
  };

  return (
    <>
      <p>
        <label style={{ marginRight: 4 }}>只读模式</label>
        <Switch
          defaultChecked={readonly}
          onChange={(value) => setReadonly(value)}
        />
      </p>
      <GForm
        readonly={readonly}
        fields={fields}
        style={{ width: 400, margin: '0 auto' }}
        onConfirm={handleConfirm}
      >
        <GButton type="primary" htmlType="submit" style={{ marginLeft: 120 }}>
          提交
        </GButton>
      </GForm>
    </>
  );
}
