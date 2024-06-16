import {create} from "zustand";
import axios from "axios";
import {getEmail, setEmail, unauthorized} from "../utility/utility.js";
import Cookies from 'js-cookie';

const UserStore = create((set)=>({

    isLogin:()=>{
        return !!Cookies.get('token');
    },
    UserLogoutRequest:async ()=>{
        set({isFormSubmit:true})
        let res = await axios.get(`/api/v1/UserLogout`);
        set({isFormSubmit:false})
        return (res.data['status']==="success")
    },

    LoginFormValue:{email:"example@xyz.com"},
    LoginFormOnChange: async (name,value)=>{
        set((state)=>({
            LoginFormValue:{
                ...state.LoginFormValue,
                [name]:value
            }
        }))
    },
    OTPFormValue:{otp:""},
    OTPFormOnChange: async (name,value)=>{
        set((state)=>({
            OTPFormValue:{
                ...state.OTPFormValue,
                [name]:value
            }
        }))
    },

    ProfileForm:{cus_add:"",cus_city:"",cus_country:"",cus_fax:"",cus_name:"",cus_postcode:"",cus_state:"",cus_phone:"",ship_add:"",ship_city:"",ship_country:"",ship_fax:"",ship_name:"",ship_postcode:"",ship_state:"",ship_phone:""},
    ProfileFormChange:(name,value)=>{
        set((state)=>({
            ProfileForm:{
                ...state.ProfileForm,
                [name]:value
            }
        }))
    },

    ProfileDetails:null,
    ProfileDetailsRequest:async ()=>{
        try{
            let res = await axios.get(`/api/v1/ReadProfile`)
            if(res.data['data'].length>0){
                set({ProfileDetails:res.data['data'][0]})
                set({ProfileForm:res.data['data'][0]})
            }else{
                set({ProfileDetails:[]})
            }
        }catch (e) {
            unauthorized(e.response.status)
        }
    },

    ProfileSaveRequest:async (PostBody)=>{
        try{
            set({ProfileDetails:null})
            let res = await axios.post(`/api/v1/UpdateProfile`,PostBody)
            return res.data['status'] === "success"
        }catch (e) {
            unauthorized(e.response.status)
        }
    },

    isFormSubmit:false,

    UserOTPRequest:async (email)=>{
        set({isFormSubmit:true})
        let res = await axios.get(`/api/v1/UserOTP/${email}`);
        setEmail(email);
        set({isFormSubmit:false})
        return (res.data['status']==="success")
    },
    VerifyLoginRequest:async (otp)=>{
        set({isFormSubmit:true})
        let email = getEmail();
        let res = await axios.get(`/api/v1/VerifyLogin/${email}/${otp}`);
        set({isFormSubmit:false})
        return (res.data['status']==="success")
    }
}))

export default UserStore;