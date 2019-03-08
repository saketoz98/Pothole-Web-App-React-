import React from 'react';
import {
    Table, Input, Button, Icon,
  } from 'antd';
import { Link } from 'react-router-dom';  
import { withRouter } from "react-router";

class ComplaintsTable extends React.Component {
    state = {
      searchText: '',
    };
    componentDidMount(){

    }
    getColumnSearchProps = (dataIndex) => ({
      filterDropdown: ({
        setSelectedKeys, selectedKeys, confirm, clearFilters,
      }) => (
        <div style={{ padding: 8 }}>
          <Input
            ref={node => { this.searchInput = node; }}
            placeholder={`Search ${dataIndex}`}
            value={selectedKeys[0]}
            onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
            onPressEnter={() => this.handleSearch(selectedKeys, confirm)}
            style={{ width: 188, marginBottom: 8, display: 'block' }}
          />
          <Button
            type="primary"
            onClick={() => this.handleSearch(selectedKeys, confirm)}
            icon="search"
            size="small"
            style={{ width: 90, marginRight: 8 }}
          >
            Search
          </Button>
          <Button
            onClick={() => this.handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
        </div>
      ),
      filterIcon: filtered => <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }} />,
      onFilter: (value, record) => record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
      onFilterDropdownVisibleChange: (visible) => {
        if (visible) {
          setTimeout(() => this.searchInput.select());
        }
      },
    //   render: (text) => (
    //     <Highlighter
    //       highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
    //       searchWords={[this.state.searchText]}
    //       autoEscape
    //       textToHighlight={text.toString()}
    //     />
    //   ),
    })
  
    handleSearch = (selectedKeys, confirm) => {
      confirm();
      this.setState({ searchText: selectedKeys[0] });
    }
  
    handleReset = (clearFilters) => {
      clearFilters();
      this.setState({ searchText: '' });
    }
  
    render() {
      const columns = [{
        title: 'Date',
        dataIndex: 'date',
        key: 'date',
        width: '20%',
        // ...this.getColumnSearchProps('date'),
      }, {
        title: 'User',
        dataIndex: 'username',
        key: 'username',
        width: '20%',
        ...this.getColumnSearchProps('username'),
      }, 
      {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        ...this.getColumnSearchProps('status'),
      },

      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
        ...this.getColumnSearchProps('address'),
      },
      
    ];
      return (
        <div>
            <Table columns={columns} dataSource={this.props.data} 
                onRow={(record, rowIndex) => {
                return {
                onClick: (event) => {
                    this.props.history.push( '/complaints/' + record.key );
                },       // click row
                
                };
            }}
            />

        </div>
      );
    }
  }
  
 export default withRouter(ComplaintsTable);