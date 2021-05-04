import React, { Component } from "react";

class TableDataRow extends Component {
    permissionShow  = () => {
        if(this.props.quyen === 1) return "Admin"
        else if(this.props.quyen === 2) return "Moderator"
        else return "Normal";
    }

    deleteButtonClick  = (idUser) => {
        this.props.deleteButtonClick(idUser)
        
    }

    editClick  = () => {
      this.props.editFunClick(); 
    this.props.changeEditUserStatus()
    }
  render() {
    return (
        <tr>
        <td>{this.props.stt+1}</td>
        <td>{this.props.username}</td>
        <td>{this.props.sdt}</td>
        <td> {this.permissionShow()} </td>
        <td>
          <div className="btn-group">
            <div 
            
            onClick={()=> this.editClick()} className="btn btn-warning sua">
              <i  className="fa fa-edit">Sửa</i>
            </div>
            <div 
            onClick={(idUser)=>this.deleteButtonClick(this.props.id)}
            className="btn btn-danger xoa">
              <i className="fa fa-delete">Xóa</i>
            </div>
          </div>
        </td>
      </tr>
    );
  }
}

export default TableDataRow;
