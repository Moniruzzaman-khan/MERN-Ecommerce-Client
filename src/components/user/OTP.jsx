import SubmitButton from "../layout/SubmitButton.jsx";
import UserStore from "../../store/UserStore.jsx";
import ValidationHelper from "../../utility/ValidationHelper.jsx";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";

const Otp = () => {

    let navigate = useNavigate();

    let {OTPFormValue,OTPFormOnChange,VerifyLoginRequest} = UserStore();

    const onFormSubmit = async ()=>{
        if(ValidationHelper.IsEmpty(OTPFormValue.otp)){
            toast.error("Invalid OTP")
        }else {
            let res = await VerifyLoginRequest(OTPFormValue.otp);
            res?navigate("/"):toast.error("Something Went Wrong")
        }
    }

    return (
        <div className="container section">
            <div className="row d-flex justify-content-center">
                <div className="col-md-5">
                    <div className="card p-5">
                        <h4>Enter Verification Code</h4>
                        <p>A verification code has been sent to the email you provided.</p>
                        <input value={OTPFormValue.otp} onChange={(e)=>{OTPFormOnChange("otp",e.target.value)}} placeholder="Verification Code" type="text" className="form-control"/>
                        <SubmitButton onClick={onFormSubmit} submit={false} className="btn mt-3 btn-success" text="Submit"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Otp;