import React from 'react';
import AdminBase from './AdminBase';
import { API } from '../backend';
import axios from 'axios';
class UploadTeacherData extends React.Component{
    constructor(props) {
        super(props);
          this.state = {
            selectedFile: null,
            success:false,
            fileupload:false
          }
       
      }
   
    onChangeHandler=event=>{

    console.log(event.target.files[0].name)
        this.setState({
          selectedFile: event.target.files[0],
          loaded: 0,
        })
      }

      onClickHandler = () => {
        const data = new FormData()
        if(this.state.selectedFile===null){
            alert('please upload file');
        }
        else{
        data.append('file', this.state.selectedFile)
        axios.post(`${API}/adminOp/uploadExcelFile`, data).then(res => { // then print response status
            console.log(res.statusText)
            if(res.statusText==='Ok')
            {
                this.setState({fileupload:true})
            }
         })
         const filename=this.state.selectedFile.name
         axios.get(`${API}/adminOp/addNewTeachers/${filename}`).then(res => { // then print response status
            console.log(res.statusText)
            if(res.status===201){
               this.setState({success:true})
            }
         })
        }
      }

      successMsg(){
       if(this.state.success){
        alert('Uploaded Successfully')
      }
      }
    fileUploadForm(){
      return(
        <div className="row">
        <div className="col-md-6 text-left">
        <h1>Upload Teacher Data</h1>
          <form encType="multipart/form-data">
            <div className="form-group">
            <input type="file" name="file" onChange={this.onChangeHandler}/>
            </div>
            <button type="button" className="btn btn-success btn-block" onClick={this.onClickHandler}>Upload</button>
          </form>
        </div>
      </div>)
    }
    render(){
    return (
        <div>
            <AdminBase>
            {this.successMsg()}
            {this.fileUploadForm()}    
            </AdminBase>
        </div>
        
    );
    }
}
 
export default UploadTeacherData;