import React, { Component } from 'react';

class AddUser extends Component {

  constructor(props) {
    super(props);
    this.state={
      id:"",
      name:'',
      tel:'',
      Permission:''
    }
  }
  
  isChange  = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]:value
    });

    var item = {}
    item.id = this.state.id;
    item.name = this.state.name;
    item.tel = this.state.tel;
    item.Permission = this.state.Permission;
    
  }

    kiemTraTrangThai  = () => {
        if(this.props.hienThiForm === true)
        {
            return (
              <form>
                <div className="col-12">
                
                <div className="card border-primary mb-3">
                <div className="card-header text-center">
                  Thêm mới user vào hệ thống
                </div>
                <div className="card-body text-primary">
                  <div className="form-group">
                    <input type="text" onChange={(event)=>this.isChange(event)} name='name' className="form-control"  placeholder="tên user" />
                  </div>
                  <div className="form-group">
                    <input type="text" name='tel' onChange={(event)=>this.isChange(event)}  className="form-control"  placeholder="điện thoại" />
                  </div>
                  
                  <div className="form-group">
                    <select className="custom-select" name='Permission' onChange={(event)=>this.isChange(event)}  id="inputGroupSelect04">
                      <option selected>phân quyền</option>
                      <option value={1}>Admin</option>
                      <option value={2}>Moderator</option>
                      <option value={3}>Normal</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <input type="reset" onClick={(name,tel,Permission)=>this.props.add(this.state.name,this.state.tel,this.state.Permission)} className="btn btn-block btn-primary" value="Thêm mới"></input>
                  </div>
                </div>
              </div>
              
              </div>
              </form>
            )
        }
    }

    render() {
      
       
        return (
            
            
           
            <div >
           
           {this.kiemTraTrangThai()}

            
            
          </div>
          
        );
    }
}

export default AddUser;