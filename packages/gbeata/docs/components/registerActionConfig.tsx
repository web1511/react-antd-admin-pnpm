import { FileDoneOutlined } from '@ant-design/icons';
import { registerAction, success } from 'gbeata';

// 注册放在 gCtrl 下的 action
registerAction('approve', (props, _record, searchTable) => {
  return {
    confirm: true,
    confirmMsg: '确定要通过此审批吗？',
    onConfirm: () => {
      success(props.children + '成功');
      searchTable.tableRef.current.refresh();
    },
    ...props,
  };
});

// 注册直接放在 gSearchTable 的 action
registerAction('batch-approve', (props, _record, searchTable) => {
  return {
    type: 'primary',
    icon: <FileDoneOutlined />,
    onClick: () => {
      let selection = searchTable?.selection || [];
      if (props.api) {
        props.api(selection).then(() => {
          success(props.children + '成功');
          searchTable.tableRef.current.refresh();
          searchTable.clearSelection();
        });
      }
    },
    ...props,
  };
});
