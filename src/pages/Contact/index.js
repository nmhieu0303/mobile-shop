import React,{useState} from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import { message } from 'antd';


export default function Contact() {
    const [state, setstate] = useState({
        name:'',
        email:'',
        subject:'',
        content:'',
    })

    const sendContact = (e)=>{
        e.preventDefault();
        setstate({
            name:'',
            email:'',
            subject:'',
            content:'',
        })
        message.success('Đã ghi nhận thông tin')
    }

    const handleChange = (e)=>{
        const {name,value} = e.target
        setstate(prestate=>{
            return {...prestate,[name]:value}
        })
        
    }
    return (
        <MDBContainer className="my-4 py-5">
            <MDBRow >
                <MDBCol md="5">
                    <form onSubmit={sendContact}>
                        <p className="h4 text-center mb-4">Liên hệ chúng tôi</p>
                        <label  className="grey-text font-weight-bold">
                            Tên của bạn
                        </label>
                        <input type="text" className="form-control"name='name' value={state.name} onChange={handleChange} required />
                        <br />
                        <label className="grey-text font-weight-bold" >
                            Email
                        </label>
                        <input type="email"  className="form-control" name='email' value={state.email} onChange={handleChange} required />
                        <br />
                        <label  className="grey-text font-weight-bold">
                            Tiêu đề
                        </label>
                        <input type="text"className="form-control" name='subject' value={state.subject} onChange={handleChange} required />
                        <br />
                        <label  className="grey-text font-weight-bold">
                            Nội dung
                        </label>
                        <textarea type="text" className="form-control" rows="3" name='content' value={state.content} onChange={handleChange} required />
                        <div className="text-center mt-4">
                            <MDBBtn color="warning" outline >
                                Gửi
                                <MDBIcon far icon="paper-plane" className="ml-2" />
                            </MDBBtn>
                        </div>
                    </form>
                </MDBCol>
                <MDBCol md='7' >
                    <div className='h-100'>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d76765.98321148289!2d-73.96694563267306!3d40.751663750099084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spl!2spl!4v1525939514494"
                            title="This is a unique title"
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            style={{ border: 0 }}
                        />
                    </div>
                </MDBCol>
            </MDBRow>
        </MDBContainer>

    )
}
