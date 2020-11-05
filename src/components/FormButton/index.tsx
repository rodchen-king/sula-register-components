/*
 * @Description:
 * @Author: rodchen
 * @Date: 2020-10-28 15:41:58
 * @LastEditTime: 2020-11-01 22:07:57
 * @LastEditors: rodchen
 */

import React, { useContext, useState, useEffect, useRef } from 'react';
import { Table, Input, Button, Popconfirm, Form } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { omit } from 'lodash';

const EditableContext = React.createContext<any>({});

interface Item {
  key: string;
  name: string;
  age: string;
  address: string;
  [dataIndex: string]: any; // 动态属性
}

interface EditableRowProps {
  index: number;
}

const EditableRow: React.FC<EditableRowProps> = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};

interface EditableCellProps {
  title: React.ReactNode;
  editable: boolean;
  children: React.ReactNode;
  dataIndex: string;
  record: Item;
  isRequired: boolean;
  handleSave: (record: Item) => void;
}

interface PropsType {
  // sula register props
  disabled?: boolean;
  id: string;
  onChange: (value: any) => {};
  value?: Array<any>;

  // component props
  columns: Array<any>;
  addNode?: React.ReactNode;
  formatMessage?: (title: { id: string }) => {};
}

const EditableCell: React.FC<EditableCellProps> = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  isRequired,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef() as any;
  const form = useContext(EditableContext);

  const useDidMount = (fn: { (): void; (): any }) =>
    useEffect(() => fn && fn(), []);

  useDidMount(() => {
    dataIndex && form.setFieldsValue({ [dataIndex]: record[dataIndex] });
  });

  const save = async () => {
    try {
      const values = await form.validateFields();

      handleSave({ ...record, ...values });
    } catch (errInfo) {
      console.log('Save failed:', errInfo);
    }
  };

  let childNode = children;

  childNode = editable ? (
    <Form.Item
      style={{ margin: 0 }}
      name={dataIndex}
      rules={[
        isRequired
          ? {
              required: true,
              message: `${title} is required.`,
            }
          : {},
      ]}
    >
      <Input ref={inputRef} onPressEnter={save} onBlur={save} />
    </Form.Item>
  ) : (
    <div className="editable-cell-value-wrap" style={{ paddingRight: 24 }}>
      {children}
    </div>
  );

  return <td {...restProps}>{childNode}</td>;
};

class EditableTable extends React.Component {
  columns: any;
  state: {
    dataSource: any[];
    count: number;
  };

  constructor(props: PropsType) {
    super(props);
    this.columns = !props.disabled
      ? [
          ...props.columns,
          {
            title:
              props.formatMessage &&
              props.formatMessage({ id: 'sula-component.edit-table.action' })
                ? props.formatMessage({
                    id: 'sula-component.edit-table.action',
                  })
                : '操作',
            width: '30',
            dataIndex: 'operation',
            render: (undefined: undefined, record: any) =>
              this.state.dataSource.length >= 1 ? (
                <Popconfirm
                  title={
                    props.formatMessage &&
                    props.formatMessage({
                      id: 'sula-component.edit-table.delete',
                    })
                      ? props.formatMessage({
                          id: 'sula-component.edit-table.delete',
                        })
                      : '确认是否删除？'
                  }
                  onConfirm={() => this.handleDelete(record.key)}
                >
                  <a>
                    <DeleteOutlined />
                  </a>
                </Popconfirm>
              ) : null,
          },
        ] || []
      : props.columns;

    this.state = {
      dataSource: [],
      count: 0,
    };
  }

  componentWillReceiveProps(nextProps: PropsType) {
    if (nextProps.value) {
      this.setState({
        dataSource: nextProps.value.map((item, index) => ({
          ...item,
          key: index + 1,
        })),
        total: nextProps.value.length,
      });
    }
  }

  handleDelete = (key: string) => {
    const { onChange } = this.props as PropsType;
    const dataSource = [...this.state.dataSource];
    const newData = dataSource.filter((item: any) => item.key !== key);
    this.setState({ dataSource: newData });

    onChange(newData.map(item => omit(item, ['key'])));
  };

  handleAdd = () => {
    const { columns, onChange } = this.props as PropsType;
    const { count, dataSource } = this.state;
    const newData = {} as Item;
    columns.forEach((value, index, array) => {
      newData[value.dataIndex] = '';
    });

    newData.key = `${count + 1}`;

    this.setState({
      dataSource: [...dataSource, newData],
      count: count + 1,
    });

    onChange([...dataSource, newData].map(item => omit(item, ['key'])));
  };

  handleSave = (row: { key: any }) => {
    const { onChange } = this.props as PropsType;
    const newData = [...this.state.dataSource];
    const index = newData.findIndex(
      (item: { key: string }) => row.key === item.key,
    );
    const item = newData[index];
    newData.splice(index, 1, {
      ...item,
      ...row,
    });
    this.setState({ dataSource: newData });
    onChange(newData.map(item => omit(item, ['key'])));
  };

  render() {
    const { dataSource } = this.state;
    const { disabled, addNode, formatMessage, ...restProps } = this
      .props as PropsType;
    const components = {
      body: {
        row: EditableRow,
        cell: EditableCell,
      },
    };
    const columns = this.columns.map((col: Item) => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: (record: any) => ({
          record,
          editable: col.editable && !disabled,
          dataIndex: col.dataIndex,
          title: col.title,
          handleSave: this.handleSave,
          isRequired: col.isRequired,
        }),
      };
    });
    return (
      <div>
        <div style={{ display: disabled ? 'none' : 'block', height: '48px' }}>
          {addNode ? (
            <span onClick={this.handleAdd}>{addNode}</span>
          ) : (
            <Button
              onClick={this.handleAdd}
              type="primary"
              style={{
                marginBottom: 16,
              }}
            >
              {formatMessage &&
              formatMessage({ id: 'sula-component.edit-table.addRow' })
                ? formatMessage({ id: 'sula-component.edit-table.addRow' })
                : '添加一行'}
            </Button>
          )}
        </div>
        <Table
          {...restProps}
          components={components}
          rowClassName={() => 'editable-row'}
          bordered
          dataSource={dataSource}
          columns={columns}
          rowKey="key"
        />
      </div>
    );
  }
}

export default EditableTable;
