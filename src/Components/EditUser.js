import React, { Component } from 'react';

class EditUser extends Component {

    constructor(props) {
        super(props);
        this.state={
            id:this.props.userEditObject.id,
            name:this.props.userEditObject.name,
            tel:this.props.userEditObject.tel,
            Permission:this.props.userEditObject.Permission
        }
    }
    

    isChange  = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    }

    saveButton  = () => {

        var info = {};
        info.id = this.state.id;
        info.name = this.state.name;
        info.tel = this.state.tel;
        info.Permission = this.state.Permission;

        this.props.getUserEditInfo(info);

        this.props.changeEditUserStatus()
    }

    render() {
        console.log(this.state);
        
        return (
            <form>
            <div className="col-12">
            
            <div className="card text-white bg-warning mb-3 mt-2">
            <div className="card-header text-center">
              Sửa InfoUser
            </div>
            <div className="card-body text-primary">
              <div className="form-group">
                <input onChange={(event)=>this.isChange(event)} type="text" defaultValue={this.props.userEditObject.name}  name='name' className="form-control"  placeholder="tên user" />
              </div>
              <div className="form-group">
                <input onChange={(event)=>this.isChange(event)} type="text" defaultValue={this.props.userEditObject.tel} name='tel' className="form-control"  placeholder="điện thoại" />
              </div>
              
              <div className="form-group">
                <select onChange={(event)=>this.isChange(event)} defaultValue={this.props.userEditObject.Permission} className="custom-select" name='Permission'  id="inputGroupSelect04">
                  <option selected>phân quyền</option>
                  <option value={1}>Admin</option>
                  <option value={2}>Moderator</option>
                  <option value={3}>Normal</option>
                </select>
              </div>
              <div className="form-group">
                <input type="button" onClick={()=>this.saveButton()}  className="btn btn-block btn-primary" value="Lưu"></input>
              </div>
            </div>
          </div>
          
          </div>
          </form>
        );
    }
}

export default EditUser;