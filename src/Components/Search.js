import React, { Component } from "react";
import EditUser from "./EditUser";

class Search extends Component {

  constructor(props) {
    super(props);
    this.state={
      tempValue:'',
      userObj:{}
    }
  }

  getUserEditInfo  = (info) => {
    this.setState({
      userObj:info
    });
    this.props.getUserEditInfoApp(info);
  }
  
  isShowEditForm  = () => {
    if(this.props.editUserStatus === true) return <EditUser
    getUserEditInfo={(info)=>this.getUserEditInfo(info)} 
    userEditObject={this.props.userEditObject}
    changeEditUserStatus={()=>this.props.changeEditUserStatus()}/>
  }


  isChange  = (event) => {
      console.log(event.target.value);
      this.setState({
        tempValue:event.target.value
      });
      this.props.checkConnectProps(this.state.tempValue)
      
  }


  hienThiNut  = () => {
    if(this.props.hienThiForm === true)
    {
      return <div class="btn btn-block btn-outline-secondary" onClick={()=>this.props.ketNoi()}  >Đóng lại</div> 
    }
    else
    {
      return <div class="btn btn-block btn-outline-info" onClick={()=>this.props.ketNoi()} >Thêm mới</div>
    }
  }

  render() {
    return (

      <div className="col-12">
      <div className="row">
        {this.isShowEditForm()}
      </div>
        <div className="form-group">
          <div className="btn-group">
            <input type="text" className="form-control" placeholder="tu khoa" onChange={(event)=>this.isChange(event)}  />
            <div className="btn btn-info" onClick={(dl)=>this.props.checkConnectProps(this.state.tempValue)}>Tìm</div>
          </div>
          <div className="btn-group1">
           {this.hienThiNut()}
           
          </div>
        </div>
        <div className="col-12">
          <hr />
        </div>
      </div>
    );
  }
}

export default Search;
