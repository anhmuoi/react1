import React, { Component } from 'react';
import TableDataRow from './TableDataRow';

class TableData extends Component {
    
  deleteButtonClick  = (idUser) => {
    this.props.deleteButtonClick(idUser)
  }  


    mappingDataUser  = () => this.props.dataUserProps.map((value,key)=>(
            <TableDataRow 
            deleteButtonClick={(idUser)=>this.deleteButtonClick(idUser)}
             changeEditUserStatus={()=>this.props.changeEditUserStatus()}
            editFunClick={(user)=> this.props.editFun(value)} username={value.name} key={key} stt={key} sdt={value.tel}
                quyen = {value.Permission} id = {value.id}
            />
        ))
        
    
    render() {
      
        return (
            <div>
 
  <div className="col">
    <table className="table table-striped table-inverse table-hover">
      <thead className="thead-inverse">
        <tr>
          <th>STT</th>
          <th>Tên</th>
          <th>Điện thoại</th>
          <th>Quyền</th>
          <th>Thao tác</th>
        </tr>
      </thead>
      <tbody>
       {this.mappingDataUser()}
        
      </tbody>
    </table>
  </div>
</div>

        );
    }
}

export default TableData;